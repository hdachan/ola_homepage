import { SITE_URL } from "../site";

// 구글·네이버용 구조화 데이터(JSON-LD). 화면에는 보이지 않고 검색 로봇만 읽음
// "<" 를 이스케이프해서 글 안의 문자가 <script> 태그를 끊지 못하게 함
export default function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

const ORG_ID = `${SITE_URL}/#organization`;

// 1. 사이트 이름: 검색 결과 위쪽에 "올라펫보험"으로 표시되도록 + 다른 표기도 같은 이름임을 알려줌
// 2. 회사·브랜드 정보: 로고, 연락처, 카카오 채널, 운영사 (메인 페이지에만 넣음)
export const HOME_JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: "올라펫보험",
      alternateName: ["올라!펫보험", "올라 펫보험"],
      inLanguage: "ko-KR",
      publisher: { "@id": ORG_ID },
    },
    {
      "@type": "Organization",
      "@id": ORG_ID,
      name: "올라펫보험",
      alternateName: ["올라!펫보험", "올라 펫보험"],
      url: `${SITE_URL}/`,
      logo: `${SITE_URL}/icon.png`, // 정사각형 로고 512×512 (파비콘과 같은 그림)
      email: "csolapet@gmail.com",
      telephone: "+82-1522-5179",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+82-1522-5179",
        email: "csolapet@gmail.com",
        contactType: "customer service",
        areaServed: "KR",
        availableLanguage: "Korean",
      },
      sameAs: ["https://pf.kakao.com/_VsxgHn"], // 공식 채널 (늘어나면 여기에 추가)
      parentOrganization: { "@type": "Organization", name: "주식회사 이마트" },
    },
  ],
};

// 3. 자주 묻는 질문: faqData.js 의 질문·답변으로 자동 생성 (FAQ를 고치면 같이 바뀜)
export const faqJsonLd = (faq) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a.join("\n") },
  })),
});

// 4. 경로: 검색 결과 주소 자리에 "올라펫보험 › 자주 묻는 질문" 처럼 표시
export const breadcrumbJsonLd = (name, path) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "올라펫보험", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name, item: `${SITE_URL}${path}` },
  ],
});
