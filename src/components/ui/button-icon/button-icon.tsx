import Image from "next/image";

type Props = {
  children: string;
  icon?: string;
};

const ButtonIcon = ({ children, icon }: Props & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button className="md:px-4 px-3 md:py-2 py-1.5 md:text-base text-sm bg-primary-dark-700 hover:bg-black active:bg-primary-dark-700 border border-primary-dark-600 rounded-md flex items-center md:gap-2 gap-1 transition-all duration-200 ease-out w-fit">
      <p>{children}</p>
      {icon && <Image src={icon ?? ""} alt={children} width={24} height={24} />}
    </button>
  );
};

export default ButtonIcon;
