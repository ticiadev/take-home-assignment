import { useState } from 'react';

import { searchArtworks } from '../api';
import { SearchForm } from './SearchForm';
import { Footer } from './Footer';

import './App.css';
import { ImageDetailsPage } from './ImageDetailsPage';

export function App() {
	const [searchData, setSearchData] = useState([]);
	const [showImageDetails, setShowImageDetails] = useState(false);
	const [artwork, setArtwork] = useState();

	function onSearchSubmit(query) {
		// Search for the users's query.
		// TODO: render the results, instead of logging them to the console.
		// NOTE: `searchArtworks` currently returns local data, so that we
		// don't make too many requests to the API! Once we've built out
		// our UI, we need to make real requests!
		// @see: ./src/api.js
		searchArtworks(query).then((json) => {
			setSearchData(json.data);
			console.log(searchData);
		});
	}

	function onShowDetails(artwork) {
		setArtwork(artwork);
		setShowImageDetails(true);
	}

	function onReturn() {
		setShowImageDetails(false);
	}

	const results = searchData.map((artwork) => (
		<li key={artwork.image_id}>
			<span
				role="link"
				tabIndex={0}
				onClick={() => onShowDetails(artwork)}
				onKeyDown={() => onShowDetails(artwork)}
			>
				{artwork.title}
			</span>{' '}
			- {artwork.artist_title}
		</li>
	));

	return (
		<div className="App">
			<h1>TCL Career Lab Art Finder</h1>
			{showImageDetails ? (
				<ImageDetailsPage artwork={artwork} onReturn={onReturn} />
			) : (
				<>
					<SearchForm onSearchSubmit={onSearchSubmit} />
					<ul>{results}</ul>
				</>
			)}
			<Footer />
		</div>
	);
}
