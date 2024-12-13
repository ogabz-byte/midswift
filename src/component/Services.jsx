import {
  FaLaptopCode,
  FaMobileAlt,
  FaShoppingCart,
  FaSearch,
} from "react-icons/fa";

const Services = () => {
  return (
    <div className="w-full bg-gray-100 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-4xl font-extrabold text-gray-800 mb-8">
          Our <span className="text-blue-400">Services</span>
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          At <span className="font-semibold">Swifie</span>, we offer a range of
          services to help your business thrive in the digital world. From
          website development to SEO, we’ve got you covered.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Service 1 */}
          <div className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-xl transition">
            <FaLaptopCode className="text-blue-400 text-5xl mb-4" />
            <h3 className="text-xl font-bold text-gray-800">Web Development</h3>
            <p className="text-gray-600 mt-2">
              Build modern, responsive websites tailored to your needs and
              optimized for performance.
            </p>
          </div>

          {/* Service 2 */}
          <div className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-xl transition">
            <FaMobileAlt className="text-blue-400 text-5xl mb-4" />
            <h3 className="text-xl font-bold text-gray-800">
              Mobile Development
            </h3>
            <p className="text-gray-600 mt-2">
              Create engaging and user-friendly mobile apps for iOS and Android
              platforms.
            </p>
          </div>

          {/* Service 3 */}
          <div className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-xl transition">
            <FaShoppingCart className="text-blue-400 text-5xl mb-4" />
            <h3 className="text-xl font-bold text-gray-800">
              E-Commerce Solutions
            </h3>
            <p className="text-gray-600 mt-2">
              Launch secure and scalable online stores with custom features for
              your business.
            </p>
          </div>

          {/* Service 4 */}
          <div className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-xl transition">
            <FaSearch className="text-blue-400 text-5xl mb-4" />
            <h3 className="text-xl font-bold text-gray-800">
              SEO Optimization
            </h3>
            <p className="text-gray-600 mt-2">
              Improve your websites visibility on search engines to drive
              organic traffic and growth.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
