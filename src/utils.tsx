import React from "react"; // Keep this import as JSX is used

// Simple syntax highlighter
export function colorize(line: string) {
  const parts: React.ReactNode[] = [];
  const keyword = /\b(const|let|var)\b/g;
  const string = /"[^"]*"/g;
  const bracket = /[{}[\]]/g;

  let last = 0;
  const tokens: { index: number; end: number; type: string; text: string }[] =
    [];

  for (const re of [keyword, string, bracket]) {
    re.lastIndex = 0;
    let m;
    while ((m = re.exec(line)) !== null) {
      tokens.push({
        index: m.index,
        end: m.index + m[0].length,
        type: re === keyword ? "keyword" : re === string ? "string" : "bracket",
        text: m[0],
      });
    }
  }
  tokens.sort((a, b) => a.index - b.index);

  const colorMap: Record<string, string> = {
    keyword: "#8B5CF6",
    string: "#10B981",
    bracket: "#3B82F6",
  };

  for (const t of tokens) {
    if (t.index < last) continue;
    parts.push(
      <span key={last} style={{ color: "#94A3B8" }}>
        {line.slice(last, t.index)}
      </span>,
    );
    parts.push(
      <span key={t.index} style={{ color: colorMap[t.type] }}>
        {t.text}
      </span>,
    );
    last = t.end;
  }
  parts.push(
    <span key="end" style={{ color: "#94A3B8" }}>
      {line.slice(last)}
    </span>,
  );
  return parts;
}
