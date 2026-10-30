"use client";

import { useEffect, useState } from "react";
import useReview from "../../components/useReview";
import { NOTICES } from "./noticeData";

// 공지사항: 일반 게시판 형식 (목록: 번호·제목·등록일 → 제목을 누르면 글 보기 → 목록으로)
// 글 내용은 noticeData.js 에서 관리 (RSS와 공유)

export default function NoticeList() {
  const [view, setView] = useState(null); // 보고 있는 글 번호 (null = 목록)

  // 주소에 ?no=글번호 가 있으면 그 글을 바로 열기 (예: 메인 팝업 → /support/notice/?no=1)
  useEffect(() => {
    const no = Number(new URLSearchParams(location.search).get("no"));
    const i = NOTICES.length - no;
    if (no && i >= 0 && i < NOTICES.length) setView(i);
  }, []);

  // 목록으로 돌아갈 때 주소의 ?no= 도 지움 (새로고침 시 다시 글이 열리지 않게)
  const backToList = () => {
    setView(null);
    if (location.search) history.replaceState(null, "", location.pathname);
  };
  const review = useReview(); // 심의용 캡처 모드: 목록 아래에 모든 글 본문을 이어서 보여줌

  // 글 보기
  if (view !== null) {
    const n = NOTICES[view];
    return (
      <article className="board-view">
        <header className="board-view-head">
          <h3>{n.title}</h3>
          <p className="board-meta">
            <span>{n.date}</span>
          </p>
        </header>
        <div className="board-view-body notice-body">{n.body}</div>
        <div className="board-view-foot">
          <button type="button" className="board-btn" onClick={backToList}>
            목록
          </button>
        </div>
      </article>
    );
  }

  // 목록
  return (
    <div className="board">
      <p className="board-count">
        전체 <strong>{NOTICES.length}</strong>건
      </p>
      <table className="board-table">
        <thead>
          <tr>
            <th scope="col" className="board-no">번호</th>
            <th scope="col">제목</th>
            <th scope="col" className="board-date">등록일</th>
          </tr>
        </thead>
        <tbody>
          {/* 번호 1번(가장 오래된 글)부터 위에서 아래로 */}
          {NOTICES.map((n, i) => ({ n, i })).reverse().map(({ n, i }) => (
            <tr key={n.title}>
              <td className="board-no">{NOTICES.length - i}</td>
              <td className="board-title">
                <button type="button" onClick={() => { setView(i); window.scrollTo({ top: 0, behavior: "smooth" }); }}>
                  {n.title}
                </button>
              </td>
              <td className="board-date">{n.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {review &&
        [...NOTICES].reverse().map((n) => (
          <article key={n.title} className="board-view board-review">
            <header className="board-view-head">
              <h3>{n.title}</h3>
              <p className="board-meta">
                <span>{n.date}</span>
              </p>
            </header>
            <div className="board-view-body notice-body">{n.body}</div>
          </article>
        ))}
    </div>
  );
}
