import './ImageDetailsPage.css';

export function ImageDetailsPage({ imageArtist, imageId, imageName }) {
	const url = `https://www.artic.edu/iiif/2/${imageId}/full/843,/0/default.jpg`;
	const altText = `An image of {imageName}`;
	return (
		<main>
			<p>
				{imageName} - {imageArtist}
			</p>
			<img alt={altText} src={url} />
		</main>
	);
}
