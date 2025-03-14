import Image from "next/image";
import Link from "next/link";

type Profile = {
  image: string;
  name: string;
};

const Profile = ({ image, name }: Profile) => {
  return (
    <Link href={`/detail/${name}`}>
      <Image width={96} height={96} src={image} alt={""} />
      <span>{name}</span>
    </Link>
  );
};

export default Profile;
