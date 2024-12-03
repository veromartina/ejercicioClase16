import { VStack, Heading, Button, Text, HStack } from "@chakra-ui/react";
import { useState } from "react";

export const Count = ()=> {
  const [count, setCount] = useState(Number(localStorage.getItem("count")));

  const increment = () => {
    setCount((prev) => prev + 1);
    localStorage.setItem("count", count + 1);
  };

  const decrement = () => {
    setCount((prev) => prev - 1);
    localStorage.setItem("count", count - 1);
  };

  const reset = () => {
    setCount(0);
    localStorage.setItem("count", 0);
  };
  return (
    <VStack minH="100vh" spacing={20} justifyContent="center">
      <Heading>Clase 16</Heading>
      <HStack>
        <Button onClick={increment} colorScheme="green">
          +
        </Button>
        <Text fontSize="3xl">{count}</Text>
        <Button onClick={decrement} colorScheme="red">
          -
        </Button>
      </HStack>
      <Button onClick={reset} colorScheme="gray">
        Reset
      </Button>
    </VStack>
  );
}