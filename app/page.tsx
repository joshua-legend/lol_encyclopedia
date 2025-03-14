import { Champion } from "@/components/detail/type";
import Profile from "@/components/profile/profile";

export default async function Home() {
  const res = await fetch("https://ddragon.leagueoflegends.com/cdn/15.5.1/data/ko_KR/champion.json");
  const data = await res.json();
  const champions: Champion[] = Object.values(data.data);
  console.log(champions);
  return (
    <div className="grid grid-cols-6 gap-2">
      {champions.map((v, i) => (
        <Profile key={i} name={v.name} image={`https://ddragon.leagueoflegends.com/cdn/15.5.1/img/champion/${v.image.full}`} />
      ))}
    </div>
  );
}
