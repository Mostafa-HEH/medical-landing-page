import Link from "next/link";

const Features = () => {
  return (
    <div>
      <h1>This features page</h1>
      This page isn'&apos; completed because of &quot;this it just for practice
      project&quot;
      <h1>Featurs</h1>
      <ul>
        <li>
          <Link href="/features/50copon/1">50% Discount</Link>
        </li>
        <li>
          <Link href="/features/70newuser/3">70% Discount for new user</Link>
        </li>
      </ul>
    </div>
  );
};

export default Features;
