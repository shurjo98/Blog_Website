import Card from "../ui/Card";
import SectionWrapper from "../ui/SectionWrapper";

export default function Thesis() {
  return (
    <SectionWrapper title="Master’s Thesis">
      <div className="max-w-4xl">
        <Card>
          <p className="text-sm font-medium text-slate-500">Master’s Thesis</p>

          <h3 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">
            Machine Learning Approaches to Measuring Asset Specificity in
            Economic Transactions
          </h3>

          <p className="mt-5 text-base leading-8 text-slate-700">
            This thesis develops a quantitative framework for measuring asset
            specificity using machine learning techniques within transaction
            cost economics. Using transaction-level financial and operational
            data, the study applies a Random Forest classification model to
            categorize assets into low, medium, and high specificity.
          </p>

          <p className="mt-4 text-base leading-8 text-slate-700">
            The findings show that transaction frequency, financial magnitude,
            and operational timelines are key predictors of asset specificity,
            demonstrating how machine learning can operationalize a traditionally
            abstract economic concept and strengthen empirical analysis of
            governance and contracting.
          </p>
        </Card>
      </div>
    </SectionWrapper>
  );
}