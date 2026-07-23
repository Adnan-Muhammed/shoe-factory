"use client"
import React, { useState, useRef, useEffect } from 'react';
import { ArrowLeft, User, Send, Paperclip } from 'lucide-react';

// Mock conversation — swap for real messages fetched by friendId
const initialMessages = [
  { id: 1, sender: "them", text: "Hey! Are we still on for tomorrow?", time: "10:02 AM" },
  { id: 2, sender: "me", text: "Yes definitely, looking forward to it", time: "10:03 AM" },
  { id: 3, sender: "them", text: "Perfect, I'll bring the documents too", time: "10:04 AM" },
  { id: 4, sender: "me", text: "Sounds good, see you then!", time: "10:05 AM" },
];

const MessageInterface = ({ friendName = "Aisha Rahman", onBack = () => {} }) => {
  const [messages, setMessages] = useState(initialMessages);
  const [draft, setDraft] = useState("");
  const scrollRef = useRef(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    const text = draft.trim();
    if (!text) return;
    setMessages((prev) => [
      ...prev,
      { id: prev.length + 1, sender: "me", text, time: "Now" },
    ]);
    setDraft("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="min-h-[100dvh] w-full flex flex-col bg-gradient-to-b from-[#7FE2E3] via-[#9DCBF7] to-[#C69CF7]">

      {/* Header */}
      <div className="flex items-center gap-3 px-4 pt-6 pb-4">
        <button
          type="button"
          onClick={onBack}
          className="p-2 -ml-2 rounded-full active:scale-95 transition-transform"
          aria-label="Back"
        >
          <ArrowLeft className="w-6 h-6 text-[#475270]" />
        </button>

        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#9DCBF7] to-[#C69CF7] flex items-center justify-center flex-shrink-0">
          <User className="w-4 h-4 text-white" />
        </div>

        <div className="flex-1 min-w-0">
          <p className="text-[15px] font-semibold text-[#475270] truncate">{friendName}</p>
          <p className="text-[11px] text-[#475270]/70">Active now</p>
        </div>
      </div>

      {/* Message area — sits on a white card that fills the rest of the screen */}
      <div className="flex-1 bg-white/90 backdrop-blur-sm rounded-t-[28px] shadow-[0_-10px_30px_rgba(0,0,0,0.08)] flex flex-col overflow-hidden">

        <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-5 space-y-3">
          {messages.map((m) => (
            <MessageBubble key={m.id} message={m} />
          ))}
        </div>

        {/* Composer */}
        <div className="px-3 py-3 border-t border-slate-100 flex items-end gap-2">
          <button
            type="button"
            className="p-2.5 rounded-full text-slate-400 hover:bg-slate-50 active:scale-95 transition-transform flex-shrink-0"
            aria-label="Attach"
          >
            <Paperclip className="w-5 h-5" />
          </button>

          <textarea
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type a message"
            rows={1}
            className="flex-1 resize-none px-4 py-2.5 bg-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#9DCBF7]/40 text-sm text-slate-800 placeholder:text-slate-400 max-h-28"
          />

          <button
            type="button"
            onClick={handleSend}
            disabled={!draft.trim()}
            className={`p-3 rounded-full flex-shrink-0 transition-all active:scale-95 ${
              draft.trim()
                ? 'bg-gradient-to-r from-[#7FE2E3] via-[#9DCBF7] to-[#C69CF7] text-white'
                : 'bg-slate-100 text-slate-300 cursor-not-allowed'
            }`}
            aria-label="Send"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

const MessageBubble = ({ message }) => {
  const isMe = message.sender === "me";

  return (
    <div className={`flex ${isMe ? 'justify-end' : 'justify-start'}`}>
      <div className={`max-w-[75%] ${isMe ? 'items-end' : 'items-start'} flex flex-col`}>
        <div
          className={`px-4 py-2.5 text-sm leading-snug ${
            isMe
              ? 'bg-gradient-to-r from-[#7FE2E3] via-[#9DCBF7] to-[#C69CF7] text-white rounded-2xl rounded-br-md'
              : 'bg-slate-100 text-slate-800 rounded-2xl rounded-bl-md'
          }`}
        >
          {message.text}
        </div>
        <span className="text-[10px] text-slate-400 mt-1 px-1">{message.time}</span>
      </div>
    </div>
  );
};

export default MessageInterface;