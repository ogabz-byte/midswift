import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="w-full bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-4xl font-extrabold text-gray-800 mb-8">
          Contact <span className="text-blue-400">Us</span>
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          Have questions or need assistance? Reach out to us through email or
          give us a call. We’d love to hear from you!
        </p>

        {/* Contact Options */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
          {/* Email */}
          <a
            href="mailto:swiftieafrica@gmail.com"
            className="flex items-center gap-4 bg-[#14213d] text-white px-6 py-4 rounded-lg shadow-md hover:bg-blue-500 transition"
          >
            <FaEnvelope className="text-2xl" />
            <span className="text-lg font-medium">swiftieafrica@gmail.com</span>
          </a>

          {/* Phone */}
          <a
            href="tel:+2348147220685"
            className="flex items-center gap-4 bg-yellow-400 text-white px-6 py-4 rounded-lg shadow-md hover:bg-green-500 transition"
          >
            <FaPhoneAlt className="text-2xl" />
            <span className="text-lg font-medium">+234 (814) 722 0685</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
