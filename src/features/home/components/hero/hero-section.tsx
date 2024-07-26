import SocialMedia from "@/components/common/social-media/social-media";

const HeroSection = () => {
  return (
    <section className="space-y-4 md:my-32 my-14">
      <h2 className="md:text-[32px] text-2xl text-primary-blue-500 font-caveat font-light">Hi, I&apos;m Vicky!</h2>
      <h1 className="mx-2 text-transparent bg-clip-text bg-gradient-to-r from-[#1487B9] to-[#1FC2F0] xl:text-[82px] md:text-[70px] text-[32px] font-bold">
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
