import * as contentful from "contentful";
const contentfulAccessToken = "8Dk-gBvISvI5oGn0HbG2aAlHYMaWKcEYfbh3LPnOkUo";
// process.env.contentfulAccessToken ||
// require("../../../secrets.json").contentfulAccessToken;

export default function getClientContentful() {
    return contentful.createClient({
        space: "9f7eam713a8g",
        accessToken: contentfulAccessToken,
        // environment: <environment_id>,
    });
}

export function getEntriesByContentType(contentType) {
    return getClientContentful().getEntries({
        content_type: contentType,
        select: "fields",
    });
}

//  order: "fields.name",
export async function getEntriesByArtist(artist) {
    const entries = (
        await getClientContentful().getEntries({
            select: "fields",
        })
    ).items;
    console.log(entries, "entries client artist");
    // callback für jedes Element: true im Array, false wird nicht übernommen
    return entries.filter((entry) => {
        return (
            entry.fields.name === artist && entry.fields.image?.fields?.file.url
        );
    });
}

export async function getEntriesByArtists() {
    const entries = (
        await getClientContentful().getEntries({
            content_type: "artist",
            select: "fields",
        })
    ).items;
    console.log(entries, "entries client artists");
    return entries;
}
export async function getEntriesByImages() {
    const entries = (
        await getClientContentful().getEntries({
            content_type: "photo",
            select: "fields",
        })
    ).items;
    console.log(entries, "entries client images");
    return entries;
}

export async function getArtists() {
    const entries = await getEntriesByArtists();
    return entries.map((x) => {
        return { name: x.fields.name, email: x.fields.email };
    });
}

// export async function getImages() {
//     const entries = await getEntriesByImages()();
//     return entries.map((x) => {
//         return { image: x.fields.image };
//     });
// }
