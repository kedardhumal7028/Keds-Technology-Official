import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Valid email is required" },
        { status: 400 }
      );
    }

    // Here you can integrate with your DB, Airtable, Resend, or Google Sheets
    console.log(`[Keds Technology Notification] New subscriber registered: ${email}`);

    return NextResponse.json(
      { success: true, message: "Subscription registered successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing subscription:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
