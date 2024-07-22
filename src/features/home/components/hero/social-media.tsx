import ButtonIcon from "@/components/ui/button-icon/button-icon";
import { socialMedia } from "@/constants/constants";
import { getAssetUrl } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const SocialMedia = () => {
  return (
    <div className="flex md:flex-row flex-col md:items-center gap-6">
      <Link
        href="https://docs.google.com/document/d/133M4LP55oJaltng-ZbwIoO4Rb8RmRt8CvKZOl12SAFo/edit?usp=sharing"
        target="_blank"
      >
        <ButtonIcon icon={getAssetUrl("/icons/ic_arrow_down.svg")}>View Resume</ButtonIcon>
      </Link>
      <ul className="flex items-center gap-4">
        {socialMedia.map(({ href, icon }) => (
          <Link key={href} href={href}>
            <li>
              <Image src={getAssetUrl(icon)} alt={href} width={24} height={24} />
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default SocialMedia;
