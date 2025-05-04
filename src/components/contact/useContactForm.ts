import { useRef, useState } from "react";

export default function useContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(false);

    const formData = new FormData(formRef.current!);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      setSent(true);
      formRef.current?.reset();
    } else {
      setError(true);
    }
  };

  return { sent, error, formRef, handleSubmit };
}
