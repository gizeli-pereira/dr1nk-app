import { useEffect, useState } from "react";
import SearchBar from "./SearchBar"
import SearchHeader from "./SearchHeader"
import SearchResults from "./SearchResults";

const Search = () => {


    const searchOptions = {
        limit: 1,
        api: `https://www.thecocktaildb.com/api/json/v2/9973533/`,
        endpoint: `/recent.php`
    }
    const [data, setData] = useState([]);
    const [searchString, setSearchString] = useState("");
    const [lastSearch, setLastSearch] = useState("");

    useEffect(() => {
        getCocktail(searchString)
    }, [])

    function getCocktail(searchString) {
        const url = `${searchOptions.api}${searchOptions.endpoint}?s${searchString}&limit=${searchOptions.limit}`;

        fetch(url)
            .then((res) => res.json())
            .then((res) => {
                setData(res.data.drinks);
                setLastSearch(searchString);
                setSearchString("");
            })
            .catch(console.error);
  }

  function handleChange(e) {
    setSearchString(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    getCocktail(searchString);
  }
    


  return (
    <div>
        <SearchHeader lastSearch={lastSearch}/>
        <SearchBar handleChange={handleChange} handleSubmit={handleSubmit} searchString={searchString} />
        <SearchResults data={data} />
    </div>
  )
}

export default Search