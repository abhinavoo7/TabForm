import { FORM_INPUTS } from "../../lib/config";
import "./Interests.css";

export default Interests = ({ data, setData, updateActiveTab }) => {
  const handleCheckBoxClick = (e, value) => {
    setData((prev) => ({
      ...prev,
      interests: data.interests?.includes(value)
        ? data.interests?.filter((interest) => interest !== value)
        : [...data.interests, value],
    }));
  };

  const handleNextClick = () => {
    updateActiveTab((prev) => prev + 1);
  };

  const handlePreviousClick = () => {
    updateActiveTab((prev) => prev - 1);
  };

  return (
    <>
      <div className="interests-container">
        {FORM_INPUTS.INTERESTS.map(({ label, inputType, attribute }) => (
          <label className="interests-container__label" key={label}>
            <input
              type={inputType}
              name={attribute}
              checked={data.interests?.includes(label)}
              onChange={(e) => handleCheckBoxClick(e, label)}
            />
            {label}
          </label>
        ))}
      </div>
      <div>
        <button className="next-button" onClick={handleNextClick}>
          Next
        </button>
        <button className="prev-button" onClick={handlePreviousClick}>
          Previous
        </button>
      </div>
    </>
  );
};
