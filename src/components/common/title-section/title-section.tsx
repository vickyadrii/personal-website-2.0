type Props = {
  title: string;
  description?: string;
};

const TitleSection = ({ title, description }: Props) => {
  return (
    <div className="space-y-4">
      <h2 className="md:text-xl text-lg font-bold">{title}</h2>
      <p className="md:text-base text-sm text-primary-dark-500 md:leading-7 leading-6">{description}</p>
    </div>
  );
};

export default TitleSection;
