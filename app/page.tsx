import Profile from "@/components/profile/profile";

export default async function Home() {
  const champ = await fetch("https://ddragon.leagueoflegends.com/cdn/15.5.1/data/ko_KR/champion.json");
  const data = await champ.json();
  return (
    <div className="grid grid-cols-6 gap-2">
      {Object.values(data.data).map((v: any, i) => {
        return <Profile key={i} name={v.name} image={`https://ddragon.leagueoflegends.com/cdn/15.5.1/img/champion/${v.image.full}`} />;
      })}
    </div>
  );
}
