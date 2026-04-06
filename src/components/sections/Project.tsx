import SectionWrapper from "../ui/SectionWrapper";
import Card from "../ui/Card";
import supportApp from "../../assets/Support_App.png";

export default function Project() {
  return (
    <SectionWrapper title="Applied Project">
      <div className="max-w-4xl">
        <Card>

          {/* TEXT CONTENT */}
          <p className="text-sm font-medium text-slate-500">
            FM Support App
          </p>

          <h3 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">
            Customer Service and After-Sales Support System
          </h3>

          <p className="mt-5 text-base leading-8 text-slate-700">
            The FM Support App is an applied technology project focused on
            improving after-sales service coordination and problem diagnosis in
            industrial environments. It is designed to reduce information
            asymmetry between firms and service providers by structuring support
            requests, tracking machine issues, and enabling more data-driven
            diagnostics.
          </p>

          <p className="mt-4 text-base leading-8 text-slate-700">
            The project reflects my interest in how digital systems can shape
            organizational coordination, reduce transaction frictions, and
            influence the adoption of industrial technologies.
          </p>

          {/* 🔥 IMAGE SECTION */}
          <div className="mt-8">
            <img
              src={supportApp}
              alt="FM Support App interface"
              className="w-full max-w-4xl mx-auto rounded-2xl border border-slate-200 object-contain shadow-sm"
            />
          </div>

        </Card>
      </div>
    </SectionWrapper>
  );
}