import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import Research from "@/components/sections/Research";
import CaseStudies from "@/components/sections/CaseStudies";
import Toolchain from "@/components/sections/Toolchain";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      <div className="relative pt-16">
        <div className="fixed inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, var(--accent) 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>

        <Hero />

        {/* Quick navigation to engineering domains */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
            <Link href="/research" className="group border border-slate-800 bg-slate-900/40 p-4 sm:p-6 hover:border-accent/40 transition-all">
              <div className="text-[8px] sm:text-[9px] uppercase tracking-widest text-accent mb-2 sm:mb-3 font-mono">01 // Semiconductor</div>
              <h3 className="text-base sm:text-lg font-semibold text-slate-200 mb-1 sm:mb-2 group-hover:text-accent transition-colors">Thin Film Research</h3>
              <p className="text-[11px] sm:text-xs text-slate-500 leading-relaxed">FeCo/CoFe fabrication, DC magnetron sputtering, XRD/VSM/FMR characterization, flexible spintronics.</p>
            </Link>
            <Link href="/embedded" className="group border border-slate-800 bg-slate-900/40 p-4 sm:p-6 hover:border-accent/40 transition-all">
              <div className="text-[8px] sm:text-[9px] uppercase tracking-widest text-accent mb-2 sm:mb-3 font-mono">02 // Hardware</div>
              <h3 className="text-base sm:text-lg font-semibold text-slate-200 mb-1 sm:mb-2 group-hover:text-accent transition-colors">Embedded Systems</h3>
              <p className="text-[11px] sm:text-xs text-slate-500 leading-relaxed">ESP32, Arduino, 8051, AVR. Sensor integration, PID control, wireless communication, PCB design.</p>
            </Link>
            <Link href="/projects" className="group border border-slate-800 bg-slate-900/40 p-4 sm:p-6 hover:border-accent/40 transition-all">
              <div className="text-[8px] sm:text-[9px] uppercase tracking-widest text-accent mb-2 sm:mb-3 font-mono">03 // Digital</div>
              <h3 className="text-base sm:text-lg font-semibold text-slate-200 mb-1 sm:mb-2 group-hover:text-accent transition-colors">VLSI & RTL Design</h3>
              <p className="text-[11px] sm:text-xs text-slate-500 leading-relaxed">Verilog HDL, FSM design, ALU architecture, timing analysis, FPGA prototyping on Artix-7.</p>
            </Link>
          </div>
        </section>

        <div id="research">
          <Research />
        </div>

        <div id="projects">
          <CaseStudies />
        </div>

        <div id="toolchain">
          <Toolchain />
        </div>

        <footer className="py-8 sm:py-12 border-t border-slate-900 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0 opacity-40">
            <div className="text-[9px] sm:text-[10px] uppercase tracking-widest text-slate-500 text-center sm:text-left">
              © 2026 Amit Kumar // Semiconductor & Electronics Research
            </div>
            <div className="flex flex-wrap justify-center gap-4 sm:space-x-8 text-[9px] sm:text-[10px] uppercase tracking-widest text-slate-500">
              <Link href="/research" className="hover:text-accent">Research</Link>
              <Link href="/embedded" className="hover:text-accent">Embedded</Link>
              <Link href="/projects" className="hover:text-accent">Projects</Link>
              <Link href="/contact" className="hover:text-accent">Contact</Link>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
