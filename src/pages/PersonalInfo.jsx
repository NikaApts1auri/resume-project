import { Link, NavLink, useNavigate } from "react-router-dom";

import Input from "../components/Input";
import avatar from "../assets/avatar.jpg";
import "../index.css";
import { useContext } from "react";
import { ResumeContext } from "../ResumeProvider";

const PersonalInfo = () => {
  const navigate = useNavigate();
  const { inputErrors, setInputErrors, values, setValues } =
    useContext(ResumeContext);

  const handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    setValues((prevValues) => ({
      ...prevValues,
      general: { ...prevValues.general, [name]: value },
    }));
  };

  const handleSubmittion = (event) => {
    event.preventDefault();
    setInputErrors({
      first_name: !values.general.first_name,
      last_name: !values.general.last_name,
      email: !values.general.email,
      phone_number: !values.general.phone_number,
    });
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
    <div>
      <div className="flex h-screen justify-center items-start">
        <div className="bg-[#F9F9F9] px-[126px] max-w-[1098px] w-full h-screen pt-[47px] relative">
          <div className="title-container flex items-center">
            <Link to="/" as={NavLink}>
              <span>&lt;</span>
            </Link>
            <div className="flex items-center justify-between w-full ml-4">
              <h1 className="text-[#1A1A1A] text-[24px] font-bold">
                ᲞᲘᲠᲐᲓᲘ ᲘᲜᲤᲝ
              </h1>
              <span className="text-lg">1/3</span>
            </div>
          </div>
          <div className="nameSurname-container mt-[69px] mb-[46px] flex gap-[56px]">
            <div className="nameContainer flex flex-col w-[419px]">
              <label
                htmlFor="first_name"
                className={`text-[16px] font-medium ${
                  inputErrors.first_name ? "text-[#EF5050]" : "text-[#1A1A1A]"
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
              <p className="font-light text-sm">
                მინიმუმ 2 ასო, ქართული ასოები
              </p>
            </div>
            <div className="surnameContainer flex flex-col w-[419px]">
              <label
                htmlFor="last_name"
                className={`text-[16px] font-medium ${
                  inputErrors.last_name ? "text-[#EF5050]" : "text-[#1A1A1A]"
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
              <p className="font-light ">მინიმუმ 2 ასო, ქართული ასოები</p>
            </div>
          </div>
          <div className="photoUpload-container mb-[46px]">
            <label
              htmlFor="photoUpload"
              className="text-[#1A1A1A] text-[16px] font-medium"
            >
              პირადი ფოტოს ატვირთვა
            </label>
            {/* isnot fixed */}
            <input
              type="file"
              id="upload"
              name="photoUpload"
              className="mt-[8px]"
              // onChange={(event) => {
              //   const file = event.target.files[0];
              // }}
            />
            <label htmlFor="upload">ატვირთვა</label>
          </div>
          <div className="aboutInfo-container mb-[46px]">
            <label
              htmlFor="about_me"
              className="text-[#1A1A1A] text-[16px] font-medium"
            >
              ჩემ შესახებ (არასავალდებუ ლო)
            </label>
            <Input
              inputName="about_me"
              name="about_me"
              onChange={handleChange}
              value={values.general.about_me}
            />
          </div>
          <div className="email-container mb-[46px]">
            <label
              htmlFor="email"
              className={`text-[16px] font-medium ${
                inputErrors.email ? "text-[#EF5050]" : "text-[#1A1A1A]"
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
            <p className="font-light text-[16px]">
              უნდა მთავრდებოდეს @redberry.ge-ით
            </p>
          </div>
          <div className="phone-container mb-[46px]">
            <label
              htmlFor="phone_number"
              className={`text-[16px] font-medium ${
                inputErrors.phone_number ? "text-[#EF5050]" : "text-[#1A1A1A]"
              }`}
            >
              მობილურის ნომერი
            </label>
            <Input
              inputName="phone_number"
              name="phone_number"
              error={inputErrors.phone_number}
              onChange={handleChange}
              value={values.general.phone_number}
            />
            <p className="font-light text-sm">
              უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს
            </p>
          </div>
          <button
            onClick={handleSubmittion}
            className="bg-[#6B40E3] text-white py-[14px] px-[35px] rounded-lg absolute right-[160px] bottom-[65px]"
          >
            შემდეგი
          </button>
        </div>

        <div className="sideBar-container w-[822px] pr-[75px] pl-[80px] flex relative">
          <div className="my-[47px]">
            <div className="flex flex-col">
              <div className="name-surname-email-mobile-container w-[432px] flex flex-col flex-wrap">
                <h1 className="text-[#F93B1D] font-bold text-[34px] mb-[17px] flex gap-[20px] font-face-helvetica leading-10">
                  <p>{values.general.first_name}</p>
                  <p>{values.general.last_name}</p>
                </h1>
                {values.general.email && (
                  <p className="text-[#1A1A1A] font-medium text-[18px] font-face-helvetica">
                    <span>@</span> {values.general.email}
                  </p>
                )}
                {values.general.phone_number && (
                  <p className="text-[#1A1A1A] font-medium text-[18px]">
                    <span>&#128222;</span> {values.general.phone_number}
                  </p>
                )}
              </div>

              <div className="aboutMe-container mt-[34px] w-[432px] flex flex-col flex-wrap">
                {values.general.about_me && (
                  <>
                    <h4 className="text-[#F93B1D] font-bold text-[18px]">
                      ᲩᲔᲛ ᲨᲔᲡᲐᲮᲔᲑ
                    </h4>
                    <p className="text-[#000000] font-normal text-[16px] ">
                      {values.general.about_me}
                    </p>
                  </>
                )}
              </div>
            </div>
            <img
              className="w-[246px] h-[246px] rounded-full absolute top-[46px] right-[75px]"
              src={avatar}
              alt="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
