import SocialMedia from "../social-media/social-media";

const Footer = () => {
  const date = new Date();
  return (
    <footer className="pt-5">
      <div className="flex justify-between items-center">
        <p className="text-primary-dark-500 md:text-base text-sm flex items-center gap-1.5">
          Vicky <span className="md:block hidden shrink-0">Herdiansyah Adri</span> &copy; {date.getUTCFullYear()}
        </p>
        <SocialMedia isResume={false} />
      </div>
    </footer>
  );
};

export default Footer;
