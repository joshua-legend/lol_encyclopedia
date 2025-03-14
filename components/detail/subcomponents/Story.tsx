import { Champion } from "../type";

const Story = ({ blurb }: Pick<Champion, "blurb">) => {
  return <p>{blurb}</p>;
};

export default Story;
