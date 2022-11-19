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

  const collapseItems = [
    "Features",
    "Customers",
    "Pricing",
    "Company",
    "Legal",
    "Team",
    "Help & Feedback",
    "Login",
    "Sign Up",
  ];

  return (
    <Navbar variant="sticky" className="navegacion">
      <Navbar.Toggle aria-label="toggle navigation" css={{ color: "white" }} />
      <Navbar.Content hideIn="sm" variant="underline" css={{ maxH: "50px" }}>
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

      <Navbar.Content hideIn="sm" variant="underline">
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
      <Navbar.Collapse css={{ top: "50px" }}>
        {collapseItems.map((item, index) => (
          <Navbar.CollapseItem key={item}>
            <Link
              color="inherit"
              css={{
                minWidth: "100%",
              }}
              href="#"
            >
              {item}
            </Link>
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarCustom;
