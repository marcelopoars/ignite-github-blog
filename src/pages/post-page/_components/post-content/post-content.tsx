import Markdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

import { Spinner } from "../../../../components";

import { PostContentContainer } from "./styles";

interface PostContentProps {
  content: string;
  isLoading: boolean;
}

export function PostContent({ content, isLoading }: PostContentProps) {
  return (
    <PostContentContainer>
      {isLoading ? (
        <Spinner />
      ) : (
        <Markdown
          children={content}
          components={{
            code({ className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || "");
              return match ? (
                <SyntaxHighlighter
                  PreTag="div"
                  children={String(children).replace(/\n$/, "")}
                  language={match[1]}
                  style={dracula}
                  wrapLines
                  wrapLongLines
                  showLineNumbers
                />
              ) : (
                <code {...props} className={className}>
                  {children}
                </code>
              );
            },
          }}
        />
      )}
    </PostContentContainer>
  );
}
