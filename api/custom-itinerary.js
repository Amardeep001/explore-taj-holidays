import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST")
    return res.status(405).json({ error: "Method not allowed" });

  const { name, email, phone, pax, date, message, tourName } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: "exploretajholiday@gmail.com",
        pass: "prac bnus irkh ywsd", // ⚠️ Use App Password, not your Gmail password
      },
    });

    const htmlTemplate = `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:auto;padding:20px;border:1px solid #eee;border-radius:10px;">
        <h2 style="color:#e63946;">🧾 New Tour Booking Request</h2>
        <p><strong>Tour:</strong> ${tourName}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>No. of Pax:</strong> ${pax}</p>
        <p><strong>Preferred Date:</strong> ${date}</p>
        <p><strong>Message:</strong></p>
        <p style="background:#f8f9fa;padding:15px;border-radius:8px;">${message}</p>
        <hr/>
        <p style="font-size:12px;color:#888;">This request was submitted via the Explore Taj Holidays website.</p>
      </div>
    `;

    await transporter.sendMail({
      from: `"Explore Taj Holidays" <exploretajholiday@gmail.com>`,
      to: "exploretajholiday@gmail.com",
      replyTo: email,
      subject: `🧳 New Tour Booking - ${tourName}`,
      html: htmlTemplate,
    });

    res.status(200).json({ success: true });
  } catch (err) {
    console.error("Email error:", err);
    res.status(500).json({ error: "Failed to send email" });
  }
}
