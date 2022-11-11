import { Button, Container, Grid, Image, Row, Text } from "@nextui-org/react";
import React from "react";
import NavbarSecondary from "./NavbarSecondary";

const SectionHome = () => {
  return (
    <Container fluid className="container-bg">
      <NavbarSecondary />
      <Grid.Container
        css={{
          display: "flex",
          alignContent: "flex-end",
          height: "85%",
        }}
      >
        <Grid sm={6}>
          <Image
            src={"/img/tires.png"}
            alt="imagen de tires"
            width={626}
            height={414}
            css={{ pt: "70px" }}
          />
        </Grid>
        <Grid sm={6}>
          <Row
            css={{
              display: "flex",
              flexDirection: "column",
              maxWidth: "432px",
            }}
          >
            <Text h1 className="title-home">
              Used Tires
            </Text>
            <Text h2 className="subtitle-home">
              At very Affordable Prices
            </Text>
            <Text className="p-home">
              Without tires, no travel by car or motorbike. Vehicle tires must
              be in good condition and suitable for the type of road. When the
              time comes to change them, sometimes even in an emergency if you
              have a flat tire, you often have to seek a tire sales professional
              quickly. We would like him to be able to offer us a wide range of
              tires at reasonable prices.
            </Text>
            <Button className="btn-primary">Contact us</Button>
          </Row>
        </Grid>
      </Grid.Container>
    </Container>
  );
};

export default SectionHome;
