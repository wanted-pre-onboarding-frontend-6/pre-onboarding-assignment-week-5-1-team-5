export default function HilightingText({ keyword, text }: { keyword: string; text: string }) {
  return keyword.includes(text) && text !== '' ? (
    <li>
      {keyword.split(text)[0]}
      <span style={{ fontWeight: 'bold' }}>{text}</span>
      {keyword.split(text)[1]}
    </li>
  ) : (
    <li>{keyword}</li>
  );
}
