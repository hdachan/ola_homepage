import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FloatingCta from "./components/FloatingCta";
import { SITE_URL, OG_BASE } from "./site";

// 검색·공유 문구 (메인). 검색용 글에는 느낌표 없이 "올라펫보험"으로 표기
export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: "올라펫보험, 이마트와 DB손해보험이 함께하는 반려동물 보험",
  description:
    "이마트 몰리스와 DB손해보험이 함께하는 올라펫보험. 주요 특약포함 설계가 필요없는 원플랜, 새로운 반려생활에 타세요.",
  alternates: { canonical: "/" },
  // 카카오톡·페이스북 등 링크 미리보기
  openGraph: {
    ...OG_BASE,
    url: "/",
    title: "새로운 반려생활의 시작 올라펫보험",
    description: "이마트 몰리스와 DB손해보험이 함께하는 원플랜 올라펫보험으로 새로운 반려생활에 타세요.",
  },
  twitter: { card: "summary_large_image", images: ["/OG_BA.png"] },
  robots: { index: true, follow: true },
  // 구글 Search Console / 네이버 서치어드바이저에서 발급받은 코드로 교체
  verification: {
    google: "uv9UeHu26JyFB23pYiZGbU8aWWYST7FuuWv4oSGHDqA",
    other: { "naver-site-verification": "8a1bfabbbea4be8b34c0458d30e2dd700af0da59" },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <head>
        {/* 심의용 캡처 모드(?review=1): 숨은 내용을 모두 펼쳐 보이게 html 에 review 클래스 추가 */}
        <script
          dangerouslySetInnerHTML={{
            __html: `if(/[?&]review=1/.test(location.search))document.documentElement.classList.add("review")`,
          }}
        />
        {/* Noto Sans KR (구글 폰트, 굵기 100~900) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100..900&display=swap"
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingCta />
      </body>
    </html>
  );
}
