import "./style.css";

import { useEffect, useState } from "react";
import getClientContentful from "../client";
import { getEntriesByContentType } from "../client";

export default function Images() {
    const [postcards, setPostcards] = useState();

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
            {postcards &&
                postcards.map((postcard) => {
                    return (
                        <div key={postcard.sys.id}>
                            {postcard.fields.title}
                            <br />
                            {postcard.fields.image && (
                                <img
                                    className="postcards"
                                    src={`https:${postcard.fields.image?.fields.file.url}`}
                                />
                            )}
                        </div>
                    );
                })}
        </>
    );
}
