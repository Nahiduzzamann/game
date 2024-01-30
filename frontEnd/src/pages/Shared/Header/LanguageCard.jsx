import React, { useContext } from "react";
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
import { AuthContext } from "../../../providers/AuthProvider";

export default function LanguageCard({onChange}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {  handleLanguageChange,selectedLanguage } = useContext(AuthContext);
  return (
    <>
      <div onClick={onOpen} className=" flex gap-2 items-center cursor-pointer">
        <GrLanguage color="#0082D6" size={28} /> {selectedLanguage==="en"?"ENG":"বাংলা"}
      </div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Select Language</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <RadioGroup value={selectedLanguage}>
              <Stack spacing={5} direction="row">
                <Radio size={"lg"} colorScheme="blue" value="en" onClick={()=>{handleLanguageChange('en')}}>
                  ENGLISH
                </Radio>
                <Radio size={"lg"} colorScheme="blue" value="bn" onClick={()=>{handleLanguageChange('bn')}}>
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
