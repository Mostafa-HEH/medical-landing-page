import Link from "next/link";

const Services = () => {
  return (
    <div>
      <h1>This services page</h1>
      This page isn't completed because of "this it just for practice project"
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
