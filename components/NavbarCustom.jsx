import React, { useState, useMemo, useContext } from "react";
import {
  Navbar,
  Button,
  Link,
  Text,
  useTheme,
  Image,
  Dropdown,
} from "@nextui-org/react";
import { UiContext } from "../context/ui";
const NavbarCustom = () => {
  const { language, setLanguage } = useContext(UiContext);

  return (
    <Navbar variant="sticky" className="navegacion">
      <Navbar.Content hideIn="xs" variant="underline" css={{ maxH: "50px" }}>
        <Navbar.Link href="tel: (787)279-1555" css={{ gap: "10px" }}>
          <Image
            src="/icons/phone.svg"
            alt="icono-phone"
            width={16}
            height={16}
          />
          (787)279-1555
        </Navbar.Link>
        <Navbar.Link
          href="mailto:miraflorestire@gmail.com"
          css={{ gap: "10px" }}
        >
          <Image
            src="/icons/mail.svg"
            alt="icono-mail"
            width={16}
            height={16}
          />
          miraflorestire@gmail.com
        </Navbar.Link>
        <Navbar.Link href="#map" css={{ gap: "10px" }}>
          <Image src="/icons/map.svg" alt="icono-map" width={16} height={16} />
          Bayamon, Puerto Rico
        </Navbar.Link>
      </Navbar.Content>

      <Navbar.Content hideIn="xs" variant="underline">
        <Dropdown>
          <Dropdown.Button flat css={{ "&:hover": { color: "white" } }}>
            {language == "en" ? "English" : "Español"}
          </Dropdown.Button>
          <Dropdown.Menu
            aria-label="Static Actions"
            disallowEmptySelection
            selectionMode="single"
            selectedKeys={language}
            onSelectionChange={setLanguage}
            css={{
              bg: "linear-gradient(115.46deg, #FA1519 27.4%, #2F0604 78.94%);",
            }}
          >
            <Dropdown.Item key="en">English</Dropdown.Item>
            <Dropdown.Item key="es">Español</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Navbar.Content>
    </Navbar>
  );
};

export default NavbarCustom;
