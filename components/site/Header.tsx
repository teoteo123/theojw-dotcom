"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ds/Button";
import { IconButton } from "@/components/ds/IconButton";
import { NAV } from "@/data/site";
import { useTheme } from "./ThemeProvider";

export function Header() {
  const pathname = usePathname();
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <header className="hdr">
      <div className="wrap hdr__in">
        <Link className="hdr__mark" href="/" onClick={() => setOpen(false)}>
          Theo&nbsp;Wallace
        </Link>
        <nav className="hdr__nav">
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
        <div className="mnav">
          <div className="mnav__scrim" onClick={() => setOpen(false)} />
          <div className="mnav__panel">
            {NAV.map((n) => (
              <Link key={n.href} className="mnav__link" href={n.href} onClick={() => setOpen(false)}>
                {n.label}
              </Link>
            ))}
            <div className="mnav__cta">
              <Button block size="lg" iconRight="arrow-right" href="/contact" onClick={() => setOpen(false)}>
                Book a call
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
