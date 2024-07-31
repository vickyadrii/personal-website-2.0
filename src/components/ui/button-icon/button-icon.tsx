import Image from "next/image";

type Props = {
  children: string;
  icon?: string;
};

const ButtonIcon = ({ children, icon, ...props }: Props & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className="md:px-4 px-3 md:py-2 py-1.5 bg-primary-dark-700 hover:bg-black active:bg-primary-dark-700 border border-primary-dark-600 rounded-md flex items-center md:gap-2 gap-1 transition-all duration-200 ease-out w-fit disabled:cursor-not-allowed disabled:opacity-50"
      {...props}
    >
      <p className="md:text-base text-xs">{children}</p>
      {icon && <Image src={icon ?? ""} alt={children} width={24} height={24} className="md:w-6 w-5 md:h-6 h-5" />}
    </button>
  );
};

export default ButtonIcon;
