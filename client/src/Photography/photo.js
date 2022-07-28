import "./style.css";

import { useEffect, useState } from "react";
import { getEntriesByContentType } from "../Contentful/client";

export default function Photos() {
    const [photos, setPhotos] = useState();

    useEffect(() => {
        getEntriesByContentType("photo")
            .then((response) => {
                setPhotos(response.items);
                // console.log(response);
            })
            .catch(console.error);
    }, []);

    console.log("photos:\t", photos);

    return (
        <>
            <h1>Photography</h1>
            {photos &&
                photos.map((photo) => {
                    return (
                        <div key={photo.sys.id}>
                            {photo.fields.title}
                            <br />
                            {photo.fields.image && (
                                <img
                                    className="postcards"
                                    src={`https:${photo.fields.image?.fields.file.url}`}
                                />
                            )}
                        </div>
                    );
                })}
        </>
    );
}
