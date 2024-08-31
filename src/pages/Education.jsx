import { Link, NavLink, useNavigate } from "react-router-dom";
import Input from "../components/Input";
import { FormSelect } from "react-bootstrap";
import "../index.css";
import { useContext } from "react";
import { ResumeContext } from "../ResumeProvider.jsx";

const Education = () => {
  const navigate = useNavigate();
  const { inputErrors, values, setValues } = useContext(ResumeContext);

  const handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    localStorage.setItem(name, value);
    setValues((prevValues) => ({
      ...prevValues,
      education: { ...prevValues.education, [name]: value },
    }));
  };

  const handleSubmittion = (event) => {
    event.preventDefault();
    if (
      !inputErrors.school &&
      !inputErrors.degree && // Check if degree has no errors
      !inputErrors.graduation_date && // Check if graduation_date has no errors
      !inputErrors.description
    ) {
      console.log("nika");
      navigate("/resume");
    }
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      {/* Main Content */}
      <div className="bg-[#F9F9F9] py-8 px-6 lg:px-12 lg:py-12 flex-1">
        <div className="title-container flex items-center border-b border-[#1A1A1A] py-4 justify-between">
          <Link to="/experience" as={NavLink} className="mr-4">
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
          <div className="flex items-center">
            <h1 className="text-[#1A1A1A] text-[24px] font-bold">განათლება</h1>
            <span className="text-lg font-medium text-[16px] ml-4">3/3</span>
          </div>
        </div>

        <div className="form-container mt-8 lg:mt-12">
          <form onSubmit={handleSubmittion}>
            <div className="flex flex-col lg:flex-row gap-6 mb-6">
              <div className="flex flex-col w-full lg:w-1/2">
                <label
                  htmlFor="school"
                  className={`text-sm font-medium ${
                    inputErrors.school ? "text-[#EF5050]" : "text-[#1A1A1A]"
                  }`}
                >
                  სასწავლებელი
                </label>
                <Input
                  type="text"
                  onChange={handleChange}
                  value={values.education.school}
                  inputName="school"
                  name="school"
                  error={inputErrors.school}
                />
                <p className="text-sm font-light">
                  მინიმუმ 2 ასო, ქართული ასოები
                </p>
              </div>

              <div className="flex flex-col w-full lg:w-1/2">
                <label
                  htmlFor="degree"
                  className={`text-sm font-medium ${
                    inputErrors.degree ? "text-[#EF5050]" : "text-[#1A1A1A]"
                  }`}
                >
                  ხარისხი
                </label>
                <FormSelect
                  aria-label="Default select example"
                  className={`mt-2 mb-2 border ${
                    inputErrors.degree ? "border-[#EF5050]" : "border-[#010101]"
                  } px-4 py-3`}
                  value={values.education.degree}
                  onChange={handleChange}
                  id="degree"
                  name="degree"
                >
                  <option>აირჩიეთ ხარისხი</option>
                  <option value="საშუალო სკოლის დიპლომი">
                    საშუალო სკოლის დიპლომი
                  </option>
                  <option value="ზოგადსაგანმანათლებლო დიპლომი">
                    ზოგადსაგანმანათლებლო დიპლომი
                  </option>
                  <option value="ბაკალავრი">ბაკალავრი</option>
                  <option value="მაგისტრი">მაგისტრი</option>
                  <option value="დოქტორი">დოქტორი</option>
                  <option value="ასოცირებული ხარისხი">
                    ასოცირებული ხარისხი
                  </option>
                  <option value="სტუდენტი">სტუდენტი</option>
                  <option value="კოლეჯი (ხარისხის გარეშე)">
                    კოლეჯი (ხარისხის გარეშე)
                  </option>
                  <option value="სხვა">სხვა</option>
                </FormSelect>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-6 mb-6">
              <div className="flex flex-col w-full lg:w-full">
                <label
                  htmlFor="graduation_date"
                  className={`text-sm font-medium ${
                    inputErrors.graduation_date
                      ? "text-[#EF5050]"
                      : "text-[#1A1A1A]"
                  }`}
                >
                  დამთავრების რიცხვი
                </label>
                <input
                  type="date"
                  className={`mt-2 mb-2 border ${
                    inputErrors.graduation_date
                      ? "border-[#EF5050]" // Red border for error
                      : "border-[#1A1A1A]" // Black border for no error
                  } px-4 py-3`}
                  name="graduation_date"
                  value={values.education.graduation_date}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="flex flex-col mb-6 lg:w-1/2">
              <label
                htmlFor="description"
                className={`text-sm font-medium ${
                  inputErrors.description ? "text-[#EF5050]" : "text-[#1A1A1A]"
                }`}
              >
                აღწერა (სავალდებულო)
              </label>
              <Input
                onChange={handleChange}
                value={values.education.description}
                inputName="description"
                name="description"
                error={inputErrors.description}
                className={`mt-2 p-3 border ${
                  inputErrors.description
                    ? "border-[#EF5050]"
                    : "border-[#1A1A1A]"
                } rounded-md focus:outline-none focus:ring-2 ${
                  inputErrors.description
                    ? "focus:ring-[#EF5050]"
                    : "focus:ring-[#1A1A1A]"
                }`}
              />
            </div>

            <div className="flex justify-between mt-8">
              <Link
                to="/experience"
                as={NavLink}
                className="bg-[#6B40E3] text-white py-3 px-6 rounded-[4px]"
              >
                უკან
              </Link>
              <button
                type="submit"
                className="bg-[#6B40E3] text-white py-3 px-6 rounded-[4px]"
              >
                დასრულება
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Sidebar */}
      <div className="sideBar-container flex flex-col w-full lg:w-1/3 p-6 lg:p-12">
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center mb-8">
            <img
              className="w-60 h-60 rounded-full"
              src={localStorage.getItem("image") || ""}
              alt="preview"
            />
            <h1 className="text-[#F93B1D] font-bold text-2xl mt-4">
              {values.general.first_name} {values.general.last_name}
            </h1>
            {values.general.email && (
              <p className="text-[#1A1A1A] text-lg">
                <span>@</span> {values.general.email}
              </p>
            )}
            {values.general.phone_number && (
              <p className="text-[#1A1A1A] text-lg">
                <span>&#128222;</span> {values.general.phone_number}
              </p>
            )}
          </div>

          {values.general.about_me && (
            <div className="aboutMe-container mb-8">
              <h4 className="text-[#F93B1D] font-bold text-lg">ᲩᲔმს შესახებ</h4>
              <p className="text-[#000000] text-base">
                {values.general.about_me}
              </p>
            </div>
          )}

          <hr className="w-full my-8" />

          <div className="experience-infos mb-8">
            <h2 className="text-[#F93B1D] font-bold text-lg mb-4">
              გამოცდილება
            </h2>
            <div className="flex flex-col">
              {values.experience.position && (
                <p className="text-[#1A1A1A] text-base">
                  {values.experience.position}
                </p>
              )}
              {values.experience.employer && (
                <p className="text-[#000000] text-base">
                  {values.experience.employer}
                </p>
              )}
              <div className="flex gap-4">
                {values.experience.started_at && (
                  <p className="text-[#909090] text-base">
                    {values.experience.started_at}
                  </p>
                )}
                {values.experience.ended_at && (
                  <p className="text-[#909090] text-base">
                    {values.experience.ended_at}
                  </p>
                )}
              </div>
              {values.experience.description && (
                <p className="text-[#000000] text-base">
                  {values.experience.description}
                </p>
              )}
            </div>
          </div>

          <hr className="w-full my-8" />

          <div className="education-summary">
            {values.education && (
              <>
                <h4 className="text-[#F93B1D] font-bold text-lg mb-2">
                  განათლება
                </h4>
                <p className="text-[#000000] text-base">
                  {values.education.school}
                </p>
                <p className="text-[#000000] text-base">
                  {values.education.degree}
                </p>
                <p className="text-[#000000] text-base">
                  {values.education.graduation_date}
                </p>
                <p className="text-[#000000] text-base">
                  {values.education.description}
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
