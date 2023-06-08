import { useState } from 'react';

import { searchArtworks } from '../api';
import { SearchForm } from './SearchForm';
import { Footer } from './Footer';

import './App.css';
import { ImageDetailsPage } from './ImageDetailsPage';

export function App() {
	const [searchData, setSearchData] = useState([]);
	const [showImageDetails, setShowImageDetails] = useState(false);
	const [imageId, setImageId] = useState('');
	const [imageName, setImageName] = useState('');
	const [imageArtist, setImageArtist] = useState('');

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

	function onShowDetails(artist, id, name) {
		setImageArtist(artist);
		setImageId(id);
		setImageName(name);
		setShowImageDetails(true);
	}

	const results = searchData.map((x) => (
		<li key={x.image_id}>
			<span
				role="link"
				tabIndex={0}
				onClick={() => onShowDetails(x.artist_title, x.image_id, x.title)}
				onKeyDown={() => onShowDetails(x.artist_title, x.image_id, x.title)}
			>
				{x.title}
			</span>{' '}
			- {x.artist_title}
		</li>
	));

	return (
		<div className="App">
			<h1>TCL Career Lab Art Finder</h1>
			{showImageDetails ? (
				<ImageDetailsPage
					imageArtist={imageArtist}
					imageId={imageId}
					imageName={imageName}
				/>
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
