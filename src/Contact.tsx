import { useRef } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_roqlcnd",
        "template_8hfp051",
        form.current!,
        "_epGGzdUu75H6qU2g",
      )
      .then(
        () => {
          alert("Message envoyé !");
        },
        (error) => {
          alert("Erreur : " + error.text);
        },
      );
  }

  return (
    <div className="pl-5 pr-5">
      <div className="backdrop-blur-2xl max-w-7xl mx-auto rounded-lg overflow-hidden flex flex-col md:flex-row bg-white/5 border-white/30 border text-white">
        <div className="w-full p-8 flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-6">Besoin de me contacter ?</h2>

          <form className="space-y-4" ref={form} onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium mb-2">
                Votre email
              </label>
              <input
                type="email"
                name="email"
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Sujet</label>
              <input
                type="text"
                name="subject"
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Votre message
              </label>
              <textarea
                rows={7}
                name="message"
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20"
                required
              ></textarea>
            </div>

            <div className="border border-white/20"></div>

            <button
              type="submit"
              className="w-full cursor-pointer px-6 py-2 bg-white/15 border border-white/30 rounded-lg transition-all hover:scale-96"
            >
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
