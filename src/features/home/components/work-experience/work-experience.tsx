import TitleSection from "@/components/common/title-section/title-section";
import Badge from "@/components/ui/badge/badge";
import { workExperience } from "@/constants/constants";
import { getAssetUrl } from "@/lib/utils";
import Image from "next/image";

const WorkExperience = () => {
  return (
    <section id="experiences" className="space-y-8 pt-8 border-y border-y-primary-dark-600">
      <TitleSection title="Work Experience" description="Here are my work experience and career highlights:" />

      <div className="space-y-8">
        {workExperience.map(({ id, logo, company_name, title, period, tech_stacks, responsibilities }, index) => (
          <div
            key={id}
            className={`space-y-4 pb-8 ${index !== workExperience.length - 1 && "border-b border-b-primary-dark-600"}`}
          >
            <div className="flex items-center justify-between">
              <div className="flex md:items-center gap-2">
                <Image src={getAssetUrl(logo)} alt="logo" width={48} height={48} className="md:block hidden" />
                <div className="space-y-1 ">
                  <h3 className="md:text-xl text-base font-bold">{company_name}</h3>
                  <p className="md:text-base text-xs text-primary-dark-500">{title}</p>
                </div>
              </div>
              <p className="md:text-base text-xs text-primary-dark-500">{period}</p>
            </div>

            <div className="flex items-center gap-2 flex-wrap">
              {tech_stacks.map((item, index) => (
                <Badge key={index}>{item}</Badge>
              ))}
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold text-primary-dark-500">The responsibilites include:</h3>
              <ul className="list-disc ml-4 space-y-1 text-primary-dark-500">
                {responsibilities?.map((item, index) => (
                  <li key={index} className="text-sm leading-6">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
