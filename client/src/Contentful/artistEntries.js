import { getEntriesByArtist } from "./client";
import { useEffect, useState } from "react";

import Modal from "../Components/modal";

export default function ArtistEntries({ artist }) {
    const [entries, setEntries] = useState([]);
    const [show, setShow] = useState(false);

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
                            className="small"
                            key={entry.sys.id}
                            onClick={() =>
                                setShow({
                                    title: entry.fields.title,
                                    url: `https:${entry.fields.image?.fields.file.url}`,
                                })
                            }
                            src={`https:${entry.fields?.image?.fields?.file?.url}`}
                        />
                    );
                })}
            </div>
            <Modal
                className="myModal"
                title="My modal"
                onClose={() => setShow(false)}
                show={show}
            ></Modal>
        </>
    );
}
