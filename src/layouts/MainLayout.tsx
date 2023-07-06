import { useEffect, useState } from "react";
import { Link as RRDLink, useLocation } from "react-router-dom";
import { Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { Header, Link, NavigationIndicator } from "../components";
import { RoutePath } from "../router/RouterManager";

export const MainLayout = () => {
  const location = useLocation();
  const [isNavigating, setIsNavigating] = useState(false);

  useEffect(() => {
    setIsNavigating(false);
    return () => {
      setIsNavigating(true);
    };
  }, [location]);

  return (
    <Flex w='100vw' h='100vh' flexDirection='column' bg='white'>
      <Header
        leftContent={
          <Link as={RRDLink} to={RoutePath.PodcastList}>
            Podcaster
          </Link>
        }
        rightContent={<NavigationIndicator isNavigating={isNavigating} />}
      />
      <Outlet />
    </Flex>
  );
};
