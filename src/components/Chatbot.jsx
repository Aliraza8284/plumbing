// Chatbot.jsx - Final Code (No Proxy, No CORS Error, Fully Responsive)
import { useState, useEffect, useRef } from "react";
import { MessageCircle, X, Send, Phone, User, CheckCheck } from "lucide-react";

// 🔴 TELEGRAM SETUP 🔴
const TELEGRAM_BOT_TOKEN = "8863856920:AAHc1GhZ_SwdkkhK_N-mUH3ezlMw76yrZew"; 
const TELEGRAM_CHAT_ID = "7408137592"; 

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { 
      text: "Hi! I'm the GlobalFixs assistant. How can I help you today? Are you facing issues with Plumbing, Sewer, or HVAC?", 
      isBot: true 
    }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isTyping, isOpen]);

  // 🔔 Telegram Notification (No-CORS Trick to bypass Proxy Error)
  const sendTelegramNotification = async (messageText) => {
    const text = `🔔 *New Website Chat!*\n\n👤 *Message:* ${messageText}\n⏰ *Time:* ${new Date().toLocaleString()}`;
    // URL mein data bhej rahe hain taake CORS block na kare
    const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage?chat_id=${TELEGRAM_CHAT_ID}&text=${encodeURIComponent(text)}`;
    
    try {
      await fetch(url, {
        method: "GET",
        mode: "no-cors", 
      });
      console.log("Notification sent to Telegram!");
    } catch (error) {
      console.error("Notification failed:", error);
    }
  };

  // Bot ka smart reply logic
  const getBotReply = (text) => {
    const t = text.toLowerCase();

    if (t.includes("emergency") || t.includes("leak") || t.includes("burst") || t.includes("flood")) {
      return "🚨 This sounds like a plumbing emergency! Please shut off your main water valve immediately and call our 24/7 team at (844) 212-9186 for urgent help.";
    }
    if (t.includes("plumb") || t.includes("toilet") || t.includes("faucet") || t.includes("clog") || t.includes("drain") || t.includes("sink") || t.includes("pipe")) {
      return "We handle all plumbing issues including leak detection, drain cleaning, toilet repairs, and pipe replacements. For immediate plumbing service in the USA, call (844) 212-9186.";
    }
    if (t.includes("sewer") || t.includes("smell") || t.includes("backup") || t.includes("trenchless")) {
      return "We specialize in sewer line repair, trenchless technology, and hydro-jetting. If you have a sewer backup or bad smell, call (844) 212-9186 to get a licensed specialist.";
    }
    if (t.includes("hvac") || t.includes("ac") || t.includes("heat") || t.includes("furnace") || t.includes("cool") || t.includes("pump")) {
      return "Our HVAC technicians are ready to help with heat pumps, AC repairs, and heating emergencies. Call us at (844) 212-9186 to schedule a service or emergency repair.";
    }
    if (t.includes("price") || t.includes("cost") || t.includes("quote") || t.includes("rate") || t.includes("estimate")) {
      return "We offer transparent, flat-rate pricing with no hidden fees. To get an exact quote for your specific issue, please call us at (844) 212-9186.";
    }
    if (t.includes("service") || t.includes("do you") || t.includes("offer") || t.includes("fix")) {
      return "GlobalFixs connects you with top-rated local technicians across the USA for Plumbing, Sewer, and HVAC services. You can enter your ZIP code on our homepage to check availability!";
    }
    if (t.includes("area") || t.includes("zip") || t.includes("city") || t.includes("serve") || t.includes("usa") || t.includes("where")) {
      return "We connect you with licensed professionals all across the USA! Just type your ZIP code in the search bar on our homepage to see if we have a team near you.";
    }
    if (t.includes("hi") || t.includes("hello") || t.includes("hey") || t.includes("good")) {
      return "Hello! How can we assist you today? Do you need help with plumbing, sewer, or HVAC?";
    }
    if (t.includes("human") || t.includes("agent") || t.includes("call") || t.includes("contact") || t.includes("number")) {
      return "Of course! You can speak directly to our friendly support team by calling (844) 212-9186. We are available 24/7.";
    }
    return "I want to make sure you get the right help. For detailed information or specific issues, please call our 24/7 team at (844) 212-9186.";
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = { text: input, isBot: false };
    setMessages((prev) => [...prev, userMsg]);
    
    sendTelegramNotification(input);

    setInput("");
    setIsTyping(true);

    const delay = Math.floor(Math.random() * 1300) + 1200;

    setTimeout(() => {
      const reply = getBotReply(userMsg.text);
      setIsTyping(false);
      setMessages((prev) => [...prev, { text: reply, isBot: true }]);
    }, delay);
  };

  const quickAsk = (question) => {
    setMessages((prev) => [...prev, { text: question, isBot: false }]);
    
    sendTelegramNotification(question);

    setIsTyping(true);
    
    setTimeout(() => {
      const reply = getBotReply(question);
      setIsTyping(false);
      setMessages((prev) => [...prev, { text: reply, isBot: true }]);
    }, 1200);
  };

  return (
    <>
      <style>{`
        @keyframes slide-up { from { opacity: 0; transform: translateY(20px) scale(0.95); } to { opacity: 1; transform: translateY(0) scale(1); } }
        @keyframes message-pop { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes purple-glow {
          0% { box-shadow: 0 0 0 0 rgba(123, 63, 242, 0.6); }
          70% { box-shadow: 0 0 0 15px rgba(123, 63, 242, 0); }
          100% { box-shadow: 0 0 0 0 rgba(123, 63, 242, 0); }
        }
        .animate-slide-up { animation: slide-up 0.3s ease-out forwards; }
        .animate-message-pop { animation: message-pop 0.3s ease-out forwards; }
        .glow-btn { animation: purple-glow 2s infinite; }
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #94a3b8; }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
      `}</style>

      {/* Container - Responsive position */}
      <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50 flex flex-col items-end font-sans">
        
        {/* Chat Window - Responsive Width (Perfect for 320px screens) */}
        {isOpen && (
          <div className="mb-4 w-[calc(100vw-2rem)] max-w-[360px] overflow-hidden rounded-2xl bg-white shadow-[0_20px_50px_-12px_rgba(0,0,0,0.25)] border border-gray-100 flex flex-col animate-slide-up" style={{ height: "min(500px, 80vh)" }}>
            
            {/* Header */}
            <div className="bg-gradient-to-r from-[#425664] to-[#2c3a45] p-4 text-white flex justify-between items-center shadow-md relative z-10">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="bg-[#C6AD8F] p-2 rounded-full shadow-inner">
                    <User size={18} className="text-[#1f2a33]" />
                  </div>
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-[#425664] rounded-full"></span>
                </div>
                <div>
                  <h3 className="font-bold text-[15px] tracking-wide">GlobalFixs Assistant</h3>
                  <p className="text-[11px] text-white/80 flex items-center gap-1">
                    Online • Ready to help <CheckCheck size={12} className="text-blue-300" />
                  </p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/70 hover:text-white hover:bg-white/10 p-1.5 rounded-full transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 p-4 overflow-y-auto bg-[#F8F9FA] flex flex-col gap-4 custom-scrollbar">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.isBot ? "justify-start" : "justify-end"} animate-message-pop`}>
                  <div className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-[14px] leading-relaxed shadow-sm ${
                    msg.isBot 
                      ? "bg-white text-[#1f2a33] border border-gray-100 rounded-tl-sm" 
                      : "bg-[#425664] text-white rounded-tr-sm"
                  }`}>
                    {msg.text}
                    
                    {msg.text.includes("(844) 212-9186") && (
                      <a 
                        href="tel:+18442129186" 
                        className="mt-2.5 flex items-center justify-center gap-2 bg-[#C6AD8F] text-[#1f2a33] font-bold py-2 px-3 rounded-lg text-xs hover:bg-[#b59c7d] transition-colors shadow-sm"
                      >
                        <Phone size={14} /> Call (844) 212-9186
                      </a>
                    )}
                  </div>
                </div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex justify-start animate-message-pop">
                  <div className="bg-white border border-gray-100 rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 bg-[#425664] rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></div>
                    <div className="w-1.5 h-1.5 bg-[#425664] rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></div>
                    <div className="w-1.5 h-1.5 bg-[#425664] rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Replies */}
            <div className="px-3 py-2.5 bg-white border-t border-gray-100 flex gap-2 overflow-x-auto scrollbar-hide">
              <button onClick={() => quickAsk("Plumbing issue")} className="text-[12px] bg-blue-50 text-blue-700 border border-blue-100 px-3 py-1.5 rounded-full font-semibold hover:bg-blue-100 transition-colors whitespace-nowrap">Plumbing 🔧</button>
              <button onClick={() => quickAsk("HVAC problem")} className="text-[12px] bg-orange-50 text-orange-700 border border-orange-100 px-3 py-1.5 rounded-full font-semibold hover:bg-orange-100 transition-colors whitespace-nowrap">HVAC ❄️</button>
              <button onClick={() => quickAsk("Emergency leak")} className="text-[12px] bg-red-50 text-red-600 border border-red-100 px-3 py-1.5 rounded-full font-semibold hover:bg-red-100 transition-colors whitespace-nowrap">Emergency 🚨</button>
              <button onClick={() => quickAsk("Pricing")} className="text-[12px] bg-gray-50 text-gray-700 border border-gray-200 px-3 py-1.5 rounded-full font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap">Pricing 💵</button>
            </div>

            {/* Input Area */}
            <form onSubmit={handleSend} className="p-3 bg-white border-t border-gray-100 flex gap-2 items-center">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about plumbing, HVAC..."
                className="flex-1 bg-gray-50 rounded-full px-4 py-2.5 text-sm outline-none border border-gray-200 focus:border-[#425664] focus:ring-1 focus:ring-[#425664]/20 transition-all text-[#1f2a33]"
              />
              <button 
                type="submit" 
                disabled={!input.trim()}
                className="bg-[#425664] text-white p-2.5 rounded-full hover:bg-[#2c3a45] transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-md flex-shrink-0"
              >
                <Send size={18} className={input.trim() ? "ml-0.5" : ""} />
              </button>
            </form>
          </div>
        )}

        {/* Circular Glowing Button (Exact Image Design) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-[#7B3FF2] text-white rounded-full transition-transform duration-300 hover:scale-105 shadow-lg ${!isOpen ? "glow-btn" : ""}`}
          aria-label="Toggle chat"
        >
          {isOpen ? (
            <X size={28} className="md:w-8 md:h-8" />
          ) : (
            <MessageCircle size={30} className="md:w-8 md:h-8" />
          )}
        </button>
      </div>
    </>
  );
};

export default Chatbot;