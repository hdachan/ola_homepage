"use client";

import { useEffect, useState } from "react";
import useReview from "./useReview";

// 메인 이벤트 팝업: 그림(popup_ui.png) + 아래 안내 띠, 카드 밖 아래에 "오늘 그만보기 | 닫기"
// "오늘 그만보기"를 누르면 이 브라우저에서 오늘 하루 다시 뜨지 않음
const HIDE_KEY = "ola-event-popup-hide"; // 값: 숨긴 날짜 (YYYY-MM-DD)
const LINK = "/support/notice/?no=1"; // 그림·안내 띠를 누르면 이동: 공지 1번 "가입환영 이마트 & 몰리스 쿠폰 받으세요."

const today = () => new Date().toLocaleDateString("sv-SE"); // 2026-10-16 형식 (사용자 기기 날짜 기준)

export default function EventPopup() {
  const [open, setOpen] = useState(false);
  const review = useReview(); // 심의용 캡처 모드에서는 띄우지 않음

  // 처음 화면이 그려진 뒤 "오늘 그만보기" 여부를 확인하고 띄움
  useEffect(() => {
    let hidden = false;
    try {
      hidden = localStorage.getItem(HIDE_KEY) === today();
    } catch {}
    if (!hidden) setOpen(true);
  }, []);

  // 팝업이 떠 있는 동안 뒤 화면 스크롤 막기 (PC는 스크롤바가 사라지며 화면이 밀리지 않게 그 폭만큼 여백 보정)
  useEffect(() => {
    if (!open || review) return;
    const html = document.documentElement, body = document.body;
    const gap = window.innerWidth - html.clientWidth;
    const prev = [html.style.overflow, body.style.overflow, body.style.paddingRight];
    html.style.overflow = "hidden";
    body.style.overflow = "hidden";
    if (gap > 0) body.style.paddingRight = `${gap}px`;
    return () => {
      [html.style.overflow, body.style.overflow, body.style.paddingRight] = prev;
    };
  }, [open, review]);

  // Esc 키로 닫기
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  if (!open || review) return null;

  const hideToday = () => {
    try {
      localStorage.setItem(HIDE_KEY, today());
    } catch {}
    setOpen(false);
  };

  return (
    <div className="event-popup" role="dialog" aria-modal="true" aria-label="가입환영 쿠폰 안내">
      {/* 바깥 어두운 배경을 누르면 닫힘 */}
      <div className="event-popup-dim" onClick={() => setOpen(false)} />
      <div className="event-popup-box">
        <a className="event-popup-card" href={LINK} onClick={() => setOpen(false)}>
          <img src="/popup_ui.png" alt="COUPON" />
          <p className="event-popup-text">가입환영 이마트 &amp; 몰리스 쿠폰을 드려요</p>
        </a>
        <div className="event-popup-actions">
          <button type="button" onClick={hideToday}>
            오늘 그만보기
          </button>
          <span className="event-popup-bar" aria-hidden="true" />
          <button type="button" onClick={() => setOpen(false)}>
            닫기
          </button>
        </div>
      </div>
    </div>
  );
}
