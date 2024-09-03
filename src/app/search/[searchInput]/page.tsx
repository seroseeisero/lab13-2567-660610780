"use client";

import MovieRow from "@components/MovieRow";
import { movieDB } from "@lib/movieDB";
import { movieIdPageParams } from "@lib/types";
export default function SearchResultPage({ params }: any) {
  //tip1 : before filtering movie, replace all "%20" with " " (space) in the input
  // const processedSearchInput = ...
  const movieName = params.searchInput.replaceAll("%20"," ");
  const selMovie = movieDB.filter((movie) => movie.title.toLowerCase().includes(movieName.toLowerCase()));
  if (!selMovie) {
    return (<p className="text-center">{"Movie is not found 😥 "+ movieName}</p>);
  }
  /*
  tip2 : Use "includes" string method to check substring
  Example : "ABC".includes("AB") -> return true

  tip3 : To implement case insensitive searching, use "toLocaleLowerCase" string method
  to convert movie title and searchInput to lower case 
  const filteredMovies = movieDB.filter((movie) =>
    you code here...
  );
  */

  return (
    <div>
      <p className="fw-bold fs-4 text-center my-0">
        Searching &quot; {movieName} &quot;
      </p>
      <p className="fw-bold fs-4 text-center">Found {selMovie.length} result(s)</p>
      {/* Use  "filteredMovies" variable to map-loop rendering MovieRow component */}
      {selMovie.map((movie, i) => (
          <MovieRow
            key={movie.id}
            id={movie.id}
            title={movie.title}
            detail={movie.detail}
            rating={movie.rating}
            number={i + 1}
          />
        ))}
    </div>
  );
}