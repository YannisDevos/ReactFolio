import footerdata from "../assets/data/footer.json";

export default function Footer() {
  const footerinfos = footerdata;

  return (
    <footer
      className="text-white m-10 p-10
  rounded-xl
  border border-white/20
  bg-white/10
  backdrop-blur-md
  shadow-lg
  hover:backdrop-blur-lg
  transition-all"
    >
      <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between text-white">
        <div className="  text-center md:text-left mb-4 md:mb-0">
          <span>🇫🇷 </span>
          <span>{footerinfos[1][0].content}</span>
        </div>

        <div className="text-center md:text-left mb-4 md:mb-0">
          <p>
            © {new Date().getFullYear()} Yannis Devos. Conçu avec React —
            ReactFolio.
          </p>
        </div>

        <div className="flex flex-col items-center space-y-4 md:flex-row md:space-y-0 md:space-x-6 md:items-center">
          {footerinfos[0].map((social, index) => (
            <a
              key={index}
              href={social.content}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 hover:text-gray-800 transition-colors"
            >
              <span>{social.name}</span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
