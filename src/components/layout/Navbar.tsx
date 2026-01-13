import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../../hooks/useTheme";
import { Menu, X, Sun, Moon } from "lucide-react";
import { cn } from "../../lib/utils";
import { Button } from "../ui/Button";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Resume", path: "/resume" },
    { name: "Blog", path: "/blog" },
    { name: "About Me", path: "/about-me" },
  ];

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <div className={styles.flexContainer}>
          {/* Logo */}
          <div className={styles.logoContainer}>
            <Link to="/" className={styles.logo}>
              &lt;SNB /&gt;
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className={styles.desktopNav}>
            <div className={styles.desktopNavInner}>
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={cn(
                    styles.link,
                    location.pathname === link.path
                      ? styles.linkActive
                      : styles.linkInactive,
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className={styles.mobileMenuBtnContainer}>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className={styles.mobileMenuBtn}
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className={styles.mobileMenu}>
          <div className={styles.mobileMenuInner}>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={cn(
                  styles.mobileLink,
                  location.pathname === link.path
                    ? styles.linkActive
                    : styles.linkInactive,
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
