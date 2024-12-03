import {
    Heading,
    InputGroup,
    VStack,
    InputRightElement,
    Button,
    Input,
  } from "@chakra-ui/react";
  import { useState } from "react";
  import { List } from "./List";
  import { getLocalStorage, setLocalStorage } from "../utils/localStorage";
  
  export const Strings = () => {
    const initialValue = getLocalStorage("strings") || [];
    const [value, setValue] = useState("");
    const [strings, setStrings] = useState(initialValue);
  
    const onDelete = (indexElement) => {
      const deleteStrings = strings.filter((_, index) => index !== indexElement);
      setStrings(deleteStrings);
      setLocalStorage("strings", deleteStrings);
    };
  
  
    const handleClick = () => {
      const newStrings = [...strings, value];
  
      setStrings(newStrings);
      setLocalStorage("strings", newStrings);
    };
  
    return (
      <VStack minH="100vh" spacing={20} justifyContent="center">
        <Heading>Clase 16</Heading>
  
        <InputGroup size="md">
          <Input
            pr="4.5rem"
            type="text"
            placeholder="Ingrese su palabra "
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              Agregar
            </Button>
          </InputRightElement>
        </InputGroup>
  
        <List strings={strings} onDelete={onDelete} />
      </VStack>
    );
  };