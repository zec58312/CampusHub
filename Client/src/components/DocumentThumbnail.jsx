import React, { useState } from "react";
import { Document, Page } from "react-pdf";

function DocumentThumbnail({ fileUrl }) {
	const [isLoaded, setIsLoaded] = useState(false); // Prati učitavanje slike

	return (
		<div className="d-flex flex-column align-items-center">
			<Document file={fileUrl} onLoadSuccess={() => setIsLoaded(true)} className="d-flex justify-content-center">
				{/* Prikazuje se samo prva stranica kao thumbnail */}
				<Page
					pageNumber={1}
					width={200}
					renderAnnotationLayer={false} // Isključivanje anotacija za bolji izgled thumbnaila
					renderTextLayer={false} // Isključivanje sloja teksta
				/>
			</Document>

			{/* Placeholder dok se slika ne učita */}
			{!isLoaded && <div style={{ width: 200, height: 150, backgroundColor: "#e0e0e0" }} />}
		</div>
	);
}

export default DocumentThumbnail;
