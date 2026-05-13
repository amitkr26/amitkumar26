import { toolchain } from "@/data";

const Toolchain = () => {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-start gap-10 sm:gap-16">
        <div className="md:w-1/4">
          <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-widest text-slate-200 sticky top-24">
            Technical Toolchain
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm mt-3 sm:mt-4 leading-relaxed">
            Categorized ecosystems across semiconductor fabrication, material characterization, and digital systems design.
          </p>
        </div>

        <div className="md:w-3/4 grid grid-cols-1 sm:grid-cols-2 gap-x-6 sm:gap-x-8 gap-y-8 sm:gap-y-12">
          {toolchain.map((category) => (
            <div key={category.category} className="group">
              <h3 className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-accent/80 mb-4 sm:mb-6 border-l-2 border-accent pl-3 sm:pl-4 group-hover:pl-5 sm:group-hover:pl-6 transition-all">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {category.items.map((item) => (
                  <div 
                    key={item} 
                    className="px-2 sm:px-3 py-1 sm:py-1.5 bg-slate-900/50 border border-slate-800 text-[11px] sm:text-xs text-slate-400 hover:border-accent/30 hover:text-slate-200 transition-all cursor-default"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Toolchain;
