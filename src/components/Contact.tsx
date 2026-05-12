"use client";

import { useState } from "react";

// Replace with your real Calendly URL
const CALENDLY_URL = "https://calendly.com";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Project enquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:hello@sproutstudio.au?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="border-t border-gray-100 bg-sprout-light">
      <div className="max-w-5xl mx-auto px-6 py-20 md:py-24">
        <div className="grid md:grid-cols-2 gap-16">

          {/* Left — text + details */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight mb-4">
              Let&apos;s work together.
            </h2>
            <p className="text-sm text-gray-600 mb-1">
              Tell us about your project and we&apos;ll get back to you within 24 hours.
            </p>
            <p className="text-xs text-gray-400 mb-10">
              告诉我们您的项目需求，我们将在 24 小时内回复。
            </p>

            <ul className="space-y-5">
              <li>
                <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Email</p>
                <a href="mailto:hello@sproutstudio.au" className="text-sm text-gray-900 hover:text-sprout transition-colors font-medium">
                  hello@sproutstudio.au
                </a>
              </li>
              <li>
                <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Location</p>
                <p className="text-sm text-gray-900">Australia</p>
              </li>
              <li>
                <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Languages</p>
                <p className="text-sm text-gray-900">English &amp; 中文</p>
              </li>
              <li>
                <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Response time</p>
                <p className="text-sm text-gray-900">Within 24 hours · 24小时内回复</p>
              </li>
            </ul>
          </div>

          {/* Right — form + Calendly */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="text-xs text-gray-500 font-medium block mb-1.5">
                  Your name · 您的姓名
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border border-gray-200 bg-white text-sm text-gray-900 px-4 py-2.5 rounded-sm focus:outline-none focus:border-sprout transition-colors"
                  placeholder="Jane Smith"
                />
              </div>

              <div>
                <label htmlFor="email" className="text-xs text-gray-500 font-medium block mb-1.5">
                  Email address · 邮件地址
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border border-gray-200 bg-white text-sm text-gray-900 px-4 py-2.5 rounded-sm focus:outline-none focus:border-sprout transition-colors"
                  placeholder="jane@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="text-xs text-gray-500 font-medium block mb-1.5">
                  Tell us about your project · 项目描述
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full border border-gray-200 bg-white text-sm text-gray-900 px-4 py-2.5 rounded-sm focus:outline-none focus:border-sprout transition-colors resize-none"
                  placeholder="I need a website for my café…"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-sprout text-white text-sm font-medium py-3 rounded-sm hover:bg-sprout-dark transition-colors"
              >
                Send message
              </button>
            </form>

            {/* Divider */}
            <div className="flex items-center gap-3 my-5">
              <div className="flex-1 border-t border-gray-200" />
              <span className="text-xs text-gray-400">or</span>
              <div className="flex-1 border-t border-gray-200" />
            </div>

            {/* Calendly CTA */}
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full border border-gray-200 bg-white text-gray-700 text-sm font-medium py-3 rounded-sm hover:border-sprout hover:text-sprout transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 9v7.5" />
              </svg>
              Book a free 15-min call · 预约免费通话
            </a>
            <p className="mt-2 text-center text-xs text-gray-400">
              No commitment — just a quick chat about your project.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
