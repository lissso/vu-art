import "./style.css";

import { useEffect, useState } from "react";
import { getEntriesByContentType } from "../Contentful/client";

import Modal from "./modal";

export default function Postcards() {
    const [postcards, setPostcards] = useState();
    const [show, setShow] = useState(false);

    useEffect(() => {
        getEntriesByContentType("postcard")
            .then((response) => {
                setPostcards(response.items);
                // console.log(response.items[0].fields.title);
            })
            .catch(console.error);
    }, []);

    console.log("postcards:\t", postcards);

    return (
        <>
            <div className="container-postcards">
                <h1>Postcard</h1>
                <ul>
                    {postcards &&
                        postcards.map((postcard) => {
                            return (
                                <li className="postcards" key={postcard.sys.id}>
                                    {/* {postcard.fields.title}
                                <br /> */}
                                    {postcard.fields.image && (
                                        <img
                                            className="photo"
                                            onClick={() =>
                                                setShow({
                                                    title: postcard.fields
                                                        .title,
                                                    url: `https:${postcard.fields.image?.fields.file.url}`,
                                                })
                                            }
                                            src={`https:${postcard.fields.image?.fields.file.url}`}
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
        </>
    );
}

//  <>
//      <h1>Hi Postcard</h1>
//      {postcards &&
//          postcards.map((postcard) => {
//              return (
//                  <div key={postcard.sys.id}>
//                      {postcard.fields.title}
//                      <br />
//                      {postcard.fields.image && (
//                          <img
//                              className="postcards"
//                              src={`https:${postcard.fields.image?.fields.file.url}`}
//                          />
//                      )}
//                  </div>
//              );
//          })}
//  </>;
