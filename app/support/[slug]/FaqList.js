"use client";

import { useState } from "react";
import { FAQ } from "./faqData";

// 보장내용의 "보상하는 손해" 드롭다운과 같은 디자인(cv-drop): 흰 줄 + 오른쪽 +/− 버튼, 열리면 분홍
export default function FaqList() {
  const [open, setOpen] = useState(null);

  return (
    <div className="cv-drops faq-drops">
      {FAQ.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={f.q} className={`cv-drop${isOpen ? " is-open" : ""}`}>
            <button
              type="button"
              className="cv-drop-head"
              aria-expanded={isOpen}
              aria-controls={`faq-a-${i}`}
              onClick={() => setOpen(isOpen ? null : i)}
            >
              <span className="cv-drop-title">{f.q}</span>
              <span className="cv-drop-toggle" aria-hidden="true">
                <svg width="14" height="14" viewBox="0 0 14 14">
                  <path d="M2 7h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path className="cv-drop-vert" d="M7 2v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </span>
            </button>
            <div className="cv-drop-body" id={`faq-a-${i}`} role="region">
              <div className="cv-drop-inner">
                <div className="cv-drop-content faq-answer">
                  {f.a.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
