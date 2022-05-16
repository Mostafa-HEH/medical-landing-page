import { useState } from "react";
import Link from "next/link";

import PhoneIcon from "../../icons/phone";
import MenuIcon from "../../icons/menu";
import CloseIcon from "../../icons/close";

import classes from "./styles.module.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuIcon = () => {
    setMenuOpen(true);
  };

  const handleCloseMenuIcon = () => {
    setMenuOpen(false);
  };

  return (
    <header className={classes.header}>
      <div className={classes.wrapper}>
        <Link href="/">
          <a className={classes.logo}>
            <img src="/images/logo.png" />
          </a>
        </Link>
        <span className={classes.menuicon} onClick={handleMenuIcon}>
          <MenuIcon />
        </span>
        <nav
          className={`${classes.navlinks} ${menuOpen ? classes.active : null}`}
        >
          <span className={classes.closeicon} onClick={handleCloseMenuIcon}>
            <CloseIcon />
          </span>
          <ul className={classes.links}>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/features">Features</Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/reviews/2022/1">Reviews</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
          <a href="tel:1800789123" className={classes.phone}>
            <PhoneIcon />
            <span>1800 789 123</span>
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
