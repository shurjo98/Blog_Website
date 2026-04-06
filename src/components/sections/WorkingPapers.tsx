import { workingPapers } from "../../data/content";
import asFotMatrix from "../../assets/as-fot-matrix.png";
import clustering from "../../assets/clustering.png";
import Card from "../ui/Card";
import SectionWrapper from "../ui/SectionWrapper";
import Tag from "../ui/Tag";

function ResearchMatrix() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8">
      <div className="mb-6">
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-500">
          Research Visual
        </p>
        <h3 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">
          Asset Specificity × Transaction Frequency
        </h3>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600 md:text-base">
          A visual summary of the AS–FOT framework used to think about
          governance structures across different contractual conditions.
        </p>
      </div>

      <img
        src={asFotMatrix}
        alt="Asset specificity and frequency of transaction matrix"
        className="w-full rounded-2xl border border-slate-200 object-contain"
      />
    </div>
  );
}

function ClusteringVisual() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8">
      <div className="mb-6">
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-500">
          Empirical Visual
        </p>
        <h3 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">
          Contract Clustering Structure
        </h3>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600 md:text-base">
          A clustering-based view of contract profiles, showing how projects can
          be grouped across different governance and asset-specificity
          conditions.
        </p>
      </div>

      <img
        src={clustering}
        alt="Clustering visualization for contract profiles"
        className="w-full rounded-2xl border border-slate-200 object-contain"
      />
    </div>
  );
}

export default function WorkingPapers() {
  return (
    <SectionWrapper id="working-papers" title="Working Papers">
      <div className="space-y-6">
        <ResearchMatrix />

        {workingPapers.map((paper) => (
          <Card key={paper.title}>
            <p className="text-sm text-slate-500">{paper.status}</p>

            <h3 className="mt-2 text-xl font-semibold text-slate-950">
              {paper.title}
            </h3>

            <p className="mt-4 leading-7 text-slate-700">{paper.summary}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {paper.tags.map((tag) => (
                <Tag key={tag} label={tag} />
              ))}
            </div>
          </Card>
        ))}

        <ClusteringVisual />
      </div>
    </SectionWrapper>
  );
}