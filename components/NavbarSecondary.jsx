import {
  Container,
  Grid,
  Image,
  Link,
  Navbar,
  Row,
  Text,
} from "@nextui-org/react";
import React from "react";

const NavbarSecondary = () => {
  return (
    <Container
      css={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        "@smMin": {
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "space-between",
        },
      }}
    >
      <Row css={{ maxW: "200px" }}>
        <Image src={"/img/logo.svg"} alt={"logo"} width={150} height={99} />
      </Row>
      <Row
        css={{
          gap: "10px",
          margin: "0 auto",
          justifyContent: "center",

          "@smMin": { display: "none" },
        }}
      >
        <Link href="tel: (787)279-1555" css={{ color: "#000000" }}>
          (787)279-1555
        </Link>
        <Text span>/</Text>
        <Link href="mailto:miraflorestire@gmail.com" css={{ color: "#000000" }}>
          miraflorestire@gmail.com
        </Link>
      </Row>

      <Grid.Container
        css={{
          gap: "30px",
          maxW: "374px",
          "@smMax": {
            display: "none",
          },
        }}
      >
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
