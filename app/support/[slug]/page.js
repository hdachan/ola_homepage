import { notFound } from "next/navigation";
import { SUPPORT_MENU } from "../menu";
import FaqList from "./FaqList";
import NoticeList from "./NoticeList";
import ClaimInfo from "./ClaimInfo";
import TermsInfo, { RequiredNotices } from "./TermsInfo";
import ContactCards from "../../components/ContactCards";
import { OG_BASE } from "../../site";
import JsonLd, { faqJsonLd, breadcrumbJsonLd } from "../../components/JsonLd";
import { FAQ } from "./faqData";

export const dynamicParams = false;

export function generateStaticParams() {
  return SUPPORT_MENU.map((m) => ({ slug: m.slug }));
}

// 검색·공유 문구 (페이지별). 검색용 글에는 느낌표 없이 "올라펫보험"으로 표기
const SEO = {
  notice: {
    title: "공지사항 | 올라펫보험",
    description:
      "올라펫보험의 새 소식과 이벤트를 안내해요. 가입 고객 대상 이마트·몰리스 쿠폰 등 혜택 소식을 확인하세요.",
  },
  consult: {
    title: "상담하기 | 올라펫보험",
    description:
      "카카오톡 채팅, 전화(1522-5179), 메일로 올라펫보험 상담을 받아보세요. 고객센터 운영시간은 평일 9시-18시이며, 그 외 시간은 챗봇이 응대해요.",
  },
  faq: {
    title: "자주 묻는 질문 | 올라펫보험",
    description:
      "가입 연령, 보장 시작일, 보험료, 갱신, 청구 방법 등 올라펫보험에 대해 자주 묻는 질문을 모았어요.",
  },
  claim: {
    title: "보험금 청구 및 지급과정 | 올라펫보험",
    description:
      "올라펫보험 보험금 청구 절차와 필요 서류, 접수처(팩스·메일·우편·전화)를 안내해요. 진료일로부터 3년 이내 청구할 수 있어요.",
  },
  required: {
    title: "금융상품 필수 안내사항 | 올라펫보험",
    description:
      "올라펫보험 가입 전 꼭 확인해야 할 금융상품 필수 안내사항과 예금자보호 관련 내용을 안내해요.",
  },
  terms: {
    title: "약관 | 올라펫보험",
    description:
      "올라펫보험의 약관을 확인하고 PDF로 내려받을 수 있어요. 보장 내용과 보상하지 않는 손해 등 자세한 조건을 확인하세요.",
  },
};

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const { title, description } = SEO[slug];
  const url = `/support/${slug}/`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { ...OG_BASE, url, title, description },
  };
}

export default async function SupportPage({ params }) {
  const { slug } = await params;
  const item = SUPPORT_MENU.find((m) => m.slug === slug);
  if (!item) notFound();

  return (
    <>
      {/* 구조화 데이터: 경로(모든 페이지) + 자주 묻는 질문(FAQ 페이지만) */}
      <JsonLd data={breadcrumbJsonLd(item.label, `/support/${slug}/`)} />
      {slug === "faq" && <JsonLd data={faqJsonLd(FAQ)} />}
      <SupportContent slug={slug} item={item} />
    </>
  );
}

function SupportContent({ slug, item }) {
  if (slug === "notice") {
    return (
      <>
        <div className="support-head no-line">
          <h2>공지사항</h2>
        </div>
        <NoticeList />
      </>
    );
  }

  if (slug === "faq") {
    return (
      <>
        <div className="support-head">
          <h2>자주 묻는 질문</h2>
          <p>궁금한 것들을 살펴보고 더 알고 싶으시면 고객센터를 이용해 주세요.</p>
        </div>
        <FaqList />
      </>
    );
  }

  if (slug === "consult") {
    return (
      <>
        <div className="support-head">
          <h2>상담하기</h2>
          <p>고객센터 운영시간 평일 9시-18시 (기타 시간 챗봇운영)</p>
        </div>
        {/* 왼쪽: 상담 카드 3개 / 오른쪽: 카드 쪽을 올려다보는 강아지 */}
        <div className="consult-layout">
          <ContactCards className="support-contact" chat />
          <img className="consult-dog" src="/ola_dog.png" alt="" aria-hidden="true" />
        </div>
      </>
    );
  }

  if (slug === "claim") {
    return (
      <>
        <div className="support-head">
          <h2>보험금 청구 및 지급과정</h2>
        </div>
        <ClaimInfo />
      </>
    );
  }

  if (slug === "required") {
    return (
      <>
        <div className="support-head">
          <h2>필수안내사항</h2>
        </div>
        <RequiredNotices />
      </>
    );
  }

  if (slug === "terms") {
    return (
      <>
        <div className="support-head">
          <h2>약관</h2>
        </div>
        <TermsInfo />
      </>
    );
  }

  // 나머지 메뉴는 내용 준비 중
  return (
    <>
      <div className="support-head">
        <h2>{item.label}</h2>
      </div>
      <p className="support-empty">준비 중입니다.</p>
    </>
  );
}
