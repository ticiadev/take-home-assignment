import './ImageDetailsPage.css';

export function ImageDetailsPage({
	imageArtist,
	imageId,
	imageTitle,
	onReturn,
}) {
	const url = `https://www.artic.edu/iiif/2/${imageId}/full/843,/0/default.jpg`;
	const altText = `An image of {imageName}`;
	return (
		<main>
			<p>
				{imageTitle} - {imageArtist}
			</p>
			<img alt={altText} src={url} />
			<button onClick={onReturn}>🡠 Back</button>
		</main>
	);
}
