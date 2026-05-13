import Image from "next/image";
import { toolchain } from "@/data";
import bg from "../../../../public/background/about-background.png";
import AboutDetails from "@/components/about";

export const metadata = {
  title: "About",
};

export default function Home() {
  return (
    <>
      <Image
        src={bg}
        priority
        sizes="100vw"
        alt="About page background"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
      />

      <div className="relative w-full h-screen flex flex-col items-center justify-center">
        <div className="absolute flex flex-col items-center text-center top-1/2 sm:top-[40%] left-1/2 -translate-y-1/2 -translate-x-1/2">
          <h1 className="font-bold text-6xl xs:text-7xl sm:text-8xl lg:text-9xl text-accent">
            Amit Kumar
          </h1>
          <p className="font-light text-foreground text-lg">
            Semiconductor & Electronics Engineer
          </p>
        </div>
      </div>

      <section className="py-24 px-6 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold mb-8 text-slate-100">Engineering Identity</h2>
            <div className="text-sm text-slate-400 space-y-4 leading-relaxed">
              <p>Electronics Engineer (M.Sc., University of Delhi). Research focused on semiconductor thin-film fabrication via DC magnetron sputtering and characterization using XRD, VSM, FMR, AFM, and FESEM/EDS. Primary work on FeCo/CoFe magnetic thin films on flexible polymer substrates for spintronic applications.</p>
              <p>Currently transitioning into digital VLSI and RTL design. Building Verilog proficiency through RTL module development, FSM design, and FPGA prototyping on Artix-7. Focus on digital logic synthesis, timing analysis, and the simulation-to-bitstream design flow.</p>
              <p>Embedded systems experience spans ESP32, Arduino, 8051, and AVR platforms — sensor integration, PID control, wireless communication, and PCB design.</p>
            </div>

            <div className="mt-16">
              <h2 className="text-xs uppercase tracking-widest text-slate-500 mb-8 border-b border-slate-800 pb-2">Academic Foundation</h2>
              <div className="space-y-8">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-200">M.Sc. Electronics</h3>
                    <div className="text-sm text-accent">University of Delhi</div>
                  </div>
                  <div className="text-xs font-mono text-slate-500">GRAD_2024</div>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-200">B.Sc. (H) Electronics</h3>
                    <div className="text-sm text-accent">University of Delhi</div>
                  </div>
                  <div className="text-xs font-mono text-slate-500">GRAD_2022</div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-12">
            <div className="tech-card">
              <h3 className="text-xs uppercase tracking-widest text-accent mb-4">Core Specializations</h3>
              <ul className="text-xs space-y-3 text-slate-300 font-mono">
                <li>0x01. Semiconductor Fab</li>
                <li>0x02. Thin Film Tech</li>
                <li>0x03. Spintronics</li>
                <li>0x04. Embedded Systems</li>
                <li>0x05. Digital VLSI (Lrn)</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xs uppercase tracking-widest text-slate-500 mb-6 border-b border-slate-800 pb-2">Technical Toolchain</h3>
              <div className="flex flex-wrap gap-2">
                {toolchain.flatMap(c => c.items).slice(0, 15).map(item => (
                  <span key={item} className="text-[10px] bg-slate-900 px-2 py-1 border border-slate-800 text-slate-500 uppercase tracking-wider">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <AboutDetails />
    </>
  );
}
