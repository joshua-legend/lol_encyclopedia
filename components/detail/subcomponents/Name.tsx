import { Champion } from "../type";

const Name = ({ id, name }: Pick<Champion, "id" | "name">) => {
  return (
    <div>
      <span>한글 이름:{name}</span>
      <span>영어 이름:{id}</span>
    </div>
  );
};

export default Name;
