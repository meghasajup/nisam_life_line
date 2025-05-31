import React, { useState } from 'react';

export const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      setTimeout(() => {
        console.log('Form submitted:', formData);
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
        setTimeout(() => setSubmitSuccess(false), 5000);
      }, 1500);
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">
            <span className="text-emerald-600">Contact</span> Us
          </h1>
          <div className="w-32 h-1 bg-emerald-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Reach out to our team - we're here to help and answer any questions you may have.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-10 border border-gray-100">
            <h2 className="text-3xl font-bold mb-8 text-emerald-600">Send a Message</h2>

            {submitSuccess && (
              <div className="mb-8 p-4 bg-emerald-50 text-emerald-700 rounded-lg border border-emerald-200">
                Thank you! Your message has been sent successfully.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2 text-left">
                  Full Name <span className="text-emerald-600">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-5 py-4 bg-gray-50 rounded-lg border ${errors.name ? 'border-red-500' : 'border-gray-200'} focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-gray-900 placeholder-gray-400`}
                  placeholder="Your name"
                />
                {errors.name && <p className="mt-2 text-sm text-red-500">{errors.name}</p>}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2 text-left">
                  Email Address <span className="text-emerald-600">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-5 py-4 bg-gray-50 rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-200'} focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-gray-900 placeholder-gray-400`}
                  placeholder="your.email@example.com"
                />
                {errors.email && <p className="mt-2 text-sm text-red-500">{errors.email}</p>}
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2 text-left">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-5 py-4 bg-gray-50 rounded-lg border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-gray-900 placeholder-gray-400"
                  placeholder="+91 1234567890"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2 text-left">
                  Your Message <span className="text-emerald-600">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-5 py-4 bg-gray-50 rounded-lg border ${errors.message ? 'border-red-500' : 'border-gray-200'} focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-gray-900 placeholder-gray-400`}
                  placeholder="How can we help you?"
                ></textarea>
                {errors.message && <p className="mt-2 text-sm text-red-500">{errors.message}</p>}
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 px-6 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-bold rounded-lg transition-all duration-300 shadow-md hover:shadow-lg ${isSubmitting ? 'opacity-80 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    'Send Message →'
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-xl p-10 border border-gray-100">
              <h2 className="text-3xl font-bold mb-8 text-emerald-600">Get In Touch</h2>
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-emerald-100 p-4 rounded-xl border border-emerald-200">
                    <svg className="h-6 w-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="ml-5">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Phone</h3>
                    <p className="text-gray-600">+91 9400440686</p>
                    <p className="text-gray-600 mt-1">+91 8921703086</p>
                    <p className="text-gray-600 mt-1">+91 9400749917</p>
                    <p className="text-gray-600 mt-1">+91 7034980314</p>
                    <p className="text-gray-600 mt-1">+91 9961273400</p>
                  </div>
                </div>

                {/* Add more contact details if needed */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
