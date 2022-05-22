import Wrapper from "../../layouts/wrapper";
import Contact from "./contact";

import classes from "./styles.module.css";

const ContactSection = () => {
  const contactsData = [
    { id: 1, name: "Call Us", contact: "(080) 123 456 7890" },
    { id: 2, name: "Email", contact: "care@domain.com" },
    { id: 3, name: "Address", contact: "72, Wallstreet, NY 20110" },
    { id: 4, name: "WEBSITE", contact: "www.domain.com" },
  ];

  return (
    <section className={classes.container}>
      <Wrapper>
        {contactsData.map(({ id, name, contact }) => (
          <Contact key={id} name={name} contact={contact} />
        ))}
      </Wrapper>
    </section>
  );
};

export default ContactSection;
