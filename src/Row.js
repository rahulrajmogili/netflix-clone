import axios from './axios';
import { React, useState, useEffect } from 'react'

const base_url = "http://image.tmdb.org/t/p/original/";

function Row({ title, fetchURL }) {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		async function fetchData() {
			const request = await axios.get(fetchURL);	
            setMovies(request.data.results)
			return request
        }
		fetchData();
	}, [fetchURL])		// fetchURL is used as a dependency to tell the useEffect that it is a variable outside the block

	console.log(movies)
    return (
			<div className="row">
            <h2>{title}</h2>
            
            <div className="row__posters">
                {movies.map(movie => (
                    <img src={`${base_url}${movie.poster_path}`} alt={movie.name} />
                ))}
            </div>
			</div>
    )
}

export default Row
