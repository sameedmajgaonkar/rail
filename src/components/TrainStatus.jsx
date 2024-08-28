import React from "react";
import {
  Input,
  InputLeftAddon,
  InputGroup,
  CardBody,
  Card,
  HStack,
  Button,
} from "@chakra-ui/react";
import { FaTrain } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
const TrainStatus = () => {
  const ref = React.createRef();

  return (
    <Card>
      <CardBody>
        <HStack>
          <InputGroup>
            <InputLeftAddon>
              <FaTrain />
            </InputLeftAddon>
            <Input placeholder="Enter Train Name or Train Number" />
            <Input type="date" ref={ref} />
          </InputGroup>
          <Button
            leftIcon={<FaSearch />}
            onClick={() => console.log(ref.current.value)}
          >
            Search
          </Button>
        </HStack>
      </CardBody>
    </Card>
  );
};

export default TrainStatus;
