import Section from "../components/Section";
import Card from "../components/Card";
import Button from "../components/Button";

const cases = [
  {
    title: "Case A",
    problem: "Processo manual e sem visibilidade",
    solution: "Automação financeira completa",
    result: "-30% tempo de fechamento",
  },
  {
    title: "Case B",
    problem: "Dados espalhados e inconsistentes",
    solution: "Painel único com IA de validação",
    result: "+25% precisão nas projeções",
  },
];

export default function Cases() {
  return (
    <Section className="pt-24">
      <h1 className="text-3xl font-heading uppercase mb-8">Cases</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {cases.map((c) => (
          <Card key={c.title}>
            <h3 className="font-heading mb-2 uppercase">{c.title}</h3>
            <p className="text-cinza-metalico mb-2">
              <strong>Problema:</strong> {c.problem}
            </p>
            <p className="text-cinza-metalico mb-2">
              <strong>Solução:</strong> {c.solution}
            </p>
            <p className="text-cinza-metalico">
              <strong>Resultado:</strong> {c.result}
            </p>
          </Card>
        ))}
      </div>
      <div className="text-center mt-8">
        <Button variant="ghost">Ver estudo completo</Button>
      </div>
    </Section>
  );
}
