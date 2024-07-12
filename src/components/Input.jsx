import { useContext } from "react";
import { useLocation } from "react-router";
import { ResumeContext } from "../ResumeProvider";

const Input = ({ inputName, name, error }) => {
  const { values, setValues, validateInput } = useContext(ResumeContext);
  const location = useLocation();

  const handleChange = (event) => {
    const { value } = event.target;
    validateInput(inputName, value);

    if (location.pathname === "/personal-info") {
      setValues({
        ...values,
        general: {
          ...values.general,
          [inputName]: value,
        },
      });
    } else if (location.pathname === "/experience") {
      setValues({
        ...values,
        experience: {
          ...values.experience,
          [inputName]: value,
        },
      });
    } else if (location.pathname === "/education") {
      setValues({
        ...values,
        education: {
          ...values.education,
          [inputName]: value,
        },
      });
    }
  };

  return (
    <div>
      <input
        name={name}
        className={`mt-[8px] border w-full px-[16px] py-[14px] ${
          error ? "border-[#EF5050] border-2	" : "border-2	border-[##98E37E]"
        }`}
        type="text"
        value={
          values.general[inputName] ||
          values.experience[inputName] ||
          values.education[inputName] ||
          ""
        }
        onChange={handleChange}
      />
    </div>
  );
};

export default Input;
