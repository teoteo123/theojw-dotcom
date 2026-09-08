export function Placeholder({
  height = 260,
  caption = "Photograph, not supplied with this design system",
}: {
  height?: number;
  caption?: string;
}) {
  return (
    <div className="ph" style={{ height }}>
      <div className="ph__cap">{caption}</div>
    </div>
  );
}
