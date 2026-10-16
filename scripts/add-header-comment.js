// 빌드 후(out/) 모든 HTML 맨 위에 제작 정보 주석을 넣음 (F12 개발자도구에서 가장 위에 보임)
// npm run build 가 끝나면 자동 실행됨 (package.json 의 postbuild)
const fs = require("fs");
const path = require("path");

const COMMENT = `<!-- 
/**
 * 페이지명 : 올라펫보험
 * 작성자 : DOHO Entertainment(Otis K & Chris H)
 * 작성일 : 2026.10.16. 
 *
 */
 -->
`;

const OUT = path.join(__dirname, "..", "out");

function walk(dir) {
  for (const name of fs.readdirSync(dir)) {
    const file = path.join(dir, name);
    if (fs.statSync(file).isDirectory()) walk(file);
    else if (name.endsWith(".html")) {
      const html = fs.readFileSync(file, "utf8");
      if (!html.startsWith("<!-- ")) fs.writeFileSync(file, COMMENT + html);
    }
  }
}

if (fs.existsSync(OUT)) walk(OUT);
