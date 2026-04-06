import SectionWrapper from "../ui/SectionWrapper";

export default function ResearchStatement() {
  return (
    <SectionWrapper title="Research Statement">
      <div className="max-w-4xl space-y-6 text-base leading-8 text-slate-700">
        <p>
          My interest in economics emerged from direct exposure to firm
          decision-making in industrial markets, where questions of pricing,
          contracting, and technology adoption are not theoretical abstractions
          but daily operational challenges. Working in Bangladesh’s
          manufacturing and machinery sectors, I observed that firms routinely
          face complex trade-offs between outsourcing, internal production, and
          hybrid contractual arrangements.
        </p>

        <p>
          These observations led me to pursue a research agenda focused on the
          relationship between asset specificity and transaction frequency, and
          how governance structures evolve in response to technological
          complexity and institutional environments. In my master’s thesis, I
          developed a machine learning framework to quantify asset specificity
          using transaction-level data.
        </p>
      </div>
    </SectionWrapper>
  );
}