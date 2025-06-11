import { useState } from 'react';
import { IoChevronDown, IoHelpCircle, IoSparkles, IoStar } from 'react-icons/io5';

const UiFAQSection = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What services do you offer?",
      answer: "We provide comprehensive digital solutions including web development, mobile app development, UI/UX design, and digital marketing services. Our team specializes in creating custom solutions tailored to your business needs."
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary depending on complexity and scope. A simple website typically takes 2-4 weeks, while more complex applications can take 2-6 months. We'll provide a detailed timeline during our initial consultation."
    },
    {
      question: "Do you provide ongoing support?",
      answer: "Yes! We offer comprehensive maintenance and support packages to ensure your digital solutions continue to perform optimally. This includes updates, security monitoring, and technical support."
    },
    {
      question: "What is your pricing structure?",
      answer: "Our pricing is project-based and depends on your specific requirements. We offer transparent, competitive pricing with no hidden fees. Contact us for a detailed quote tailored to your needs."
    },
    {
      question: "Can you work with our existing systems?",
      answer: "Absolutely! We have extensive experience integrating with various platforms and systems. We'll assess your current setup and recommend the best approach for seamless integration."
    }
  ];

  return (
    <div className="relative py-24 bg-gradient-to-br from-slate-50 via-white to-emerald-50 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-96 h-96 bg-gradient-to-br from-gray-200/30 to-emerald-200/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-32 w-96 h-96 bg-gradient-to-br from-emerald-200/30 to-gray-200/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-emerald-200/20 to-gray-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-gray-500 to-emerald-500 rounded-2xl mb-6 shadow-lg">
            <IoHelpCircle className="w-8 h-8 text-white" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-500 to-emerald-500 bg-clip-text text-transparent mb-4">
            Frequently Asked Questions
          </h2>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Find answers to common questions about our services and processes
          </p>
          
          <div className="flex items-center justify-center mt-6 space-x-2">
            <IoSparkles className="w-5 h-5 text-emerald-500" />
            <span className="text-sm font-medium text-emerald-600">Everything you need to know</span>
            <IoSparkles className="w-5 h-5 text-emerald-500" />
          </div>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`group bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 ${
                openFaqIndex === index ? 'ring-2 ring-emerald-500/20 shadow-lg' : ''
              }`}
            >
              <button
                className="flex justify-between items-center w-full p-6 lg:p-8 text-left hover:bg-gradient-to-r hover:from-emerald-50/50 hover:to-gray-50/50 transition-all duration-300"
                onClick={() => toggleFaq(index)}
              >
                <div className="flex items-start space-x-4">
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                    openFaqIndex === index 
                      ? 'bg-gradient-to-r from-gray-500 to-emerald-500 text-white shadow-lg' 
                      : 'bg-emerald-100 text-emerald-600 group-hover:bg-emerald-200'
                  }`}>
                    <IoStar className="w-4 h-4" />
                  </div>
                  <span className="text-lg lg:text-xl font-semibold text-gray-900 group-hover:text-emerald-900 transition-colors">
                    {faq.question}
                  </span>
                </div>
                
                <div className={`flex-shrink-0 ml-4 p-2 rounded-full transition-all duration-300 ${
                  openFaqIndex === index 
                    ? 'bg-gradient-to-r from-gray-500 to-emerald-500 text-white shadow-lg rotate-180' 
                    : 'bg-gray-100 text-gray-500 group-hover:bg-emerald-100 group-hover:text-emerald-600'
                }`}>
                  <IoChevronDown className="w-5 h-5 transition-transform duration-300" />
                </div>
              </button>

              {openFaqIndex === index && (
                <div className="px-6 lg:px-8 pb-6 lg:pb-8">
                  <div className="ml-12 bg-gradient-to-r from-emerald-50/50 to-gray-50/50 rounded-xl p-6 border-l-4 border-gradient-to-b border-emerald-500">
                    <p className="text-gray-700 text-lg leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-emerald-100 to-gray-100 rounded-full border border-emerald-200/50">
            <span className="text-emerald-700 font-medium mr-2">Still have questions?</span>
            <a href="/contact"><button className="text-emerald-600 hover:text-emerald-800 font-semibold underline decoration-2 underline-offset-2 transition-colors">
              Contact us 
            </button></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UiFAQSection;