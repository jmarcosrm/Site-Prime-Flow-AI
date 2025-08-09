import Section from "../components/Section";
import Button from "../components/Button";
import Card from "../components/Card";

export default function Home() {
  return (
    <>
      <section className="pt-24">
        <Section className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl md:text-5xl font-heading uppercase tracking-wide">
              Automação que faz o financeiro respirar.
            </h1>
            <p className="text-lg text-cinza-metalico">
              IA + Fluxos inteligentes + Desenvolvimento sob medida.
            </p>
            <div className="flex gap-4">
              <Button>Agendar diagnóstico</Button>
              <Button variant="ghost">
                <a href="/solucoes">Ver soluções</a>
              </Button>
            </div>
          </div>
          <div className="flex-1">
            <img
              src="/src/assets/hero-mock.svg"
              alt="Dashboard financeiro"
              className="w-full"
              loading="lazy"
            />
          </div>
        </Section>
      </section>

      <Section className="flex items-center justify-between gap-8">
        <div className="flex gap-8 w-full justify-between">
          <div className="text-center">
            <p className="text-3xl font-bold text-laranja">-30%</p>
            <p className="text-cinza-metalico text-sm">tempo de fechamento</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-laranja">+90%</p>
            <p className="text-cinza-metalico text-sm">visibilidade caixa</p>
          </div>
        </div>
      </Section>

      <Section className="grid md:grid-cols-3 gap-8">
        <Card>
          <h3 className="font-heading mb-2 uppercase">Financeiro Automatizado</h3>
          <p className="text-cinza-metalico">
            Fechamento, DRE, fluxo de caixa e conciliações em piloto automático.
          </p>
        </Card>
        <Card>
          <h3 className="font-heading mb-2 uppercase">IA Aplicada</h3>
          <p className="text-cinza-metalico">
            Agentes que executam tarefas, conferem regras e sinalizam anomalias.
          </p>
        </Card>
        <Card>
          <h3 className="font-heading mb-2 uppercase">Dev de Alto Impacto</h3>
          <p className="text-cinza-metalico">
            Sites, sistemas e apps com integrações n8n/Supabase.
          </p>
        </Card>
      </Section>

      <Section className="flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 order-2 md:order-1">
          <img
            src="/src/assets/placeholder.svg"
            alt="Controladoria"
            className="w-full"
            loading="lazy"
          />
        </div>
        <div className="flex-1 order-1 md:order-2 space-y-4">
          <h2 className="text-3xl font-heading uppercase tracking-wide text-laranja">
            Controladoria que escala
          </h2>
          <p className="text-cinza-metalico">
            Arquitetura de dados + robôs de rotina + painéis táticos.
          </p>
        </div>
      </Section>

      <Section className="flex flex-col md:flex-row justify-between gap-8 text-cinza-metalico">
        <div className="flex flex-col items-center">
          <div className="h-2 w-2 bg-laranja rounded-full mb-2" />
          <p>Diagnóstico</p>
        </div>
        <div className="flex-1 border-t border-cinza-escuro mt-3" />
        <div className="flex flex-col items-center">
          <div className="h-2 w-2 bg-laranja rounded-full mb-2" />
          <p>Planejamento</p>
        </div>
        <div className="flex-1 border-t border-cinza-escuro mt-3" />
        <div className="flex flex-col items-center">
          <div className="h-2 w-2 bg-laranja rounded-full mb-2" />
          <p>Execução</p>
        </div>
        <div className="flex-1 border-t border-cinza-escuro mt-3" />
        <div className="flex flex-col items-center">
          <div className="h-2 w-2 bg-laranja rounded-full mb-2" />
          <p>Suporte Contínuo</p>
        </div>
      </Section>

      <Section className="text-center bg-cinza-escuro rounded-2xl">
        <h2 className="text-2xl font-heading mb-4">
          Comece pelo diagnóstico financeiro gratuito.
        </h2>
        <Button>Quero meu diagnóstico</Button>
      </Section>
    </>
  );
}
