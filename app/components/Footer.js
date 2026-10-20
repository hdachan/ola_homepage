import Logo from "./Logo";

// 마이브라운 푸터의 바로가기 영역
const QUICK_LINKS = [
  { href: "/support/terms/", label: "약관" },
  { href: "/support/notice/", label: "고객센터" },
  { href: "https://pf.kakao.com/_VsxgHn", label: "카카오톡 채널", external: true },
];

// 금융상품 필수 안내문 | 개인정보 처리방침
const POLICY_LINKS = [
  { href: "/support/required/", label: "금융상품 필수 안내문" },
  { href: "/privacy/", label: "개인정보 처리방침" },
];

// 동그라미 안 오른쪽 화살표
const Arrow = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
    <circle cx="10" cy="10" r="9" fill="none" stroke="currentColor" strokeWidth="1.5" />
    <path d="M6.5 10h7M10.5 7l3 3-3 3" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-left">
          <Logo src="/ola_logo_black.svg" />
          <ul className="footer-quick">
            {QUICK_LINKS.map((l) => (
              <li key={l.label}>
                <a href={l.href} {...(l.external && { target: "_blank", rel: "noopener noreferrer" })}>
                  {l.label} <Arrow />
                </a>
              </li>
            ))}
          </ul>
          {/* 심의필 + Copyright 를 한 묶음으로 → 두 줄 사이 간격 없이 붙음 */}
          <div>
            {/* 보험 광고 심의필: 유효기간이 끝나면 새 번호로 교체 */}
            <p className="review-no">준법감시인확인필 제2026-17092호(2026.10.20~2027.10.19)</p>
            <p className="copyright">Copyright © 올라!펫보험 All rights reserved.</p>
          </div>
        </div>

        <div className="footer-right">
          <address className="company">
            <p>
              주식회사 이마트 <span className="bar" />
              대표자: 한채양
            </p>
            <p>
              서울특별시 중구 세종대로7길 37 (순화동) <span className="bar" />
              T: 02-380-9729
            </p>
            <p>
              사업자등록번호: 206-86-50913 <span className="bar" />
              문의 전화번호: 1522-5179
            </p>
            <p>
              메일주소: <a href="mailto:csolapet@gmail.com">csolapet@gmail.com</a>
            </p>
            <p>보험대리점등록번호: 제 7725090001호</p>
          </address>
          <ul className="footer-policy">
            {POLICY_LINKS.map((l) => (
              <li key={l.label}>
                <a href={l.href} className={l.strong ? "strong" : undefined}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
