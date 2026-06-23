import { useEffect } from "react";
import { Log } from "../middleware/logger";

function StatisticsPage() {
    useEffect(() => {
        Log(
            "frontend",
            "info",
            "page",
            "Statistics Page Loaded"
        );
    }, []);

    return (
        <div>
            <h1>Statistics Page</h1>
        </div>
    );
}

export default StatisticsPage;