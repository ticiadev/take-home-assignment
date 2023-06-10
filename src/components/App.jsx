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

	// Uses an anchor tag with an empty href attribute to remain
	// within application scope; React Router would be out of scope
	const results = searchData.map((artwork) => (
		<li key={artwork.image_id}>
			<a
				href="#"
				tabIndex={0}
				onClick={() => onShowDetails(artwork)}
				onKeyDown={(e) =>
					(e.key === 'Enter' || e.key === ' ') && onShowDetails(artwork)
				}
			>
				{artwork.title}
			</a>{' '}
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
