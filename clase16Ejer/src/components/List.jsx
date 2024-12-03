import { Button, Heading, HStack, Text, VStack } from "@chakra-ui/react";
export const List = ({ strings, onDelete }) => {
  return (
    <VStack>
      <Heading>LISTA</Heading>
      {strings.map((string, index) => (

        <HStack  key={index+string}>
            <Text>{string}</Text>
            <Button onClick={()=>onDelete(index)}>ELIMINAR</Button>
        </HStack>
      ))}
    </VStack>
  );
};