import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <nav>
        <Link href="/" className="logo">
          logo
        </Link>
        <ul className="nav-links">
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
          <li>
            <Link href="tel:1800789123">
              <span>1800 789 123</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HomePage;
