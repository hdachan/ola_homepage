"use client";

import { useEffect, useState } from "react";

// 심의용 캡처 모드: 주소 뒤에 ?review=1 을 붙이면 true
// (숨겨진 탭·글 본문까지 모두 펼쳐 보여주는 용도, 일반 방문자 화면에는 영향 없음)
export default function useReview() {
  const [review, setReview] = useState(false);
  useEffect(() => {
    setReview(new URLSearchParams(window.location.search).get("review") === "1");
  }, []);
  return review;
}
