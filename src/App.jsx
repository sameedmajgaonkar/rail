import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import TrainsBetween from "./components/TrainsBetween";

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<TrainsBetween />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
