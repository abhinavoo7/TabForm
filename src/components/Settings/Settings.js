import { FORM_INPUTS } from "../../lib/config";

export default Settings = ({ data, setData, updateActiveTab }) => {
  const handleRadioClick = (e) => {
    setData((prev) => ({
      ...prev,
      theme: e.target.name,
    }));
  };

  const handlePreviousClick = () => {
    updateActiveTab((prev) => prev - 1);
  };

  return (
    <>
      <div className="interests-container">
        {FORM_INPUTS.SETTINGS.map(({ label, inputType, attribute }) => (
          <label className="interests-container__label" key={label}>
            <input
              type={inputType}
              name={label}
              checked={data.theme === label}
              onChange={handleRadioClick}
            />
            {label}
          </label>
        ))}
      </div>
      <div>
        <button className="next-button">Submit</button>
        <button className="prev-button" onClick={handlePreviousClick}>
          Previous
        </button>
      </div>
    </>
  );
};
