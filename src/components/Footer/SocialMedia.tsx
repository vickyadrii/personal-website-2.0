import { IconBrandGithub, IconBrandLinkedin, IconBrandMedium, IconMail } from "@tabler/icons-react";

const dataSocialMedia = [
  {
    id: 0,
    icon: <IconBrandLinkedin className="text-[#E2FBFF] hover:text-white cursor-pointer" />,
    navigate_url: "https://linkedin.com/in/vickyadrii",
  },
  {
    id: 1,
    icon: <IconBrandMedium className="text-[#E2FBFF] hover:text-white cursor-pointer" />,
    navigate_url: "https://medium.com/@vickyadri29",
  },
  {
    id: 2,
    icon: <IconBrandGithub className="text-[#E2FBFF] hover:text-white cursor-pointer" />,
    navigate_url: "https://github.com/vickyadrii",
  },
  {
    id: 3,
    icon: <IconMail className="text-[#E2FBFF] hover:text-white cursor-pointer" />,
    navigate_url: "mailto:vickyadri103@gmail.com",
  },
];

const SocialMedia = () => {
  return (
    <div className="flex items-center gap-6">
      {dataSocialMedia.map(({ id, icon, navigate_url }) => (
        <a href={navigate_url} key={id}>
          {icon}
        </a>
      ))}
    </div>
  );
};

export default SocialMedia;
