import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

const PromotionsCard = ({ banner, title, description }) => {
  return (
    <div className=" flex justify-center">
      <Card width="full" className="shadow-lg">
        <CardBody>
          <Image
            src={banner}
            alt="banner"
            borderRadius="lg"
            className="w-full"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">{title}</Heading>
            <Text>{description}</Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="2">
            <Button variant="solid" colorScheme="blue">
              Details
            </Button>
            <Button
              border="2px"
              borderColor="blue.500"
              variant="outline"
              colorScheme="blue"
            >
              Apply Now
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </div>
  );
};

export default PromotionsCard;