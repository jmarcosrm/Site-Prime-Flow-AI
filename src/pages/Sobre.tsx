import Section from "../components/Section";

export default function Sobre() {
  return (
    <Section className="pt-24 space-y-12">
      <div className="space-y-4">
        <h1 className="text-3xl font-heading uppercase">Sobre</h1>
        <p className="text-cinza-metalico max-w-2xl">
          Transformar operações com IA aplicável e finanças de alta precisão.
        </p>
      </div>
      <div className="bg-cinza-escuro p-6 rounded-2xl">
        <h2 className="font-heading mb-2 uppercase">Especialista</h2>
        <p className="text-cinza-metalico">
          Contador sênior com 15+ anos em controladoria e automação.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-6 text-center">
        <div>
          <p className="text-3xl font-bold text-laranja">15+</p>
          <p className="text-cinza-metalico text-sm">anos de experiência</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-laranja">80+</p>
          <p className="text-cinza-metalico text-sm">projetos entregues</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-laranja">120+</p>
          <p className="text-cinza-metalico text-sm">integrações ativas</p>
        </div>
      </div>
    </Section>
  );
}
