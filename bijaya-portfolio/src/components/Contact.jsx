import { useState } from "react";
import ShowMore from "../ui/ShowMore";
import { HiOutlineArrowRight } from "react-icons/hi";
import { HiMail, HiLocationMarker, HiClock } from "react-icons/hi";
import { FaTwitter } from "react-icons/fa";
import Github from "../ui/Github";
import Linkedin from "../ui/Linkedin";

export default function Contact() {
  const [result, setResult] = useState("");
  const [messageLength, setMessageLength] = useState(0);

  const onSubmit = async (event) => {
    event.preventDefault();

    setResult("Sending message...");

    const formData = new FormData(event.target);
    formData.append("access_key", "7abd9d71-be83-406a-8632-638b8b4a7df4");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    }).then((res) => res.json());

    if (res.success) {
      setResult("Thank you! Your message has been sent successfully.");
      event.target.reset();
      setMessageLength(0);
    } else {
      setResult(res.message || "Something went wrong. Please try again.");
    }
  };

  return (
    <section
      id="contact"
      className="w-full px-[12%] py-16 scroll-mt-20 bg-no-repeat bg-center"
    >
      {/* Header */}
      <div className="text-center mb-16">
        <h4 className="text-lg font-medium text-gray-600 mb-2">Let’s connect</h4>
        <h2 className="text-5xl font-bold text-[#21AEC0] mb-4">Contact Me</h2>
        <p className="max-w-2xl mx-auto text-gray-600 leading-relaxed">
          Have a project in mind, a question, or just want to say hello? Fill
          out the form below and I’ll get back to you as soon as possible.
        </p>
      </div>

      {/* Content Grid */}
      <div className="grid md:grid-cols-[1fr_1.2fr] gap-12 max-w-6xl mx-auto">
        {/* Left Info Panel */}
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Contact Information</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Feel free to reach out through the form or via the details below.
            </p>
          </div>

          <div className="space-y-6">
            {/* Email / Other */}
            <div className="flex items-start gap-4">
              <div className="h-10 w-10 flex items-center justify-center rounded-md bg-[#21AEC0]/10 shrink-0">
                <HiMail className="w-6 h-6 text-[#21AEC0]" />
              </div>
              <div>
                <p className="font-semibold text-gray-800">Other</p>
                <p className="text-gray-600 mb-4">
                  For general inquiries or alternate contact methods, please use
                  the form or reach out via social links below.
                </p>

                <div className="flex items-center gap-4">
                  <a
                    href="https://github.com/bijaya-dev07"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="h-10 w-10 inline-flex items-center justify-center rounded-md border border-[#21AEC0]/20 transition hover:border-[#21AEC0] hover:text-[#21AEC0]"
                  >
                    <Github />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/bijaya-dev07"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="h-10 w-10 inline-flex items-center justify-center rounded-md transition hover:text-[#21AEC0]"
                  >
                    <Linkedin />
                  </a>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start gap-4">
              <div className="h-10 w-10 flex items-center justify-center rounded-md bg-[#21AEC0]/10 shrink-0">
                <HiLocationMarker className="w-6 h-6 text-[#21AEC0]" />
              </div>
              <div>
                <p className="font-semibold text-gray-800">Location</p>
                <p className="text-gray-600">Nepal (Remote Friendly)</p>
              </div>
            </div>

            {/* Availability */}
            <div className="flex items-start gap-4">
              <div className="h-10 w-10 flex items-center justify-center rounded-md bg-[#21AEC0]/10 shrink-0">
                <HiClock className="w-6 h-6 text-[#21AEC0]" />
              </div>
              <div>
                <p className="font-semibold text-gray-800">Availability</p>
                <p className="text-gray-600">Mon – Fri, 9:00 AM – 6:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={onSubmit}
          className="bg-white border border-[#21AEC0]/20 rounded-xl p-8 shadow-sm"
        >
          <input
            type="hidden"
            name="subject"
            value="Bijaya Tamang - New Contact Message"
          />

          {/* Name & Email */}
          <div className="grid sm:grid-cols-2 gap-6 mb-6">
            <input
              type="text"
              name="name"
              required
              placeholder="Your name"
              className="px-4 py-3 border border-gray-200 rounded-md outline-none focus:ring-2 focus:ring-[#21AEC0]/50 transition-all"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Your email"
              className="px-4 py-3 border border-gray-200 rounded-md outline-none focus:ring-2 focus:ring-[#21AEC0]/50 transition-all"
            />
          </div>

          {/* Inquiry Type */}
          <div className="mb-6">
            <select
              name="inquiry_type"
              required
              className="w-full px-4 py-3 border border-gray-200 rounded-md outline-none focus:ring-2 focus:ring-[#21AEC0]/50 transition-all"
            >
              <option value="">Select inquiry type</option>
              <option value="Project">Project Collaboration</option>
              <option value="Freelance">Freelance Work</option>
              <option value="Internship">Internship / Job</option>
              <option value="General">General Question</option>
            </select>
          </div>

          {/* Message */}
          <div className="mb-2">
            <textarea
              rows="6"
              name="message"
              required
              placeholder="Write your message here..."
              className="w-full px-4 py-3 border border-gray-200 rounded-md outline-none focus:ring-2 focus:ring-[#21AEC0]/50 transition-all"
              maxLength={500}
              onChange={(e) => setMessageLength(e.target.value.length)}
            />
            <p className="text-sm text-gray-500 text-right mt-1">
              {messageLength}/500 characters
            </p>
          </div>

          {/* Consent */}
          <div className="flex items-start gap-3 mb-6 text-sm">
            <input type="checkbox" required className="mt-1 accent-[#21AEC0]" />
            <p className="text-gray-600">
              I agree to be contacted regarding my inquiry.
            </p>
          </div>

          {/* Submit */}
          <div className="flex justify-center">
            <ShowMore type="submit" icon={<HiOutlineArrowRight />}>
              Send Message
            </ShowMore>
          </div>

          {/* Result */}
          {result && <p className="mt-4 text-center text-sm font-medium text-[#21AEC0]">{result}</p>}
        </form>
      </div>
    </section>
  );
}
