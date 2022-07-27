import * as contentful from "contentful";

export default function getClientContentful() {
    return contentful.createClient({
        space: "9f7eam713a8g",
        accessToken: "A2Fip8Gi_iK5VIRQ58-Qs_QW1eNL636FT-gcfHfTZ5M",
        // environment: <environment_id>,
    });
}

export function getEntriesByContentType(contentType) {
    return getClientContentful().getEntries({ content_type: contentType });
}
