import { useEffect, useState, useReducer } from "react";
import HomeLoading from "./components/Homepage/HomeLoading";
import HomePage from "./components/Homepage/HomePage";
import NavBar from "./components/Navbar/NavBar";
import HomeError from "./components/Homepage/HomeError";
import { filterReducer, filterState } from "./reducers/filterReducer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WallPage from "./components/WallPage/WallPage";

const KEY = "39005119-efc4e36874eafd1fe0ee1ac91";
const perPage = 20;

export default function App() {
  const [walls, setWalls] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [search, setSearch] = useState("");
  const [pageNum, setPageNum] = useState(1);
  const [totalImages, setTotalImages] = useState(500);

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
                `https://pixabay.com/api/?key=${KEY}&orientation=horizontal&per_page=${perPage}&safesearch=true&page=${pageNum}&${
                  state?.filterType && state?.filterType + "=" + state?.value
                }`
              )
            : await fetch(
                `https://pixabay.com/api/?key=${KEY}&per_page=${perPage}&safesearch=true&page=${pageNum}&q=${search}`,
                {
                  signal,
                }
              );
        if (!res.ok) throw new Error("Some error with fetching data..");
        const data = await res.json();
        if (data.Response === "False") {
          throw new Error("cannot find any wallpaper :(");
        }
        setWalls(data.hits);
        setTotalImages(data.totalHits);
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
  }, [, search, state, pageNum]);

  return (
    <>
      <BrowserRouter>
        <NavBar setSearch={setSearch} dispatch={dispatch} />
        <Routes>
          <Route
            path="/"
            element={
              isLoading ? (
                <HomeLoading />
              ) : errorMessage ? (
                <HomeError />
              ) : (
                <HomePage
                  walls={walls}
                  pageNum={pageNum}
                  setPageNum={setPageNum}
                  totalPages={totalImages / perPage}
                  search={search}
                />
              )
            }
          />
          <Route path="wallpage/:id" element={<WallPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
