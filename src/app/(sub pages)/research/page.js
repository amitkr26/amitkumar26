import { researchData } from "@/data";

export const metadata = {
  title: "Research",
};

const ParamRow = ({ label, value }) => (
  <div className="flex justify-between items-center border-b border-slate-800/50 py-2 text-xs">
    <span className="text-slate-500 font-mono">{label}</span>
    <span className="text-slate-300 text-right max-w-[60%]">{value}</span>
  </div>
);

const MethodologySection = ({ number, title, details }) => (
  <div className="flex gap-4">
    <div className="text-accent font-mono text-xs shrink-0 w-8 pt-1">0{number}</div>
    <div>
      <h4 className="text-sm font-semibold text-slate-200 mb-1">{title}</h4>
      <p className="text-xs text-slate-400 leading-relaxed">{details}</p>
    </div>
  </div>
);

export default function ResearchPage() {
  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 border border-accent/20 text-accent text-[10px] uppercase tracking-[0.2em] mb-6">
            Research // Semiconductor Thin Films
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4 leading-tight">
            {researchData.title}
          </h1>
          <p className="text-sm text-slate-400 max-w-3xl leading-relaxed">
            {researchData.abstract}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          {/* Objective */}
          <div className="lg:col-span-2 space-y-12">
            <div>
              <h2 className="text-xs uppercase tracking-widest text-accent mb-4 border-b border-slate-800 pb-2">Research Objective</h2>
              <p className="text-sm text-slate-300 leading-relaxed">{researchData.objective}</p>
            </div>

            {/* Materials */}
            <div>
              <h2 className="text-xs uppercase tracking-widest text-accent mb-4 border-b border-slate-800 pb-2">Materials</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {researchData.materials.map((mat) => (
                  <div key={mat.name} className="bg-slate-900/60 border border-slate-800 p-4">
                    <div className="text-sm font-semibold text-slate-200 mb-1">{mat.name}</div>
                    <div className="text-[10px] text-slate-500 space-y-1">
                      <div>Role: {mat.role}</div>
                      <div>Thickness: {mat.thickness}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Deposition Parameters */}
            <div>
              <h2 className="text-xs uppercase tracking-widest text-accent mb-4 border-b border-slate-800 pb-2">Deposition Parameters</h2>
              <div className="bg-slate-900/60 border border-slate-800 p-5">
                <div className="text-[10px] text-slate-500 font-mono mb-3">
                  {/* ASCII-art style process block */}
                  <pre className="text-accent/50 text-[9px] leading-tight">
{`  DC POWER SUPPLY ──┬── TARGET (FeCo/CoFe)
                    │
  Ar GAS (20 sccm) ──┼── PLASMA ── SUBSTRATE (PI/PET)
                    │
  VACUUM PUMP ──────┴── CHAMBER (5e-6 Torr base)`}
                  </pre>
                </div>
                <div className="space-y-1">
                  <ParamRow label="Technique" value={researchData.depositionParameters.technique} />
                  <ParamRow label="Base Pressure" value={researchData.depositionParameters.basePressure} />
                  <ParamRow label="Working Pressure" value={researchData.depositionParameters.workingPressure} />
                  <ParamRow label="Substrate Temperature" value={researchData.depositionParameters.substrateTemperature} />
                  <ParamRow label="Target-Substrate Distance" value={researchData.depositionParameters.targetToSubstrateDistance} />
                  <ParamRow label="Sputtering Power" value={researchData.depositionParameters.sputteringPower} />
                  <ParamRow label="Deposition Rate" value={researchData.depositionParameters.depositionRate} />
                  <ParamRow label="Gas Flow" value={researchData.depositionParameters.gasFlow} />
                  <ParamRow label="Substrate Rotation" value={researchData.depositionParameters.substrateRotation} />
                </div>
              </div>
            </div>

            {/* Workflow */}
            <div>
              <h2 className="text-xs uppercase tracking-widest text-accent mb-6 border-b border-slate-800 pb-2">Fabrication Workflow</h2>
              <div className="space-y-6">
                {researchData.workflow.map((step, i) => (
                  <MethodologySection
                    key={i}
                    number={i + 1}
                    title={step.step}
                    details={step.details}
                  />
                ))}
              </div>
            </div>

            {/* Characterization */}
            <div>
              <h2 className="text-xs uppercase tracking-widest text-accent mb-6 border-b border-slate-800 pb-2">Characterization Pipeline</h2>
              <div className="space-y-4">
                {researchData.tools.map((tool) => (
                  <div key={tool.name} className="bg-slate-900/40 border border-slate-800 p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-accent font-mono text-xs">[{tool.name}]</span>
                      <span className="text-[10px] text-slate-500">{tool.technique}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-[11px]">
                      <div>
                        <span className="text-slate-500">Measures: </span>
                        <span className="text-slate-300">{tool.measures}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Results */}
            <div>
              <h2 className="text-xs uppercase tracking-widest text-accent mb-6 border-b border-slate-800 pb-2">Experimental Results</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {Object.entries(researchData.results).map(([key, value]) => (
                  <div key={key} className="bg-slate-900/60 border border-slate-800 p-4">
                    <div className="text-[10px] uppercase text-slate-500 mb-1 tracking-wider">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </div>
                    <div className="text-xs text-slate-200 font-mono">{value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Applications */}
            <div>
              <h2 className="text-xs uppercase tracking-widest text-accent mb-4 border-b border-slate-800 pb-2">Target Applications</h2>
              <ul className="space-y-2">
                {researchData.applications.map((app) => (
                  <li key={app} className="flex items-start text-sm text-slate-300">
                    <span className="text-accent mr-3 mt-0.5">▸</span>
                    {app}
                  </li>
                ))}
              </ul>
            </div>

            {/* Future Scope */}
            <div>
              <h2 className="text-xs uppercase tracking-widest text-accent mb-4 border-b border-slate-800 pb-2">Future Scope</h2>
              <ul className="space-y-2">
                {researchData.futureScope.map((item) => (
                  <li key={item} className="flex items-start text-sm text-slate-300">
                    <span className="text-accent mr-3 mt-0.5">▸</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="tech-card">
              <h3 className="text-xs uppercase tracking-widest text-accent mb-4">Methodology</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-slate-800 text-[10px] text-slate-300 font-mono">DC Sputtering</span>
                <span className="px-2 py-1 bg-slate-800 text-[10px] text-slate-300 font-mono">XRD</span>
                <span className="px-2 py-1 bg-slate-800 text-[10px] text-slate-300 font-mono">VSM</span>
                <span className="px-2 py-1 bg-slate-800 text-[10px] text-slate-300 font-mono">FMR</span>
                <span className="px-2 py-1 bg-slate-800 text-[10px] text-slate-300 font-mono">AFM</span>
                <span className="px-2 py-1 bg-slate-800 text-[10px] text-slate-300 font-mono">FESEM</span>
              </div>
            </div>

            <div className="tech-card">
              <h3 className="text-xs uppercase tracking-widest text-accent mb-4">Material System</h3>
              <div className="space-y-3 text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-500">Target</span>
                  <span className="text-slate-200 font-mono">Fe₆₀Co₄₀</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Target</span>
                  <span className="text-slate-200 font-mono">Co₉₀Fe₁₀</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Substrate</span>
                  <span className="text-slate-200 font-mono">PI / PET</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Thickness Range</span>
                  <span className="text-slate-200 font-mono">50-200 nm</span>
                </div>
              </div>
            </div>

            <div className="tech-card">
              <h3 className="text-xs uppercase tracking-widest text-accent mb-4">Characterization</h3>
              <div className="text-[10px] text-slate-400 space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent/60"></div>
                  <span>Structural: XRD Phase ID</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent/60"></div>
                  <span>Static Magnetic: VSM</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent/60"></div>
                  <span>Dynamic Magnetic: FMR</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent/60"></div>
                  <span>Morphology: AFM/FESEM</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent/60"></div>
                  <span>Composition: EDS</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer note */}
        <div className="border-t border-slate-800 pt-6 mt-12">
          <p className="text-[10px] text-slate-600 leading-relaxed">
            Research conducted at Materials Science Laboratory, Department of Electronics, University of Delhi.
            Data obtained from experimental batches under controlled laboratory conditions.
          </p>
        </div>
      </div>
    </div>
  );
}
