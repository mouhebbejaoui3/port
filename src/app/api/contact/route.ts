import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Veuillez remplir tous les champs." },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Adresse email invalide." },
        { status: 400 }
      );
    }

    const userAgent =
      request.headers.get("user-agent") ||
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";
    const origin = request.headers.get("origin") || "http://localhost:3000";
    const referer = request.headers.get("referer") || `${origin}/`;

    // Send email to mouheb.bejaoui.3@gmail.com using FormSubmit API
    const response = await fetch("https://formsubmit.co/ajax/mouheb.bejaoui.3@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "User-Agent": userAgent,
        Origin: origin,
        Referer: referer,
      },
      body: JSON.stringify({
        name,
        email,
        message,
        _subject: `[Portfolio] Nouveau message de ${name} (${email})`,
        _replyto: email,
        _template: "table",
        _captcha: "false",
      }),
    });

    const data = await response.json();

    return NextResponse.json({
      success: true,
      message: data.message || "Message envoyé avec succès !",
    });
  } catch (error: unknown) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Erreur lors de l'envoi du message. Veuillez réessayer ou contacter directement par email." },
      { status: 500 }
    );
  }
}
