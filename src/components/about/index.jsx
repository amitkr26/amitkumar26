import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";
import Image from "next/image";

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6  md:gap-8 w-full">
        <ItemLayout
          className={
            " col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="  text-xl md:text-2xl text-left w-full capitalize">
            Semiconductor Research & Electronics Engineering
          </h2>
          <p className="font-light  text-xs sm:text-sm md:text-base   ">
            M.Sc. Electronics graduate from University of Delhi with specialization in semiconductor devices, thin film technology, and spintronics. My research focuses on fabrication and characterization of FeCo/CoFe thin films on flexible substrates using sputtering techniques. I work with advanced characterization tools including XRD, VSM, FMR, AFM, FESEM, and EDS. My expertise spans embedded systems design, VLSI/RTL development, and hardware prototyping with Arduino and ESP32 platforms.
          </p>
        </ItemLayout>

        <ItemLayout
          className={" col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            M.Sc. <sub className="font-semibold text-base">Electronics</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            University of Delhi
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full sm:col-span-6 md:col-span-4 !p-0"}
        >
          <Image
            className="w-full h-auto"
            src={`https://skillicons.dev/icons?i=matlab,arduino,c,verilog,python,linux`}
            alt="Technical Skills"
            loading="lazy"
            width={500}
            height={100}
            unoptimized
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-8 !p-0"}>
          <div className="p-6 custom-bg">
            <h3 className="text-accent font-semibold text-lg mb-3">Research Specialization</h3>
            <ul className="space-y-2 text-sm text-foreground">
              <li>• Semiconductor Devices & Thin Film Technology</li>
              <li>• Spintronics & Flexible Electronics</li>
              <li>• VLSI Design & RTL Development</li>
              <li>• Embedded Systems & Microcontrollers</li>
            </ul>
          </div>
        </ItemLayout>

        <ItemLayout className={"col-span-full"}>
          <Image
            className="w-full h-auto"
            src={`https://skillicons.dev/icons?i=vscode,git,github,proteus,esp32`}
            alt="Tools & Platforms"
            loading="lazy"
            width={1000}
            height={100}
            unoptimized
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <div className="p-6 custom-bg">
            <h3 className="text-accent font-semibold text-lg mb-3">Characterization Tools</h3>
            <ul className="space-y-2 text-sm text-foreground">
              <li>• XRD (X-Ray Diffraction)</li>
              <li>• VSM (Vibrating Sample Magnetometer)</li>
              <li>• FMR (Ferromagnetic Resonance)</li>
              <li>• AFM (Atomic Force Microscopy)</li>
              <li>• FESEM & EDS</li>
            </ul>
          </div>
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <div className="p-6 custom-bg">
            <h3 className="text-accent font-semibold text-lg mb-3">Fabrication Techniques</h3>
            <ul className="space-y-2 text-sm text-foreground">
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
