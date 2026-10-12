import React, { useState } from 'react';
import { Send, CheckCircle2, MessageSquare, PhoneCall, Mail, Calendar, Clock, Loader2, AlertCircle } from 'lucide-react';
import { Button } from './Button';

interface ContactFormProps {
  initialProjectType?: string;
  onSuccess?: () => void;
}

export const ContactForm: React.FC<ContactFormProps> = ({
  initialProjectType = 'Custom Furniture',
  onSuccess,
}) => {
  // Tomorrow's date formatted as YYYY-MM-DD for min date
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split('T')[0];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    whatsapp: '',
    projectType: initialProjectType,
    preferredDate: minDate,
    preferredTime: 'Afternoon (2:00 PM – 5:00 PM)',
    location: '',
    requirementSummary: '',
    budget: '',
    preferredContactMethod: 'WhatsApp',
    projectDetails: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submissionFeedback, setSubmissionFeedback] = useState<{
    message: string;
    mode?: string;
  } | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const projectTypes = [
    'Sofas',
    'Dining Tables',
    'Beds & Bedroom',
    'Living & Storage',
    'Custom Furniture',
    'Interior Requirement',
    'Other',
  ];

  const timeSlots = [
    'Morning (10:30 AM – 1:00 PM)',
    'Afternoon (2:00 PM – 5:00 PM)',
    'Evening (5:00 PM – 8:00 PM)',
    'Flexible / Any time convenient',
  ];

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = 'Please provide your full name.';
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address for confirmation.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Please provide your phone number.';
    } else if (!/^[0-9+()-\s]{8,15}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number.';
    }
    if (!formData.location.trim()) newErrors.location = 'Please share your Mumbai area or location.';
    if (!formData.projectDetails.trim()) newErrors.projectDetails = 'Please share a brief note on your requirements.';
    return newErrors;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const rest = { ...prev };
        delete rest[name];
        return rest;
      });
    }
  };

  const constructWhatsAppMessage = () => {
    return `*New Consultation Booking - Designer Furniture & Interior*%0A%0A*Name:* ${encodeURIComponent(
      formData.name
    )}%0A*Email:* ${encodeURIComponent(formData.email)}%0A*Phone:* ${encodeURIComponent(
      formData.phone
    )}%0A*WhatsApp:* ${encodeURIComponent(
      formData.whatsapp || formData.phone
    )}%0A*Service:* ${encodeURIComponent(formData.projectType)}%0A*Date:* ${encodeURIComponent(
      formData.preferredDate
    )}%0A*Time Slot:* ${encodeURIComponent(formData.preferredTime)}%0A*Location:* ${encodeURIComponent(
      formData.location
    )}%0A*Budget:* ${encodeURIComponent(
      formData.budget || 'To be discussed'
    )}%0A*Details:* ${encodeURIComponent(formData.projectDetails)}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/send-enquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit consultation request.');
      }

      setSubmissionFeedback({
        message: result.message || 'Consultation confirmed!',
        mode: result.mode,
      });
      setSubmitted(true);
      if (onSuccess) onSuccess();
    } catch (err: any) {
      console.error('Error submitting form:', err);
      // Even if network fails, don't leave the user hanging: show error and allow WhatsApp fallback
      setSubmitError(
        err.message || 'We could not connect to the email server. You can also send directly via WhatsApp.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleOpenWhatsAppDirect = () => {
    const message = constructWhatsAppMessage();
    window.open(`https://wa.me/919821432122?text=${message}`, '_blank');
  };

  const inputClass = (hasError: boolean) =>
    `w-full bg-[#F6F2EC] border px-3.5 py-2.5 text-sm text-[#18181B] placeholder-[#8A8279] focus:outline-hidden focus:border-[#18181B] focus:bg-[#FAF9F5] transition-colors rounded-xs ${
      hasError ? 'border-red-600' : 'border-[#D9D1C5]'
    }`;

  if (submitted) {
    return (
      <div className="bg-[#FAF9F5] border border-[#D9D1C5] p-6 sm:p-10 rounded-xs shadow-xs text-left">
        <div className="flex items-center gap-3 mb-4 pb-4 border-b border-[#E6DFD5]">
          <CheckCircle2 className="w-10 h-10 text-[#1F5435] shrink-0" />
          <div>
            <h3 className="font-serif text-2xl text-[#18181B] font-normal">
              Consultation Confirmed, {formData.name}!
            </h3>
            <p className="text-xs text-[#87786B] uppercase tracking-wider font-semibold">
              Automated Confirmation &amp; Lead Notification Dispatched
            </p>
          </div>
        </div>

        {/* Email Notification Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
          <div className="bg-[#FFFFFF] border border-[#D9D1C5] p-4 rounded-xs">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1F5435] mb-1">
              <Mail className="w-4 h-4" />
              <span>Customer Confirmation</span>
            </div>
            <p className="text-xs text-[#5C554E] leading-relaxed">
              A booking confirmation email has been dispatched to <strong>{formData.email}</strong> with your service summary and studio details.
            </p>
          </div>

          <div className="bg-[#FFFFFF] border border-[#D9D1C5] p-4 rounded-xs">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#9A6F3E] mb-1">
              <CheckCircle2 className="w-4 h-4" />
              <span>Studio Owner Alert</span>
            </div>
            <p className="text-xs text-[#5C554E] leading-relaxed">
              Our studio head has received your full requirement details, contact numbers, and requested time slot for direct review.
            </p>
          </div>
        </div>

        {/* Booking Summary Box */}
        <div className="bg-[#F6F2EC] border border-[#E0D7CC] p-4 rounded-xs mb-6 text-xs text-[#38332E] space-y-1.5">
          <div className="font-semibold text-xs uppercase tracking-wider text-[#18181B] mb-2 pb-1 border-b border-[#E0D7CC]">
            Booking Details
          </div>
          <div className="flex justify-between">
            <span className="text-[#87786B]">Service:</span>
            <span className="font-medium text-[#18181B]">{formData.projectType}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#87786B]">Requested Date:</span>
            <span className="font-medium text-[#18181B]">{formData.preferredDate}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#87786B]">Requested Time:</span>
            <span className="font-medium text-[#18181B]">{formData.preferredTime}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#87786B]">Location:</span>
            <span className="font-medium text-[#18181B]">{formData.location}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#87786B]">Phone / WhatsApp:</span>
            <span className="font-medium text-[#18181B]">{formData.phone}</span>
          </div>
        </div>

        <p className="text-xs text-[#5C554E] mb-6 leading-relaxed">
          Need an immediate response, or have photos and architectural layouts you want to share right away? You can forward this exact request to our workshop team on WhatsApp:
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-3">
          <Button
            variant="whatsapp"
            size="md"
            onClick={handleOpenWhatsAppDirect}
            className="w-full sm:w-auto"
          >
            <MessageSquare className="w-4 h-4 mr-1.5" />
            Send Photos on WhatsApp
          </Button>
          <Button
            variant="outline"
            size="md"
            onClick={() => {
              setSubmitted(false);
              setFormData((prev) => ({
                ...prev,
                name: '',
                email: '',
                phone: '',
                whatsapp: '',
                projectDetails: '',
                requirementSummary: '',
              }));
            }}
            className="w-full sm:w-auto"
          >
            Submit Another Request
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#FAF9F5] border border-[#E6DFD5] p-6 sm:p-10 shadow-xs"
      noValidate
    >
      <div className="mb-8">
        <div className="text-xs uppercase tracking-[0.2em] font-semibold text-[#87786B] mb-2">
          Consultation Request
        </div>
        <h3 className="font-serif text-2xl sm:text-3xl text-[#18181B] font-normal">
          Tell Us About Your Requirement
        </h3>
        <p className="text-xs sm:text-sm text-[#5C554E] mt-2">
          Share your space dimensions, furniture needs, or ideas. Both you and our studio will receive an instant confirmation email with full booking details.
        </p>
      </div>

      {submitError && (
        <div className="mb-6 p-3.5 bg-red-50 border border-red-200 text-red-800 rounded-xs flex items-start gap-2.5 text-xs">
          <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold">Submission Note</p>
            <p>{submitError}</p>
          </div>
        </div>
      )}

      <div className="space-y-5">
        {/* Row 1: Full Name & Customer Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs uppercase tracking-wider font-semibold text-[#38332E] mb-1.5">
              Full Name <span className="text-red-700">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Rahul Sharma"
              className={inputClass(!!errors.name)}
            />
            {errors.name && <p className="text-xs text-red-700 mt-1">{errors.name}</p>}
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider font-semibold text-[#38332E] mb-1.5">
              Email Address <span className="text-red-700">*</span>
              <span className="text-[#87786B] font-normal lowercase ml-1">(for confirmation email)</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="e.g. rahul@example.com"
              className={inputClass(!!errors.email)}
            />
            {errors.email && <p className="text-xs text-red-700 mt-1">{errors.email}</p>}
          </div>
        </div>

        {/* Row 2: Phone & WhatsApp */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs uppercase tracking-wider font-semibold text-[#38332E] mb-1.5">
              Phone Number <span className="text-red-700">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="e.g. 98214 32122"
              className={inputClass(!!errors.phone)}
            />
            {errors.phone && <p className="text-xs text-red-700 mt-1">{errors.phone}</p>}
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider font-semibold text-[#38332E] mb-1.5">
              WhatsApp Number <span className="text-[#87786B] font-normal lowercase">(if different)</span>
            </label>
            <input
              type="tel"
              name="whatsapp"
              value={formData.whatsapp}
              onChange={handleChange}
              placeholder="e.g. 98214 32122"
              className={inputClass(false)}
            />
          </div>
        </div>

        {/* Row 3: Service / Project Type & Location in Mumbai */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs uppercase tracking-wider font-semibold text-[#38332E] mb-1.5">
              Service / Project Type <span className="text-red-700">*</span>
            </label>
            <select
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              className={`${inputClass(false)} cursor-pointer`}
            >
              {projectTypes.map((pt) => (
                <option key={pt} value={pt}>
                  {pt}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider font-semibold text-[#38332E] mb-1.5">
              Location / Area in Mumbai <span className="text-red-700">*</span>
            </label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="e.g. Santacruz West, Bandra, Juhu, Khar, Andheri"
              className={inputClass(!!errors.location)}
            />
            {errors.location && <p className="text-xs text-red-700 mt-1">{errors.location}</p>}
          </div>
        </div>

        {/* Row 4: Preferred Date & Time Slot */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs uppercase tracking-wider font-semibold text-[#38332E] mb-1.5">
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#C5A880]" /> Preferred Consultation Date
              </span>
            </label>
            <input
              type="date"
              name="preferredDate"
              min={minDate}
              value={formData.preferredDate}
              onChange={handleChange}
              className={`${inputClass(false)} cursor-pointer`}
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider font-semibold text-[#38332E] mb-1.5">
              <span className="inline-flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#C5A880]" /> Preferred Time Slot
              </span>
            </label>
            <select
              name="preferredTime"
              value={formData.preferredTime}
              onChange={handleChange}
              className={`${inputClass(false)} cursor-pointer`}
            >
              {timeSlots.map((ts) => (
                <option key={ts} value={ts}>
                  {ts}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Row 5: Approximate Budget & Looking for */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs uppercase tracking-wider font-semibold text-[#38332E] mb-1.5">
              Approximate Budget <span className="text-[#87786B] font-normal lowercase">(optional)</span>
            </label>
            <select
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className={`${inputClass(false)} cursor-pointer`}
            >
              <option value="">Select range</option>
              <option value="Under ₹1 Lakh (Individual Piece)">Under ₹1 Lakh (Individual Piece)</option>
              <option value="₹1 Lakh – ₹3 Lakhs">₹1 Lakh – ₹3 Lakhs</option>
              <option value="₹3 Lakhs – ₹7 Lakhs">₹3 Lakhs – ₹7 Lakhs</option>
              <option value="₹7 Lakhs – ₹15 Lakhs">₹7 Lakhs – ₹15 Lakhs</option>
              <option value="₹15 Lakhs+ (Complete Turnkey)">₹15 Lakhs+ (Complete Turnkey)</option>
              <option value="To Discuss Based on Designs">To Discuss Based on Designs</option>
            </select>
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider font-semibold text-[#38332E] mb-1.5">
              Specific Item / Furniture Name
            </label>
            <input
              type="text"
              name="requirementSummary"
              value={formData.requirementSummary}
              onChange={handleChange}
              placeholder="e.g. L-shaped sectional sofa or teak dining table"
              className={inputClass(false)}
            />
          </div>
        </div>

        {/* Row 6: Preferred Contact Method */}
        <div>
          <label className="block text-xs uppercase tracking-wider font-semibold text-[#38332E] mb-1.5">
            Preferred Follow-up Contact Method
          </label>
          <div className="flex flex-wrap items-center gap-6 mt-1">
            <label className="inline-flex items-center gap-2 text-xs sm:text-sm text-[#38332E] cursor-pointer">
              <input
                type="radio"
                name="preferredContactMethod"
                value="WhatsApp"
                checked={formData.preferredContactMethod === 'WhatsApp'}
                onChange={handleChange}
                className="accent-[#18181B]"
              />
              <span className="flex items-center gap-1.5">
                <MessageSquare className="w-3.5 h-3.5 text-[#1F5435]" /> WhatsApp
              </span>
            </label>
            <label className="inline-flex items-center gap-2 text-xs sm:text-sm text-[#38332E] cursor-pointer">
              <input
                type="radio"
                name="preferredContactMethod"
                value="Phone Call"
                checked={formData.preferredContactMethod === 'Phone Call'}
                onChange={handleChange}
                className="accent-[#18181B]"
              />
              <span className="flex items-center gap-1.5">
                <PhoneCall className="w-3.5 h-3.5 text-[#87786B]" /> Phone Call
              </span>
            </label>
            <label className="inline-flex items-center gap-2 text-xs sm:text-sm text-[#38332E] cursor-pointer">
              <input
                type="radio"
                name="preferredContactMethod"
                value="Email"
                checked={formData.preferredContactMethod === 'Email'}
                onChange={handleChange}
                className="accent-[#18181B]"
              />
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#9A6F3E]" /> Email Only
              </span>
            </label>
          </div>
        </div>

        {/* Row 7: Project Details */}
        <div>
          <label className="block text-xs uppercase tracking-wider font-semibold text-[#38332E] mb-1.5">
            Project Details &amp; Specific Requirements <span className="text-red-700">*</span>
          </label>
          <textarea
            name="projectDetails"
            rows={4}
            value={formData.projectDetails}
            onChange={handleChange}
            placeholder="Describe your room layout, preferred materials (teak wood, veneer, fabric type), reference styles, or specific dimensions..."
            className={`${inputClass(!!errors.projectDetails)} resize-y`}
          />
          {errors.projectDetails && (
            <p className="text-xs text-red-700 mt-1">{errors.projectDetails}</p>
          )}
        </div>

        {/* Submit Buttons */}
        <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
          <Button
            type="submit"
            variant="primary"
            size="lg"
            disabled={isSubmitting}
            className="w-full sm:w-auto"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Sending Enquiry...
              </>
            ) : (
              <>
                <Send className="w-4 h-4 mr-2" />
                Send Enquiry
              </>
            )}
          </Button>

          <Button
            type="button"
            variant="whatsapp"
            size="lg"
            onClick={handleOpenWhatsAppDirect}
            className="w-full sm:w-auto"
          >
            <MessageSquare className="w-4 h-4 mr-2" />
            Send via WhatsApp Directly
          </Button>
        </div>
      </div>
    </form>
  );
};
