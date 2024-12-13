import bcg from "../assets/bcg.jpg"; // Import the background image

const Header = () => {
  return (
    <div
      className="relative w-full min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${bcg})`,
        backgroundColor: "rgba(0, 0, 0, 0.5)", // Adds transparency
        backgroundBlendMode: "overlay",
      }}
    >
      {/* Content Container */}
      <div className="max-w-4xl mx-auto text-white p-6 space-y-6">
        {/* Title */}
        <h1 className="text-5xl font-extrabold tracking-wide text-left">
          Welcome to{" "}
          <span className="text-6xl text-yellow-400 underline decoration-wavy decoration-4">
            Swiftie
          </span>
        </h1>
        {/* Line Design */}
        <div className="w-16 h-1 bg-yellow-400 mt-2 mb-4"></div>
        {/* Subtitle */}
        <p className="text-lg leading-relaxed text-left">
          At <span className="font-semibold text-yellow-400">Swiftie</span>, we
          are dedicated to transforming your ideas into dynamic, visually
          appealing websites that not only look great but also perform
          exceptionally. Our team combines creativity and technology to craft
          solutions tailored to your brand, ensuring a seamless online
          experience for your users.
        </p>
      </div>
    </div>
  );
};

export default Header;
