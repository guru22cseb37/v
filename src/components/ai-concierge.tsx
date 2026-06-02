"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Bot, User, Sparkles, RotateCcw, Copy, CheckCheck } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const QUICK_PROMPTS = [
  "Plan a 2-day trip with ₹5,000 budget",
  "Best seafood restaurants in Varkala",
  "Hidden spots for photography",
  "How to reach from Aruppukottai?",
  "Best time to visit Varkala",
  "Luxury weekend getaway plan",
  "Budget backpacker tips",
  "Water sports and adventure activities",
];

// Call real Groq API via Next.js API route
const generateResponse = async (messages: { role: string; content: string }[]): Promise<string> => {
  const res = await fetch("/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ messages }),
  });

  if (!res.ok) throw new Error("API call failed");
  const data = await res.json();
  return data.content;
};


function TypingIndicator() {
  return (
    <div style={{ display: "flex", gap: 5, alignItems: "center", padding: "14px 18px" }}>
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          animate={{ y: [0, -6, 0] }}
          transition={{ repeat: Infinity, duration: 0.7, delay: i * 0.15 }}
          style={{
            width: 7,
            height: 7,
            borderRadius: "50%",
            background: "#4a9eff",
          }}
        />
      ))}
    </div>
  );
}

export function AIConciergeSection() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: `🌊 **Namaste! I'm VarkalaVerse AI**\n\nYour personal Varkala travel concierge! Ask me anything about Varkala — itineraries, hotels, food, transport, photography, budget tips, or hidden gems.\n\nTry one of the quick prompts below to get started! 🌴`,
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState<number | null>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const sendMessage = async (text?: string) => {
    const msg = text || input.trim();
    if (!msg || loading) return;

    setInput("");
    const newUserMessage = { role: "user" as const, content: msg };
    const updatedMessages = [...messages, newUserMessage];
    setMessages(updatedMessages);
    setLoading(true);

    try {
      // Pass full conversation history for context-aware responses
      const response = await generateResponse(
        updatedMessages.map((m) => ({ role: m.role, content: m.content }))
      );
      setMessages((prev) => [...prev, { role: "assistant", content: response }]);
    } catch {
      setMessages((prev) => [...prev, { role: "assistant", content: "Sorry, I couldn't process that. Please try again!" }]);
    } finally {
      setLoading(false);
    }
  };

  const copyMessage = (content: string, index: number) => {
    navigator.clipboard.writeText(content);
    setCopied(index);
    setTimeout(() => setCopied(null), 2000);
  };

  const resetChat = () => {
    setMessages([{
      role: "assistant",
      content: `🌊 **Namaste! I'm VarkalaVerse AI**\n\nYour personal Varkala travel concierge! Ask me anything about Varkala. 🌴`,
    }]);
  };

  const renderInline = (text: string): React.ReactNode[] => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, j) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={j} style={{ color: '#fff', fontWeight: 700 }}>{part.slice(2, -2)}</strong>;
      }
      return <span key={j}>{part}</span>;
    });
  };

  const renderContent = (text: string) => {
    const lines = text.split('\n');
    const elements: React.ReactNode[] = [];

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];

      if (line.trim() === '') {
        elements.push(<div key={i} style={{ height: 8 }} />);
        continue;
      }

      // ## H2 Header
      if (line.startsWith('## ')) {
        elements.push(
          <div key={i} style={{
            fontSize: 16, fontWeight: 700, color: '#4a9eff',
            marginTop: 18, marginBottom: 8, paddingBottom: 6,
            borderBottom: '1px solid rgba(74,158,255,0.2)',
          }}>
            {renderInline(line.slice(3))}
          </div>
        );
        continue;
      }

      // ### H3 Subheader
      if (line.startsWith('### ')) {
        elements.push(
          <div key={i} style={{
            fontSize: 14, fontWeight: 700, color: '#14a085',
            marginTop: 14, marginBottom: 6,
          }}>
            {renderInline(line.slice(4))}
          </div>
        );
        continue;
      }

      // --- Horizontal rule
      if (line.trim() === '---') {
        elements.push(<div key={i} style={{ borderTop: '1px solid rgba(255,255,255,0.08)', margin: '12px 0' }} />);
        continue;
      }

      // > Tip/note blockquote
      if (line.startsWith('> ')) {
        elements.push(
          <div key={i} style={{
            background: 'rgba(20,160,133,0.1)', border: '1px solid rgba(20,160,133,0.3)',
            borderLeft: '3px solid #14a085', borderRadius: 8,
            padding: '10px 14px', margin: '10px 0', fontSize: 13,
            color: 'rgba(255,255,255,0.85)'
          }}>
            {renderInline(line.slice(2))}
          </div>
        );
        continue;
      }

      // Numbered list: 1. text
      const numberedMatch = line.match(/^(\d+)\.\s(.*)/);
      if (numberedMatch) {
        elements.push(
          <div key={i} style={{ display: 'flex', gap: 10, marginBottom: 8, alignItems: 'flex-start' }}>
            <span style={{
              minWidth: 22, height: 22, borderRadius: '50%',
              background: 'rgba(74,158,255,0.15)', border: '1px solid rgba(74,158,255,0.3)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 11, fontWeight: 700, color: '#4a9eff', flexShrink: 0, marginTop: 2
            }}>
              {numberedMatch[1]}
            </span>
            <div style={{ fontSize: 14, lineHeight: 1.65, color: 'rgba(255,255,255,0.87)' }}>
              {renderInline(numberedMatch[2])}
            </div>
          </div>
        );
        continue;
      }

      // Bullet list: - or *
      if (line.match(/^[-*]\s/)) {
        elements.push(
          <div key={i} style={{ display: 'flex', gap: 10, marginBottom: 6, alignItems: 'flex-start', paddingLeft: 4 }}>
            <span style={{ color: '#ff6b35', marginTop: 8, flexShrink: 0, fontSize: 7 }}>●</span>
            <div style={{ fontSize: 14, lineHeight: 1.65, color: 'rgba(255,255,255,0.87)' }}>
              {renderInline(line.slice(2))}
            </div>
          </div>
        );
        continue;
      }

      // Plain paragraph
      elements.push(
        <div key={i} style={{ fontSize: 14, lineHeight: 1.7, color: 'rgba(255,255,255,0.83)', marginBottom: 6 }}>
          {renderInline(line)}
        </div>
      );
    }

    return elements;
  };

  return (
    <section id="ai-guide" style={{ padding: "80px 24px", background: "rgba(13,36,69,0.3)" }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginBottom: 40 }}
        >
          <div className="section-label" style={{ display: "inline-flex", marginBottom: 16 }}>
            <Sparkles size={12} /> AI Travel Concierge
          </div>
          <h2 className="section-title" style={{ marginBottom: 16 }}>
            Your <span className="gradient-text-ocean">AI Guide</span> to Varkala
          </h2>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.6)", maxWidth: 560, margin: "0 auto" }}>
            Ask anything — trip planning, restaurants, hidden gems, transport, budget, or personalized itineraries.
          </p>
        </motion.div>

        {/* Chat Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            borderRadius: 24,
            overflow: "hidden",
            border: "1px solid rgba(74,158,255,0.15)",
            background: "rgba(10,22,40,0.8)",
          }}
        >
          {/* Chat Header */}
          <div style={{
            padding: "16px 20px",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            background: "rgba(13,36,69,0.5)",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{
                width: 36, height: 36, borderRadius: 10,
                background: "linear-gradient(135deg, #2d7dd2, #14a085)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <Bot size={18} />
              </div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 600 }}>VarkalaVerse AI Concierge</div>
                <div style={{ fontSize: 11, color: "#14a085", display: "flex", alignItems: "center", gap: 4 }}>
                  <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#14a085" }} />
                  Online · Powered by AI
                </div>
              </div>
            </div>
            <button
              onClick={resetChat}
              style={{ background: "none", border: "none", color: "rgba(255,255,255,0.4)", cursor: "pointer", padding: 6 }}
              title="Reset conversation"
            >
              <RotateCcw size={16} />
            </button>
          </div>

          {/* Messages */}
          <div style={{ height: 420, overflowY: "auto", padding: "16px" , maxHeight: "60vh" }}>
            <AnimatePresence>
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    display: "flex",
                    gap: 10,
                    marginBottom: 20,
                    flexDirection: msg.role === "user" ? "row-reverse" : "row",
                  }}
                >
                  {/* Avatar */}
                  <div style={{
                    width: 32, height: 32, borderRadius: 8, flexShrink: 0,
                    background: msg.role === "assistant"
                      ? "linear-gradient(135deg, #2d7dd2, #14a085)"
                      : "linear-gradient(135deg, #ff6b35, #f7931e)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    {msg.role === "assistant" ? <Bot size={16} /> : <User size={16} />}
                  </div>

                  {/* Bubble */}
                  <div style={{ maxWidth: "85%", position: "relative" }}>
                    <div style={{
                      padding: "14px 18px",
                      borderRadius: msg.role === "user" ? "18px 18px 4px 18px" : "18px 18px 18px 4px",
                      background: msg.role === "user"
                        ? "linear-gradient(135deg, rgba(255,107,53,0.2), rgba(247,147,30,0.15))"
                        : "rgba(13,36,69,0.8)",
                      border: msg.role === "user"
                        ? "1px solid rgba(255,107,53,0.2)"
                        : "1px solid rgba(74,158,255,0.12)",
                      lineHeight: 1.6,
                      fontSize: 14,
                      color: "rgba(255,255,255,0.9)",
                    }}>
                      {renderContent(msg.content)}
                    </div>

                    {msg.role === "assistant" && (
                      <button
                        onClick={() => copyMessage(msg.content, i)}
                        style={{
                          background: "none", border: "none",
                          color: "rgba(255,255,255,0.3)",
                          cursor: "pointer",
                          fontSize: 11,
                          display: "flex",
                          alignItems: "center",
                          gap: 4,
                          marginTop: 4,
                          padding: "2px 6px",
                        }}
                      >
                        {copied === i ? <><CheckCheck size={11} style={{ color: "#14a085" }} /> Copied!</> : <><Copy size={11} /> Copy</>}
                      </button>
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {loading && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                style={{ display: "flex", gap: 10, alignItems: "flex-start" }}
              >
                <div style={{
                  width: 32, height: 32, borderRadius: 8, flexShrink: 0,
                  background: "linear-gradient(135deg, #2d7dd2, #14a085)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <Bot size={16} />
                </div>
                <div style={{
                  background: "rgba(13,36,69,0.8)",
                  border: "1px solid rgba(74,158,255,0.12)",
                  borderRadius: "18px 18px 18px 4px",
                }}>
                  <TypingIndicator />
                </div>
              </motion.div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Quick Prompts */}
          <div style={{
            padding: "12px 20px",
            borderTop: "1px solid rgba(255,255,255,0.05)",
            background: "rgba(10,22,40,0.5)",
          }}>
            <div className="scroll-row" style={{ paddingBottom: 8 }}>
              {QUICK_PROMPTS.map((p) => (
                <button
                  key={p}
                  onClick={() => sendMessage(p)}
                  className="category-chip"
                  style={{ fontSize: 12, padding: "6px 14px", whiteSpace: "nowrap" }}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>

          {/* Input */}
          <div style={{
            padding: "16px 20px",
            borderTop: "1px solid rgba(255,255,255,0.06)",
            display: "flex",
            gap: 10,
          }}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && sendMessage()}
              placeholder="Ask about Varkala — hotels, food, itinerary, budget, hidden gems..."
              className="luxury-input"
              style={{ flex: 1 }}
              disabled={loading}
              id="ai-chat-input"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => sendMessage()}
              disabled={loading || !input.trim()}
              style={{
                width: 48, height: 48, borderRadius: 12,
                background: "linear-gradient(135deg, #2d7dd2, #14a085)",
                border: "none",
                color: "white",
                cursor: loading || !input.trim() ? "default" : "pointer",
                opacity: loading || !input.trim() ? 0.5 : 1,
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0,
                transition: "opacity 0.2s",
              }}
            >
              <Send size={18} />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
