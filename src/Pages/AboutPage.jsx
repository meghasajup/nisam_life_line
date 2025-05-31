import React from 'react';


export const AboutPage = () => {
    
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="relative bg-white text-black py-24 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Main heading with elegant typography */}
                    <div className="mb-12">
                        <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
                            <span className="block text-gray-900">Behind the Bytes</span>
                            <span className="block text-emerald-600 mt-3">Our Story at Techista Solutions</span>
                        </h1>
                        <div className="flex justify-center mt-8">
                            <div className="w-40 h-1 bg-emerald-500"></div>
                        </div>
                    </div>

                    {/* Clean dot indicators (no animation) */}
                    <div className="flex justify-center space-x-3 mb-16">
                        {[1, 2, 3].map((item) => (
                            <div
                                key={item}
                                className="w-2.5 h-2.5 rounded-full bg-emerald-400"
                            ></div>
                        ))}
                    </div>

                    {/* Supporting text */}
                    <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Techista Solutions since 2025 - transforming complex challenges into elegant technological innovations.
                    </p>
                </div>

                {/* Minimal corner accents */}
                <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-emerald-50"></div>
                <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-emerald-50"></div>
            </section>

            {/* Stats Section */}
            <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 -mt-10">
                <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
                    <div className="text-center mb-12">
                        <div className="mb-8">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                <span className="text-emerald-600">#</span> Behind the Bytes
                            </h2>
                            <div className="w-24 h-1.5 bg-emerald-500 rounded-full mx-auto"></div>
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-3">
                            Our Story at Techista Solutions
                        </h3>
                        <p className="text-lg italic text-gray-600">
                            Take a sneak peek into our journey
                        </p>
                    </div>

                    <div className="border-t border-gray-300 w-3/4 mx-auto mb-12"></div>

                </div>
            </section>


            {/* https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80 */}

            {/* Mission Section */}
            <section className="py-20 px-4 max-w-7xl mx-auto bg-white">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div className="space-y-6">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6 font-serif">
                            Our Mission
                        </h2>
                        <p className="text-xl text-gray-800 leading-relaxed font-medium">
                            To empower businesses through <span className="font-semibold text-emerald-600">cutting-edge technology solutions</span> that solve real-world problems.
                        </p>
                        <p className="text-xl text-gray-800 leading-relaxed font-medium">
                            We believe in building <span className="font-semibold text-emerald-600">long-term partnerships</span> with our clients, delivering not just products but sustainable value.
                        </p>
                        <div className="pt-4">
                            <button className="px-8 py-3 bg-gradient-to-r from-gray-900 to-emerald-800 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform hover:from-gray-800 hover:to-emerald-700">
                                Learn More
                                <span className="ml-2">→</span>
                            </button>
                        </div>
                    </div>
                    <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-emerald-700/10 rounded-2xl transform rotate-1 group-hover:rotate-0 transition duration-500"></div>
                        <div className="relative rounded-2xl overflow-hidden shadow-xl h-80 md:h-96 transform group-hover:-translate-y-2 transition duration-500">
                            <img
                                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
                                alt="Our mission at Techista Solutions"
                                className="w-full h-full object-cover object-center transition duration-700 group-hover:scale-105"
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = "/images/placeholder-mission.jpg";
                                }}
                            />
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition duration-500"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
   <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-gray-100">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-serif tracking-tight">
        Meet <span className="text-emerald-600">Our Team</span>
      </h2>
      <div className="w-24 h-1 bg-emerald-500 mx-auto mb-6"></div>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
        The talented professionals who make innovation happen every day
      </p>
    </div>
    
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {[
        {
          name: "Jeswin Joseph",
          role: "Backend Developer",
          image: new URL('../images/Jeswin.jpg', import.meta.url).href
        },
        { 
          name: "Keshava Patteri M", 
          role: "UX Designer", 
          image: new URL('../images/keshu.jpg', import.meta.url).href
        },
        { 
          name: "Megha Saju P", 
          role: "Product Manager", 
          image: new URL('../images/megha.jpg', import.meta.url).href  
        },
        { 
          name: "Fathimath Sumayya O", 
          role: "Marketing Director", 
          image: new URL('../images/summaya.jpg', import.meta.url).href  
        },
        { 
          name: "Maneesha M A", 
          role: "Frontend Developer", 
          image: new URL('../images/Maneesha.jpg', import.meta.url).href  
        }
      ].map((person, index) => (
        <div 
          key={index} 
          className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col"
        >
          <div className="relative h-72 overflow-hidden bg-gray-100">
            <img 
              src={person.image} 
              alt={person.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          
          <div className="p-6 text-center flex-grow">
            <h3 className="text-2xl font-bold text-gray-800 mb-1 group-hover:text-emerald-600 transition-colors">
              {person.name}
            </h3>
            <p className="text-emerald-600 font-medium mb-4">{person.role}</p>
            <div className="flex justify-center space-x-4">
              {[
                {
                  icon: (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                    </svg>
                  ),
                  color: "hover:text-blue-600"
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/>
                    </svg>
                  ),
                  color: "hover:text-blue-400"
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  ),
                  color: "hover:text-gray-800"
                }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className={`text-gray-400 ${social.color} transition-colors duration-300 transform hover:scale-110`}
                  aria-label={`${person.name}'s social media`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
    
    <div className="text-center mt-16">
      <button className="px-8 py-3 bg-emerald-600 text-white font-medium rounded-full hover:bg-emerald-700 transition-colors duration-300 shadow-lg hover:shadow-emerald-200">
        View All Team Members
      </button>
    </div>
  </div>
</section>

            {/* CTA Section */}
        <section className="bg-gradient-to-r from-green-600 to-emerald-500 text-white py-20 px-4">
    <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 tracking-tight">Ready to start your project?</h2>
        <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto leading-relaxed">
            We'd love to hear about your ideas and how we can help bring them to life.
        </p>
        <button className="bg-white text-emerald-600 font-bold py-3 px-10 rounded-full hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Get in Touch →
        </button>
    </div>
</section>
        </div>
    );
};