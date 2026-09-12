import { useEffect, useState, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X, ArrowUpRight, Sparkles, Compass, Heart, Layers } from "lucide-react";
import { primaryNav, workMegaMenu, site } from "../data/site";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [workOpen, setWorkOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const navRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Dynamic subtle spotlight effect on mouse move
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!navRef.current) return;
    const rect = navRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setWorkOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 p-3 lg:p-5 transition-all duration-300">
      <div
        ref={navRef}
        onMouseMove={handleMouseMove}
        className={`relative mx-auto max-w-7xl rounded-full border transition-all duration-500 ease-out ${
          scrolled || mobileOpen
            ? "border-[var(--color-line-strong)] bg-[var(--color-bg-alt)]/90 shadow-2xl backdrop-blur-xl py-3 px-6"
            : "border-[var(--color-line)] bg-[var(--color-bg-alt)]/60 backdrop-blur-md py-4 px-8"
        }`}
      >
        {/* Cursor Glow Overlay */}
        <div
          className="pointer-events-none absolute -inset-px rounded-full opacity-0 transition-opacity duration-300 hover:opacity-100"
          style={{
            background: `radial-gradient(350px circle at ${mousePos.x}px ${mousePos.y}px, rgba(45, 106, 79, 0.15), transparent 80%)`,
          }}
        />

        <nav className="relative z-10 flex items-center justify-between" aria-label="Primary">
          {/* Logo with Emerald Pulsing Indicator */}
          <Link
            to="/"
            className="group flex items-center gap-3 font-serif text-2xl font-normal text-[var(--color-ink)] transition-colors hover:text-[var(--color-emerald-glow)]"
          >
            <span className="relative flex h-2.5 w-2.5 items-center justify-center">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-emerald-glow)] opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[var(--color-emerald-glow)] shadow-[0_0_8px_var(--color-emerald-glow)]" />
            </span>
            <span className="tracking-tight transition-transform duration-300 group-hover:translate-x-0.5">
              {site.name}
            </span>
          </Link>

          {/* Floating Pill Navigation */}
          <div className="hidden items-center gap-1.5 rounded-full border border-[var(--color-line)] bg-[var(--color-surface)]/80 p-1.5 backdrop-blur-md lg:flex">
            {primaryNav.map((item) =>
              item.label === "Our Work" ? (
                <div
                  key={item.to}
                  className="relative"
                  onMouseEnter={() => setWorkOpen(true)}
                  onMouseLeave={() => setWorkOpen(false)}
                >
                  <button
                    className={`relative flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                      workOpen
                        ? "bg-[var(--color-emerald-tint)] text-[var(--color-emerald-glow)] shadow-sm"
                        : "text-[var(--color-ink-dim)] hover:text-[var(--color-ink)]"
                    }`}
                    aria-expanded={workOpen}
                  >
                    <Compass
                      size={15}
                      className={`transition-transform duration-300 ${
                        workOpen ? "rotate-45 text-[var(--color-emerald-glow)]" : ""
                      }`}
                    />
                    {item.label}
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-300 ${workOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  {/* Mega Menu Dropdown */}
                  {workOpen && (
                    <div className="absolute left-1/2 top-full w-[480px] -translate-x-1/2 pt-4">
                      <div className="overflow-hidden rounded-2xl border border-[var(--color-line-strong)] bg-[var(--color-bg-alt)]/95 p-4 shadow-2xl backdrop-blur-2xl">
                        <div className="mb-2 flex items-center justify-between px-3 py-1">
                          <span className="text-[11px] font-semibold uppercase tracking-wider text-[var(--color-emerald-glow)]">
                            Featured Initiatives
                          </span>
                          <Sparkles size={13} className="text-[var(--color-emerald-glow)]" />
                        </div>
                        <div className="grid grid-cols-1 gap-1.5">
                          {workMegaMenu.map((sub) => (
                            <Link
                              key={sub.to}
                              to={sub.to}
                              className="group relative flex items-center justify-between rounded-xl border border-transparent p-3 transition-all duration-200 hover:border-[var(--color-line)] hover:bg-[var(--color-surface)] hover:pl-4"
                            >
                              <div className="flex items-center gap-3">
                                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[var(--color-line)] bg-[var(--color-emerald-tint)] text-[var(--color-emerald-glow)] transition-colors group-hover:bg-[var(--color-emerald-glow)] group-hover:text-[var(--color-bg)]">
                                  <Layers size={18} />
                                </div>
                                <div>
                                  <span className="block text-sm font-semibold text-[var(--color-ink)] transition-colors group-hover:text-[var(--color-emerald-glow)]">
                                    {sub.label}
                                  </span>
                                  <span className="line-clamp-1 text-xs text-[var(--color-ink-dim)]">
                                    {sub.description}
                                  </span>
                                </div>
                              </div>
                              <ArrowUpRight
                                size={16}
                                className="shrink-0 text-[var(--color-ink-faint)] transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--color-emerald-glow)]"
                              />
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `relative rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? "bg-[var(--color-emerald-glow)] text-[var(--color-bg)] shadow-md shadow-[var(--color-emerald-glow)]/20"
                        : "text-[var(--color-ink-dim)] hover:text-[var(--color-ink)]"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              )
            )}
          </div>

          {/* Primary Action Button & Mobile Menu Trigger */}
          <div className="flex items-center gap-3">
            <Link
              to="/get-involved"
              className="group relative hidden overflow-hidden rounded-full border border-[var(--color-emerald-glow)]/30 bg-[var(--color-emerald-glow)] px-6 py-2.5 text-sm font-medium text-[var(--color-bg)] shadow-lg transition-all duration-300 hover:border-[var(--color-emerald-glow)] hover:bg-[var(--color-emerald-glow)]/90 hover:shadow-[0_0_20px_rgba(45,106,79,0.3)] active:scale-95 lg:inline-flex"
            >
              <span className="relative z-10 flex items-center gap-2">
                Get Involved
                <Heart size={14} className="transition-transform duration-300 group-hover:scale-125 group-hover:fill-current" />
              </span>
            </Link>

            <button
              className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-line)] bg-[var(--color-surface)] text-[var(--color-ink)] transition-colors hover:bg-[var(--color-surface-hover)] lg:hidden"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Fullscreen Mobile Overlay Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 flex flex-col justify-between bg-[var(--color-bg)]/98 px-6 pb-8 pt-28 backdrop-blur-3xl lg:hidden">
          <div className="space-y-6 overflow-y-auto">
            <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-emerald-glow)]">
              Navigation
            </span>
            <ul className="flex flex-col gap-1">
              {primaryNav.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      `flex items-center justify-between border-b border-[var(--color-line)] py-3 font-serif text-2xl font-normal transition-colors ${
                        isActive ? "text-[var(--color-emerald-glow)]" : "text-[var(--color-ink)]"
                      }`
                    }
                  >
                    {item.label}
                    <ArrowUpRight size={20} className="text-[var(--color-ink-faint)]" />
                  </NavLink>
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-emerald-glow)]">
                Quick Access
              </span>
              <div className="mt-3 grid grid-cols-2 gap-2">
                {workMegaMenu.slice(0, 4).map((sub) => (
                  <Link
                    key={sub.to}
                    to={sub.to}
                    className="rounded-xl border border-[var(--color-line)] bg-[var(--color-surface)] p-3 text-sm font-medium text-[var(--color-ink-dim)] hover:text-[var(--color-ink)]"
                  >
                    {sub.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link
            to="/get-involved"
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-[var(--color-emerald-glow)] py-4 text-center font-medium text-[var(--color-bg)] shadow-xl active:scale-98"
          >
            Get Involved
            <Heart size={18} className="fill-current" />
          </Link>
        </div>
      )}
    </header>
  );
}