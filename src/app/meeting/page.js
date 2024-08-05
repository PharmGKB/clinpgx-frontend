import Link from "next/link";

export default function Meetings() {
  return (
    <main className="container">
      <h1>Meetings</h1>
      <ul>
        <li><Link href="/meeting/2024">ClinPGx Meeting 2024</Link></li>
      </ul>
    </main>
  );
}