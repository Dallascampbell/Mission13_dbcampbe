import { useState } from 'react';
import data from './MovieData.json';

const md = data.MovieData;

function MovieList() {
  //Use state and props next time
  //const [listOfMovies, setListOfMovies] = useState(md);

  //Set up table and pull each element from the data pulled from the json file
  return (
    <>
      <div>
        <h3>Movie Collection</h3>
      </div>

      <div>
        <table className="table table-striped table-bordered table-hover">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Year</th>
              <th scope="col">Director</th>
              <th scope="col">Rating</th>
              <th scope="col">Edited</th>
              <th scope="col">Category</th>
            </tr>
          </thead>
          <tbody>
            {md.map((m) => (
              <tr>
                <td>{m.Title}</td>
                <td>{m.Year}</td>
                <td>{m.Director}</td>
                <td>{m.Rating}</td>
                <td>{m.Edited}</td>
                <td>{m.Category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default MovieList;
