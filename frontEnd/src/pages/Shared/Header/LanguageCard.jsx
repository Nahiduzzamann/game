import React from "react";
import { GrLanguage } from "react-icons/gr";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  RadioGroup,
  Stack,
  Radio,
} from "@chakra-ui/react";

export default function LanguageCard({onChange}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [value, setValue] = React.useState("1");
  return (
    <>
      <div onClick={onOpen} className=" flex gap-2 items-center cursor-pointer">
        <GrLanguage color="#0082D6" size={28} /> {value==="1"?"ENG":"বাংলা"}
      </div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Select Language</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <RadioGroup onChange={setValue} value={value}>
              <Stack spacing={5} direction="row">
                <Radio size={"lg"} colorScheme="blue" value="1">
                  ENGLISH
                </Radio>
                <Radio size={"lg"} colorScheme="blue" value="2">
                  বাংলা
                </Radio>
              </Stack>
            </RadioGroup>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Save
            </Button>
            <Button onClick={onClose} colorScheme={"red"}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
