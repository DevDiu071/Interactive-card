type Error = {
  error: string;
};

export default function ErrorComponent({ error }: Error) {
  return <p className="text-xs text-Red mt-1 font-semibold">{error}</p>;
}
