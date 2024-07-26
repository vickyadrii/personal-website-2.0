import { getAssetUrl } from "@/lib/utils";
import Image from "next/image";

type Props = {
  thumbnail: string;
  children: React.ReactNode;
};

const Card = ({ thumbnail, children }: Props) => {
  return (
    <div className="bg-primary-dark-900 border border-primary-dark-600 rounded-xl hover:shadow-xl hover:shadow-primary-dark-700 transition-all duration-300 ease-out overflow-hidden">
      {thumbnail && (
        <div>
          <Image src={getAssetUrl(thumbnail)} alt="thumbnail-project" width={600} height={300} className="w-full" />
        </div>
      )}
      <div className="p-4">{children}</div>
    </div>
  );
};

export default Card;
