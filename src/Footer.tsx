import footerdata from "../assets/data/footer.json";

export default function Footer() {
  const footerinfos = footerdata;

  return (
    <footer className="bg-gray-200 shadow-inner mt-auto p-10">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between text-gray-600">
        <div className="mb-4 md:mb-0">
          <p>
            © {new Date().getFullYear()} Yannis Devos. Tous droits réservés.
          </p>
        </div>
        <div className="flex space-x-6">
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

          <span>🇫🇷 {footerinfos[1][0].content}</span>
        </div>
      </div>
    </footer>
  );
}
