import Section from "./Section";
import { Link } from "react-router-dom";
import { Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-cinza-escuro mt-16">
      <Section className="py-12 text-sm text-cinza-metalico">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="space-y-4">
            <img src="/src/assets/logo-flat.svg" alt="Prime Flow AI" className="h-8 w-8" />
            <p>Rua Exemplo, 123 – São Paulo</p>
            <p>WhatsApp: (11) 99999-9999</p>
            <p>© Prime Flow AI Solutions</p>
          </div>
          <div className="flex flex-col md:flex-row gap-6">
            <Link to="/" className="hover:text-laranja">Home</Link>
            <Link to="/solucoes" className="hover:text-laranja">Soluções</Link>
            <Link to="/financas" className="hover:text-laranja">Finanças Inteligentes</Link>
            <Link to="/sobre" className="hover:text-laranja">Sobre</Link>
            <Link to="/cases" className="hover:text-laranja">Cases</Link>
            <Link to="/contato" className="hover:text-laranja">Contato</Link>
          </div>
          <div className="flex gap-4">
            <a href="#" aria-label="LinkedIn" className="hover:text-laranja">
              <Linkedin />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-laranja">
              <Instagram />
            </a>
          </div>
        </div>
      </Section>
    </footer>
  );
}
