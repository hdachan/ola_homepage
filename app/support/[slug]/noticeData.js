// 공지사항 데이터: 게시판(NoticeList)과 RSS(/rss.xml)가 함께 사용
// 새 공지는 맨 위에 추가하면 됨 (번호는 자동). summary = RSS·검색에 보이는 한두 줄 요약
// 내려받기 버튼 아이콘 (보험금 청구서 다운로드 버튼과 같은 모양)
const DownloadIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
    <path d="M8 2v8M4.5 6.5L8 10l3.5-3.5M3 13h10" fill="none" stroke="currentColor" strokeWidth="1.8" />
  </svg>
);

// 사운드 라이브러리 곡: public 폴더의 파일 (file = 내려받을 때 저장되는 파일 이름)
// 한 항목에 음원이 여러 개면 tracks 에 추가 (label = 음원 이름, 1개면 생략)
const SOUNDS = [
  {
    title: "1. 브랜드송",
    desc: "<올라! 우리의 계절>, 반려동물과의 포근한 일상을 담은 곡",
    tracks: [{ src: "/ola_brand_song.mp3", file: "올라! 우리의 계절.mp3" }],
  },
  {
    title: "2. 고객센터 ARS 대기사운드",
    desc: "성우 이세빈",
    tracks: [
      { label: "대기사운드 1", src: "/ola_ars_waiting.mp3", file: "올라펫보험 ARS 대기사운드 1.mp3" },
      { label: "대기사운드 2", src: "/ola_ars_waiting2.mp3", file: "올라펫보험 ARS 대기사운드 2.mp3" },
    ],
  },
];

export const NOTICES = [
  {
    title: "[사운드 라이브러리] 브랜드송 <올라! 우리의 계절>",
    date: "2026.10.30",
    summary:
      "올라!펫보험의 브랜드송 <올라! 우리의 계절>과 고객센터 ARS 대기사운드를 들어보고 다운로드할 수 있어요.",
    body: (
      <>
        <p className="notice-lead">
          올라!펫보험의 브랜드송 &lt;올라! 우리의 계절&gt;과 고객센터 ARS 대기사운드입니다.
        </p>
        <p className="notice-lead">
          음악은 AI 프로듀싱을 통해 제작되었으며, 다운로드하여 감상 및 활용하실 수 있습니다.
        </p>

        <div className="notice-sounds">
          {SOUNDS.map((s) => (
            <div key={s.title} className="notice-sound">
              <strong>{s.title}</strong>
              <span>{s.desc}</span>
              {s.tracks.map((t) => (
                <div key={t.src} className="notice-track">
                  {t.label && <em>{t.label}</em>}
                  {/* 바로 듣기 (누르기 전에는 파일을 받지 않음) */}
                  <audio controls preload="none" src={t.src} />
                  <a className="claim-download" href={t.src} download={t.file}>
                    다운로드
                    <DownloadIcon />
                  </a>
                </div>
              ))}
            </div>
          ))}
        </div>
      </>
    ),
  },
  {
    title: "가입환영 이마트 & 몰리스 쿠폰 받으세요.",
    date: "2026.10.07",
    summary:
      "올라펫보험 가입 고객(기계약자 포함) 모두에게 몰리스·이마트 반려동물용품 매장에서 쓸 수 있는 총 2만원 상당 쿠폰을 드려요.",
    body: (
      <>
        <p className="notice-lead">
          올라펫보험 가입 고객분들께(기계약자 포함) 몰리스 매장과 이마트 매장(반려동물용품 전용)에서 사용할 수 있는
          <strong> 총 2만원 상당 쿠폰</strong>을 모든 계약자분들께 드려요.
        </p>

        <div className="notice-coupons">
          <div className="notice-coupon">
            <strong>10,000원권 × 1장</strong>
            <span>4만원 이상 구매 시 사용 가능</span>
          </div>
          <div className="notice-coupon">
            <strong>5,000원권 × 2장</strong>
            <span>2만원 이상 구매 시 사용 가능</span>
          </div>
        </div>

        <dl className="notice-info">
          <div>
            <dt>발송 시기</dt>
            <dd>가입 후 익일부터 일주일 이내 발송 (기계약자분들도 수령 가능해요)</dd>
          </div>
          <div>
            <dt>받는 방법</dt>
            <dd>
              <a href="https://pf.kakao.com/_VsxgHn" target="_blank" rel="noopener noreferrer">
                카카오톡 상담
              </a>
              에 증권번호나 성함을 남겨주세요.
            </dd>
          </div>
          <div>
            <dt>문의</dt>
            <dd>
              고객센터 <a href="tel:1522-5179">1522-5179</a> /{" "}
              <a href="https://pf.kakao.com/_VsxgHn" target="_blank" rel="noopener noreferrer">
                카카오톡 상담
              </a>
            </dd>
          </div>
        </dl>
      </>
    ),
  },
];
