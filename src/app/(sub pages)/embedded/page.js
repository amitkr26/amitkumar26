import { embeddedProjects } from "@/data";

export const metadata = {
  title: "Embedded Systems",
};

export default function EmbeddedPage() {
  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 border border-accent/20 text-accent text-[10px] uppercase tracking-[0.2em] mb-6">
            Embedded Systems // Hardware & Firmware
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">
            Embedded Systems Portfolio
          </h1>
          <p className="text-sm text-slate-400 max-w-2xl leading-relaxed">
            Microcontroller-based systems spanning sensor integration, control algorithms, wireless communication, and PCB design. Platforms: ESP32, Arduino, 8051, AVR.
          </p>
        </div>

        {/* Platform overview */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16">
          {[
            { name: "ESP32", detail: "WiFi/BT MCU", arch: "Xtensa LX6" },
            { name: "Arduino Uno", detail: "ATmega328P", arch: "AVR 8-bit" },
            { name: "8051", detail: "Intel MCS-51", arch: "8-bit CISC" },
            { name: "AVR", detail: "ATmega Series", arch: "RISC 8-bit" },
          ].map((plat) => (
            <div key={plat.name} className="bg-slate-900/60 border border-slate-800 p-4">
              <div className="text-accent font-mono text-xs mb-1">{plat.name}</div>
              <div className="text-xs text-slate-300">{plat.detail}</div>
              <div className="text-[10px] text-slate-600 mt-1">{plat.arch}</div>
            </div>
          ))}
        </div>

        {/* Project cards */}
        <div className="space-y-6">
          <h2 className="text-xs uppercase tracking-widest text-accent mb-4 border-b border-slate-800 pb-2">
            Projects ({embeddedProjects.length})
          </h2>
          {embeddedProjects.map((proj) => (
            <div key={proj.id} className="tech-card group">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-base font-semibold text-slate-200 mb-1">{proj.title}</h3>
                  <p className="text-xs text-slate-400">{proj.summary}</p>
                </div>
                <div className="flex flex-wrap gap-1.5 shrink-0">
                  {proj.tags.map((tag) => (
                    <span key={tag} className="px-2 py-0.5 bg-slate-800 border border-slate-700 text-[9px] text-slate-400 uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tools section */}
        <div className="mt-20">
          <h2 className="text-xs uppercase tracking-widest text-accent mb-6 border-b border-slate-800 pb-2">Development Toolchain</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { tool: "Arduino IDE", use: "Firmware Development" },
              { tool: "PlatformIO", use: "Embedded Build System" },
              { tool: "Proteus", use: "Circuit Simulation" },
              { tool: "KiCad", use: "PCB Design" },
              { tool: "Oscilloscope", use: "Signal Analysis" },
              { tool: "Logic Analyzer", use: "Protocol Debug" },
            ].map((t) => (
              <div key={t.tool} className="bg-slate-900/40 border border-slate-800 p-3">
                <div className="text-xs text-slate-200">{t.tool}</div>
                <div className="text-[9px] text-slate-600 uppercase tracking-wider mt-1">{t.use}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
