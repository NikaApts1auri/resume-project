import { createContext, useState } from "react";

export const ResumeContext = createContext({
  setValues: () => {},
  values: {
    general: {
      first_name: "",
      last_name: "",
      image: "",
      about_me: "",
      email: "",
      phone_number: "",
    },
    experience: {
      position: "",
      employer: "",
      started_at: "",
      ended_at: "",
      description: "",
    },
    education: {
      school: "",
      degree: "",
      graduation_date: "",
      description: "",
    },
  },
  inputErrors: {},
  setInputErrors: () => {},
  validateInput: () => {},
});

// eslint-disable-next-line react/prop-types
export const ResumeProvider = ({ children }) => {
  const [values, setValues] = useState({
    general: {
      first_name: "",
      last_name: "",
      image: "",
      about_me: "",
      email: "",
      phone_number: "",
    },
    experience: {
      position: "",
      employer: "",
      started_at: "",
      ended_at: "",
      description: "",
    },
    education: {
      //id:1 ,
      school: "",
      degree: "",
      graduation_date: "",
      description: "",
    },
  });

  const [inputErrors, setInputErrors] = useState({
    first_name: true,
    last_name: true,
    about_me: true,
    email: true,
    phone_number: true,
    school: true,
    degree: true,
    graduation_date: true,
    description: true,
    position: true,
    employer: true,
    started_at: true,
    ended_at: true,
  });

  const validateInput = (name, value) => {
    const georgianRegex = /^[\u10A0-\u10FF]+$/;
    let errors = { ...inputErrors };

    switch (name) {
      case "first_name":
        errors.first_name = value.length < 2 || !georgianRegex.test(value);
        break;
      case "last_name":
        errors.last_name = value.length < 2 || !georgianRegex.test(value);
        break;
      case "email":
        errors.email = !value.endsWith("@redberry.ge");
        break;
      case "phone_number":
        errors.phone_number = value.length < 17;
        break;
      case "position":
        errors.position = value.length < 2;
        break;
      case "employer":
        errors.employer = value.length < 2;
        break;
      case "school":
        // errors.school = value.length < 2 || !georgianRegex.test(value);
        errors.school = value.length < 2 || "";
        break;

      // case "degree":
      //   errors.degree = "";
      //   break;

      // case "graduation_date":
      //   errors.graduation_date = !value || new Date(value) === "Invalid Date";
      //   break;

      case "description":
        errors.description = !value;
        break;

      default:
        break;
    }

    setInputErrors(errors);
  };

  return (
    <ResumeContext.Provider
      value={{ values, setValues, inputErrors, setInputErrors, validateInput }}
    >
      {children}
    </ResumeContext.Provider>
  );
};
