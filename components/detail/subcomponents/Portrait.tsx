import Image from "next/image";
import { Champion } from "../type";

const Protrait = ({ image }: Pick<Champion, "image">) => {
  return <Image src={`https://ddragon.leagueoflegends.com/cdn/15.5.1/img/champion/${image.full}`} alt="" width={100} height={200} />;
};

export default Protrait;
