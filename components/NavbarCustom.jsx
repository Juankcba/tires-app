import React, { useState, useMemo } from "react";
import {
  Navbar,
  Button,
  Link,
  Text,
  useTheme,
  Image,
  Dropdown,
} from "@nextui-org/react";
const NavbarCustom = () => {
  const [languaje, setLanguaje] = useState(["en"]);

  const selectedValue = useMemo(
    () => Array.from(languaje).join(", ").replaceAll("_", " "),
    [languaje]
  );

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
        <Dropdown onChange={(e) => console.log(e)}>
          <Dropdown.Button flat css={{ "&:hover": { color: "white" } }}>
            {selectedValue == "en" ? "English" : "Español"}
          </Dropdown.Button>
          <Dropdown.Menu
            aria-label="Static Actions"
            disallowEmptySelection
            selectionMode="single"
            selectedKeys={languaje}
            onSelectionChange={setLanguaje}
            css={{
              bg: "linear-gradient(to right, #FB7C35, #FB6535)",
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
