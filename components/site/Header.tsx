"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ds/Button";
import { IconButton } from "@/components/ds/IconButton";
import { NAV } from "@/data/site";
import { useTheme } from "./ThemeProvider";

export function Header() {
  const pathname = usePathname();
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <header className={"hdr" + (open ? " hdr--open" : "")}>
      <div className="wrap hdr__in">
        <Link className="hdr__mark" href="/" onClick={() => setOpen(false)}>
          Theo&nbsp;Wallace
        </Link>
        <nav className="hdr__nav" aria-label="Primary">
          {NAV.filter((n) => n.href !== "/").map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className={"hdr__link" + (pathname === n.href ? " hdr__link--on" : "")}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="hdr__right">
          <IconButton
            icon={theme === "dark" ? "sun" : "moon"}
            label={theme === "dark" ? "Light mode" : "Dark mode"}
            onClick={toggle}
          />
          <div className="hdr__cta">
            <Button size="sm" iconRight="arrow-right" href="/contact">
              Book a call
            </Button>
          </div>
          <div className="hdr__burger">
            <IconButton
              icon={open ? "x" : "menu"}
              label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            />
          </div>
        </div>
      </div>

      {open ? (
        <div className="mnav" role="dialog" aria-modal="true" aria-label="Site menu">
          <nav className="mnav__nav" aria-label="Mobile">
            {NAV.map((n, i) => (
              <Link
                key={n.href}
                href={n.href}
                className={"mnav__link" + (pathname === n.href ? " mnav__link--on" : "")}
                style={{ animationDelay: `${40 + i * 35}ms` }}
                onClick={() => setOpen(false)}
              >
                <span className="mnav__label">{n.label}</span>
                {pathname === n.href ? <span className="mnav__here">Here</span> : null}
              </Link>
            ))}
          </nav>
          <div className="mnav__foot">
            <Button block size="lg" iconRight="arrow-right" href="/contact" onClick={() => setOpen(false)}>
              Book a call
            </Button>
            <p className="mnav__note">Thirty minutes. No deck, no obligation.</p>
          </div>
        </div>
      ) : null}
    </header>
  );
}
