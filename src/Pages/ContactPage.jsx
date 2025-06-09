import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { axiosInstance } from '../config/axisoInstance';
import { toast } from 'sonner';

export const ContactPage = () => {
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const fileInputRef = useRef(null);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

 const onSubmit = async (data) => {
  const payload = {
    fullName: data.firstName,
    lastName: data.lastName,
    phone: data.phone,
    email: data.email,
    message: data.message,
  };
console.log("data",data);

  try {
    const response = await axiosInstance.post("/contact/create", payload,{
      withCredentials:true
    });
    console.log("Response:", response.data);

    // setSubmitSuccess(true);
    toast.success(" Message sent successfully! We'll get back to you within 24 hours")
    reset();
    if (fileInputRef.current) fileInputRef.current.value = '';
    setTimeout(() => setSubmitSuccess(false), 5000);
  } catch (error) {
    console.error("Submission failed:", error.response?.data || error.message);
  }
};


  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="">
        <div className=" text-center mb-16 bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-800  text-white py-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-emerald-600">Contact</span> Us
          </h1>
          <div className="w-32 h-1 bg-emerald-500 mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Reach out to our team - we're here to help and answer any questions you may have.
          </p>
        </div>
        

        <div className="flex max-w-7xl mx-auto flex-col md:flex-row bg-white p-8 md:p-12 rounded-2xl shadow-2xl border border-gray-100 backdrop-blur-sm bg-white/95">
          <div className="w-full md:w-2/3 pr-0 md:pr-8">
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-emerald-700 bg-clip-text text-transparent">
                Schedule a call
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Let's embark on a Digital Revolution for Your Business.<br />
                Contact us now, and let's stride together towards success.
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group">
                  <input
                    type="text"
                    placeholder="First Name"
                    {...register('firstName', { required: 'First name is required' })}
                    className={`w-full bg-gray-50/50 p-4 rounded-xl border-2 transition-all duration-300 ${
                      errors.firstName 
                        ? 'border-red-400 bg-red-50/50' 
                        : 'border-gray-200 hover:border-emerald-300 focus:border-emerald-500'
                    } focus:ring-4 focus:ring-emerald-100 focus:outline-none shadow-sm hover:shadow-md`}
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-sm mt-2 flex items-center">
                      <span className="mr-1">⚠️</span>
                      {errors.firstName.message}
                    </p>
                  )}
                </div>

                <div className="group">
                  <input
                    type="text"
                    placeholder="Last Name"
                    {...register('lastName', { required: 'Last name is required' })}
                    className={`w-full bg-gray-50/50 p-4 rounded-xl border-2 transition-all duration-300 ${
                      errors.lastName 
                        ? 'border-red-400 bg-red-50/50' 
                        : 'border-gray-200 hover:border-emerald-300 focus:border-emerald-500'
                    } focus:ring-4 focus:ring-emerald-100 focus:outline-none shadow-sm hover:shadow-md`}
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-sm mt-2 flex items-center">
                      <span className="mr-1">⚠️</span>
                      {errors.lastName.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group">
                  <input
                    type="email"
                    placeholder="Email Address"
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: 'Invalid email address',
                      },
                    })}
                    className={`w-full bg-gray-50/50 p-4 rounded-xl border-2 transition-all duration-300 ${
                      errors.email 
                        ? 'border-red-400 bg-red-50/50' 
                        : 'border-gray-200 hover:border-emerald-300 focus:border-emerald-500'
                    } focus:ring-4 focus:ring-emerald-100 focus:outline-none shadow-sm hover:shadow-md`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-2 flex items-center">
                      <span className="mr-1">⚠️</span>
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div className="group">
                  <input
                    type="tel"
                    placeholder="Phone Number (Optional)"
                    {...register('phone')}
                    className="w-full bg-gray-50/50 p-4 rounded-xl border-2 border-gray-200 hover:border-emerald-300 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 focus:outline-none transition-all duration-300 shadow-sm hover:shadow-md"
                  />
                </div>
              </div>

              <div className="group">
                <textarea
                  placeholder="Tell us about your project or how we can help you..."
                  rows={6}
                  {...register('message', { required: 'Message is required' })}
                  className={`w-full bg-gray-50/50 p-4 rounded-xl border-2 transition-all duration-300 resize-none ${
                    errors.message 
                      ? 'border-red-400 bg-red-50/50' 
                      : 'border-gray-200 hover:border-emerald-300 focus:border-emerald-500'
                  } focus:ring-4 focus:ring-emerald-100 focus:outline-none shadow-sm hover:shadow-md`}
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-2 flex items-center">
                    <span className="mr-1">⚠️</span>
                    {errors.message.message}
                  </p>
                )}
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white py-4 px-10 rounded-full flex items-center justify-center space-x-3 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed w-full md:w-auto shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 font-semibold text-lg"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <span className="text-xl">→</span>
                    </>
                  )}
                </button>

                {submitSuccess && (
                  <div className="mt-6 p-4 bg-gradient-to-r from-emerald-50 to-green-50 text-emerald-800 rounded-xl border border-emerald-200 flex items-center space-x-3 shadow-sm">
                    <span className="text-2xl">✅</span>
                    <span className="font-medium">Message sent successfully! We'll get back to you within 24 hours.</span>
                  </div>
                )}
              </div>
            </form>
          </div>

          <div className="hidden md:flex w-full md:w-1/3 justify-center items-center pl-8 mt-8 md:mt-0">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative border-2 border-dashed border-emerald-200 rounded-2xl w-full h-full flex items-center justify-center bg-white/50 backdrop-blur-sm overflow-hidden">
                <img
                  src="https://cdn.dribbble.com/users/2069369/screenshots/4276636/call_center.gif"
                  alt="Support Illustration"
                  className="object-contain w-full h-full rounded-xl transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Map & Address */}
        <div className="mt-20 max-w-7xl mx-auto bg-white rounded-2xl mb-10 shadow-2xl overflow-hidden border border-gray-100">
          <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-1/2 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-gray-500/10 z-10 pointer-events-none"></div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.56659330425!2d77.46612584428054!3d12.954280236534027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1749185923027!5m2!1sen!2sin"
                width="600"
                height="450"
                style={{ border: 0, filter: 'grayscale(20%) contrast(1.1)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full min-h-[450px]"
              />
            </div>

            <div className="w-full lg:w-1/2 p-10 bg-gradient-to-br from-white to-gray-50">
              <h2 className="text-3xl font-bold mb-8 text-gray-800 flex items-center">
                <span className="mr-3 text-4xl">📍</span>
                OFFICE ADDRESS
              </h2>
              
              <div className="space-y-8">
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                  <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white px-4 py-2 inline-block text-sm font-bold rounded-lg mb-4 shadow-md">
                    🇮🇳 INDIA
                  </div>
                  <div className="space-y-3">
                    <p className="text-gray-700 text-lg leading-relaxed flex items-start">
                      <span className="mr-2 text-emerald-600 mt-1">📍</span>
                      Swaschi Cross Road,<br/>
                      Shantinagar, Bangalore - 560027
                    </p>
                    
                    <div className="space-y-2 pt-2">
                      <p className="flex items-center text-gray-700 hover:text-emerald-600 transition-colors">
                        <span className="mr-3 text-emerald-600">✉️</span>
                        <span className="font-semibold mr-2">Email:</span>
                        <a href="mailto:techistasolutions@gmail.com" className="hover:underline">
                          techistasolutions@gmail.com
                        </a>
                      </p>
                      <p className="flex items-center text-gray-700 hover:text-emerald-600 transition-colors">
                        <span className="mr-3 text-emerald-600">📞</span>
                        <span className="font-semibold mr-2">Phone:</span>
                        <span>+91 8921703086 / +91 9400440686</span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-emerald-50 to-green-50 p-6 rounded-xl border border-emerald-200 shadow-sm">
                  <h3 className="font-bold text-xl mb-4 text-gray-800 flex items-center">
                    <span className="mr-2 text-2xl">🕒</span>
                    Business Hours
                  </h3>
                  <div className="space-y-2 text-gray-700">
                    <p className="flex justify-between items-center py-1">
                      <span className="font-medium">Monday - Friday:</span>
                      <span className="bg-emerald-100 px-3 py-1 rounded-full text-sm font-semibold text-emerald-800">9AM - 6PM</span>
                    </p>
                    <p className="flex justify-between items-center py-1">
                      <span className="font-medium">Saturday:</span>
                      <span className="bg-emerald-100 px-3 py-1 rounded-full text-sm font-semibold text-emerald-800">10AM - 4PM</span>
                    </p>
                    <p className="flex justify-between items-center py-1">
                      <span className="font-medium">Sunday:</span>
                      <span className="bg-gray-100 px-3 py-1 rounded-full text-sm font-semibold text-gray-600">Closed</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
};