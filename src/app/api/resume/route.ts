import { readFile } from "fs/promises";
import path from "path";

export async function GET() {
  const filePath = path.join(
    process.cwd(),
    "public",
    "resume",
    "Satyam_Jaiswal_Resume.pdf"
  );

  try {
    const file = await readFile(filePath);

    return new Response(file, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition":
          'attachment; filename="Satyam_Jaiswal_Resume.pdf"',
      },
    });
  } catch (error) {
    console.error("Resume file not found:", error);

    return new Response("Resume not found", {
      status: 404,
    });
  }
}
