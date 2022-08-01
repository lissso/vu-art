// import "./style.css";
// import { getArtists } from "../Contentful/client";
// import { useState, useEffect } from "react";
// import { useEffect, useState } from "react";
// import { getEntriesByContentType } from "../Contentful/client";
// import ArtistEntries from "./artistEntries";

// export default function ArtistPortrait() {
//     const [artists, setArtists] = useState();
//     const [artists, setArtists] = useState();

//     useEffect(() => {
//         getArtists().then((x) => {
//             console.log("getArtists", x);
//             setArtists(x);
//         });
//     }, []);

//     console.log("artits:\t", artists);

//     return (
//         <>
//             ArtistPortrait
//             {artists &&
//                 artists.map((x, i) => (
//                     <>
//                         <input
//                             className="checkbox"
//                             key={i}
//                             type="checkbox"
//                             id="artist"
//                             name={x.name}
//                             value={x.email}
//                         />
//                         <label key={"label-" + i}> {x.name}</label>{" "}
//                     </>
//                 ))}
//         </>
//         // <div className="container-artists">
//         //     <h1 className="content-header ">artists</h1>
//         //     {artists &&
//         //         artists.map((artist) => {
//         //             return (
//         //                 <div className="artist-row" key={artist.sys.id}>
//         //                     <br />
//         //                     <ArtistEntries artist={artist.fields.name} />
//         //                 </div>
//         //             );
//         //         })}
//         // </div>
//     );
// }
