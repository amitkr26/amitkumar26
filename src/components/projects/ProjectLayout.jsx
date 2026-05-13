import { motion } from "framer-motion";
import Link from "next/link";

const item = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0 },
};

const ProjectLink = motion(Link);
const ProjectLayout = ({ name, description, date, href, external }) => {
  return (
    <ProjectLink
      variants={item}
      href={href}
      target={external ? "_blank" : "_self"}
      className="text-sm md:text-base flex items-center justify-between w-full relative rounded-lg overflow-hidden p-4 md:p-6 custom-bg hover:border-accent/30 transition-all"
    >
      <div className="flex items-center justify-center space-x-2 min-w-0">
        <h2 className="text-foreground whitespace-nowrap">{name}</h2>
        <p className="text-muted hidden sm:inline-block truncate">{description}</p>
      </div>
      <div className="shrink-0 mx-2 mb-1 bg-transparent border-b border-dashed border-muted flex-1 min-w-[20px]" />
      <p className="text-muted sm:text-foreground shrink-0 text-[11px]">
        {new Date(date).toDateString()}
      </p>
    </ProjectLink>
  );
};

export default ProjectLayout;
