import express from 'express';
import nodemailer from 'nodemailer';
import { createServer as createViteServer } from 'vite';
import 'dotenv/config';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  
  // Parse JSON bodies
  app.use(express.json());

  // Configure Nodemailer transporter
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  // API endpoint for contact form submissions
  app.post('/api/contact', async (req, res) => {
    try {
      const { name, email, phone, message } = req.body;
      
      // Basic validation
      if (!name || !email || !message) {
        return res.status(400).json({ success: false, error: 'Missing required fields' });
      }

      // Email to the business owner
      await transporter.sendMail({
        from: `"${name}" <${process.env.SMTP_USER}>`, // Send from authenticated user
        replyTo: email, // Set replyTo to the submitter's email
        to: process.env.CONTACT_EMAIL || 'will@theoperantdog.com.au',
        subject: `New Website Enquiry from ${name}`,
        text: `You have received a new enquiry.\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone || 'Not provided'}\n\nMessage:\n${message}`,
        html: `
<div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e5e7eb; border-radius: 8px; overflow: hidden;">
  <div style="background-color: #001d39; color: #ffffff; padding: 24px; text-align: center;">
    <h2 style="margin: 0; color: #ffffff;">New Website Enquiry</h2>
  </div>
  <div style="padding: 32px; background-color: #ffffff;">
    <p style="margin-bottom: 8px; color: #4b5563;"><strong>Name:</strong> <span style="color: #111827;">${name}</span></p>
    <p style="margin-bottom: 8px; color: #4b5563;"><strong>Email:</strong> <span style="color: #111827;">${email}</span></p>
    <p style="margin-bottom: 24px; color: #4b5563;"><strong>Phone:</strong> <span style="color: #111827;">${phone || 'Not provided'}</span></p>
    <h4 style="margin: 0 0 12px 0; color: #001d39; border-bottom: 2px solid #EF5B25; padding-bottom: 8px; display: inline-block;">Message Details</h4>
    <p style="color: #374151; line-height: 1.6; background-color: #f9fafb; padding: 16px; border-radius: 8px; border-left: 4px solid #EF5B25;">${message.replace(/\n/g, '<br/>')}</p>
  </div>
</div>
        `
      });

      // Auto-reply email to the customer
      await transporter.sendMail({
        from: `"The Operant Dog" <${process.env.SMTP_USER}>`, 
        to: email,
        subject: `Thank you for your enquiry - The Operant Dog`,
        text: `Hi ${name.split(' ')[0]},\n\nThanks for reaching out! We have received your message and we'll get back to you as soon as possible.\n\nYour Message Summary:\n${message}`,
        html: `
<div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e5e7eb; border-radius: 8px; overflow: hidden;">
  <div style="background-color: #001d39; color: #ffffff; padding: 32px; text-align: center;">
    <h2 style="margin: 0; color: #ffffff;">The Operant Dog</h2>
    <p style="margin: 8px 0 0 0; color: #cbd5e1; font-size: 14px;">Thank you for your enquiry</p>
  </div>
  <div style="padding: 32px; background-color: #ffffff;">
    <h3 style="margin-top: 0; color: #001d39;">Hi ${name.split(' ')[0]},</h3>
    <p style="color: #4b5563; line-height: 1.6;">
      Thanks for reaching out! We have received your message and we'll get back to you as soon as possible.
    </p>
    <p style="color: #4b5563; line-height: 1.6;">
      In the meantime, feel free to check out our <a href="https://www.instagram.com/theoperantdog/" style="color: #EF5B25; text-decoration: none; font-weight: bold;">Instagram</a> for recent training updates and tips!
    </p>
    <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 32px 0;" />
    <h4 style="margin: 0 0 12px 0; color: #9ca3af; font-size: 12px; text-transform: uppercase;">Your Message Summary</h4>
    <p style="color: #6b7280; font-size: 14px; font-style: italic; background-color: #f9fafb; padding: 16px; border-radius: 8px; border-left: 2px solid #e5e7eb;">
      ${message.replace(/\n/g, '<br/>')}
    </p>
  </div>
  <div style="background-color: #f8fafc; padding: 24px; text-align: center; color: #94a3b8; font-size: 12px;">
    &copy; ${new Date().getFullYear()} The Operant Dog. All rights reserved.
  </div>
</div>
        `
      });

      res.status(200).json({ success: true, message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ success: false, error: 'Failed to send email. Please check server configuration.' });
    }
  });

  const isProduction = process.env.NODE_ENV === 'production';

  if (!isProduction) {
    // Create Vite server in middleware mode
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa', // Let Vite handle routing (React Router)
    });

    // Use vite's connect instance as middleware
    app.use(vite.middlewares);

    // Serve the index.html for all other routes
    app.use('*', async (req, res, next) => {
      try {
        const url = req.originalUrl;
        let template = await vite.transformIndexHtml(url, '');
        // Fallback if empty, usually not necessary with vite middleware
        res.status(200).set({ 'Content-Type': 'text/html' }).end(template);
      } catch (e) {
        vite.ssrFixStacktrace(e);
        next(e);
      }
    });
  } else {
    // Production mode
    app.use(express.static(path.join(__dirname, 'dist')));
    
    app.use('*', (req, res) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
  }

  const port = process.env.PORT || 3000;
  app.listen(port, '0.0.0.0', () => {
    console.log(`Server is running at http://localhost:${port}`);
  });
}

startServer().catch(console.error);
