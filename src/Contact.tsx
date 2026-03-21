import { useRef } from "react";

export default function Contact() {

  const input = useRef<HTMLInputElement>(null);
  const area = useRef<HTMLTextAreaElement>(null);

  function handleclick(){
    const mail = input.current?.value
    const content = area.current?.value
    const mailto = `mailto:${mail}`
    window.open(mailto, content)
  }

  return (
<div className="pl-5 pr-5">
  <div className="backdrop-blur-2xl max-w-7xl mx-auto rounded-lg overflow-hidden flex flex-col md:flex-row bg-white/5 border-white/30 border text-white">
    <div className="w-full p-8 flex flex-col justify-center">
      <h2 className="text-2xl font-bold mb-6">Contactez-nous</h2>
      <form className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">Votre email</label>
          <input
          ref={input}
            type="email"
            id="email"
            className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:ring-2 focus:ring-white/50 focus:border-transparent outline-none"
            placeholder="votre@email.com"
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">Votre message</label>
          <textarea
          ref={area}
            id="message"
            rows={5}
            className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:ring-2 focus:ring-white/50 focus:border-transparent outline-none"
            placeholder="Écrivez votre message ici..."
            required
          ></textarea>
        </div>
        <button
          type="submit"
          onClick={handleclick}
          className="w-full bg-white/10 hover:bg-white/20 text-white font-medium py-2 px-4 rounded-lg transition-colors"
        >
          Envoyer
        </button>
      </form>
    </div>
  </div>
</div>

  );
}
