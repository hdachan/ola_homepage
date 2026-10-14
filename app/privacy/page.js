import { OG_BASE } from "../site";
import JsonLd, { breadcrumbJsonLd } from "../components/JsonLd";

const TITLE = "개인정보 처리방침 | 올라펫보험";
const DESCRIPTION =
  "올라펫보험 웹사이트의 개인정보 처리방침이에요. 본 사이트는 개인식별정보를 직접 수집하지 않으며, 가입 시 정보는 DB손해보험의 개인정보 처리방침에 따라 처리돼요.";

// 개인정보 처리방침 (푸터 "개인정보 처리방침" 링크)
export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/privacy/" },
  openGraph: { ...OG_BASE, url: "/privacy/", title: TITLE, description: DESCRIPTION },
};

export default function PrivacyPage() {
  return (
    <div className="container policy">
      <JsonLd data={breadcrumbJsonLd("개인정보 처리방침", "/privacy/")} />
      <div className="support-banner">
        <h1>개인정보 처리방침</h1>
      </div>

      <article className="policy-doc">
        <h2>[올라!펫보험 개인정보 처리방침]</h2>
        <p>
          주식회사 [이마트] (이하 &apos;회사&apos;)는 이용자의 개인정보를 중요시하며, 「개인정보 보호법」 등 관련 법령을
          준수하고 있습니다.
        </p>
        <p>
          본 웹사이트는 이마트 몰리스 및 DB손해보험 제휴 상품 안내를 위한 브릿지(Bridge) 랜딩페이지로, 이용자의
          회원가입, 상담 신청, 보험료 조회 및 가입 과정에서 어떠한 개인식별정보(이름, 연락처, 주민등록번호 등)도 직접
          수집하거나 저장하지 않습니다.
        </p>

        <h3>1. 개인정보의 수집 및 이용 목적</h3>
        <p>
          본 웹사이트는 별도의 회원가입이나 개인정보 수집 절차를 두고 있지 않습니다. 보험료 조회 및 가입 신청 버튼 클릭
          시 이동하는 DB손해보험 공식 페이지에서 입력되는 모든 개인정보는 DB손해보험의 개인정보 처리방침에 따라 처리 및
          관리됩니다.
        </p>

        <h3>2. 자동 수집되는 인터넷 접속 정보 (쿠키 등)</h3>
        <p>회사 및 서비스 개선을 위해 웹사이트 방문 과정에서 아래와 같은 정보가 자동으로 생성되어 수집될 수 있습니다.</p>
        <ul>
          <li>
            <strong>수집 항목:</strong> 접속 IP 정보, 쿠키(Cookie), 방문 일시, 서비스 이용 기록, 기기 및 브라우저 정보
          </li>
          <li>
            <strong>이용 목적:</strong> 웹사이트 이용 통계 분석 및 서비스 품질 개선 (Google Analytics 등 분석 툴 활용)
          </li>
          <li>
            <strong>쿠키의 거부:</strong> 이용자는 브라우저 설정을 통해 쿠키 수집 및 이용을 거부할 수 있습니다.
          </li>
        </ul>

        <h3>3. 개인정보의 제3자 제공 및 위탁</h3>
        <p>회사는 이용자의 개인정보를 직접 수집하지 않으므로, 제3자 제공 및 처리 위탁을 진행하지 않습니다.</p>

        <h3>4. 개인정보 보호책임자 및 담당 부서</h3>
        <p>본 웹사이트의 개인정보 보호 및 웹사이트 관련 문의사항은 아래의 담당 부서로 연락해 주시기 바랍니다.</p>
        <ul>
          <li>
            <strong>담당 부서:</strong> 올라펫보험 운영센터
          </li>
          <li>
            <strong>이메일:</strong> <a href="mailto:csolapet@gmail.com">csolapet@gmail.com</a>
          </li>
          <li>
            <strong>연락처:</strong> <a href="tel:1522-5179">1522-5179</a>
          </li>
        </ul>

        <dl className="policy-dates">
          <div>
            <dt>공고 일자</dt>
            <dd>2026년 10월 10일</dd>
          </div>
          <div>
            <dt>시행 일자</dt>
            <dd>2026년 10월 10일</dd>
          </div>
        </dl>
      </article>
    </div>
  );
}
