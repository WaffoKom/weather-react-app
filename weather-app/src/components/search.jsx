import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { fetchData, url, geoApiOptions } from "../api.js";

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState("");

  const loadOptions = async (inputValue) => {
    const urldynamic = `${url}/cities?minPopulation=1000000&namePrefix=${inputValue}`;

    const data = await fetchData(urldynamic, geoApiOptions);
    // console.log(data);
    return {
      options: data
        ? data.data.map((city) => ({
            value: `${city.latitude} ${city.longitude}`,
            label: `${city.name}, ${city.countryCode} `,
          }))
        : [],
    };
  };

  const handleonChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };
  return (
    <AsyncPaginate
      placeholder="Search for city here"
      debounceTimeout={600}
      value={search}
      onChange={handleonChange}
      loadOptions={loadOptions}
      className="mx-auto pt-4 w-[850px] rounded-xl "
    />
  );
};

export default Search;
