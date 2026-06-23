type Stack = "frontend" | "backend";

type Level = "debug" | "info" | "warn" | "error" | "fatal";

type Package =
    | "api" | "component" | "hook" | "page" | "state" | "style"
    | "cache" | "controller" | "cron_job" | "db" | "domain" | "handler" | "repository" | "route" | "service"
    | "auth" | "config" | "middleware" | "utils";

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJ2dXBwYWxhc2FtcGF0aHZpbmF5cmFtLjIzLmNzZEBhbml0cy5lZHUuaW4iLCJleHAiOjE3ODIxOTY0MzYsImlhdCI6MTc4MjE5NTUzNiwiaXNzIjoiQWZmb3JkIE1lZGljYWwgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZCIsImp0aSI6ImNjMjI4MmUxLWY0NmQtNGE1NC04ZjllLWMxM2Q2NzU3MThjNyIsImxvY2FsZSI6ImVuLUlOIiwibmFtZSI6InZ1cHBhbGEgc2FtcGF0aCB2aW5heSByYW0iLCJzdWIiOiI5NTIzNzhlZC1kNGQwLTRjMjktOTdmNi0xY2YyOGMwNjYxZTcifSwiZW1haWwiOiJ2dXBwYWxhc2FtcGF0aHZpbmF5cmFtLjIzLmNzZEBhbml0cy5lZHUuaW4iLCJuYW1lIjoidnVwcGFsYSBzYW1wYXRoIHZpbmF5IHJhbSIsInJvbGxObyI6ImEyMzEyNjU1MTEzMCIsImFjY2Vzc0NvZGUiOiJNVHF4YXIiLCJjbGllbnRJRCI6Ijk1MjM3OGVkLWQ0ZDAtNGMyOS05N2Y2LTFjZjI4YzA2NjFlNyIsImNsaWVudFNlY3JldCI6Ikt1Y2NkVXpwbVBFeHdtSG4ifQ.nBJHGLclS2fB99FyKXmuiRGJP9-CLP3U_u6Bit8MAP4";

export async function Log(
    stack: Stack,
    level: Level,
    packageName: Package,
    message: string
) {
    try {
        await fetch("http://4.224.186.213/evaluation-service/logs", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${TOKEN}`,
            },
            body: JSON.stringify({
                stack,
                level,
                package: packageName,
                message,
            }),
        });
    } catch (error) {
        console.error("Logging failed:", error);
    }
}