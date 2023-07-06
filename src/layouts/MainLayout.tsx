import React from "react";
import { Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

export const MainLayout = () => {
  return (
    <Flex w='100vw' h='100vh' flexDirection='column' bg='white'>
      <h1>Header</h1>
      <Outlet />
    </Flex>
  );
};
