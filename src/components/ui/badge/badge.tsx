type Props = {
  children: React.ReactNode;
};

const Badge = ({ children }: Props) => {
  return (
    <div className="bg-primary-dark-700 border border-primary-dark-600 rounded-3xl w-fit px-3 py-1 flex justify-center flex-shrink-0">
      <span className="sm:text-xs text-[11px]">{children}</span>
    </div>
  );
};

export default Badge;
