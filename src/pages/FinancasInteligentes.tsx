import Section from "../components/Section";
import Button from "../components/Button";
import Card from "../components/Card";

export default function FinancasInteligentes() {
  return (
    <>
      <section className="pt-24">
        <Section className="text-center space-y-6">
          <h1 className="text-4xl font-heading uppercase">
            Finanças que se atualizam sozinhas.
          </h1>
          <p className="text-lg text-cinza-metalico">
            Fechamento, projeções e alertas — em tempo real.
          </p>
          <Button>Solicitar demonstração</Button>
        </Section>
      </section>

      <Section className="space-y-12">
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-transparent border border-cinza-escuro">
            <h3 className="font-heading mb-2 uppercase">Fluxo de Caixa Vivo</h3>
            <p className="text-cinza-metalico">
              Entradas/saídas + projeções + alertas de risco.
            </p>
          </Card>
          <Card className="bg-transparent border border-cinza-escuro">
            <h3 className="font-heading mb-2 uppercase">DRE Automatizada</h3>
            <p className="text-cinza-metalico">
              Consolidação e análises por centro de custo.
            </p>
          </Card>
          <Card className="bg-transparent border border-cinza-escuro">
            <h3 className="font-heading mb-2 uppercase">NCG & Orçamento</h3>
            <p className="text-cinza-metalico">
              Planejamento e variações com IA explicável.
            </p>
          </Card>
        </div>
      </Section>

      <Section className="flex justify-center gap-12 text-center">
        <div>
          <p className="text-3xl font-bold text-laranja">-30%</p>
          <p className="text-cinza-metalico text-sm">tempo de fechamento</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-laranja">+99%</p>
          <p className="text-cinza-metalico text-sm">conciliações</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-laranja">ROI 90 dias</p>
        </div>
      </Section>

      <Section className="text-center">
        <Button>Agendar diagnóstico financeiro</Button>
      </Section>
    </>
  );
}
