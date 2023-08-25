import { useEffect, useState } from "react";
import HomeLoading from "./components/Homepage/HomeLoading";
import HomePage from "./components/Homepage/HomePage";
import NavBar from "./components/Navbar/NavBar";
import HomeError from "./components/Homepage/HomeError";

const KEY = "39005119-efc4e36874eafd1fe0ee1ac91";

export default function App() {
  const [walls, setWalls] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://pixabay.com/api/?key=${KEY}&q=moon&image_type=photo`)
      .then((res) => res.json())
      .then((data) => console.log(data.hits))
      .catch((err) => {
        setIsError(true);
        console.log(err);
      });
    setIsLoading(false);
  }, []);

  return (
    <>
      <NavBar />
      {/* <HomePage /> */}
      {isLoading ? <HomeLoading /> : isError ? <HomeError /> : ""}
    </>
  );
}
