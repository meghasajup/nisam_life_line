import React, { useState, useRef } from 'react';

export const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    file: null
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const fileInputRef = useRef(null);

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

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      file: e.target.files[0]
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    
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
      
      // Simulate API call
      setTimeout(() => {
        console.log('Form submitted:', formData);
        setIsSubmitting(false);
        setSubmitSuccess(true);
        
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          message: '',
          file: null
        });
        
        if (fileInputRef.current) {
          fileInputRef.current.value = '';
        }
        
        // Hide success message after 5s
        setTimeout(() => setSubmitSuccess(false), 5000);
      }, 1500);
    }
  };

  return (
    <div className="min-h-screen bg-white mt-20 text-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-emerald-600">Contact</span> Us
          </h1>
          <div className="w-32 h-1 bg-emerald-500 mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Reach out to our team - we're here to help and answer any questions you may have.
          </p>
        </div>

        <div className="flex flex-col md:flex-row bg-white p-6 md:p-12 rounded-xl shadow-lg border border-gray-100">
          <div className="w-full md:w-2/3">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Schedule a call</h2>
            <p className="text-gray-600 mb-6">
              Let's embark on a Digital Revolution for Your Business.<br />
              Contact us now, and let's stride together towards success.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={`w-full bg-gray-50 p-3 rounded-lg border ${
                      errors.firstName ? 'border-red-500' : 'border-gray-200'
                    } focus:ring-2 focus:ring-emerald-500 focus:border-transparent`}
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
                  )}
                </div>
                
                <div className="flex-1">
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    className={`w-full bg-gray-50 p-3 rounded-lg border ${
                      errors.lastName ? 'border-red-500' : 'border-gray-200'
                    } focus:ring-2 focus:ring-emerald-500 focus:border-transparent`}
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
                  )}
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full bg-gray-50 p-3 rounded-lg border ${
                      errors.email ? 'border-red-500' : 'border-gray-200'
                    } focus:ring-2 focus:ring-emerald-500 focus:border-transparent`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>
                
                <div className="flex-1">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone (Optional)"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-gray-50 p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full bg-gray-50 p-3 rounded-lg border ${
                    errors.message ? 'border-red-500' : 'border-gray-200'
                  } focus:ring-2 focus:ring-emerald-500 focus:border-transparent`}
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              <div className="flex items-center">
                <label className="flex items-center cursor-pointer text-gray-700 hover:text-emerald-600 transition">
                  <span className="mr-2 text-xl">📎</span>
                  <span className="mr-3">Attach File</span>
                  <input 
                    type="file" 
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    className="hidden" 
                  />
                </label>
                {formData.file && (
                  <span className="text-sm text-gray-500 ml-2 truncate max-w-xs">
                    {formData.file.name}
                  </span>
                )}
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-emerald-600 text-white py-3 px-8 rounded-full flex items-center justify-center space-x-2 hover:bg-emerald-700 transition disabled:opacity-70 w-full md:w-auto"
                >
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                  {!isSubmitting && <span>→</span>}
                </button>
                
                {submitSuccess && (
                  <div className="mt-4 p-3 bg-emerald-50 text-emerald-700 rounded-lg">
                    Message sent successfully! We'll get back to you within 24 hours.
                  </div>
                )}
              </div>
            </form>
          </div>

          <div className="hidden md:flex w-full md:w-1/3 justify-center items-center pl-8">
            <div className="border-2 border-dashed rounded-xl w-full h-full flex items-center justify-center">
              <img 
                src="https://cdn.dribbble.com/users/2069369/screenshots/4276636/call_center.gif" 
                alt="Support Illustration" 
                className="object-contain w-full h-full rounded-lg"
              />
            </div>
          </div>
        </div>

        <div className="mt-16 bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-1/2">
              <iframe
                title="iROID Technologies Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3931.2587969751325!2d76.30348297515636!3d9.993885773265242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080db293ca998b%3A0x8e0c6509c69b0999!2siROID%20Technologies!5e0!3m2!1sen!2sin!4v1717250593395!5m2!1sen!2sin"
                className="w-full h-96 border-0"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>

            <div className="w-full lg:w-1/2 p-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">OFFICE ADDRESS</h2>

              <div className="space-y-6">
                <div>
                  <div className="bg-black text-white px-3 py-1 inline-block text-sm font-bold rounded mb-3">
                    INDIA
                  </div>
                  <p className="text-gray-700 mb-2">
                    2nd floor,<br />
                   
                    Palarivattom, Cochin – 25
                  </p>
                  <p className="mt-3">
                    <span className="font-semibold">Email:</span> techistasolutions@gmail.com
                  </p>
                  <p>
                    <span className="font-semibold">Phone:</span> +91 8921703086 +91 9400440686
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <h3 className="font-bold text-lg mb-3">Business Hours</h3>
                  <p className="text-gray-700">
                    Monday - Friday: 9AM - 6PM<br />
                    Saturday: 10AM - 4PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};