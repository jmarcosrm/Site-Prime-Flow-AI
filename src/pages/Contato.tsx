import Section from "../components/Section";
import Button from "../components/Button";
import { Mail, MessageCircle } from "lucide-react";

export default function Contato() {
  return (
    <Section className="pt-24">
      <h1 className="text-3xl font-heading uppercase mb-8">Contato</h1>
      <form className="grid gap-4 max-w-md">
        <input
          type="text"
          placeholder="Nome"
          className="bg-cinza-escuro rounded p-3 focus:outline-none focus:ring-2 focus:ring-laranja"
        />
        <input
          type="email"
          placeholder="Email"
          className="bg-cinza-escuro rounded p-3 focus:outline-none focus:ring-2 focus:ring-laranja"
        />
        <input
          type="text"
          placeholder="Empresa"
          className="bg-cinza-escuro rounded p-3 focus:outline-none focus:ring-2 focus:ring-laranja"
        />
        <textarea
          placeholder="Mensagem"
          className="bg-cinza-escuro rounded p-3 h-32 focus:outline-none focus:ring-2 focus:ring-laranja"
        ></textarea>
        <Button type="submit" className="w-full">
          Enviar
        </Button>
      </form>
      <div className="mt-8 flex flex-col md:flex-row gap-6">
        <a
          href="#"
          className="flex items-center gap-2 text-cinza-metalico hover:text-laranja"
        >
          <MessageCircle /> WhatsApp
        </a>
        <a
          href="mailto:contato@primeflow.ai"
          className="flex items-center gap-2 text-cinza-metalico hover:text-laranja"
        >
          <Mail /> contato@primeflow.ai
        </a>
      </div>
    </Section>
  );
}
