import Interests from "../components/Interests/Interests";
import Profile from "../components/Profile/Profile";
import Settings from "../components/Settings/Settings";

const TABS = {
  PROFILE: "Profile",
  INTERESTS: "Interests",
  SETTINGS: "Settings",
};

// configurations to render tabs
export const TABS_CONFIGS = [
  { name: TABS.PROFILE, component: Profile },
  { name: TABS.INTERESTS, component: Interests },
  { name: TABS.SETTINGS, component: Settings },
];

// labels for form inputs
export const FORM_INPUT_LABELS = {
  NAME: "Name: ",
  AGE: "Age: ",
  EMAIL: "Email: ",
  CODING: "Coding",
  READING: "Reading",
  MUSIC: "Music",
  LIGHT: "Light",
  DARK: "Dark",
};

// initial form state
export const INITIAL_FORM_STATE = {
  name: "",
  age: null,
  email: "",
  interests: [],
  theme: FORM_INPUT_LABELS.LIGHT,
};

// types of form inputs
const INPUT_TYPES = {
  TEXT: "text",
  NUMBER: "number",
  CHECK_BOX: "checkbox",
  RADIO: "radio",
};

// all form inputs consisting input label and type
export const FORM_INPUTS = {
  PROFILE: [
    {
      label: FORM_INPUT_LABELS.NAME,
      inputType: INPUT_TYPES.TEXT,
      attribute: "name",
    },
    {
      label: FORM_INPUT_LABELS.AGE,
      inputType: INPUT_TYPES.NUMBER,
      attribute: "age",
    },
    {
      label: FORM_INPUT_LABELS.EMAIL,
      inputType: INPUT_TYPES.TEXT,
      attribute: "email",
    },
  ],
  INTERESTS: [
    {
      label: FORM_INPUT_LABELS.CODING,
      inputType: INPUT_TYPES.CHECK_BOX,
      attribute: "coding",
    },
    {
      label: FORM_INPUT_LABELS.READING,
      inputType: INPUT_TYPES.CHECK_BOX,
      attribute: "reading",
    },
    {
      label: FORM_INPUT_LABELS.MUSIC,
      inputType: INPUT_TYPES.CHECK_BOX,
      attribute: "music",
    },
  ],
  SETTINGS: [
    {
      label: FORM_INPUT_LABELS.LIGHT,
      inputType: INPUT_TYPES.RADIO,
      attribute: "theme",
    },
    {
      label: FORM_INPUT_LABELS.DARK,
      inputType: INPUT_TYPES.RADIO,
      attribute: "theme",
    },
  ],
};
