import './ImageDetailsPage.css';

export function ImageDetailsPage({ artwork, onReturn }) {
	const { artist, image_id, title } = artwork;
	const url = `https://www.artic.edu/iiif/2/${image_id}/full/843,/0/default.jpg`;
	const altText = `An image of ${title}`;
	return (
		<main>
			<p>
				{title} - {artist}
			</p>
			<img alt={altText} src={url} />
			<button style={{}} onClick={onReturn}>
				🡠 Back
			</button>
		</main>
	);
}
