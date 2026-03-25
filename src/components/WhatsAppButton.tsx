const WhatsAppButton = () => {
  return (
    <div className="fixed bottom-24 right-6 z-50 flex items-center gap-2 group">
      <span className="bg-white text-foreground text-sm font-medium px-3 py-1.5 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        Chat with us
      </span>
      <a
        href="https://wa.me/919010440101?text=Hi%20Dr.%20Prathyusha%2C%20I%20would%20like%20to%20book%20a%20consultation."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300"
      >
        <svg viewBox="0 0 32 32" className="w-7 h-7 fill-white">
          <path d="M16.004 0C7.165 0 .002 7.163.002 16c0 2.825.737 5.584 2.14 8.017L.015 32l8.204-2.15A15.93 15.93 0 0 0 16.004 32C24.837 32 32 24.837 32 16S24.837 0 16.004 0zm0 29.09a13.05 13.05 0 0 1-6.654-1.818l-.478-.284-4.947 1.298 1.32-4.822-.31-.495A13.04 13.04 0 0 1 2.91 16c0-7.217 5.876-13.09 13.094-13.09S29.09 8.783 29.09 16c0 7.217-5.876 13.09-13.086 13.09zm7.17-9.798c-.393-.197-2.326-1.148-2.687-1.279-.36-.131-.623-.197-.886.197-.262.394-1.017 1.279-1.247 1.542-.23.262-.46.295-.853.098-.394-.197-1.662-.613-3.166-1.953-1.17-1.043-1.96-2.332-2.19-2.725-.23-.394-.025-.607.173-.803.177-.177.394-.46.59-.69.198-.23.264-.394.396-.657.132-.262.066-.492-.033-.69-.098-.196-.886-2.134-1.214-2.922-.32-.768-.644-.664-.886-.676l-.755-.013c-.262 0-.689.098-1.05.492-.36.394-1.378 1.346-1.378 3.283s1.41 3.808 1.607 4.07c.197.263 2.776 4.24 6.728 5.945.94.406 1.674.648 2.246.83.944.3 1.803.258 2.483.157.757-.113 2.326-.951 2.654-1.87.328-.918.328-1.704.23-1.87-.099-.164-.361-.262-.755-.46z" />
        </svg>
      </a>
    </div>
  );
};

export default WhatsAppButton;
