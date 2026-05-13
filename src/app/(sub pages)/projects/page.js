import Link from "next/link";
import { projectsData } from "../../data";

export const metadata = {
  title: "Projects",
};

const categoryConfig = {
  semiconductor: { label: "Semiconductor", color: "text-accent" },
  embedded: { label: "Embedded Systems", color: "text-emerald-400" },
  digital: { label: "Digital / VLSI", color: "text-amber-400" },
};

const projectCount = projectsData.length;
const categoryCount = new Set(projectsData.map((p) => p.category)).size;

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 border border-accent/20 text-accent text-[10px] uppercase tracking-[0.2em] mb-6">
            Projects // Engineering Portfolio
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">
            Project Index
          </h1>
        </div>

        {/* Stats bar */}
        <div className="flex gap-6 mb-12 text-xs">
          <div className="flex items-center gap-2 bg-slate-900/60 border border-slate-800 px-4 py-2">
            <span className="text-slate-500">Total</span>
            <span className="text-accent font-mono">{projectCount}</span>
          </div>
          <div className="flex items-center gap-2 bg-slate-900/60 border border-slate-800 px-4 py-2">
            <span className="text-slate-500">Domains</span>
            <span className="text-accent font-mono">{categoryCount}</span>
          </div>
          <div className="flex items-center gap-2 bg-slate-900/60 border border-slate-800 px-4 py-2">
            <span className="text-slate-500">Updated</span>
            <span className="text-accent font-mono">{projectsData[0]?.date?.split("-")[0]}</span>
          </div>
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projectsData.map((project) => {
            const cat = categoryConfig[project.category] || { label: "General", color: "text-slate-400" };
            return (
              <div key={project.id} className="bg-slate-900/40 border border-slate-800 hover:border-accent/30 transition-colors flex flex-col">
                <div className="p-5 flex flex-col gap-3 flex-grow">
                  {/* Category badge */}
                  <div className="flex items-center justify-between">
                    <span className={`text-[9px] uppercase tracking-widest font-mono ${cat.color}`}>
                      {cat.label}
                    </span>
                    <span className="text-[10px] text-slate-600 font-mono">{project.date}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-semibold text-slate-100 leading-snug">
                    {project.name}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-slate-400 leading-relaxed flex-grow">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2 py-0.5 bg-slate-800 border border-slate-700 text-[9px] text-slate-400">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer link */}
                <div className="border-t border-slate-800 px-5 py-3">
                  <Link
                    href={project.link || "#"}
                    className="inline-flex items-center text-[9px] font-bold uppercase tracking-[0.2em] text-accent hover:underline"
                  >
                    View details
                    <svg className="w-2.5 h-2.5 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
