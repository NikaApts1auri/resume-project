import { Link, NavLink, useNavigate } from "react-router-dom";
import Input from "../components/Input";
import { FaAnglesLeft } from "react-icons/fa6";
import { FormSelect } from "react-bootstrap";
import avatar from "../assets/avatar.jpg";
import "../index.css";

import { useContext, useState } from "react";
import { ResumeContext } from "../ResumeProvider.jsx";

const Education = () => {
  const navigate = useNavigate();
  const { inputErrors, setInputErrors, values, setValues } =
    useContext(ResumeContext);

  const handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    setValues((prevValues) => ({
      ...prevValues,
      education: { ...prevValues.education, [name]: value },
    }));
  };
  const handleSubmittion = (event) => {
    event.preventDefault();
    setInputErrors({
      school: !values.education.school,
      degree: !values.education.degree,
      graduation_date: !values.education.graduation_date,
      description: !values.education.description,
    });
    if (
      !inputErrors.school &&
      !inputErrors.degree &&
      !inputErrors.graduation_date &&
      !inputErrors.description
    ) {
      navigate("/resume");
    }
  };
  return (
    <div className="flex h-screen justify-center items-start">
      <div className="bg-[#F9F9F9] px-[126px] max-w-[1098px] w-full h-screen">
        <div className="title-container flex items-center">
          {/* <Link to="/" as={NavLink}>
            <span>
              {" "}
              <FaAnglesLeft />{" "}
            </span>
          </Link>{" "} */}
          <div className="flex items-center justify-between w-full ml-4">
            <h1 className="text-[#1A1A1A] text-[24px] font-bold">
              გ ა ნ ა თ ლ ე ბ ა
              <hr />
            </h1>
            <span className="text-lg font-bold">3/3</span>
          </div>
        </div>

        <div className="nameSurname-container mt-[69px] mb-[46px] flex gap-[56px]">
          <div className="schoolContainer flex flex-col  w-[850px]">
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
            <p className="font-light text-sm">მინიმუმ 2 ასო, ქართული ასოები</p>
          </div>
        </div>

        <div className="degree-container mt-[69px] mb-[46px] flex gap-[56px]">
          <div className="degreeContainer flex flex-col w-[419px]">
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
              className={`mt-[8px] mb-[8px] border ${
                inputErrors.degree ? "border-[#EF5050]" : "border-[#98E37E]"
              } px-[16px] py-[14px]`}
              value={values.education.degree} // Set the value of the select input
              onChange={handleChange} // Handle change event
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
              <option value="ასოცირებული ხარისხი">ასოცირებული ხარისხი</option>
              <option value="სტუდენტი">სტუდენტი</option>
              <option value="კოლეჯი (ხარისხის გარეშე)">
                კოლეჯი (ხარისხის გარეშე)
              </option>
              <option value="სხვა">სხვა</option>
            </FormSelect>
          </div>

          <div className="graduation_dateContainer flex flex-col w-[419px]">
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
              className={`mt-[8px] mb-[8px] border ${
                inputErrors.graduation_date
                  ? "border-[#EF5050]"
                  : "border-[#98E37E]"
              } px-[16px] py-[14px]`}
              name="graduation_date"
              value={values.education.graduation_date} // Set the value of the input
              onChange={handleChange} // Handle change event
            />
          </div>
        </div>

        <div className="description-container mb-[46px]">
          <label
            htmlFor="description"
            className="text-[#1A1A1A] text-sm font-medium"
          >
            აღწერა (სავალდებულო)
          </label>

          <Input
            onChange={handleChange}
            value={values.education.description}
            inputName="description"
            name="description"
            error={inputErrors.description}
          />
        </div>

        <hr />

        <div className="buttons gap-[56px]">
          <Link
            to="/experience"
            as={NavLink}
            className="bg-[#6B40E3] text-white py-[14px] px-[35px] rounded-lg absolute left-[160px] bottom-[65px]"
          >
            უკან
          </Link>
          <button
            onClick={handleSubmittion}
            className="bg-[#6B40E3] text-white py-[14px] px-[35px] rounded-lg absolute right-[160px] bottom-[65px]"
          >
            დასრულება
          </button>
        </div>
      </div>
      <div className="sideBar-container flex-col w-[822px] flex px-[80px] py-[48px]">
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
        <hr />
        {/* end personal info  */}
        {/* <div className=" resume w-[822px] flex items-center justify-center"> */}
        <div className="experience-infos justify-start ">
          <h2 className="text-[#F93B1D] font-bold text-[18px] mt-[34px] mb-[15px]">
            გამოცდილება
          </h2>
          <div className="position-employer flex gap-[7px]">
            <div className="position-container  ">
              {values.experience.position && (
                <>
                  <p className="text-[ #1A1A1A)] font-normal text-[16px]">
                    {values.experience.position}
                  </p>
                </>
              )}
            </div>

            <div className="employer-container ">
              {values.experience.employer && (
                <>
                  <p className="text-[#000000] font-normal text-[16px]">
                    {values.experience.employer}
                  </p>
                </>
              )}
            </div>
          </div>

          <div className="started-ended flex gap-[20px]">
            <div className="started-container ">
              {values.experience.started_at && (
                <>
                  <p className="text-[#909090] font-normal text-[16px]">
                    {values.experience.started_at}
                  </p>
                </>
              )}
            </div>

            <div className="ended-container ">
              {values.experience.ended_at && (
                <>
                  <p className="text-[#909090;] font-normal text-[16px]">
                    {values.experience.ended_at}
                  </p>
                </>
              )}
            </div>
          </div>

          <div className="description-container ">
            {values.experience.description && (
              <>
                <p className="text-[#000; font-normal text-[16px]">
                  {values.experience.description}
                </p>
              </>
            )}

            {/* tamar aq daapaste */}
          </div>
          {/* <Education startDate={startDate}></Education> */}
        </div>
        <hr />
        <div className="school-degree-graduation_date-description-container">
          <div className="education-container mt-[47px]">
            {values.education ? (
              <>
                <h4 className="text-[#F93B1D] font-bold text-[18px] font-face-helvetica">
                  განათლება
                </h4>
                <p className="text-[#000000] font-normal text-[16px]">
                  {values.education.school}
                </p>

                <p className="text-[#000000] font-normal text-[16px]">
                  {handleChange}
                </p>
                <p className="text-[#000000] font-normal text-[16px]">
                  {handleChange}
                </p>

                <p className="text-[#000000] font-normal text-[16px]">
                  {values.education.description}
                </p>
              </>
            ) : (
              ""
            )}
          </div>

          {/* 
  {<Resume selectedDegree={selectedDegree} />
              <Resume graduationDate={graduationDate} /> } */}
        </div>
        ;
      </div>
    </div>
  );
};

export default Education;

// font-face-helvetica
