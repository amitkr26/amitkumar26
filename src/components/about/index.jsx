import ItemLayout from "./ItemLayout";
import Image from "next/image";

const AboutDetails = () => {
  return (
    <section className="py-12 sm:py-20 w-full px-4 sm:px-0">
      <div className="grid grid-cols-12 gap-3 xs:gap-4 sm:gap-6 md:gap-8 w-full max-w-full">
        <ItemLayout
          className="col-span-full lg:col-span-8 row-span-2 flex-col items-start"
        >
          <h2 className="text-lg sm:text-xl md:text-2xl text-left w-full capitalize">
            Semiconductor Research & Electronics Engineering
          </h2>
          <p className="text-xs sm:text-sm md:text-base leading-relaxed">
            M.Sc. Electronics graduate from University of Delhi with specialization in semiconductor devices, thin film technology, and spintronics. Research focuses on fabrication and characterization of FeCo/CoFe thin films on flexible substrates using sputtering techniques. Works with XRD, VSM, FMR, AFM, FESEM, and EDS. Expertise spans embedded systems design, VLSI/RTL development, and hardware prototyping with Arduino and ESP32 platforms.
          </p>
        </ItemLayout>

        <ItemLayout
          className="col-span-full xs:col-span-6 lg:col-span-4 text-accent"
        >
          <p className="font-semibold w-full text-left text-xl sm:text-3xl md:text-5xl">
            M.Sc. <sub className="font-semibold text-xs sm:text-base">Electronics</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className="col-span-full xs:col-span-6 lg:col-span-4 text-accent"
        >
          <p className="font-semibold w-full text-left text-xl sm:text-3xl md:text-5xl">
            University of Delhi
          </p>
        </ItemLayout>

        <ItemLayout
          className="col-span-full sm:col-span-6 md:col-span-4 !p-0 overflow-hidden"
        >
          <Image
            className="w-full h-auto max-w-full"
            src="https://skillicons.dev/icons?i=matlab,arduino,c,verilog,python,linux"
            alt="Technical Skills"
            loading="lazy"
            width={500}
            height={100}
            unoptimized
          />
        </ItemLayout>

        <ItemLayout className="col-span-full md:col-span-8 !p-0">
          <div className="p-4 sm:p-6 custom-bg w-full">
            <h3 className="text-accent font-semibold text-base sm:text-lg mb-3">Research Specialization</h3>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
              <li>• Semiconductor Devices & Thin Film Technology</li>
              <li>• Spintronics & Flexible Electronics</li>
              <li>• VLSI Design & RTL Development</li>
              <li>• Embedded Systems & Microcontrollers</li>
            </ul>
          </div>
        </ItemLayout>

        <ItemLayout className="col-span-full overflow-hidden">
          <Image
            className="w-full h-auto max-w-full"
            src="https://skillicons.dev/icons?i=vscode,git,github,proteus,esp32"
            alt="Tools & Platforms"
            loading="lazy"
            width={1000}
            height={100}
            unoptimized
          />
        </ItemLayout>

        <ItemLayout className="col-span-full md:col-span-6 !p-0">
          <div className="p-4 sm:p-6 custom-bg w-full">
            <h3 className="text-accent font-semibold text-base sm:text-lg mb-3">Characterization Tools</h3>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
              <li>• XRD (X-Ray Diffraction)</li>
              <li>• VSM (Vibrating Sample Magnetometer)</li>
              <li>• FMR (Ferromagnetic Resonance)</li>
              <li>• AFM (Atomic Force Microscopy)</li>
              <li>• FESEM & EDS</li>
            </ul>
          </div>
        </ItemLayout>

        <ItemLayout className="col-span-full md:col-span-6 !p-0">
          <div className="p-4 sm:p-6 custom-bg w-full">
            <h3 className="text-accent font-semibold text-base sm:text-lg mb-3">Fabrication Techniques</h3>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
              <li>• Sputtering Deposition</li>
              <li>• Thin Film Characterization</li>
              <li>• Flexible Substrate Processing</li>
              <li>• FeCo/CoFe Alloy Films</li>
            </ul>
          </div>
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;
