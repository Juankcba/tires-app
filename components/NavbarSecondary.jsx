import { Container, Grid, Image, Link, Navbar, Text } from "@nextui-org/react";
import React from "react";

const NavbarSecondary = () => {
  return (
    <Container
      css={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end",
      }}
    >
      <div>
        <Image src={"/img/logo.svg"} alt={"logo"} width={150} height={99} />
      </div>
      <Grid.Container css={{ gap: "30px", maxW: "374px" }}>
        <Grid>
          <Link color href="#" className="link-secondary">
            Home
          </Link>
        </Grid>
        <Grid>
          <Link color href="#" className="link-secondary">
            About us
          </Link>
        </Grid>

        <Grid>
          <Link color href="#" className="link-secondary">
            Services
          </Link>
        </Grid>
        <Grid>
          <Link color href="#" className="link-secondary">
            Contact
          </Link>
        </Grid>
      </Grid.Container>
    </Container>
  );
};

export default NavbarSecondary;
