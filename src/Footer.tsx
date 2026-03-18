import footerdata from "../assets/data/footer.json";

export default function Footer() {
  const footerinfos = footerdata;

  return (
    <footer className="bg-gray-200 shadow-inner mt-auto p-4 md:p-10">
      <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between text-gray-600">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p>
            © {new Date().getFullYear()} Yannis Devos. Tous droits réservés.
          </p>
        </div>

        <div className="flex flex-col items-center space-y-4 md:flex-row md:space-y-0 md:space-x-6 md:items-center">
          {footerinfos[0].map((social, index) => (
            <a
              key={index}
              href={social.content}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 hover:text-black transition-colors"
            >
              <span>{social.name}</span>
            </a>
          ))}
          <span className="flex items-center space-x-1">
            <span>🇫🇷</span>
            <span>{footerinfos[1][0].content}</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
