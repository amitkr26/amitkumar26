"use client";
import { metadata, currentFocus } from "@/data";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-20 px-4 sm:px-6">
      <div className="max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 border border-accent/20 text-accent text-[8px] sm:text-[10px] uppercase tracking-[0.2em] mb-6"
        >
          <span className="w-1.5 h-1.5 bg-accent rounded-full shrink-0"></span>
          <span className="truncate">Electronics Engineer // Semiconductor & Embedded</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4 sm:mb-6 text-slate-100 leading-tight"
        >
          {metadata.name}
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg sm:text-xl md:text-2xl text-accent font-light tracking-wide mb-6 sm:mb-8 uppercase"
        >
          {metadata.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-sm sm:text-base text-slate-400 max-w-2xl mb-10 sm:mb-12 leading-relaxed"
        >
          M.Sc. Electronics (University of Delhi). Research in thin film spintronics and flexible electronics.
          Currently transitioning into VLSI and RTL design with Verilog.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 w-full border-t border-slate-800 pt-8 sm:pt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-[10px] sm:text-xs uppercase tracking-widest text-slate-500 mb-4">Current Focus</h3>
            <ul className="space-y-2">
              {currentFocus.map((focus, i) => (
                <li key={i} className="flex items-start text-xs sm:text-sm text-slate-300">
                  <span className="w-1.5 h-1.5 bg-accent mr-3 mt-1 shrink-0"></span>
                  {focus}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col justify-end gap-4 sm:gap-6"
          >
            <div className="flex flex-wrap gap-2 sm:gap-3">
              <a href={metadata.github} target="_blank" className="text-[10px] sm:text-xs uppercase tracking-widest border border-slate-700 px-3 py-2 hover:text-accent hover:border-accent transition-all">GitHub</a>
              <a href={metadata.linkedin} target="_blank" className="text-[10px] sm:text-xs uppercase tracking-widest border border-slate-700 px-3 py-2 hover:text-accent hover:border-accent transition-all">LinkedIn</a>
              <a href="/resume.pdf" target="_blank" className="text-[10px] sm:text-xs uppercase tracking-widest border border-slate-700 px-3 py-2 hover:text-accent hover:border-accent transition-all">Resume.pdf</a>
            </div>

            <div className="bg-slate-900/60 border border-slate-800 p-3 font-mono text-[8px] sm:text-[10px] text-slate-500 leading-relaxed overflow-x-auto">
              <pre className="whitespace-pre min-w-[280px]">
{`module amit_kumar #(
  parameter ROLE = "Electronics Engineer",
  parameter DOMAIN = "Semiconductor & Embedded"
) (
  input  clk_research,
  output reg [7:0] innovation
);
  always @(posedge clk_research)
    innovation <= innovation + 1;
endmodule`}
              </pre>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
