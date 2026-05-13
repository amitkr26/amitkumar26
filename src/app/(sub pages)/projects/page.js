import Image from "next/image";
import bg from "../../../../public/background/projects-background.png";
import ProjectList from "@/components/projects";
import { projectsData } from "../../data";

export const metadata = {
  title: "Research",
};

export default function Home() {
  return (
    <>
      <Image
        src={bg}
        alt="Research projects background"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
        priority
        sizes="100vw"
      />

      <ProjectList projects={projectsData} />
    </>
  );
}
