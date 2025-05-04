export default function ContactStatus({
  sent,
  error,
}: {
  sent: boolean;
  error: boolean;
}) {
  if (sent)
    return (
      <p className="text-green-400 text-lg text-center">
        Thanks! I&apos;ll be in touch soon.
      </p>
    );

  if (error)
    return (
      <p className="text-red-400 text-lg text-center">
        Something went wrong. Please try again later.
      </p>
    );

  return null;
}
