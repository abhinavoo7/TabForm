import { FORM_INPUTS, FORM_INPUT_LABELS } from "../../lib/config";

export default Profile = ({ data, setData, updateActiveTab }) => {
  const { name, age, email } = data;

  /**
   * @description function to get the form value based on input label
   * @param {string} label
   * @returns {string | number}
   */
  const fetchValue = (label) => {
    switch (label) {
      case FORM_INPUT_LABELS.NAME:
        return name;
      case FORM_INPUT_LABELS.AGE:
        return age;
      default:
        return email;
    }
  };

  /**
   * @description function to update form input state value
   * @param {Event} e
   * @param {string} attribute
   * @returns {void}
   */
  const handleDataChange = (e, attribute) => {
    setData((prevState) => ({
      ...prevState,
      [attribute]: e.target.value,
    }));
  };

  const handleNextClick = () => {
    updateActiveTab((prev) => prev + 1);
  };

  return (
    <>
      {FORM_INPUTS.PROFILE.map(({ label, inputType, attribute }) => (
        <div key={label}>
          <label>{label}</label>
          <input
            type={inputType}
            value={fetchValue(label)}
            onChange={(e) => handleDataChange(e, attribute)}
          />
        </div>
      ))}
      <button className="next-button" onClick={handleNextClick}>
        Next
      </button>
    </>
  );
};
