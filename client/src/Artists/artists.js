import "./style.css";

import { useEffect, useState } from "react";
import { getEntriesByContentType } from "../Contentful/client";

export default function Artists() {
    const [artits, setArtists] = useState();

    useEffect(() => {
        getEntriesByContentType("artist")
            .then((response) => {
                setArtists(response.items);
                console.log(response);
            })
            .catch(console.error);
    }, []);

    console.log("artits:\t", artits);

    return (
        <>
            <h1>Hello artist</h1>
            {artits &&
                artits.map((artist) => {
                    return (
                        <div key={artist.sys.id}>
                            {artist.fields.name}
                            <br />
                            {/* {artist.fields.image && (
                                <img
                                    className="postcards"
                                    src={`https:${artist.fields.image?.fields.file.url}`}
                                />
                            )} */}
                        </div>
                    );
                })}
        </>
    );
}
