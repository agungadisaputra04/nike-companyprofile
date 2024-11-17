import PropTypes from "prop-types";

const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div className="flex-1 xs:w-full sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16">
      <div className="w-11 h-11 flex justify-center items-center bg-coral-red rounded-full">
        <img src={imgURL} alt={label} className="w-6 h-6" />
      </div>
      <h3 className="mt-5 font-palanquin text-3xl leading-normal font-bold">
        {label}
      </h3>
      <p className="mt-3 break-words leading-normal font-montserrat text-lg text-slate-600">
        {subtext}
      </p>
    </div>
  );
};

ServiceCard.propTypes = {
  imgURL: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  subtext: PropTypes.string.isRequired,
};

export default ServiceCard;
