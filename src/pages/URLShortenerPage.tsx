import { useEffect } from "react";
import { Log } from "../middleware/logger";

function URLShortenerPage() {
    useEffect(() => {
        Log(
            "frontend",
            "info",
            "page",
            "URL Shortener Page Loaded"
        );
    }, []);

    return (
        <div>
            <h1>URL Shortener Page</h1>
        </div>
    );
}

export default URLShortenerPage;