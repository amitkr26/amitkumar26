import { researchData } from "@/data";

const Research = () => {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row gap-16">
        <div className="md:w-1/3">
          <h2 className="text-3xl font-bold mb-6 text-accent uppercase tracking-tighter">Research</h2>
          <p className="text-slate-400 text-sm leading-relaxed mb-8">
            Detailed overview of semiconductor fabrication processes and material characterization performed at the University of Delhi.
          </p>
          
          <div className="space-y-12">
            <div>
              <h3 className="text-xs uppercase tracking-widest text-slate-500 mb-4 border-b border-slate-800 pb-2">Material Stack</h3>
              <div className="bg-slate-900 p-4 border-l-4 border-accent">
                <div className="text-xl font-mono text-slate-200">FeCo / CoFe</div>
                <div className="text-[10px] text-slate-500 uppercase mt-1">Magnetron Sputtered Alloys</div>
              </div>
            </div>

            <div>
              <h3 className="text-xs uppercase tracking-widest text-slate-500 mb-4 border-b border-slate-800 pb-2">Substrates</h3>
              <div className="text-sm text-slate-300">
                • Polyimide (PI)<br/>
                • PET Flexible Films<br/>
                • Silicon (Reference)
              </div>
            </div>
          </div>
        </div>

        <div className="md:w-2/3 space-y-16">
          <div className="tech-card">
            <h3 className="text-xl font-semibold mb-4 text-slate-200">{researchData.title}</h3>
            <p className="text-slate-400 text-sm mb-6">{researchData.abstract}</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {researchData.workflow.map((item, i) => (
                <div key={i} className="bg-slate-950 p-4 border border-slate-800">
                  <div className="text-accent font-mono text-xs mb-2">0{i+1}</div>
                  <div className="text-xs font-bold uppercase mb-2 text-slate-300">{item.step}</div>
                  <div className="text-[10px] text-slate-500 leading-tight">{item.details}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-xs uppercase tracking-widest text-slate-500 border-b border-slate-800 pb-2">Characterization Methodology</h3>
              <div className="grid grid-cols-1 gap-4">
                {researchData.tools.map((tool, i) => (
                  <div key={i} className="group flex items-start space-x-4">
                    <div className="font-mono text-accent text-xs mt-1">[{tool.name}]</div>
                    <div>
                      <div className="text-xs font-bold text-slate-300 group-hover:text-accent transition-colors">{tool.name}</div>
                      <div className="text-[11px] text-slate-500">{tool.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-900/40 p-6 border border-slate-800 flex flex-col justify-between">
              <div>
                <h3 className="text-xs uppercase tracking-widest text-slate-500 mb-6">Experimental Results (Summary)</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-end border-b border-slate-800 pb-2">
                    <span className="text-[10px] uppercase text-slate-500">Phase Identification</span>
                    <span className="text-xs font-mono text-accent">Confirmed (XRD)</span>
                  </div>
                  <div className="flex justify-between items-end border-b border-slate-800 pb-2">
                    <span className="text-[10px] uppercase text-slate-500">Saturation Magnetization</span>
                    <span className="text-xs font-mono text-accent">Measured (VSM)</span>
                  </div>
                  <div className="flex justify-between items-end border-b border-slate-800 pb-2">
                    <span className="text-[10px] uppercase text-slate-500">Surface Roughness</span>
                    <span className="text-xs font-mono text-accent">&lt; 1.5 nm (AFM)</span>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <p className="text-[10px] text-slate-600 leading-relaxed italic">
                  * Data obtained from experimental batches processed at the Materials Science Lab, University of Delhi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;
