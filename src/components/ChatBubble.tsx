type Props = {
  text?: string;
  showCursor?: boolean;
  fullScreen?: boolean;
};

export default function ChatBubble({
  text = `const engineer = "Affif Chowdhury";\n\nbuild({ stack: "full-stack" });\n\nwhile (learning) solve(problem);`,
  showCursor = true,
  fullScreen = true,
}: Props) {
  return (
    <div className={fullScreen ? "chat-bg" : ""}>
      <div className="chat-wrapper">
        <div
          className="chat-bubble"
          role="region"
          aria-label="Floating code bubble"
        >
          <pre className="chat-pre" aria-live="polite">
            {text}
            {showCursor && <span className="typing-cursor" />}
          </pre>
        </div>
      </div>
    </div>
  );
}
