import SectionWrapper from "../ui/SectionWrapper";
import cvFile from "../../assets/cv.pdf";
import thesisFile from "../../assets/masters-thesis.pdf";

export default function Contact() {
  return (
    <SectionWrapper id="contact" title="Contact">
      <div className="max-w-4xl rounded-3xl border border-slate-200 p-8 md:p-10">
        
        <h3 className="text-2xl font-semibold tracking-tight text-slate-950">
          Contact & Documents
        </h3>

        <p className="mt-4 max-w-2xl text-base leading-8 text-slate-700">
          For application materials, including CV, master’s thesis, and
          supporting documents, please use the links below or contact me by email.
        </p>

        {/* BUTTONS */}
        <div className="mt-8 grid gap-4 sm:grid-cols-3">

          {/* EMAIL */}
          <a
            href="mailto:fshurjo@icloud.com"
            className="rounded-2xl border border-slate-200 p-5 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
          >
            Email
          </a>

          {/* CV */}
          <a
            href={cvFile}
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-slate-200 p-5 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
          >
            Download CV
          </a>

          {/* THESIS */}
          <a
            href={thesisFile}
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-slate-200 p-5 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
          >
            Master’s Thesis
          </a>

        </div>
      </div>
    </SectionWrapper>
  );
}