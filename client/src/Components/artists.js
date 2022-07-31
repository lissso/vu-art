import "./style.css";

import { useEffect, useState } from "react";
import { getEntriesByContentType } from "../Contentful/client";
import ArtistEntries from "../Contentful/artistEntries";

export default function Artists() {
    const [artists, setArtists] = useState();

    useEffect(() => {
        getEntriesByContentType("artist")
            .then((response) => {
                setArtists(response.items);
                console.log(response);
            })
            .catch(console.error);
    }, []);

    console.log("artits:\t", artists);

    return (
        <>
          
            <h1>artist</h1>
            {artists &&
                artists.map((artist) => {
                    return (
                        <div key={artist.sys.id}>
                            <br />
                            <ArtistEntries artist={artist.fields.name} />
                         
                        </div>
                    );
                })}
           
        </>
    );
}
