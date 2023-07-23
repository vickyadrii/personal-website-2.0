import { dataProjectss } from "../../data/dummyData";

const DataProjects: React.FC = () => {
  return (
    <div className="grid md:grid-cols-2 md:gap-x-14  md:gap-y-8 gap-y-6 md:mt-14 mt-8">
      {dataProjectss.map(({ id, img_url, logo, type, tech_stack_logo }) => (
        <div
          key={id}
          className="flex justify-center flex-col p-4 gap-3 bg-white drop-shadow-sm hover:drop-shadow-lg cursor-pointer md:rounded-xl rounded-md  transition-all"
        >
          <img src={img_url} alt="projects vickyadrii" />
          <div className="flex flex-col gap-2.5 items-start">
            <img
              src={logo}
              alt="logo project vickyadrii"
              className={`object-cover ${
                id === 0 ? "md:w-48 w-28" : "md:w-24 w-2/12"
              }`}
            />
            <div className="flex items-center gap-1">
              <p className="md:text-base text-xs">{type}</p>
              <div className="flex md:gap-4 gap-2 items-center">
                {tech_stack_logo.map((data, index) => (
                  <img
                    key={index}
                    src={data}
                    alt="tech stack logo vickyadrii"
                    className="md:w-[26px] w-5 object-contain aspect-[4/3]"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DataProjects;
