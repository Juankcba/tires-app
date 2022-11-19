import { Button, Container, Grid, Image, Row, Text } from "@nextui-org/react";
import React, { useContext } from "react";
import { UiContext } from "../context/ui";
import NavbarSecondary from "./NavbarSecondary";

const SectionHome = () => {
  const { language } = useContext(UiContext);
  return (
    <Container fluid className="container-bg">
      <NavbarSecondary />
      <Grid.Container
        css={{
          "@smMin": {
            maxW: "1200px",
            margin: "0 auto",
          },
        }}
      >
        <Grid xs={12} sm={6} css={{ order: 2, "@smMin": { order: 1 } }}>
          <Row
            css={{
              width: "100%",
              height: "100%",
              m: "35px 0 0 auto",
              p: 0,
              maxWidth: "318px",
              "@smMin": {
                display: "none",
              },
            }}
            className="tires-img"
          >
            <Image
              src={"/img/tires-mobile.png"}
              alt="imagen de tires"
              width={"100%"}
              height={211}
              objectFit="contain"
            />
          </Row>
          <Row
            css={{
              width: "100%",
              height: "100%",
              margin: "92px auto 0",
              "@smMax": {
                display: "none",
              },
            }}
          >
            <Image
              src={"/img/tires.png"}
              alt="imagen de tires"
              width={"100%"}
              height={414}
              objectFit="contain"
              objectPosition="center"
            />
          </Row>
        </Grid>
        <Grid
          xs={12}
          sm={6}
          css={{
            order: 1,
            padding: "20px 25px ",

            height: "fit-content",
            "@smMin": { order: 2 },
          }}
        >
          <Row
            css={{
              display: "flex",
              flexDirection: "column",
              maxWidth: "320px",
              width: "100%",
              margin: "0 auto",
              "@smMin": {
                justifyContent: "center",
                alignItems: "center",
                maxWidth: "432px",
              },
            }}
          >
            <Text h1 className="title-home">
              {language == "en" ? "Used Tires" : "Gomas usadas"}
            </Text>
            <Text h2 className="subtitle-home">
              {language == "en"
                ? "At very Affordable Prices"
                : "A precios muy accesibles"}
            </Text>
            <Text className="p-home">
              {language == "en"
                ? "Without tires, no travel by car or motorbike. Vehicle tires must be in good condition and suitable for the type of road. When the time comes to change them, sometimes even in an emergency if you have a flat tire, you often have to seek a tire sales professional quickly. We would like him to be able to offer us a wide range of tires at reasonable prices."
                : "Sin neumáticos, no hay viajes en coche o moto. Los neumáticos del vehículo deben estar en buen estado y adecuados al tipo de carretera. Cuando llega el momento de cambiarlos, a veces incluso en una emergencia si tiene un neumático pinchado, a menudo tiene que buscar un profesional de ventas de neumáticos rápidamente. Nos gustaría que pudiera ofrecernos una amplia gama de neumáticos a precios razonables."}
            </Text>
            <Button className="btn-primary">Contact us</Button>
          </Row>
        </Grid>
      </Grid.Container>
    </Container>
  );
};

export default SectionHome;
