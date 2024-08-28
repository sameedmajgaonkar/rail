import React from "react";
import {
  Card,
  Text,
  CardBody,
  VStack,
  StackDivider,
  Icon,
  HStack,
  Box,
} from "@chakra-ui/react";
import { FaTrain } from "react-icons/fa";
const TrainDataCards = ({ trainData }) => {
  return (
    <VStack
      divider={<StackDivider borderColor="gray.200" />}
      spacing={4}
      padding={4}
      align="stretch"
    >
      {trainData.data.map((d) => (
        <Card padding={5}>
          <CardBody>
            <HStack>
              <Box>
                <Icon as={FaTrain} />
                <Text>12490</Text>
              </Box>
              <Box></Box>
            </HStack>
          </CardBody>
        </Card>
      ))}
    </VStack>
  );
};

export default TrainDataCards;
