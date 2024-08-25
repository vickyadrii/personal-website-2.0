import { projects } from "@/constants/constants";

import Card from "@/components/ui/card/card";
import Badge from "@/components/ui/badge/badge";
import TitleSection from "@/components/common/title-section/title-section";

const Projects = () => {
  return (
    <section id="projects" className="space-y-8 py-8 border-b border-b-primary-dark-600">
      <TitleSection title="Projects" description="Here are my highlighted projects:" />

      <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
        {projects.map(({ id, thumbnail, name, summary, tech_stacks }) => (
          <Card key={id} thumbnail={thumbnail}>
            <div className="flex flex-col justify-between gap-4">
              <div className="space-y-2">
                <h2>{name}</h2>
                <p className="text-xs text-primary-dark-500 leading-5 min-h-10">{summary}</p>
              </div>
              <div className="flex items-end gap-2 flex-wrap">
                {tech_stacks.map((item, index) => (
                  <Badge key={index}>{item}</Badge>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Projects;
