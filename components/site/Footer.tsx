import Link from "next/link";
import { NAV, CONTACT } from "@/data/site";

export function Footer() {
  return (
    <footer className="ftr">
      <div className="wrap ftr__in">
        <div className="ftr__col" style={{ minWidth: 200 }}>
          <div className="hdr__mark">Theo Wallace</div>
          <div className="ftr__l">Web and AI engineering for small and medium businesses.</div>
        </div>
        <div className="ftr__col">
          <div className="ftr__h">Pages</div>
          {NAV.map((n) => (
            <Link key={n.href} className="ftr__l" href={n.href}>
              {n.label}
            </Link>
          ))}
        </div>
        <div className="ftr__col">
          <div className="ftr__h">Contact</div>
          <a className="ftr__l" href={`mailto:${CONTACT.email}`}>
            {CONTACT.email}
          </a>
          <a className="ftr__l" href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a className="ftr__l" href={CONTACT.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
        <div className="ftr__note">Replies within one business day.</div>
      </div>
    </footer>
  );
}
