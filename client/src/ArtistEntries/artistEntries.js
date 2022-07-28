import { getEntriesByArtist } from "../Contentful/client";
import { useEffect, useState } from "react";

export default function ArtistEntries({ artist }) {
    const [entries, setEntries] = useState([]);

    useEffect(() => {
        getEntriesByArtist(artist).then((entries) => {
            setEntries(entries);
        });
    }, []);

    console.log(entries, "entries");
    return (
        <>
            <div>
                {/* leere artists werden nicht angezeigt */}
                {entries.length > 0 && <span>{artist}</span>}
                {entries.map((entry) => {
                    return (
                        <img
                            className="postcards"
                            key={entry.sys.id}
                            src={`https:${entry.fields?.image?.fields?.file?.url}`}
                        />
                    );
                })}
            </div>
        </>
    );
}
