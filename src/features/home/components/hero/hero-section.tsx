import SocialMedia from "./social-media";

const HeroSection = () => {
  return (
    <section className="space-y-4 md:my-32 my-14">
      <h2 className="md:text-[32px] text-2xl text-primary-blue-500 font-caveat font-light">Hi, I&apos;m Vicky!</h2>
      <h1 className="bg-gradient-to-r from-primary-dark-400 to-white bg-clip-text md:text-5xl text-3xl text-transparent md:h-14 inline-block font-bold">
        Lorem Ipsum
      </h1>
      <p className="text-primary-dark-500 md:text-base text-sm md:leading-8 leading-6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam tenetur, alias sequi illum earum commodi totam
        quaerat, itaque aperiam ea mollitia, exercitationem nisi ipsa dolores aspernatur provident consequatur cum
        placeat.
      </p>
      <SocialMedia />
    </section>
  );
};

export default HeroSection;
