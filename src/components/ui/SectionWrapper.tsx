import type { ReactNode } from "react";

type SectionWrapperProps = {
  id?: string;
  title: string;
  children: ReactNode;
};

export default function SectionWrapper({
  id,
  title,
  children,
}: SectionWrapperProps) {
  return (
    <section id={id} className="border-b border-slate-200">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:px-10 md:py-20 lg:grid-cols-[220px_1fr]">
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            {title}
          </h2>
        </div>

        <div>{children}</div>
      </div>
    </section>
  );
}