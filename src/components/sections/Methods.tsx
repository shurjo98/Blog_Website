import { methodsAndTools } from "../../data/content";
import SectionWrapper from "../ui/SectionWrapper";

export default function Methods() {
  return (
    <SectionWrapper title="Methods & Tools">
      <div className="grid max-w-4xl gap-4 sm:grid-cols-2">
        {methodsAndTools.map((item) => (
          <div
            key={item}
            className="rounded-2xl border border-slate-200 p-5 text-sm leading-7 text-slate-700"
          >
            {item}
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}