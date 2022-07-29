import "./style.css";

import { useEffect, useState } from "react";
import { getEntriesByContentType } from "../Contentful/client";
import Modal from "./modal";

export default function Photos() {
    const [photos, setPhotos] = useState();
    const [show, setShow] = useState(false);

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
            {/* <button onClick={() => setShow(true)}>Open Modal</button> */}

            <h1>Photography</h1>
            <div className="foto">
                {photos &&
                    photos.map((photo) => {
                        return (
                            <div key={photo.sys.id}>
                                {photo.fields.title}
                                <br />
                                {photo.fields.image && (
                                    <img
                                        onClick={() =>
                                            setShow({
                                                title: photo.fields.title,
                                                url: `https:${photo.fields.image?.fields.file.url}`,
                                            })
                                        }
                                        className="postcards"
                                        src={`https:${photo.fields.image?.fields.file.url}`}
                                    />
                                )}
                            </div>
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
