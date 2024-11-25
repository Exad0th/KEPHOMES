import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import "./LiveChat.css";
import paperclip from "../images/paperclip.png";

const socket = io("http://localhost:3001");

const LiveChat = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [isChatOpen, setIsChatOpen] = useState(false);

  // İlk karşılama mesajı için
  useEffect(() => {
    if (isChatOpen) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "Support", text: "Merhaba! Size nasıl yardımcı olabilirim?" },
      ]);
    }
  }, [isChatOpen]);

  useEffect(() => {
    socket.on("message", (newMessage) => {
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    });

    return () => {
      socket.off("message");
    };
  }, []);

  const sendMessage = () => {
    if (message.trim() === "") return;

    // Mesajı gönder ve sohbet geçmişine ekle
    socket.emit("message", message);
    setMessages((prevMessages) => [
      ...prevMessages,
      { sender: "Me", text: message },
    ]);
    setMessage("");
  };

  return (
    <div>
      {/* Canlı Destek Aç/Kapat Butonu */}
      <div
        className="live-chat-toggle"
        onClick={() => setIsChatOpen(!isChatOpen)}
      >
        {isChatOpen ? "Kapat" : "Bize yazın, çevrimiçiyiz!"}
      </div>

      {/* Canlı Destek Chat Kutusu */}
      {isChatOpen && (
        <div className="live-chat-container">
          <div className="live-chat-header">Canlı Destek</div>
          <div className="live-chat-messages">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`live-chat-message ${
                  msg.sender === "Me" ? "live-chat-message-me" : ""
                }`}
              >
                <strong>{msg.sender === "Me" ? "Ben" : "Destek"}:</strong>{" "}
                {msg.text}
              </div>
            ))}
          </div>
          <div className="live-chat-input-container">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Mesajınızı yazın..."
              className="live-chat-input"
            />
            <label className="live-chat-file-upload">
              <img src={paperclip} alt="Ataç" className="file-upload-icon" />
              <input
                type="file"
                onChange={(e) => console.log(e.target.files[0])}
                style={{ display: "none" }}
              />
            </label>
            <button onClick={sendMessage} className="live-chat-send-button">
              Gönder
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LiveChat;
