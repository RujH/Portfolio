"use client"

import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Clear email error when user types in email field
    if (name === 'email') {
      setEmailError(false);
    }
    setError(""); // Reset error message as user types
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // Email validation regex pattern
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    // Validation Check: Ensure all fields are filled out
    if (!formData.name || !formData.email || !formData.message) {
      setError("Please fill out all fields before submitting.");
      setLoading(false);
      return;
    }

    // Email format validation
    if (!emailPattern.test(formData.email)) {
      setEmailError(true);
      setLoading(false);
      return;
    }

    const templateParams = {
      to_name: "Your Name", 
      name: formData.name,
      email: formData.email,
      message: formData.message
    };


    emailjs.send(
      'service_mks5cj5',
      'template_fgvai77',
      templateParams,
      'Es9HP2Fy7YvelshC0'
    ).then(
      (result) => {
        console.log("Email successfully sent!", result.text);
        setIsSubmitted(true);
        setFormData({
          name: "",
          email: "",
          message: "",
        });
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      },
      (error) => {
        console.error("Error sending email:", error);
        setError("An error occurred while sending your message. Please try again.");
      }
    ).finally(() => {
      setLoading(false);
    });
  };

  return (
    <div id="contact" className="grid gap-4 max-w-4xl text-left pb-8 px-4">
      <div>
        <h1 className="text-6xl font-black text-white">
          LET&apos;S WORK
        </h1>
        <h1 className="text-6xl font-black text-orange-800 mt-2">
          TOGETHER
        </h1>
      </div>

      {isSubmitted && (
        <p className="text-green-400 bg-green-800/20 p-2 rounded-lg text-center">
        Your message has been sent successfully!
        </p>
      )}

      {error && (
        <p className="text-red-400 bg-red-800/20 p-2 rounded-lg text-center">{error}</p>
      )}

      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 mt-8">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full rounded-lg p-2 bg-[rgba(255,255,255,0.03)] text-white focus:outline-none focus:ring-2 focus:ring-orange-800 border border-gray-700"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={handleChange}
              className={`w-full rounded-lg p-2 bg-[rgba(255,255,255,0.03)] text-white focus:outline-none focus:ring-2 focus:ring-orange-800 border border-gray-700 ${
                emailError ? 'border-red-500 focus:ring-red-500' : ''
              }`}
            />
            {emailError && (
              <p className="text-red-500 text-sm mt-1">Invalid email address</p>
            )}
          </div>
        </div>
        <textarea
          name="message"
          rows={4}
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          className="w-full rounded-lg p-2 bg-[rgba(255,255,255,0.03)] text-white focus:outline-none focus:ring-2 focus:ring-orange-800 border border-gray-700"
        ></textarea>

        <button
          type="submit"
          disabled={loading}
          className={`bg-orange-800 text-white font-bold py-2 px-4 rounded-lg hover:bg-orange-600 transition duration-200 ${
            loading ? 'opacity-70 cursor-not-allowed' : ''
          }`}
        >
          {loading ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
}