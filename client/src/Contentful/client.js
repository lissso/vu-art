import * as contentful from "contentful";
const { contentfulAccessToken } = require("../../../secrets.json");

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
