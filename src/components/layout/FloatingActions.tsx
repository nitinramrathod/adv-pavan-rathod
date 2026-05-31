"use client";
import { useState } from "react";
import { MessageCircle, Phone, PhoneCall } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export default function FloatingActions() {
  const [showCallback, setShowCallback] = useState(false);

  const triggerCallback = () => {
    window.dispatchEvent(new CustomEvent("open-callback-modal"));
  };

  return (
    <div className="fixed right-4 bottom-6 z-40 flex flex-col gap-3">
      {/* WhatsApp */}
      <a
        href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=Hello%20Advocate%20Pavan%20Rathod%2C%20I%20need%20legal%20assistance.`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 md:w-14 md:h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-400 transition-all hover:scale-110 animate-pulse-gold"
        aria-label="WhatsApp"
        title="Chat on WhatsApp"
      >
        <MessageCircle className="w-5 h-5 md:w-6 md:h-6 text-white" />
      </a>

      {/* Call */}
      <a
        href={`tel:${SITE_CONFIG.phoneRaw}`}
        className="w-12 h-12 md:w-14 md:h-14 bg-blue-600 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-500 transition-all hover:scale-110"
        aria-label="Call Now"
        title="Call Now"
      >
        <Phone className="w-5 h-5 md:w-6 md:h-6 text-white" />
      </a>

      {/* Callback */}
      <button
        onClick={triggerCallback}
        className="w-12 h-12 md:w-14 md:h-14 bg-gold rounded-full flex items-center justify-center shadow-lg hover:bg-yellow-400 transition-all hover:scale-110"
        aria-label="Request Callback"
        title="Request Callback"
      >
        <PhoneCall className="w-5 h-5 md:w-6 md:h-6 text-navy" />
      </button>
    </div>
  );
}
