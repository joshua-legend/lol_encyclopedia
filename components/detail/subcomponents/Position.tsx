import Image from "next/image";
import { Champion } from "../type";
type Position = "Fighter" | "Mage" | "Assassin" | "Marksman" | "Tank" | "Support";

const Position = ({ tags }: Pick<Champion, "tags">) => {
  const imageObj: Record<Position, string> = {
    Assassin: "https://i.namu.wiki/i/94_216WY-xShS1bGB6aHz1poenZ3S8xPgKmxQqoO08HjT437DBpcVnem0q55IEsPXqGFtsafPz-MqXntAJgm8g.webp",
    Fighter: "https://i.namu.wiki/i/jO_l37ydXPntmBQePzmlIo6tp-Sxa2KtAdjqAg84uGggMk7wVcOGULga3nrrq03BpHQ2LheIdktO4PXQIbKGdA.webp",
    Mage: "https://i.namu.wiki/i/udQs58Ogk0KLWzcxKjs5N8z11FDq8l8ekVHOSgZSym5xJD1M4R9nsxwEq8snP5EN9d_pMDl1KMnZblQ921wDLg.webp",
    Marksman: "https://i.namu.wiki/i/tO1klSSdmoAAz90iddU6FlwAllWaY1FFUyTSkph1Pc_edeHMNB6AseZXENuJrX14fGipR6oAttXS5WU_ysDrmw.webp",
    Support: "https://i.namu.wiki/i/9LzHb_JdEWMj1f1uf6vQPFTGiBvLnsaFVZcpA2sHVXrph3t9AJlslDSu1o5wjNarxSGcEmbkrZe53rNp4rcrFw.webp",
    Tank: "https://i.namu.wiki/i/1QQ-PXEWNnBMrLHXLK3fUzaMxote1bfnlMlrlplrqn-8HuPOqmLf4s-HZl3Y4-YYDcFxfCLZYzaiqQlsDbs-vg.webp",
  };
  return (
    <div>
      {tags.map((v) => (
        <Image src={imageObj[v]} alt={""} width={50} height={50} />
      ))}
    </div>
  );
};

export default Position;
