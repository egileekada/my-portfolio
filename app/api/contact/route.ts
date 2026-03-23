import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY ?? "re_LRD1qxeT_G6VR4HapN11fggeLMFUSBu9g");

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    // Basic validation
    if (!name || !email || !message) {
      return Response.json(
        { success: false, message: "All fields are required" },
        { status: 400 }
      );
    }

    // Send email
    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "egileoniso.ekada@gmail.com",
      subject: `New message from ${name}`,
      replyTo: email,
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error(error);
    return Response.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}