import Section from "../components/Section";
import Card from "../components/Card";
import Button from "../components/Button";

export default function Solutions() {
  return (
    <Section className="pt-24">
      <h1 className="text-3xl font-heading uppercase mb-8">Soluções</h1>
      <div className="grid md:grid-cols-3 gap-6">
        <Card>
          <h3 className="font-heading mb-2 uppercase">Automação Financeira</h3>
          <p className="text-cinza-metalico mb-4">
            Fechamento, conciliação, projeções, DRE, NCG.
          </p>
          <Button variant="ghost">
            <a href="/financas">Saiba mais</a>
          </Button>
        </Card>
        <Card>
          <h3 className="font-heading mb-2 uppercase">IA & Automação</h3>
          <p className="text-cinza-metalico mb-4">
            Agentes, workflows n8n, integrações RAG e monitoramento.
          </p>
        </Card>
        <Card>
          <h3 className="font-heading mb-2 uppercase">
            Desenvolvimento Web/App
          </h3>
          <p className="text-cinza-metalico mb-4">
            React/Next, APIs, banco Supabase, dashboards.
          </p>
        </Card>
      </div>
    </Section>
  );
}
