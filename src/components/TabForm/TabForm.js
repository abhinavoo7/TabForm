import { useState } from "react";
import { INITIAL_FORM_STATE, TABS_CONFIGS } from "../../lib/config";
import "./TabForm.css";

export default TabForm = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [formData, setFormData] = useState(INITIAL_FORM_STATE);

  const ActiveTabComponent = TABS_CONFIGS[activeTab].component;

  return (
    <div className="tab-form">
      <div className="tab-form__heading-container">
        {TABS_CONFIGS.map(({ name }, index) => (
          <div
            key={name}
            className={`tab-form__heading-container__tab-name ${
              activeTab === index
                ? " tab-form__heading-container__tab-name--active"
                : ""
            }`}
            onClick={() => {
              setActiveTab(index);
            }}
          >
            {name}
          </div>
        ))}
      </div>
      <div className="tab-form__active-component">
        <ActiveTabComponent
          data={formData}
          setData={setFormData}
          updateActiveTab={setActiveTab}
        />
      </div>
    </div>
  );
};
