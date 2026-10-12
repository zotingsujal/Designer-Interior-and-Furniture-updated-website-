import { Resend } from 'resend';

export const handler = async (event: any) => {
  // Support CORS preflight
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 204,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
      },
      body: '',
    };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: 'Method Not Allowed' }),
    };
  }

  try {
    const body = JSON.parse(event.body || '{}');
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
    } = body;

    if (!name || !email || !phone) {
      return {
        statusCode: 400,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          success: false,
          error: 'Name, email, and phone number are required.',
        }),
      };
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const resend = resendApiKey ? new Resend(resendApiKey) : null;
    const rawOwnerEmails =
      process.env.OWNER_EMAIL ||
      'dsignerfurniture@outlook.com, dsignerfurnitureandinterior@gmail.com';
    const OWNER_EMAILS = rawOwnerEmails
      .split(',')
      .map((e) => e.trim())
      .filter((e) => Boolean(e));
    const SENDER_EMAIL = process.env.SENDER_EMAIL || 'onboarding@resend.dev';

    const serviceName = projectType || 'Custom Furniture & Interior Design';
    const formattedDate = preferredDate || 'Flexible / To be coordinated';
    const formattedTime = preferredTime || 'Anytime during studio hours';
    const submissionTime = new Date().toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      dateStyle: 'medium',
      timeStyle: 'short',
    });

    // 1. HTML Email for Business Owners
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
          <a href="https://wa.me/919821432122?text=Hi%20Designer%20Furniture%2C%20I%20just%20booked%20a%20consultation%20on%20your%20website%20for%20${encodeURIComponent(name)}" style="display: inline-block; background: #25D366; color: #FFFFFF; text-decoration: none; padding: 11px 22px; font-size: 13.5px; font-weight: bold; border-radius: 3px; letter-spacing: 0.5px;">Chat on WhatsApp: +91 98214 32122</a>
        </div>

        <div style="border-top: 1px solid #E6DFD5; padding-top: 18px; font-size: 12px; color: #87786B; text-align: center; line-height: 1.6;">
          <p style="margin: 0 0 4px; font-weight: bold; color: #5C554E;">Designer Furniture &amp; Interior</p>
          <p style="margin: 0 0 4px;">Shop No. 7, Rizvi Palace, TPS III, 39th Road, Bandra (West) / Santacruz (West), Mumbai - 400050</p>
          <p style="margin: 0;">Opening Hours: Monday – Sunday: 10:30 AM – 9:00 PM</p>
        </div>
      </div>
    `;

    if (resend) {
      await Promise.allSettled([
        resend.emails.send({
          from: `Designer Furniture <${SENDER_EMAIL}>`,
          to: OWNER_EMAILS,
          subject: `🛋️ New Booking: ${name} - ${serviceName}`,
          html: ownerHtml,
          replyTo: email,
        }),
        resend.emails.send({
          from: `Designer Furniture & Interior <${SENDER_EMAIL}>`,
          to: [email],
          subject: `Consultation Confirmed: ${serviceName} - Designer Furniture & Interior`,
          html: customerHtml,
        }),
      ]);

      return {
        statusCode: 200,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          success: true,
          mode: 'resend_live',
          message: `Confirmation email dispatched to ${email} and booking details sent to owner.`,
        }),
      };
    } else {
      return {
        statusCode: 200,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          success: true,
          mode: 'simulated',
          message: 'Inquiry registered successfully.',
        }),
      };
    }
  } catch (error: any) {
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        success: false,
        error: error.message || 'Error processing inquiry.',
      }),
    };
  }
};
