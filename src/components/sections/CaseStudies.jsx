import Link from "next/link";
import { engineeringCaseStudies } from "@/data";

const categoryRoutes = {
  semiconductor: "/research",
  embedded: "/embedded",
  digital: "/projects",
};

const CaseStudies = () => {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-slate-950/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-8 sm:mb-12 border-b border-slate-800 pb-4 sm:pb-6">
          <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-widest text-slate-200">
            Engineering Case Studies
          </h2>
          <div className="text-[9px] sm:text-[10px] text-slate-500 font-mono">
            TOTAL_ENTRIES: {engineeringCaseStudies.length}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {engineeringCaseStudies.map((project) => (
            <div key={project.id} className="bg-slate-900/40 border border-slate-800 flex flex-col">
              {/* Header */}
              <div className="border-b border-slate-800 px-5 py-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] uppercase tracking-wider text-slate-500 font-mono">
                    {project.category}
                  </span>
                  <span className="text-[10px] text-accent font-mono">#{project.id}</span>
                </div>
                <h3 className="text-base font-semibold text-slate-100 leading-snug">
                  {project.title}
                </h3>
              </div>

              {/* Body */}
              <div className="px-5 py-4 flex flex-col gap-4 flex-grow">
                <div>
                  <div className="text-[9px] uppercase tracking-widest text-slate-600 mb-1">Problem</div>
                  <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">{project.problem}</p>
                </div>

                <div>
                  <div className="text-[9px] uppercase tracking-widest text-slate-600 mb-1">Objective</div>
                  <p className="text-xs text-slate-400 leading-relaxed">{project.objective}</p>
                </div>

                <div>
                  <div className="text-[9px] uppercase tracking-widest text-slate-600 mb-1">System Stack</div>
                  <div className="flex flex-wrap gap-1">
                    {project.stack.slice(0, 6).map((tech) => (
                      <span key={tech} className="px-1.5 py-0.5 bg-slate-800 border border-slate-700 text-[9px] text-slate-400">
                        {tech}
                      </span>
                    ))}
                    {project.stack.length > 6 && (
                      <span className="text-[9px] text-slate-600">+{project.stack.length - 6}</span>
                    )}
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="border-t border-slate-800 px-5 py-3">
                <Link
                  href={categoryRoutes[project.category] || "/projects"}
                  className="inline-flex items-center text-[9px] font-bold uppercase tracking-[0.2em] text-accent hover:underline"
                >
                  View full documentation
                  <svg className="w-2.5 h-2.5 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
