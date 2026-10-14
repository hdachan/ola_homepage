// 사이트 주소: 직접 정한 도메인이 있으면 NEXT_PUBLIC_SITE_URL 로 지정,
// 없으면 Vercel 이 빌드 때 알려주는 대표 주소(xxx.vercel.app 또는 연결한 도메인)를 자동 사용
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL && `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`) ||
  "http://localhost:3001";

// 링크 공유(카카오톡 등) 미리보기 공통값: 페이지마다 제목·설명·주소만 바꿔서 사용
export const OG_BASE = {
  type: "website",
  locale: "ko_KR",
  siteName: "올라펫보험",
  // 미리보기 이미지 (1200×630)
  images: [{ url: "/OG_BA.png", width: 1200, height: 630, alt: "올라펫보험" }],
};
