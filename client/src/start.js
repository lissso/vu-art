import ReactDOM from "react-dom";

import * as contentful from "contentful";
import { useEffect, useState } from "react";

ReactDOM.render(<HelloWorld />, document.querySelector("main"));

function HelloWorld() {
    const [postcards, setPostcards] = useState();

    useEffect(() => {
        const client = contentful.createClient({
            space: "9f7eam713a8g",
            accessToken: "A2Fip8Gi_iK5VIRQ58-Qs_QW1eNL636FT-gcfHfTZ5M",
        });

        client
            .getEntries()
            .then((response) => {
                setPostcards(response.items);
            })
            .catch(console.error);
    }, []);

    console.log("postcards:\t", postcards);

    return <div>Hello, World!</div>;
}
