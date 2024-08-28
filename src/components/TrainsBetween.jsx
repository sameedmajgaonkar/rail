import React, { useEffect, useState } from "react";
import {
  Input,
  CardBody,
  Card,
  HStack,
  Text,
  VStack,
  StackDivider,
} from "@chakra-ui/react";
const TrainsBetween = () => {
  const [toTrain, setToTrain] = useState("");
  const [fromTrain, setFromTrain] = useState("");
  const [date, setDate] = useState("");
  const [trainData, setTrainData] = useState([]);

  useEffect(() => {
    const url = `https://irctc1.p.rapidapi.com/api/v3/trainBetweenStations?fromStationCode=${toTrain}&toStationCode=${fromTrain}&dateOfJourney=${date}`;
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "8fc5373a79msh544b9399b8ff52cp158d92jsn02a2dddf6ffe",
        "x-rapidapi-host": "irctc1.p.rapidapi.com",
      },
    };
    fetch(url, options).then((response) => setTrainData(response.json()));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const ref = React.createRef();
  return (
    <>
      <div className="grid grid-cols-1 xl:grid-cols-1 lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 max-w-lg place-items-center p-8">
        <form className="" onSubmit={handleSubmit}>
          <input
            type="text"
            className="w-full pr-40 bg-gray-200 input input-lg text-black mb-5"
            placeholder="From"
            value={toTrain}
            onChange={(e) => setToTrain(e.target.value)}
          />
          <input
            type="text"
            className="w-full pr-40 bg-gray-200 input input-lg text-black mb-5"
            placeholder="To"
            value={fromTrain}
            onChange={(e) => {
              setFromTrain(e.target.value);
            }}
          />
          <Input
            type="date"
            ref={ref}
            onChange={() => setDate(ref.current.value)}
          />
          <button className="btn">submit</button>
        </form>
      </div>
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
    </>
  );
};

export default TrainsBetween;
