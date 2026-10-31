import { useEffect, useState } from 'react';

type CopyEmailProps = {
  email: string;
};

export function CopyEmail({ email }: CopyEmailProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timer = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(timer);
  }, [copied]);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  return (
    <span className="copy-wrap">
      <button type="button" className="btn btn-ghost" onClick={copy}>
        Copy email
      </button>
      <span className={`toast ${copied ? 'is-shown' : ''}`.trim()} aria-live="polite">
        {copied ? 'Email copied' : ''}
      </span>
    </span>
  );
}
