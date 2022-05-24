import Link from "next/link";

const Services = () => {
  return (
    <div>
      <h1>This services page</h1>
      This page isn&apos;t completed because of &quot;this it just for practice
      project&quot;
      <ul>
        <li>
          <Link href="/services/x-ray">X Ray</Link>
        </li>
        <li>
          <Link href="/services/admissions">Admissions</Link>
        </li>
        <li>
          <Link href="/services/gynecology">Gynecology</Link>
        </li>
      </ul>
    </div>
  );
};

export default Services;
