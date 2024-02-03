import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const PromotionsCard = ({
  banner,
  title,
  description,
  details,
  applicable,
}) => {
  const { selectedLanguage } = useContext(AuthContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div className=" flex justify-center">
      <Card width="full" className="shadow-lg">
        <CardBody>
          <Image
            src={banner}
            alt="banner"
            borderRadius="lg"
            className="w-full h-60"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">{title}</Heading>
            <Text>{description}</Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="2">
            <Button onClick={onOpen} variant="solid" colorScheme="blue">
              {selectedLanguage === "en" ? " Details" : "বিস্তারিত"}
            </Button>
            {applicable && (
              <Button
                border="2px"
                borderColor="blue.500"
                variant="outline"
                colorScheme="blue"
              >
                {selectedLanguage === "en" ? "Apply Now" : "এখন আবেদন কর"}
              </Button>
            )}
          </ButtonGroup>
        </CardFooter>
      </Card>
      <>
        <Modal
          closeOnOverlayClick={false}
          isOpen={isOpen}
          onClose={onClose}
          isCentered
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{title}</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>{details}</ModalBody>

            <ModalFooter>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    </div>
  );
};

export default PromotionsCard;
