import { useEffect, useState } from "react";
import HomeLoading from "./components/Homepage/HomeLoading";
import HomePage from "./components/Homepage/HomePage";
import NavBar from "./components/Navbar/NavBar";
import HomeError from "./components/Homepage/HomeError";

const KEY = "39005119-efc4e36874eafd1fe0ee1ac91";

export default function App() {
  const [walls, setWalls] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [search, setSearch] = useState("");

  const abCtrl = new AbortController();
  const signal = abCtrl.signal;

  useEffect(() => {
    async function fetchMovies() {
      try {
        setIsLoading(true);
        setErrorMessage("");
        const res =
          search === ""
            ? await fetch(
                `https://pixabay.com/api/?key=${KEY}`
              )
            : await fetch(
                `https://pixabay.com/api/?key=${KEY}&q=${search}&image_type=photo`,
                { signal }
              );
        console.log(res);
        if (!res.ok)
          throw new Error(
            "Some error with fetching data.. please check your internet connection."
          );
        const data = await res.json();
        if (data.Response === "False") {
          throw new Error("cannot find any wallpaper :(");
        }
        setWalls(data.hits);
      } catch (error) {
        if (error instanceof Error && error.name !== "AbortError") {
          setErrorMessage(error.message);
        }
      } finally {
        setIsLoading(false);
      }
    }
    fetchMovies();
    return () => {
      abCtrl.abort();
    };
  }, [, search]);

  // useEffect(() => {
  //   // const controller = new AbortController();

  //   const fetchWalls = async () => {
  //     fetch(
  //       `https://pixabay.com/api/?key=${KEY}&q=${search}&image_type=photo`
  //       // { signal: controller.signal }
  //     )
  //       .then((res) => res.json())
  //       .then((data) => setWalls(data.hits))
  //       .catch((err) => {
  //         setIsError(true);
  //         console.log(err);
  //       });
  //   };
  //   setIsLoading(true);

  //   fetchWalls();

  //   setIsLoading(false);

  //   // return function () {
  //   //   controller.abort();
  //   // };
  // }, [search]);

  // // const onSearchHandler = (e) => {
  // //   e.PreventDefault();
  // //   setSearch(e.target.value);
  // // };

  return (
    <>
      <NavBar setSearch={setSearch} />
      {/* <HomePage /> */}
      {isLoading ? (
        <HomeLoading />
      ) : errorMessage ? (
        <HomeError />
      ) : (
        <HomePage walls={walls} />
      )}
    </>
  );
}
