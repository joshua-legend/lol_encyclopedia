import { Champion } from "../type";

const Concept = ({ partype, title }: Pick<Champion, "partype" | "title">) => {
  return (
    <div>
      <span>{partype}</span>
      <span>{title}</span>
    </div>
  );
};

export default Concept;
