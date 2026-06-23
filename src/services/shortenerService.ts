import { Log } from "../middleware/logger";

export async function logShortenerRequest() {
    await Log(
        "frontend",
        "info",
        "api",
        "Creating short URL"
    );
}