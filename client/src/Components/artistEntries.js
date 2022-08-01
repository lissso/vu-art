import { getEntriesByArtist } from "../Contentful/client";
import { useEffect, useState } from "react";

import Modal from "./modal";
import ModalPortrait from "./modal-portrait";

export default function ArtistEntries({ artist, artistdata }) {
    const [entries, setEntries] = useState([]);
    const [show, setShow] = useState(false);
    const [showArtist, setShowArtist] = useState(false);

    useEffect(() => {
        getEntriesByArtist(artist).then((entries) => {
            setEntries(entries);
        });
    }, []);

    console.log(entries, "entries");
    return (
        <>
            <div className="artist-entries">
                {/* leere artists werden nicht angezeigt */}
                {entries.length > 0 && (
                    <h2
                        className="artist-name"
                        onClick={() =>
                            setShowArtist({
                                artist: artistdata,
                                name: artistdata.fields.name,
                                bio: artistdata.fields.bio,
                                url: `https:${artistdata.fields.portrait?.fields.file.url}`,
                            })
                        }
                    >
                        {artist}
                        <br />
                    </h2>
                )}
                <ModalPortrait
                    className="myModal"
                    title="My modal"
                    onClose={() => setShowArtist(false)}
                    show={showArtist}
                >
                    {/* {artistdata.fields.name}
                    {artistdata.fields.bio}
                    {artistdata.fields.url}
                    if not in set show artist then here */}
                </ModalPortrait>

                {entries.map((entry) => {
                    return (
                        <img
                            className="small artist-image hover"
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
