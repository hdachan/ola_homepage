// 공지사항 데이터: 게시판(NoticeList)과 RSS(/rss.xml)가 함께 사용
// 새 공지는 맨 위에 추가하면 됨 (번호는 자동). summary = RSS·검색에 보이는 한두 줄 요약
export const NOTICES = [
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
                카카오톡 채팅방
              </a>
              에 증권번호나 성함을 남겨주세요.
            </dd>
          </div>
          <div>
            <dt>문의</dt>
            <dd>
              고객센터 <a href="tel:1522-5179">1522-5179</a> /{" "}
              <a href="https://pf.kakao.com/_VsxgHn" target="_blank" rel="noopener noreferrer">
                카카오톡 채팅
              </a>
            </dd>
          </div>
        </dl>
      </>
    ),
  },
];
