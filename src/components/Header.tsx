import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu } from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";
import Button from "./Button";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/solucoes", label: "Soluções" },
  { to: "/financas", label: "Finanças Inteligentes" },
  { to: "/sobre", label: "Sobre" },
  { to: "/cases", label: "Cases" },
  { to: "/contato", label: "Contato" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-colors ${
        scrolled ? "bg-preto/80 backdrop-blur-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2">
          <img src="/src/assets/logo-flat.svg" alt="Prime Flow AI" className="h-8 w-8" />
          <span className="sr-only">Prime Flow AI</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm uppercase font-heading tracking-wide">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                isActive ? "text-laranja" : "hover:text-laranja"
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="md:hidden">
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <button aria-label="Menu" className="p-2">
                <Menu className="text-branco-suave" />
              </button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 bg-preto/60" />
              <Dialog.Content className="fixed top-0 right-0 h-full w-64 bg-preto p-6 flex flex-col gap-6">
                {navItems.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    className={({ isActive }) =>
                      isActive ? "text-laranja" : "text-branco-suave"
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
                <Dialog.Close asChild>
                  <Button variant="outline" className="mt-auto">
                    Fechar
                  </Button>
                </Dialog.Close>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </div>
    </header>
  );
}
