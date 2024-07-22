import TitleSection from "@/components/common/title-section/title-section";
import { activities } from "@/constants/constants";
import { getAssetUrl } from "@/lib/utils";
import Image from "next/image";

const Activities = () => {
  return (
    <section id="activities" className="space-y-8 pt-8 border-b border-b-primary-dark-600">
      <TitleSection title="Activities" description="I love teaching! So, here are my activities and being a mentor" />

      <div className="space-y-8">
        {activities.map(({ id, logo, company_name, title, period, tech_stacks }, index) => (
          <div
            key={id}
            className={`space-y-4 pb-8 ${index !== activities.length - 1 && "border-b border-b-primary-dark-600"}`}
          >
            <div className="flex items-center justify-between">
              <div className="flex md:items-center gap-2">
                <Image src={getAssetUrl(logo)} alt="logo" width={48} height={48} className="md:block hidden" />
                <div className="space-y-1 ">
                  <h3 className="md:text-xl text-sm font-bold">{company_name}</h3>
                  <p className="md:text-base text-xs text-primary-dark-500">{title}</p>
                </div>
              </div>
              <p className="md:text-base text-xs text-primary-dark-500">{period}</p>
            </div>

            <ul className="flex items-center gap-2 flex-wrap">
              {tech_stacks.map((item, index) => (
                <li
                  key={index}
                  className="md:text-xs text-[10px] px-3 py-1 bg-primary-dark-700 border border-primary-dark-600 rounded-full"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Activities;
