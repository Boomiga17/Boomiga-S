import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";


export async function GET(request: NextRequest) {
  try {
    let filePath = path.join(process.cwd(), "public", "Boomiga_Resume.pdf");

    if (!fs.existsSync(filePath)) {
      filePath = path.join(process.cwd(), "public", "resume.pdf");
    }

    if (!fs.existsSync(filePath)) {
      return new NextResponse("Resume file not found", { status: 404 });
    }

    const fileBuffer = fs.readFileSync(filePath);
    const searchParams = request.nextUrl.searchParams;
    const isView = searchParams.get("view") === "1";

    const disposition = isView
      ? 'inline; filename="Boomiga_Resume.pdf"'
      : 'attachment; filename="Boomiga_Resume.pdf"';

    return new NextResponse(fileBuffer, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": disposition,
        "Content-Length": fileBuffer.length.toString(),
        "Cache-Control": "public, max-age=3600, must-revalidate",
      },
    });
  } catch (error) {
    console.error("Error serving resume:", error);
    return new NextResponse("Error downloading file", { status: 500 });
  }
}
