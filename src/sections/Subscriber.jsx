const Subscriber = () => {
  return (
    <section
      className="max-container flex flex-wrap justify-between items-center max-lg:flex-col gap-10"
      id="contact-us"
    >
      <h3 className="text-4xl leading-[68px] max-w-full lg:max-w-md font-palanquin font-bold">
        Sign Up for<span className="text-coral-red"> Updates</span> & Newsletter
      </h3>
      <form className="flex flex-col lg:flex-row items-center gap-4 w-full lg:max-w-lg">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-coral-red"
        />
        <button
          type="submit"
          className="px-6 py-3 bg-coral-red text-white font-montserrat text-lg font-bold rounded-full hover:bg-coral-red/90"
        >
          Subscribe
        </button>
      </form>
    </section>
  );
};

export default Subscriber;
