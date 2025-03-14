import Concept from "@/components/detail/subcomponents/Concept";
import Name from "@/components/detail/subcomponents/Name";
import Protrait from "@/components/detail/subcomponents/Portrait";
import Position from "@/components/detail/subcomponents/Position";
import Story from "@/components/detail/subcomponents/Story";
import { Champion } from "@/components/detail/type";

type DetailPageProps = {
  params: { name: string };
};

const DetailPage = async ({ params }: DetailPageProps) => {
  const { name } = params;
  const res = await fetch("https://ddragon.leagueoflegends.com/cdn/15.5.1/data/ko_KR/champion.json");
  const data = await res.json();
  const champions: Champion[] = Object.values(data.data);
  const target = champions.find((v) => v.name == decodeURI(name));

  if (!target) return <div>그런챔 없음 ㅅㄱ</div>;

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Protrait {...target} />
      <Name {...target} />
      <Concept {...target} />
      <Position {...target} />
      <Story {...target} />
    </div>
  );
};

export default DetailPage;
