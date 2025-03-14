import Image from "next/image";

type Profile = {
  image: string;
  name: string;
};

const Profile = ({ image, name }: Profile) => {
  return (
    <div>
      <Image width={96} height={96} src={image} alt={""} />
      <span>{name}</span>
    </div>
  );
};

export default Profile;
