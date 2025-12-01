import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const Contact = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Here you would typically send data to your backend
      console.log('Form data:', data);
      
      setSubmitStatus('success');
      reset();
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  const contactInfo = [
    {
      title: "Phone",
      value: "+880 1793651031",
      link: "tel:+8801793651031",
      icon: "📞"
    },
    {
      title: "Email",
      value: "epshitashima@gmail.com",
      link: "mailto:epshitashima@gmail.com",
      icon: "✉️"
    },
    {
      title: "Location",
      value: "Mirpur-2, Dhaka-1216",
      icon: "📍"
    }
  ];

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/epshita-shima",
      icon: "🐙",
      color: "hover:bg-gray-800 hover:text-white"
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com",
      icon: "💼",
      color: "hover:bg-blue-600 hover:text-white"
    },
    {
      name: "Facebook",
      url: "https://facebook.com",
      icon: "👥",
      color: "hover:bg-blue-500 hover:text-white"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            Let's <span className="text-blue-600 dark:text-blue-400">Connect</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Column - Contact Info */}
            <div className="lg:col-span-1">
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 lg:p-10 h-full">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-8 flex items-center">
                  <span className="text-3xl mr-3">📬</span>
                  Contact Information
                </h3>

                {/* Contact Details */}
                <div className="space-y-8 mb-12">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start group">
                      <div className="w-12 h-12 flex items-center justify-center bg-blue-50 dark:bg-blue-900/30 rounded-xl mr-4 group-hover:scale-110 transition-transform">
                        <span className="text-2xl">{info.icon}</span>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{info.title}</p>
                        {info.link ? (
                          <a 
                            href={info.link} 
                            className="text-lg font-semibold text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-lg font-semibold text-gray-800 dark:text-gray-200">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Social Links */}
                <div>
                  <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-6">Find Me Online</h4>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-14 h-14 flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-700 rounded-xl ${social.color} transition-all duration-300 group`}
                      >
                        <span className="text-2xl mb-1">{social.icon}</span>
                        <span className="text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                          {social.name}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 lg:p-10 h-full">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-8 flex items-center">
                  <span className="text-3xl mr-3">✍️</span>
                  Send a Message
                </h3>

                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    {/* Name Field */}
                    <div>
                      <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
                        Your Name *
                      </label>
                      <input
                        {...register("name", { 
                          required: "Name is required",
                          minLength: {
                            value: 2,
                            message: "Name must be at least 2 characters"
                          }
                        })}
                        type="text"
                        id="name"
                        placeholder="Enter your name"
                        className={`w-full px-4 py-3 rounded-lg border ${
                          errors.name 
                            ? 'border-red-500 focus:border-red-500 focus:ring-red-500' 
                            : 'border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:ring-blue-500'
                        } bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 transition-colors`}
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                      )}
                    </div>

                    {/* Email Field */}
                    <div>
                      <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
                        Email Address *
                      </label>
                      <input
                        {...register("email", { 
                          required: "Email is required",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address"
                          }
                        })}
                        type="email"
                        id="email"
                        placeholder="Enter your email"
                        className={`w-full px-4 py-3 rounded-lg border ${
                          errors.email 
                            ? 'border-red-500 focus:border-red-500 focus:ring-red-500' 
                            : 'border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:ring-blue-500'
                        } bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 transition-colors`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Subject Field */}
                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
                      Subject
                    </label>
                    <input
                      {...register("subject")}
                      type="text"
                      id="subject"
                      placeholder="Project inquiry, collaboration, etc."
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition-colors"
                    />
                  </div>

                  {/* Message Field */}
                  <div className="mb-8">
                    <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
                      Message *
                    </label>
                    <textarea
                      {...register("message", { 
                        required: "Message is required",
                        minLength: {
                          value: 10,
                          message: "Message must be at least 10 characters"
                        }
                      })}
                      id="message"
                      rows="5"
                      placeholder="Tell me about your project or inquiry..."
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.message 
                          ? 'border-red-500 focus:border-red-500 focus:ring-red-500' 
                          : 'border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:ring-blue-500'
                      } bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 resize-none transition-colors`}
                    ></textarea>
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="flex items-center justify-between">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`px-8 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-bold rounded-xl transition-all duration-300 flex items-center ${
                        isSubmitting ? 'opacity-75 cursor-not-allowed' : 'hover:shadow-lg hover:shadow-blue-500/30'
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></span>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <span className="ml-2">➜</span>
                        </>
                      )}
                    </button>

                    {/* Status Messages */}
                    {submitStatus === 'success' && (
                      <div className="flex items-center text-green-600 dark:text-green-400">
                        <span className="mr-2">✓</span>
                        Message sent successfully!
                      </div>
                    )}
                    {submitStatus === 'error' && (
                      <div className="flex items-center text-red-600 dark:text-red-400">
                        <span className="mr-2">✗</span>
                        Failed to send message. Please try again.
                      </div>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Contact Hours */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center px-6 py-3 bg-gray-100 dark:bg-gray-800 rounded-full">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse mr-3"></div>
              <p className="text-gray-600 dark:text-gray-400">
                Typically respond within <span className="font-bold text-gray-800 dark:text-gray-300">24 hours</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;