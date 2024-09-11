import { Link, NavLink, useNavigate } from "react-router-dom";
import Input from "../components/Input";
import "../index.css";
import { useContext, useState } from "react";
import { ResumeContext } from "../ResumeProvider";
import InputMask from "react-input-mask";
import { MdEmail } from "react-icons/md";

const PersonalInfo = () => {
  const navigate = useNavigate();
  const { inputErrors, values, setValues, validateInput } =
    useContext(ResumeContext);
  const [image, setImage] = useState(localStorage.getItem("image") || "");

  const handleAddImage = (event) => {
    const file = event.target.files?.[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
      localStorage.setItem("image", reader.result);
    };
    reader.readAsDataURL(file);
  };

  localStorage.getItem("first_name", values.general.first_name);
  localStorage.getItem("last_name", values.general.last_name);
  localStorage.getItem("about_me", values.general.about_me);
  localStorage.getItem("email", values.general.email);
  localStorage.getItem("phone_number", values.general.phone_number);

  const handleChange = (event) => {
    validateInput(event.target.name, event.target.value);
    const value = event.target.value;
    const name = event.target.name;
    setValues((prevValues) => ({
      ...prevValues,
      general: { ...prevValues.general, [name]: value },
    }));
    localStorage.setItem(name, value);
  };

  const handlePhoneChange = (event) => {
    validateInput(event.target.name, event.target.value);
    const input = event.target.value.replace(/\D/g, "").slice(3); // Remove non-digits and the +995 prefix
    setValues((prevValues) => ({
      ...prevValues,
      general: { ...prevValues.general, phone_number: input },
    }));
    localStorage.setItem("phone_number", input);
  };

  const handleSubmittion = (event) => {
    event.preventDefault();
    if (
      !inputErrors.first_name &&
      !inputErrors.last_name &&
      !inputErrors.email &&
      !inputErrors.phone_number
    ) {
      navigate("/experience");
    }
  };

  return (
    <div className="min-h-screen bg-[#F9F9F9] flex flex-col lg:flex-row lg:items-start lg:justify-center">
      <div className="w-full lg:w-2/3 bg-white p-6 lg:p-12">
        <div className="flex items-center justify-between border-b border-[#1A1A1A] py-4 mb-6">
          <Link to="/" as={NavLink}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
            >
              <circle cx="20" cy="20" r="20" fill="white" />
              <path
                d="M22.8577 12.3522C23.0832 12.5778 23.2099 12.8837 23.2099 13.2026C23.2099 13.5216 23.0832 13.8275 22.8577 14.053L16.9035 20.0073L22.8577 25.9615C23.0768 26.1883 23.198 26.4922 23.1953 26.8076C23.1926 27.123 23.0661 27.4247 22.843 27.6477C22.62 27.8707 22.3183 27.9972 22.0029 28C21.6875 28.0027 21.3837 27.8815 21.1568 27.6623L14.3522 20.8577C14.1267 20.6321 14 20.3262 14 20.0073C14 19.6883 14.1267 19.3824 14.3522 19.1568L21.1568 12.3522C21.3824 12.1267 21.6883 12 22.0073 12C22.3262 12 22.6321 12.1267 22.8577 12.3522Z"
                fill="#2E2E2E"
              />
            </svg>
          </Link>
          <div className="text-center">
            <h1 className="text-[#1A1A1A] text-2xl font-bold">ᲞᲘᲠᲐᲓᲘ ᲘᲜᲤᲝ</h1>
            <span className="text-lg text-[#1A1A1A]">1/3</span>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row lg:gap-8 mb-6">
          <div className="flex flex-col w-full lg:w-1/2 mb-6 lg:mb-0">
            <label
              htmlFor="first_name"
              className={`text-base font-medium ${
                inputErrors.first_name ? "text-red-500" : "text-[#1A1A1A]"
              }`}
            >
              სახელი
            </label>
            <Input
              onChange={handleChange}
              value={values.general.first_name}
              inputName="first_name"
              name="first_name"
              error={inputErrors.first_name}
            />
            <p className="text-sm text-gray-600">
              მინიმუმ 2 ასო, ქართული ასოები
            </p>
          </div>
          <div className="flex flex-col w-full lg:w-1/2">
            <label
              htmlFor="last_name"
              className={`text-base font-medium ${
                inputErrors.last_name ? "text-red-500" : "text-[#1A1A1A]"
              }`}
            >
              გვარი
            </label>
            <Input
              onChange={handleChange}
              value={values.general.last_name}
              inputName="last_name"
              name="last_name"
              error={inputErrors.last_name}
            />
            <p className="text-sm text-gray-600">
              მინიმუმ 2 ასო, ქართული ასოები
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4 mb-6">
          <label
            htmlFor="upload"
            className="text-base font-medium text-[#1A1A1A]"
          >
            პირადი ფოტოს ატვირთვა
          </label>
          <input
            type="file"
            id="upload"
            name="photoUpload"
            className="hidden"
            onChange={handleAddImage}
          />
          <label
            htmlFor="upload"
            className="flex items-center px-4 py-2 bg-blue-500 text-white rounded cursor-pointer hover:bg-blue-600"
          >
            ატვირთვა
          </label>
        </div>
        <div className="mb-6">
          <label
            htmlFor="about_me"
            className="text-base font-medium text-[#1A1A1A]"
          >
            ჩემ შესახებ (არასავალდებულო)
          </label>
          <Input
            inputName="about_me"
            name="about_me"
            onChange={handleChange}
            value={values.general.about_me}
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="email"
            className={`text-base font-medium ${
              inputErrors.email ? "text-red-500" : "text-[#1A1A1A]"
            }`}
          >
            ელ.ფოსტა
          </label>
          <Input
            inputName="email"
            name="email"
            error={inputErrors.email}
            onChange={handleChange}
            value={values.general.email}
          />
          <p className="text-sm text-gray-600">
            უნდა მთავრდებოდეს @redberry.ge-ით
          </p>
        </div>
        <div className="mb-6">
          <label
            htmlFor="phone_number"
            className={`text-base font-medium ${
              inputErrors.phone_number ? "text-red-500" : "text-[#1A1A1A]"
            }`}
          >
            მობილურის ნომერი
          </label>
          <InputMask
            mask="+995 999 99 99 99"
            inputName="phone_number"
            name="phone_number"
            error={inputErrors.phone_number}
            placeholder="+995 5XX XX XX XX"
            onChange={handlePhoneChange}
            value={"+995 " + values.general.phone_number}
            maskChar={null}
            className={`mt-2 px-4 py-2 border-2 ${
              inputErrors.phone_number ? "border-red-500" : "border-gray-300"
            } rounded`}
          />
          <p className="text-sm text-gray-600">
            უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს
          </p>
        </div>
        <button
          onClick={handleSubmittion}
          className="bg-purple-600 text-white py-2 px-6 rounded-lg float-right"
        >
          შემდეგი
        </button>
      </div>

      <div className="w-full lg:w-1/3 lg:pl-12 flex items-center lg:items-start">
        <div className="w-full max-w-md mt-[2rem] lg:mt-0">
          <div className="text-center lg:text-left">
            <h1 className="text-[#F93B1D] font-bold text-3xl mb-4">
              {values.general.first_name} {values.general.last_name}
            </h1>
            {values.general.email && (
              <p className="text-[#1A1A1A] flex items-center gap-2 font-medium text-lg">
                <MdEmail /> {values.general.email}
              </p>
            )}
            {values.general.phone_number && (
              <p className="text-[#1A1A1A] font-medium text-lg">
                <span>&#128222;</span> {values.general.phone_number}
              </p>
            )}
          </div>
          {values.general.about_me && (
            <div className="mt-6">
              <h4 className="text-[#F93B1D] font-bold text-xl">ჩემს შესახებ</h4>
              <p className="text-black text-lg">{values.general.about_me}</p>
            </div>
          )}
        </div>
        <img className="w-64 h-64 rounded-full mt-6" src={image} />
      </div>
    </div>
  );
};

export default PersonalInfo;
