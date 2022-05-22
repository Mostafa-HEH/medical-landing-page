import Wrapper from "../../wrapper";
import LinkGroup from "./link-group";

import InstagramIcon from "../../../icons/instagram";
import TwitterIcon from "../../../icons/twitter";
import FacebookIcon from "../../../icons/facebook";

import classes from "./styles.module.css";

const Links = () => {
  return (
    <main className={classes.container}>
      <Wrapper>
        <LinkGroup
          head="RELATED LINKS"
          links={[
            { id: 1, name: "About Us", route: "#" },
            { id: 2, name: "Meet the Team", route: "#" },
            { id: 3, name: "Careers", route: "#" },
            { id: 4, name: "In the Press", route: "#" },
          ]}
        />
        <LinkGroup
          head="Features"
          links={[
            { id: 1, name: "Register", route: "#" },
            { id: 2, name: "Convenience Fee", route: "#" },
            { id: 3, name: "App Store", route: "#" },
            { id: 4, name: "Webhooks", route: "#" },
          ]}
        />
        <LinkGroup
          head="OTHER LINKS"
          links={[
            { id: 1, name: "Become a Partner", route: "#" },
            { id: 2, name: "Pricing", route: "#" },
            { id: 3, name: "Affiliate", route: "#" },
            { id: 4, name: "WebhooPrivacyks", route: "#" },
          ]}
        />
        <div>
          <LinkGroup
            head="ABOUT US"
            other={
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                et purus a odio finibus bibendum in sit amet leo. Mauris feugiat
                erat tellus.
              </p>
            }
          />
          <LinkGroup
            head="SOCIAL"
            links={[
              { id: 1, name: () => <FacebookIcon />, route: "#", isIcon: true },
              { id: 2, name: () => <TwitterIcon />, route: "#", isIcon: true },
              {
                id: 3,
                name: () => <InstagramIcon />,
                route: "#",
                isIcon: true,
              },
            ]}
          />
        </div>
      </Wrapper>
    </main>
  );
};

export default Links;
