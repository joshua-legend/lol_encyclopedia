import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["ddragon.leagueoflegends.com", "i.namu.wiki"], // 사용하려는 외부 이미지 도메인 추가
  },
};

export default nextConfig;
