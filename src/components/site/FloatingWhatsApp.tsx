import { WHATSAPP_URL } from "@/lib/site-data";

export function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Discuter sur WhatsApp"
      className="group fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-[#25D366] py-3 pl-3 pr-4 text-white shadow-[0_10px_30px_-8px_rgba(37,211,102,0.55)] transition-all hover:scale-[1.03] hover:shadow-[0_14px_40px_-8px_rgba(37,211,102,0.75)] focus:outline-none focus:ring-4 focus:ring-[#25D366]/30"
    >
      <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/15">
        <span className="absolute inset-0 animate-ping rounded-full bg-white/30" />
        <svg viewBox="0 0 32 32" className="relative h-5 w-5" fill="currentColor" aria-hidden="true">
          <path d="M19.1 17.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-1 1.1-.2.2-.4.2-.7.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6.1-.1.3-.4.5-.6.1-.2.2-.3.3-.5.1-.2.1-.4 0-.5 0-.1-.7-1.7-.9-2.3-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.6 0 1.5 1.1 3 1.2 3.2.1.2 2.1 3.3 5.2 4.6.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3zM16 3C8.8 3 3 8.8 3 16c0 2.3.6 4.5 1.7 6.4L3 29l6.8-1.8c1.9 1 4 1.6 6.2 1.6 7.2 0 13-5.8 13-13S23.2 3 16 3zm0 23.6c-2 0-3.9-.5-5.6-1.5l-.4-.2-4 1.1 1.1-3.9-.3-.4C5.7 20 5.1 18 5.1 16c0-6 4.9-10.9 10.9-10.9 6 0 10.9 4.9 10.9 10.9s-4.9 10.6-10.9 10.6z"/>
        </svg>
      </span>
      <span className="text-sm font-semibold">Discuter</span>
    </a>
  );
}
