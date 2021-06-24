import axios from './axios';
import { React, useState, useEffect } from 'react'

const base_url = "http://image.tmdb.org/t/p/original/";

function Row({ title, fetchURL }) {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		async function fetchData() {
			const request = await axios.get(fetchURL);
			if (request.status === 200) {
				setMovies(request)
			}
			return request;
		}
		fetchData();
	}, [fetchURL])

	console.log(movies)

    return (
        <div>
			{/* Title */}
			<h2>{title}</h2>

			{/* Bunch of posters in a row */}
			<div>
				{/* {movies.map(movie => (
					<img src={`${base_url}${movie.poster_path}`} alt="" />
				))} */}
			</div>

        </div>
    )
}

export default Row
