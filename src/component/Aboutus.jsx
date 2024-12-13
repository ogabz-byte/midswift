import React from "react";

const AboutUs = () => {
  return (
    <div className="w-full bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-4xl font-extrabold text-gray-800 mb-8">
          About <span className="text-blue-400">Swifie</span>
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          We are a dedicated team of creatives and developers, passionate about
          crafting innovative web solutions that empower businesses to thrive
          online. At <span className="font-semibold">Swifie</span>, we believe
          in turning ideas into reality with cutting-edge technologies and a
          focus on delivering seamless user experiences.
        </p>

        {/* Our Mission */}
        <div className="space-y-6 mb-12">
          <h3 className="text-2xl font-bold text-gray-800">Our Mission</h3>
          <p className="text-lg text-gray-600">
            Our mission is to help businesses elevate their online presence with
            tailor-made, responsive websites, applications, and digital
            strategies. We aim to simplify technology and deliver exceptional
            results with creativity and innovation at the forefront.
          </p>
        </div>

        {/* Our Team */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-gray-800">Our Team</h3>
          <p className="text-lg text-gray-600">
            Our team consists of experienced designers, developers, and digital
            marketing experts who work together to provide holistic solutions
            that meet the unique needs of each client.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
