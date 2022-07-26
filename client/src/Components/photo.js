import "./style.css";

import { useEffect, useState } from "react";
import { getEntriesByContentType } from "../Contentful/client";
import Modal from "./modal";
import Header from "../Welcome/header";
import Footer from "../Welcome/footer";

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
            <Header />
            <div className="photo-container">
                {/* <button onClick={() => setShow(true)}>Open Modal</button> */}

                <h1 className="content-header">Photography</h1>
                <div className="foto">
                    <ul>
                        {photos &&
                            photos.map((photo) => {
                                return (
                                    <li className="photo" key={photo.sys.id}>
                                        {/* {photo.fields.title}
                                    <br /> */}
                                        {photo.fields.image && (
                                            <img
                                                className="photo hover"
                                                onClick={() =>
                                                    setShow({
                                                        title: photo.fields
                                                            .title,
                                                        url: `https:${photo.fields.image?.fields.file.url}`,
                                                    })
                                                }
                                                src={`https:${photo.fields.image?.fields.file.url}`}
                                            />
                                        )}
                                    </li>
                                );
                            })}
                    </ul>
                </div>
                <Modal
                    className="myModal"
                    title="My modal"
                    onClose={() => setShow(false)}
                    show={show}
                ></Modal>
            </div>
            <Footer />
        </>
    );
}
