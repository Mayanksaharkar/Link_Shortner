import img from "../assets/linkShortner.svg";
const handleGetStartedClick = () => {
    document.getElementById("link_shortner_modal").showModal();
};
function Home() {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center lg:h-4/5 p-6">
      <div className="flex flex-col justify-center items-center lg:items-start mx-6 lg:px-16 lg:w-1/2">
        <h1 className="text-5xl text-primary text-center lg:text-left py-4">
          <strong>Link Shortener - Shorten and Share with Ease</strong>
        </h1>
        <span className="text-3xl text-primary opacity-55 text-center lg:text-left">
          Introducing our link shortening website, offering quick and efficient
          URL shortening services. With a user-friendly interface and robust
          security measures, you can rely on us to transform your lengthy URLs
          into concise, shareable links.
        </span>
        <div className="flex flex-col lg:flex-row items-center lg:items-start">
          <button
            className= "btn btn-primary bg-primary px-6 py-2 mt-24 text-2xl rounded-full my-4 lg:mr-4"
            onClick={handleGetStartedClick}
          >
            Get Started
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center w-full lg:w-1/2 rounded-3xl p-4">
        <img src={img} alt="landing page image" className="w-full lg:w-3/5" />
      </div>
    </div>
  );
}

export default Home;
