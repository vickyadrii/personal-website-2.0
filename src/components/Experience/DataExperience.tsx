import { dataExperience } from "../../data/dummyData";

const DataExperience: React.FC = () => {
  return (
    <div className="grid grid-cols-1 gap-12 mt-12">
      {dataExperience.map(
        ({
          id,
          logo_url,
          pattern,
          name,
          description,
          date,
          position,
          responsibilites,
          first_color,
          second_color,
          desc_color,
          position_color,
          border_color,
        }) => (
          <div
            key={id}
            style={{
              background: `linear-gradient(226deg, ${second_color} 0%, ${first_color} 100%)`,
              border: `3px solid ${border_color}`,
              position: "relative",
            }}
            className="md:rounded-xl rounded-lg"
          >
            <img
              src={pattern}
              alt="pattern vickyadrii"
              className="xl:absolute hidden h-full w-80"
            />
            <div className="md:p-10 p-6">
              <div className="flex xl:flex-row xl:gap-0 gap-5 flex-col items-start">
                <div className="basis-[20%] flex xl:justify-center">
                  <img
                    src={logo_url}
                    alt="company logo"
                    className={`mt-1 ${
                      id === 0 || id === 1 ? "md:w-auto w-28" : "md:w-auto w-10"
                    }`}
                  />
                </div>
                <div className="flex flex-col gap-5 xl:ml-7 basis-[80%]">
                  <div className="flex flex-col xl:gap-1 items-start">
                    <h3 className="xl:text-[40px] md:text-3xl text-2xl font-semibold">
                      {name}
                    </h3>
                    <p
                      style={{
                        color: desc_color,
                        fontSize: "20px",
                      }}
                      className="xl:mt-0 mt-2"
                    >
                      {description}
                    </p>
                    <p className="text-lg font-medium mt-2.5">{date}</p>
                  </div>
                  <div className="md:hidden flex justify-start">
                    <p
                      style={{
                        background: position_color,
                      }}
                      className="md:px-7 px-5 md:py-4 py-3 text-center text-sm rounded-lg"
                    >
                      {position}
                    </p>
                  </div>
                  <div className="flex flex-col gap-4">
                    <h3 className="md:text-2xl text-xl">
                      The responsibilities include:
                    </h3>
                    <ul className="flex flex-col gap-3 ml-4">
                      {responsibilites.map((data, index) => (
                        <li
                          key={index}
                          className="md:text-base text-sm list-disc"
                        >
                          {data}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="md:absolute hidden right-0 md:flex justify-end mt-10 mr-10">
                  <p
                    style={{
                      padding: "16px 28px",
                      background: position_color,
                      textAlign: "center",
                      fontSize: "14px",
                      borderRadius: "8px",
                    }}
                  >
                    {position}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default DataExperience;
