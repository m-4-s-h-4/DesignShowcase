import React from "react";
import Container from "../../components/base components/Container/Container";

import Link from "../../components/base components/TypographyComponents/Link/Link";
import Flex from "../../components/base components/LayoutComponents/Flex/Flex";
import Divider from "../../components/base components/Divider/Divider";
import Box from "../../components/base components/Primatives/Box/Box";

const Footer: React.FC = () => {
  return (
    <>
      <Container height="auto" paddingTopBottom="SpacingSpacing2">
        <Divider />
        <Box paddingTop="SpacingSpacing2">
          <Flex xAlign="center" gap="SpacingSpacing6">
            {/* LinkedIn Link */}
            <Link
              href="https://www.linkedin.com/in/maria-borovikova-66b117200/"
              target="_blank" // Opens the link in a new tab
              rel="noopener noreferrer" // Security measure when using target="_blank"
            >
              Linkedin
            </Link>

            {/* Email Link */}
            <Link
              href="mailto:maria.borovikova96@gmail.com" // Opens the default mail client
            >
              Email
            </Link>
          </Flex>
        </Box>
      </Container>
    </>
  );
};

export default Footer;
