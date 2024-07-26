import SocialMedia from "./social-media";

const HeroSection = () => {
  return (
    <section className="space-y-4 md:my-32 my-14">
      <h2 className="md:text-[32px] text-2xl text-primary-blue-500 font-caveat font-light">Hi, I&apos;m Vicky!</h2>
      <h1 className="bg-gradient-to-r from-primary-dark-400 to-white bg-clip-text md:text-5xl text-3xl text-transparent md:h-14 inline-block font-bold">
        Frontend Engineer
      </h1>
      <p className="text-primary-dark-500 md:text-base text-sm md:leading-8 leading-6">
        Frontend Engineer with 2+ years of experience in React.js for developing a website and web applications.
        Currently exploring about backend development.
      </p>
      <SocialMedia />
    </section>
  );
};

export default HeroSection;
