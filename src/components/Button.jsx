import PropTypes from "prop-types";

const Button = ({
  label,
  iconURL,
  iconAlt,
  backgroundColor,
  textColor,
  borderColor,
  fullWidth,
}) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none rounded-full
        ${backgroundColor || "bg-coral-red"} 
        ${textColor || "text-white"} 
        ${borderColor || "border-coral-red"} 
        ${fullWidth ? "w-full" : ""}`}
      aria-label={label}
      title={label}
    >
      {label}
      {iconURL && (
        <img
          src={iconURL}
          alt={iconAlt || "icon"}
          className="ml-2 rounded-full bg-white w-5 h-5"
        />
      )}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  iconURL: PropTypes.string,
  iconAlt: PropTypes.string,
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  borderColor: PropTypes.string,
  fullWidth: PropTypes.bool,
};

Button.defaultProps = {
  iconURL: null,
  iconAlt: "icon",
  backgroundColor: "bg-coral-red",
  textColor: "text-white",
  borderColor: "border-coral-red",
  fullWidth: false,
};

export default Button;
