export default function ContactForm({
  formRef,
  onSubmit,
}: {
  formRef: React.RefObject<HTMLFormElement>;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}) {
  return (
    <form
      ref={formRef}
      onSubmit={onSubmit}
      className="w-full max-w-lg p-6 rounded-md shadow-lg space-y-4"
    >
      <input
        type="hidden"
        name="access_key"
        value={process.env.NEXT_PUBLIC_WEB3FORMS_KEY}
      />
      <input type="hidden" name="botcheck" />

      <input
        type="text"
        name="name"
        placeholder="Name"
        required
        className="w-full px-4 py-2 bg-gray-900 text-white placeholder-gray-500 rounded-sm border border-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        required
        className="w-full px-4 py-2 bg-gray-900 text-white placeholder-gray-500 rounded-sm border border-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
      />
      <textarea
        name="message"
        rows={5}
        placeholder="Message"
        required
        className="w-full px-4 py-2 bg-gray-900 text-white placeholder-gray-500 rounded-sm border border-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
      />
      <button
        type="submit"
        className="px-6 py-2 bg-pink-600 hover:bg-pink-700 transition text-white font-semibold rounded-sm border-b-2 border-pink-300"
      >
        SUBMIT
      </button>
    </form>
  );
}
