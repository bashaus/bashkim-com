import { useColorScheme } from "@mui/material/styles";
import { Highlight, HighlightProps, themes } from "prism-react-renderer";

import * as S from "./styles";

export type CodeHighlightProps = Readonly<{
  code: HighlightProps["code"];
  language?: HighlightProps["language"];
}>;

export default function CodeHighlight({
  code,
  language = "tsx",
}: CodeHighlightProps) {
  const theme = useColorScheme();

  return (
    <Highlight
      theme={theme.mode === "dark" ? themes.vsDark : themes.vsLight}
      code={code}
      language={language}
    >
      {({ style, tokens, getLineProps, getTokenProps }) => (
        <S.Preformatted style={style}>
          <code>
            {tokens.map((line, i) => {
              const lineIndex = `lineIndex-${i}`;
              return (
                <div key={lineIndex} {...getLineProps({ line })}>
                  {line.map((token, key) => {
                    const tokenKey = `token-${key}`;
                    return (
                      <span key={tokenKey} {...getTokenProps({ token })} />
                    );
                  })}
                </div>
              );
            })}
          </code>
        </S.Preformatted>
      )}
    </Highlight>
  );
}
