import Hero from "../components/sections/Hero";
import ResearchStatement from "../components/sections/ResearchStatement";
import Background from "../components/sections/Background";
import ResearchInterests from "../components/sections/ResearchInterests";
import Thesis from "../components/sections/Thesis";
import WorkingPapers from "../components/sections/WorkingPapers";
import Project from "../components/sections/Project";
import Methods from "../components/sections/Methods";
import WhyPhD from "../components/sections/WhyPhD";
import Contact from "../components/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Hero />
      <ResearchStatement />
      <Background />
      <ResearchInterests />
      <Thesis />
      <WorkingPapers />
      <Project />
      <Methods />
      <WhyPhD />
      <Contact />
    </main>
  );
}