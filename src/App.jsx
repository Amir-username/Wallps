import { useEffect, useState } from "react";
import HomeLoading from "./components/Homepage/HomeLoading";
import HomePage from "./components/Homepage/HomePage";
import NavBar from "./components/Navbar/NavBar";
import HomeError from "./components/Homepage/HomeError";

const KEY = "39005119-efc4e36874eafd1fe0ee1ac91";

export default function App() {
  const [walls, setWalls] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    // const controller = new AbortController();

    const fetchWalls = async () => {
      fetch(
        `https://pixabay.com/api/?key=${KEY}&q=${search}&image_type=photo`
        // { signal: controller.signal }
      )
        .then((res) => res.json())
        .then((data) => setWalls(data.hits))
        .catch((err) => {
          setIsError(true);
          console.log(err);
        });
    };
    setIsLoading(true);

    fetchWalls();

    setIsLoading(false);

    // return function () {
    //   controller.abort();
    // };
  }, [search]);

  // const onSearchHandler = (e) => {
  //   e.PreventDefault();
  //   setSearch(e.target.value);
  // };

  return (
    <>
      <NavBar setSearch={setSearch} />
      {/* <HomePage /> */}
      {isLoading ? (
        <HomeLoading />
      ) : isError ? (
        <HomeError />
      ) : (
        <HomePage walls={walls} />
      )}
    </>
  );
}
