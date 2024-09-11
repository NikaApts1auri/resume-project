import { Link, NavLink, useNavigate } from "react-router-dom";
import Input from "../components/Input";
import { useContext } from "react";
import "../index.css";
import { ResumeContext } from "../ResumeProvider";
import { MdEmail } from "react-icons/md";

const Experience = () => {
  const navigate = useNavigate();
  const { inputErrors, values, setValues, validateInput } =
    useContext(ResumeContext);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    validateInput(name, value);
    localStorage.setItem(name, value);

    setValues((prevValues) => ({
      ...prevValues,
      experience: { ...prevValues.experience, [name]: value },
    }));
  };

  const handleSubmittion = (event) => {
    event.preventDefault();
    if (
      !inputErrors.position &&
      !inputErrors.employer &&
      !inputErrors.description
    ) {
      console.log("nika");
      navigate("/education");
    } else {
      console.log("Form validation failed");
    }
  };

  return (
    <div className="flex flex-col lg:flex-row h-full">
      <div className="bg-[#F9F9F9] px-4 sm:px-6 lg:px-[126px] max-w-full lg:max-w-[1098px] w-full pt-8 lg:pt-[47px] h-screen">
        <div className="title-container mb-6 lg:mb-[80px] flex items-center">
          <Link to="/personal-info" as={NavLink}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
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
          <div className="flex items-center justify-between border-b border-[#1A1A1A] py-3 lg:py-5 w-full ml-4">
            <h1 className="text-[#1A1A1A] text-[20px] lg:text-[24px] font-bold">
              გამოცდილება
            </h1>
            <span className="text-lg lg:text-[20px]">2/3</span>
          </div>
        </div>

        <form onSubmit={handleSubmittion}>
          <div className="flex flex-col">
            <label
              htmlFor="position"
              className={`text-sm font-medium ${
                inputErrors.position ? "text-[#EF5050]" : "text-[#1A1A1A]"
              }`}
            >
              თანამდებობა
            </label>
            <Input
              inputName="position"
              id="position"
              onChange={handleChange}
              value={values.experience.position || ""}
              type="text"
              name="position"
              className="mt-2 mb-2 border border-[#BCBCBC] px-4 py-3"
              placeholder="დეველოპერი, დიზაინერი, ა.შ."
              error={inputErrors.position}
            />
            <p className="font-light text-sm">მინიმუმ 2 სიმბოლო</p>
          </div>

          <div className="flex flex-col mt-10">
            <label
              htmlFor="employer"
              className={`text-sm font-medium ${
                inputErrors.employer ? "text-[#EF5050]" : "text-[#1A1A1A]"
              }`}
            >
              დამსაქმებელი
            </label>
            <Input
              inputName="employer"
              onChange={handleChange}
              value={values.experience.employer || ""}
              type="text"
              name="employer"
              className="mt-2 mb-2 border border-[#BCBCBC] px-4 py-3"
              error={inputErrors.employer}
            />
            <p className="font-light text-sm">მინიმუმ 2 სიმბოლო</p>
          </div>

          <div className="flex flex-col sm:flex-row justify-between gap-4 mt-10 mb-10 lg:mb-[46px]">
            <div className="flex flex-col w-full">
              <label
                htmlFor="started_at"
                className="text-sm font-medium text-[#1A1A1A]"
              >
                დაწყების რიცხვი
              </label>
              <input
                onChange={handleChange}
                value={values.experience.started_at || ""}
                type="date"
                name="started_at"
                className="mt-2 border border-[#BCBCBC] px-4 py-3"
              />
            </div>
            <div className="flex flex-col w-full">
              <label
                htmlFor="ended_at"
                className="text-sm font-medium text-[#1A1A1A]"
              >
                დასრულების რიცხვი
              </label>
              <input
                onChange={handleChange}
                value={values.experience.ended_at || ""}
                type="date"
                name="ended_at"
                className="mt-2 border border-[#BCBCBC] px-4 py-3"
              />
            </div>
          </div>

          <div className="mb-10 lg:mb-[51px]">
            <label
              htmlFor="description"
              className={`text-sm font-medium ${
                inputErrors.description ? "text-[#EF5050]" : "text-[#1A1A1A]"
              }`}
            >
              აღწერა
            </label>
            <Input
              inputName="description"
              onChange={handleChange}
              type="text"
              name="description"
              value={values.experience.description || ""}
              className="mt-2 mb-2 border border-[#BCBCBC] w-full px-4 py-3 min-h-[123px]"
              placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"
              error={inputErrors.description}
            />
          </div>

          <hr />

          <div className="flex flex-col sm:flex-row justify-between mt-8 ">
            <Link
              to="/personal-info"
              as={NavLink}
              className="bg-[#6B40E3] text-white py-3 px-5 rounded-lg flex justify-center mb-[10px]"
            >
              უკან
            </Link>
            <button
              type="submit"
              className="bg-[#6B40E3] text-white py-3 px-5 rounded-lg"
            >
              შემდეგი
            </button>
          </div>
        </form>
      </div>

      <div className="sideBar-container flex flex-col w-full lg:w-[822px] px-4 sm:px-6 lg:px-[80px] py-8 sm:py-10 lg:py-[48px]">
        <div className="my-8 flex lg:my-[47px]">
          <div className="flex flex-col">
            <div className="name-surname-email-mobile-container w-full lg:w-[432px] flex flex-col">
              <h1 className="text-[#F93B1D] font-bold text-[22px] lg:text-[34px] mb-4">
                {values.general.first_name} {values.general.last_name}
              </h1>
              {values.general.email && (
                <p className="text-[#1A1A1A] flex items-center gap-[5px] text-[16px] lg:text-[18px]">
                  <MdEmail /> {values.general.email}
                </p>
              )}
              {values.general.phone_number && (
                <p className="text-[#1A1A1A] text-[16px] lg:text-[18px]">
                  <span>&#128222;</span> {values.general.phone_number}
                </p>
              )}
            </div>

            <div className="aboutMe-container mt-6 lg:mt-8 text-[14px] lg:text-[18px]">
              {values.general.about_me && (
                <>
                  <h4 className="text-[#F93B1D] font-bold text-[16px] lg:text-[18px]">
                    ᲩᲔᲛ ᲨᲔᲡᲐᲮᲔᲑ
                  </h4>
                  <p className="text-[#000000] font-normal">
                    {values.general.about_me}
                  </p>
                </>
              )}
            </div>
          </div>
          <img
            className="w-[150px] h-[150px] lg:w-[246px] lg:h-[246px] rounded-full mt-4 lg:mt-[46px] mx-auto lg:mx-0"
            src={localStorage.getItem("image") || ""}
            alt="preview"
          />
        </div>
        <hr className="border-[0.8px] border-[#C8C8C8]" />

        <div className="experience-infos mt-8 lg:mt-[34px] text-[#1A1A1A]">
          <h2 className="font-bold text-[#F93B1D] text-lg lg:text-[22px]">
            გამოცდილება
          </h2>
          <div className="position-employer flex flex-col lg:flex-row gap-2 lg:gap-4 mt-4 lg:mt-6">
            <div className="position-container">
              {values.experience.position && (
                <p className="text-[16px] lg:text-[18px]">
                  {values.experience.position}
                </p>
              )}
            </div>
            <div className="employer-container">
              {values.experience.employer && (
                <p className="text-[16px] lg:text-[18px]">
                  {values.experience.employer}
                </p>
              )}
            </div>
          </div>

          <div className="started-ended flex flex-col lg:flex-row gap-2 lg:gap-4 mt-4 lg:mt-6">
            <div className="started-container">
              {values.experience.started_at && (
                <p className="text-[#909090] text-[16px] lg:text-[18px]">
                  {values.experience.started_at}
                </p>
              )}
            </div>
            <div className="ended-container">
              {values.experience.ended_at && (
                <p className="text-[#909090] text-[16px] lg:text-[18px]">
                  {values.experience.ended_at}
                </p>
              )}
            </div>
          </div>

          <div className="description-container mt-4 lg:mt-6">
            {values.experience.description && (
              <p className="text-[#000] text-[16px] lg:text-[18px]">
                {values.experience.description}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
