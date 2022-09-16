import { HeaderLink } from "components/atoms/HeaderLink";
import { useRouter } from "next/dist/client/router";

export const HeaderLinks = () => {
  const router = useRouter();

  return <HeaderLink onClick={() => router.push("/")} name="Home" />;
};
