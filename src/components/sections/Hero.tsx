import profile from "../../assets/profile.jpg";

export default function Hero() {
    return (
        <section className="border-b border-slate-200">
            <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">

                {/* THIS is the new wrapper */}
                <div className="flex flex-col gap-12 md:flex-row md:items-center md:justify-between">

                    {/* LEFT SIDE (TEXT) */}
                    <div className="max-w-3xl">
                        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">
                            Economics PhD Application
                        </p>

                        <h1 className="text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl">
                            Shurjo Fazley
                        </h1>

                        <p className="mt-4 text-lg font-medium text-slate-700 md:text-xl">
                            Economics PhD Applicant
                        </p>

                        <p className="mt-8 text-base leading-8 text-slate-600 md:text-lg">
                            Director at Jack Machinery Bangladesh, working at the intersection
                            of industrial markets, contract structures, and technology adoption.
                            My research focuses on how firms organize transactions under varying
                            levels of asset specificity, uncertainty, and institutional
                            constraints, combining transaction cost economics with empirical and
                            machine learning approaches.
                        </p>

                        <div className="mt-10 flex flex-wrap gap-4">
                            <a
                                href="#working-papers"
                                className="rounded-2xl !text-white bg-black px-5 py-3 text-sm font-bold transition hover:opacity-90">
                                View Working Papers
                            </a>

                            <a
                                href="#contact"
                                className="rounded-2xl border background-slate-950 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-50"
                            >
                                Contact
                            </a>
                        </div>
                    </div>

                    {/* RIGHT SIDE (IMAGE) */}
                    <div className="flex justify-center md:justify-end">
                        <img
                            src={profile}
                            alt="Shurjo Fazley"
                            className="h-40 w-40 md:h-56 md:w-56 rounded-2xl object-cover shadow-sm"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
}