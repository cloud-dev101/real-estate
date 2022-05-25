import Link from "next/link";
import Image from "next/image";
import { Box } from "@chakra-ui/react";
import brandLogo from "../assets/images/logo/logo-sm.png";

const Logo = () => {
  return (
    <Box cursor="pointer">
      <Link href="/">
        <Image src={brandLogo} height="60" width="150px" alt="brand logo" />
      </Link>
    </Box>
  );
};

export default Logo;
