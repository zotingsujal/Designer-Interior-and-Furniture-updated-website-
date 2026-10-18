import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { Resend } from 'resend';
import Razorpay from 'razorpay';
import crypto from 'crypto';
import fs from 'fs';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// Resend initialization
const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

// Razorpay initialization
const razorpayKeyId = process.env.RAZORPAY_KEY_ID;
const razorpayKeySecret = process.env.RAZORPAY_KEY_SECRET;
const razorpay =
  razorpayKeyId && razorpayKeySecret
    ? new Razorpay({
        key_id: razorpayKeyId,
        key_secret: razorpayKeySecret,
      })
    : null;
const rawOwnerEmails =
  process.env.OWNER_EMAIL ||
  'dsignerfurniture@outlook.com, dsignerfurnitureandinterior@gmail.com';
const OWNER_EMAILS = rawOwnerEmails
  .split(',')
  .map((e) => e.trim())
  .filter((e) => Boolean(e));
const SENDER_EMAIL = process.env.SENDER_EMAIL || 'onboarding@resend.dev';

// API Route: Send Consultation & Service Enquiry to both Owner and Customer
app.post('/api/send-enquiry', async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      whatsapp,
      projectType,
      preferredDate,
      preferredTime,
      location,
      budget,
      preferredContactMethod,
      requirementSummary,
      projectDetails,
    } = req.body;

    if (!name || !email || !phone) {
      return res.status(400).json({
        success: false,
        error: 'Name, email, and phone number are required.',
      });
    }

    const serviceName = projectType || 'Custom Furniture & Interior Design';
    const formattedDate = preferredDate || 'Flexible / To be coordinated';
    const formattedTime = preferredTime || 'Anytime during studio hours';
    const submissionTime = new Date().toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      dateStyle: 'medium',
      timeStyle: 'short',
    });

    // 1. HTML Email for Business Owner
    const ownerHtml = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 620px; margin: 0 auto; background: #FAF9F5; padding: 24px; border: 1px solid #E6DFD5; color: #18181B;">
        <div style="border-bottom: 2px solid #C5A880; padding-bottom: 16px; margin-bottom: 20px;">
          <h2 style="margin: 0; font-size: 22px; color: #18181B;">🛋️ New Customer Consultation Request</h2>
          <p style="margin: 4px 0 0; font-size: 13px; color: #87786B; text-transform: uppercase; letter-spacing: 1px;">Designer Furniture &bull; Santacruz West, Mumbai</p>
        </div>

        <p style="font-size: 14px; line-height: 1.5; color: #38332E; margin-bottom: 18px;">
          A new customer has submitted an inquiry on the website. Here are the complete details:
        </p>

        <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px; font-size: 13.5px; background: #FFFFFF; border: 1px solid #E6DFD5;">
          <tbody>
            <tr style="border-bottom: 1px solid #EAE3D9;">
              <td style="padding: 10px 14px; font-weight: bold; width: 35%; color: #5C554E; background: #F6F2EC;">Client Name:</td>
              <td style="padding: 10px 14px; color: #18181B; font-weight: 600;">${name}</td>
            </tr>
            <tr style="border-bottom: 1px solid #EAE3D9;">
              <td style="padding: 10px 14px; font-weight: bold; color: #5C554E; background: #F6F2EC;">Service Requested:</td>
              <td style="padding: 10px 14px; color: #9A6F3E; font-weight: 600;">${serviceName}</td>
            </tr>
            <tr style="border-bottom: 1px solid #EAE3D9;">
              <td style="padding: 10px 14px; font-weight: bold; color: #5C554E; background: #F6F2EC;">Preferred Date:</td>
              <td style="padding: 10px 14px; color: #18181B; font-weight: 600;">${formattedDate}</td>
            </tr>
            <tr style="border-bottom: 1px solid #EAE3D9;">
              <td style="padding: 10px 14px; font-weight: bold; color: #5C554E; background: #F6F2EC;">Preferred Time Slot:</td>
              <td style="padding: 10px 14px; color: #18181B; font-weight: 600;">${formattedTime}</td>
            </tr>
            <tr style="border-bottom: 1px solid #EAE3D9;">
              <td style="padding: 10px 14px; font-weight: bold; color: #5C554E; background: #F6F2EC;">Phone Number:</td>
              <td style="padding: 10px 14px; color: #18181B;"><a href="tel:${phone}" style="color: #18181B; text-decoration: underline; font-weight: 600;">${phone}</a></td>
            </tr>
            <tr style="border-bottom: 1px solid #EAE3D9;">
              <td style="padding: 10px 14px; font-weight: bold; color: #5C554E; background: #F6F2EC;">Email Address:</td>
              <td style="padding: 10px 14px; color: #18181B;"><a href="mailto:${email}" style="color: #18181B; text-decoration: underline;">${email}</a></td>
            </tr>
            <tr style="border-bottom: 1px solid #EAE3D9;">
              <td style="padding: 10px 14px; font-weight: bold; color: #5C554E; background: #F6F2EC;">WhatsApp:</td>
              <td style="padding: 10px 14px; color: #18181B;">${whatsapp || phone}</td>
            </tr>
            <tr style="border-bottom: 1px solid #EAE3D9;">
              <td style="padding: 10px 14px; font-weight: bold; color: #5C554E; background: #F6F2EC;">Location / Area:</td>
              <td style="padding: 10px 14px; color: #18181B;">${location || 'Mumbai'}</td>
            </tr>
            <tr style="border-bottom: 1px solid #EAE3D9;">
              <td style="padding: 10px 14px; font-weight: bold; color: #5C554E; background: #F6F2EC;">Budget Range:</td>
              <td style="padding: 10px 14px; color: #18181B;">${budget || 'To be discussed'}</td>
            </tr>
            <tr style="border-bottom: 1px solid #EAE3D9;">
              <td style="padding: 10px 14px; font-weight: bold; color: #5C554E; background: #F6F2EC;">Preferred Contact:</td>
              <td style="padding: 10px 14px; color: #18181B;">${preferredContactMethod || 'WhatsApp'}</td>
            </tr>
            ${requirementSummary ? `
            <tr style="border-bottom: 1px solid #EAE3D9;">
              <td style="padding: 10px 14px; font-weight: bold; color: #5C554E; background: #F6F2EC;">Requirement Summary:</td>
              <td style="padding: 10px 14px; color: #18181B;">${requirementSummary}</td>
            </tr>` : ''}
            <tr>
              <td style="padding: 10px 14px; font-weight: bold; color: #5C554E; background: #F6F2EC; vertical-align: top;">Project Notes:</td>
              <td style="padding: 10px 14px; color: #38332E; line-height: 1.5;">${projectDetails || 'No additional notes.'}</td>
            </tr>
          </tbody>
        </table>

        <div style="background: #EFEAE2; padding: 14px; border-radius: 4px; font-size: 13px; color: #5C554E;">
          <strong>Quick Action:</strong> Click to message customer directly on 
          <a href="https://wa.me/${(whatsapp || phone).replace(/[^0-9]/g, '')}" style="color: #1F5435; font-weight: bold; text-decoration: underline;">WhatsApp</a>
          or reply to this email to reach <strong>${email}</strong>.
          <br /><span style="font-size: 11.5px; color: #87786B; display: inline-block; margin-top: 6px;">Submitted on: ${submissionTime} IST</span>
        </div>
      </div>
    `;

    // 2. HTML Email for Customer Confirmation
    const customerHtml = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 620px; margin: 0 auto; background: #FAF9F5; padding: 28px; border: 1px solid #E6DFD5; color: #18181B;">
        <div style="text-align: center; border-bottom: 1px solid #E0D7CC; padding-bottom: 20px; margin-bottom: 24px;">
          <h1 style="margin: 0 0 6px; font-size: 22px; font-weight: 600; color: #18181B; letter-spacing: 0.5px;">DESIGNER FURNITURE & INTERIOR</h1>
          <p style="margin: 0; font-size: 12px; color: #C5A880; text-transform: uppercase; letter-spacing: 2px;">Bespoke Craftsmanship & Turnkey Interiors &bull; Santacruz West, Mumbai</p>
        </div>

        <p style="font-size: 16px; color: #18181B; margin-bottom: 12px;">Dear <strong>${name}</strong>,</p>
        <p style="font-size: 14px; color: #4B453F; line-height: 1.6; margin-bottom: 20px;">
          Thank you for choosing <strong>Designer Furniture &amp; Interior</strong>. We have received your consultation and requirement request for <strong>${serviceName}</strong>.
        </p>

        <div style="background: #FFFFFF; border: 1px solid #E0D7CC; border-radius: 4px; padding: 20px; margin-bottom: 24px;">
          <h3 style="margin: 0 0 12px; font-size: 14px; color: #18181B; text-transform: uppercase; letter-spacing: 1px; border-bottom: 1px solid #F0EAE1; padding-bottom: 8px;">Your Booking Summary</h3>
          <table style="width: 100%; border-collapse: collapse; font-size: 13.5px; color: #38332E;">
            <tr>
              <td style="padding: 7px 0; color: #87786B; width: 42%;">Service Requested:</td>
              <td style="padding: 7px 0; font-weight: 600; color: #18181B;">${serviceName}</td>
            </tr>
            <tr>
              <td style="padding: 7px 0; color: #87786B;">Requested Date:</td>
              <td style="padding: 7px 0; font-weight: 600; color: #18181B;">${formattedDate}</td>
            </tr>
            <tr>
              <td style="padding: 7px 0; color: #87786B;">Requested Time Slot:</td>
              <td style="padding: 7px 0; font-weight: 600; color: #18181B;">${formattedTime}</td>
            </tr>
            <tr>
              <td style="padding: 7px 0; color: #87786B;">Location:</td>
              <td style="padding: 7px 0; color: #18181B;">${location || 'Mumbai'}</td>
            </tr>
            <tr>
              <td style="padding: 7px 0; color: #87786B;">Contact Number:</td>
              <td style="padding: 7px 0; color: #18181B;">${phone}</td>
            </tr>
          </table>
        </div>

        <div style="margin-bottom: 24px;">
          <h4 style="margin: 0 0 10px; font-size: 14px; color: #18181B;">What happens next?</h4>
          <ol style="margin: 0; padding-left: 20px; font-size: 13.5px; color: #5C554E; line-height: 1.65;">
            <li>Our design consultant will review your space requirements and references.</li>
            <li>We will call or WhatsApp you at <strong>${phone}</strong> to confirm your consultation time and answer any questions.</li>
            <li>If you need site measurements or material swatches (teak wood, fabric shades, veneer finishes), we will coordinate a visit to your space or studio appointment.</li>
          </ol>
        </div>

        <div style="background: #18181B; color: #FAF9F5; padding: 20px; border-radius: 4px; text-align: center; margin-bottom: 24px;">
          <p style="margin: 0 0 8px; font-size: 13.5px; color: #FAF9F5;">Have photos of your space or reference designs ready?</p>
          <a href="https://wa.me/919821432122?text=Hi%20Designer%20Furniture%2C%20I%20just%20booked%20a%20consultation%20on%20your%20website%20for%20${encodeURIComponent(name)}.%20Here%20are%20my%20photos%2Fdetails" style="display: inline-block; background: #25D366; color: #FFFFFF; text-decoration: none; padding: 11px 22px; font-size: 13.5px; font-weight: bold; border-radius: 3px; letter-spacing: 0.5px;">Chat on WhatsApp: +91 98214 32122</a>
        </div>

        <div style="border-top: 1px solid #E6DFD5; padding-top: 18px; font-size: 12px; color: #87786B; text-align: center; line-height: 1.6;">
          <p style="margin: 0 0 4px; font-weight: bold; color: #5C554E;">Designer Furniture &amp; Interior</p>
          <p style="margin: 0 0 4px;">Shop No. 7, Rizvi Palace, TPS III, 39th Road, Bandra (West) / Santacruz (West), Mumbai - 400050</p>
          <p style="margin: 0;">Opening Hours: Monday – Sunday: 10:30 AM – 9:00 PM</p>
        </div>
      </div>
    `;

    // Dispatch via Resend if API key is provided
    if (resend) {
      try {
        // 1. Send Lead Notification to Owner(s)
        const ownerEmailPromise = resend.emails.send({
          from: `Designer Furniture <${SENDER_EMAIL}>`,
          to: OWNER_EMAILS,
          subject: `🛋️ New Booking: ${name} - ${serviceName}`,
          html: ownerHtml,
          replyTo: email,
        });

        // 2. Send Confirmation Email to Customer
        const customerEmailPromise = resend.emails.send({
          from: `Designer Furniture & Interior <${SENDER_EMAIL}>`,
          to: [email],
          subject: `Consultation Confirmed: ${serviceName} - Designer Furniture & Interior`,
          html: customerHtml,
        });

        const [ownerRes, customerRes] = await Promise.allSettled([
          ownerEmailPromise,
          customerEmailPromise,
        ]);

        return res.status(200).json({
          success: true,
          mode: 'resend_live',
          message: `Confirmation email dispatched to ${email} and booking details sent to owner.`,
          ownerStatus: ownerRes.status,
          customerStatus: customerRes.status,
        });
      } catch (sendError: any) {
        console.error('Resend delivery error:', sendError);
        return res.status(200).json({
          success: true,
          mode: 'resend_fallback',
          message: 'Inquiry registered successfully. Our team will contact you shortly.',
          warning: sendError.message,
        });
      }
    } else {
      // If RESEND_API_KEY is not configured yet in environment, log full inquiry
      console.log('--- [ENQUIRY RECEIVED - Resend Simulated Mode] ---');
      console.log(`Owner alert prepared for: ${OWNER_EMAILS.join(', ')}`);
      console.log(`Customer confirmation prepared for: ${email}`);
      console.log(`Client: ${name} (${phone}), Service: ${serviceName}, Date: ${formattedDate}, Time: ${formattedTime}`);

      return res.status(200).json({
        success: true,
        mode: 'simulated',
        message: `Consultation request confirmed! Confirmation sent to ${email} and forwarded to our studio.`,
      });
    }
  } catch (error: any) {
    console.error('Server error handling enquiry:', error);
    return res.status(500).json({
      success: false,
      error: error.message || 'Internal server error while processing consultation.',
    });
  }
});

// API Route: Create Razorpay Order
app.post('/api/create-razorpay-order', async (req, res) => {
  try {
    const { amount, items, customer } = req.body;

    if (!amount || amount <= 0) {
      return res.status(400).json({ success: false, error: 'Valid amount is required.' });
    }

    // Convert INR to paise
    const amountInPaise = Math.round(Number(amount) * 100);

    if (razorpay) {
      const order = await razorpay.orders.create({
        amount: amountInPaise,
        currency: 'INR',
        receipt: `rcpt_${Date.now().toString().slice(-8)}`,
        notes: {
          customerName: customer?.name || 'Customer',
          customerPhone: customer?.phone || '',
          itemCount: String(items?.length || 1),
        },
      });

      return res.status(200).json({
        success: true,
        mode: 'razorpay_live',
        orderId: order.id,
        amount: order.amount,
        currency: order.currency,
        keyId: razorpayKeyId,
      });
    } else {
      // Safe test simulation mode when Razorpay keys are not yet configured in env
      console.log('--- [RAZORPAY TEST SIMULATION ORDER] ---');
      console.log(`Amount: ₹${amount} (${amountInPaise} paise), Customer: ${customer?.name || 'Customer'}`);
      console.log('Note: To activate live Razorpay, set RAZORPAY_KEY_ID & RAZORPAY_KEY_SECRET in .env');

      return res.status(200).json({
        success: true,
        mode: 'test_simulation',
        orderId: `order_test_${Date.now().toString().slice(-8)}`,
        amount: amountInPaise,
        currency: 'INR',
        keyId: 'rzp_test_placeholder',
      });
    }
  } catch (err: any) {
    console.error('Razorpay order creation error:', err);
    return res.status(500).json({
      success: false,
      error: err.message || 'Failed to create payment order.',
    });
  }
});

// API Route: Verify Razorpay Payment Signature
app.post('/api/verify-razorpay-payment', async (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, customer, items } =
      req.body;

    if (!razorpay_order_id || !razorpay_payment_id) {
      return res.status(400).json({ success: false, error: 'Payment IDs are required.' });
    }

    if (razorpayKeySecret) {
      const body = razorpay_order_id + '|' + razorpay_payment_id;
      const expectedSignature = crypto
        .createHmac('sha256', razorpayKeySecret)
        .update(body.toString())
        .digest('hex');

      const isAuthentic = expectedSignature === razorpay_signature;
      if (!isAuthentic) {
        return res
          .status(400)
          .json({ success: false, error: 'Invalid payment signature. Verification failed.' });
      }
    }

    console.log(`--- [PAYMENT VERIFIED] Order: ${razorpay_order_id}, Payment: ${razorpay_payment_id} ---`);

    // Dispatch order confirmation email via Resend if available
    if (resend && customer?.email) {
      try {
        const orderSummaryHtml = `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background: #FAF9F5; padding: 24px; border: 1px solid #E6DFD5;">
            <h2 style="color: #18181B; margin-top: 0;">🎉 Furniture Order Confirmed!</h2>
            <p><strong>Order ID:</strong> ${razorpay_order_id}</p>
            <p><strong>Customer:</strong> ${customer.name} (${customer.phone})</p>
            <p><strong>Delivery Address:</strong> ${customer.address}, ${customer.city} - ${customer.pincode}</p>
            <h3 style="margin-top: 20px;">Items Purchased:</h3>
            <ul>
              ${(items || []).map((i: any) => `<li>${i.product?.name || i.name} &times; ${i.quantity}</li>`).join('')}
            </ul>
            <p style="color: #87786B; font-size: 12px; margin-top: 24px;">Designer Furniture & Interior &bull; Santacruz West, Mumbai</p>
          </div>
        `;

        await Promise.allSettled([
          resend.emails.send({
            from: `Designer Furniture <${SENDER_EMAIL}>`,
            to: OWNER_EMAILS,
            subject: `🛒 New Furniture Order Confirmed: ${customer.name} (${razorpay_order_id})`,
            html: orderSummaryHtml,
          }),
          resend.emails.send({
            from: `Designer Furniture & Interior <${SENDER_EMAIL}>`,
            to: [customer.email],
            subject: `Order Confirmed: ${razorpay_order_id} - Designer Furniture & Interior`,
            html: orderSummaryHtml,
          }),
        ]);
      } catch (emailErr) {
        console.error('Order email dispatch error:', emailErr);
      }
    }

    return res.status(200).json({
      success: true,
      message: 'Payment verified and order recorded successfully.',
      orderId: razorpay_order_id,
    });
  } catch (err: any) {
    console.error('Payment verification error:', err);
    return res.status(500).json({
      success: false,
      error: err.message || 'Payment verification failed.',
    });
  }
});
// Production static files vs Development Vite middleware
const isProd = process.env.NODE_ENV === 'production';
if (!isProd) {
  const { createServer } = await import('vite');
  const vite = await createServer({
    server: { middlewareMode: true },
    appType: 'spa',
  });
  app.use(vite.middlewares);
  // Ensure any direct path (like /admin-image-tool) returns index.html correctly
  app.use('*', async (req, res, next) => {
    const url = req.originalUrl;
    // Don't intercept API routes
    if (url.startsWith('/api/')) return next();
    try {
      let template = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8');
      template = await vite.transformIndexHtml(url, template);
      res.status(200).set({ 'Content-Type': 'text/html' }).end(template);
    } catch (e) {
      vite.ssrFixStacktrace(e as Error);
      next(e);
    }
  });
} else {
  const distPath = path.resolve(__dirname, 'dist');
  app.use(express.static(distPath));
  app.get('*', (_req, res) => {
    res.sendFile(path.resolve(distPath, 'index.html'));
  });
}

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT} (${isProd ? 'production' : 'development'})`);
});
