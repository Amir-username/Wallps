import { useEffect, useState, useReducer } from "react";
import HomeLoading from "./components/Homepage/HomeLoading";
import HomePage from "./components/Homepage/HomePage";
import NavBar from "./components/Navbar/NavBar";
import HomeError from "./components/Homepage/HomeError";
import { filterReducer, filterState } from "./reducers/filterReducer";

const KEY = "39005119-efc4e36874eafd1fe0ee1ac91";

export default function App() {
  const [walls, setWalls] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [search, setSearch] = useState("");
  const [state, dispatch] = useReducer(filterReducer, filterState);

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
                `https://pixabay.com/api/?key=${KEY}&${
                  state?.filterType &&
                  state?.filterType + "=" + state?.value
                }`
              )
            : await fetch(`https://pixabay.com/api/?key=${KEY}&q=${search}`, {
                signal,
              });
        if (!res.ok)
          throw new Error(
            "Some error with fetching data.."
          );
        const data = await res.json();
        if (data.Response === "False") {
          throw new Error("cannot find any wallpaper :(");
        }
        setWalls(data.hits);
      } catch (error) {
        if (error instanceof Error && error.name !== "AbortError") {
          setErrorMessage(error.message);
          console.log(error.message);
        }
      } finally {
        setIsLoading(false);
      }
    }
    fetchMovies();
    return () => {
      abCtrl.abort();
    };
  }, [, search, state]);

  return (
    <>
      <NavBar setSearch={setSearch} dispatch={dispatch} />
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
