import { SITE_URL } from "../site";
import { NOTICES } from "../support/[slug]/noticeData";

// RSS 피드 (/rss.xml): 공지사항 새 글을 검색엔진·구독기에 알림. 빌드할 때 파일로 만들어짐
export const dynamic = "force-static";

const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
// "2026.10.07" → RSS 날짜 형식 (한국시간 오전 9시)
const rssDate = (d) => new Date(`${d.replace(/\./g, "-")}T09:00:00+09:00`).toUTCString();

export function GET() {
  const items = NOTICES.map((n, i) => {
    const link = `${SITE_URL}/support/notice/?no=${NOTICES.length - i}`;
    return `    <item>
      <title>${esc(n.title)}</title>
      <link>${esc(link)}</link>
      <guid isPermaLink="true">${esc(link)}</guid>
      <description>${esc(n.summary)}</description>
      <pubDate>${rssDate(n.date)}</pubDate>
    </item>`;
  }).join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>올라펫보험 공지사항</title>
    <link>${SITE_URL}/support/notice/</link>
    <description>이마트 몰리스와 DB손해보험이 함께하는 올라펫보험의 새 소식과 이벤트</description>
    <language>ko</language>
    <atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml" />
    <lastBuildDate>${NOTICES.length ? rssDate(NOTICES[0].date) : new Date().toUTCString()}</lastBuildDate>
${items}
  </channel>
</rss>
`;
  return new Response(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } });
}
