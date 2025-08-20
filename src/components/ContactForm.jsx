import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setError(false);

    const form = e.target;
    const formData = new FormData(form);

    const response = await fetch("https://formspree.io/f/xyzjlvog", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      setSubmitted(true);
      form.reset();
    } else {
      setError(true);
    }

    setSending(false);
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg">
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Nombre Completo</label>
          <input
            type="text"
            name="Nombre"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Tu nombre"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
          <input
            type="Correo"
            name="Email"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="tu@email.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Empresa</label>
          <input
            type="text"
            name="Empresa"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Tu empresa"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Mensaje</label>
          <textarea
            name="Mensaje"
            rows="4"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Cuéntanos sobre tu proyecto..."
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={sending || submitted}
          className={`w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold transition-all duration-300 ${
            (sending || submitted) ? "opacity-50 cursor-not-allowed" : "hover:shadow-lg"
          }`}
        >
          {sending ? "Enviando..." : "Enviar Mensaje"}
        </button>

        {submitted && (
          <p className="text-green-600 font-medium text-center">
            ¡Gracias por tu mensaje! Te responderemos pronto.
          </p>
        )}

        {error && (
          <p className="text-red-600 font-medium text-center">
            Ocurrió un error al enviar el mensaje. Intentá nuevamente.
          </p>
        )}
      </form>
    </div>
  );
}
