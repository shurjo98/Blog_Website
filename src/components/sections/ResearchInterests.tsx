// import { researchInterests } from "../../data/content";
import SectionWrapper from "../ui/SectionWrapper";

export default function ResearchInterests() {
  return (
    <SectionWrapper title="Research Interests">
      <div className="max-w-4xl">
        <div className="grid gap-4 sm:grid-cols-2">
          {/* {researchInterests.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-slate-200 p-5 text-sm leading-7 text-slate-700"
            >
              {item}
            </div>
          ))} */}
        </div>
      </div>
    </SectionWrapper>
  );
}