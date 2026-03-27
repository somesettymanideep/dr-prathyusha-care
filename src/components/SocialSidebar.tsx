const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/1H42KQ9Jct/",
    bg: "#1877F2",
    icon: (
      <svg className="w-5 h-5 text-white shrink-0" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/drprathyusha.javvadi",
    bg: "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)",
    icon: (
      <svg className="w-5 h-5 text-white shrink-0" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@DrPrathyushaJavvadi",
    bg: "#FF0000",
    icon: (
      <svg className="w-5 h-5 text-white shrink-0" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    label: "Justdial",
    href: "https://www.justdial.com/Hyderabad/Dr-Prathyusha-Javvadi",
    bg: "#0C4DA2",
    icon: (
      <svg className="w-5 h-5 text-white shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <text x="3" y="18" fontFamily="Arial,sans-serif" fontWeight="bold" fontSize="16">Jd</text>
      </svg>
    ),
  },
  {
    label: "MediBuddy",
    href: "https://www.medibuddy.in",
    bg: "#FF6B35",
    icon: (
      <svg className="w-5 h-5 text-white shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14h-2v-6h2v6zm4 0h-2v-6h2v6zm-3-8c-.55 0-1-.45-1-1V5h2v2c0 .55-.45 1-1 1z" />
        <path d="M9 7c-.55 0-1-.45-1-1V4h2v2c0 .55-.45 1-1 1zm6 0c-.55 0-1-.45-1-1V4h2v2c0 .55-.45 1-1 1z" />
      </svg>
    ),
  },
];
const SocialSidebar = () => {
  return (
    <div className="fixed left-0 top-1/2 -translate-y-1/2 z-50 flex flex-col shadow-lg rounded-r-lg overflow-hidden">
      {socialLinks.map((item) => (
        <a
          key={item.label}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={item.label}
          className="group flex items-center h-11 overflow-hidden transition-all duration-300 ease-out"
          style={{
            background: item.bg,
            width: "44px",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.width = "140px";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.width = "44px";
          }}
        >
          <span className="w-11 h-11 flex items-center justify-center shrink-0">
            {item.icon}
          </span>
          <span className="text-white text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pr-3">
            {item.label}
          </span>
        </a>
      ))}
    </div>
  );
};

export default SocialSidebar;
