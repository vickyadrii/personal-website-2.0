import Image from "next/image";

import { getAssetUrl } from "@/lib/utils";
import { activities } from "@/constants/constants";

import TitleSection from "@/components/common/title-section/title-section";

const Activities = () => {
  return (
    <section id="activities" className="space-y-8 pt-8 border-b border-b-primary-dark-600">
      <TitleSection title="Activities" description="I love teaching! So, here are my activities and being a mentor:" />

      <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-10 gap-4 pb-8">
        {activities.map(({ id, logo, company_name, title, period }) => (
          <div key={id} className="space-y-5">
            <div className="flex justify-between gap-2">
              <div className="flex md:items-center gap-2">
                <Image src={getAssetUrl(logo)} alt="logo" width={48} height={48} className="md:block hidden" />
                <div className="space-y-0.5">
                  <h3 className="md:text-lg text-sm font-bold">{company_name}</h3>
                  <p className="md:text-base text-xs text-gray-300">{title}</p>
                </div>
              </div>
              <p className="md:text-sm text-xs text-primary-dark-500 mt-1">{period}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Activities;
