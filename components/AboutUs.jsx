import { Container, Row, Text } from "@nextui-org/react";
import React, { useContext } from "react";
import { UiContext } from "./../context/ui/uiContext";

const AboutUs = () => {
  const { language } = useContext(UiContext);
  return (
    <Container
      fluid
      css={{ bg: "#141414", width: "100%", p: 0, m: 0, mw: "100%", h: "357px" }}
    >
      <Row css={{ display: "flex", flexDirection: "column" }}>
        <Text h1 color="white" className="about-title">
          About
        </Text>
        <Text h2 color="white" className="about-subtitle">
          US
        </Text>
        <Text color="white" css={{ maxW: "432px" }} className="about-p">
          At BISITIRES, you can buy good quality tires that will guarantee you
          the safe driving you need for your vehicle and at an unbeatable price.
          We have a large catalog where you are bound to find what you are
          looking for. Among our stock you will find passenger vehicle tires
          suitable for your use of your car at the ideal size.
        </Text>
      </Row>
    </Container>
  );
};

export default AboutUs;
