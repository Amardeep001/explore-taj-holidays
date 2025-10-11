import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, message } = req.body;

  try {
    // Configure transporter (use Gmail/SMTP provider or your domain)
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: "myamardeepsingh001@gmail.com",
        pass: "anpd zctv pnxm uqtu",
      },
    });

    // Email template
    const htmlTemplate = `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:auto;padding:20px;border:1px solid #eee;border-radius:10px;">
        <h2 style="color:#e63946;">New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p style="background:#f8f9fa;padding:15px;border-radius:8px;">${message}</p>
        <hr/>
        <p style="font-size:12px;color:#888;">This email was sent via Explore Taj Holidays website.</p>
      </div>
    `;

    await transporter.sendMail({
      from: `"ExploreTaj Holidays" <${email}>`,
      to: "myamardeepsingh001@gmail.com",
      replyTo: email,
      subject: "📩 New Contact Form Submission for Explore Taj Travels.",
      html: htmlTemplate,
    });

    res.status(200).json({ success: true });
  } catch (err) {
    console.error("Email error:", err);
    res.status(500).json({ error: "Failed to send email" });
  }
}
