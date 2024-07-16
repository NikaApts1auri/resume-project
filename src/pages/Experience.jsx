import { Link, NavLink, useNavigate } from "react-router-dom";
import avatar from "../assets/avatar.jpg";
import Input from "../components/Input";
import { useContext, useEffect, useState } from "react";
import Education from "./Education";
import "../index.css";
import { ResumeContext } from "../ResumeProvider";

const Experience = () => {
  const navigate = useNavigate();
  const { inputErrors, setInputErrors, values, setValues, validateInput } =
    useContext(ResumeContext);

  //for every pages

  const handleChange = (event) => {
    validateInput(event.target.name, event.target.value);
    // localStorage.setItem(name, value);

    const value = event.target.value;
    const name = event.target.name;
    setValues((prevValues) => ({
      ...prevValues,
      experience: { ...prevValues.experience, [name]: value },
    }));
  };

  const handleSubmittion = (event) => {
    event.preventDefault();
    // setInputErrors({
    //   position: !values.experience.position,
    //   employer: !values.experience.employer,
    //   started_at: !values.experience.started_at,
    //   ended_at: !values.experience.ended_at,
    //   description: !values.experience.description,
    // });
    if (
      !inputErrors.position &&
      !inputErrors.employer &&
      !inputErrors.started_at &&
      !inputErrors.ended_at &&
      !inputErrors.description
    ) {
      navigate("/education");
    }
  };

  return (
    <div className="flex h-full justify-center items-start">
      <div className="bg-[#F9F9F9] px-[126px] max-w-[1098px] w-full pt-[47px] h-screen">
        <div className="title-container flex items-center">
          <Link to="/" as={NavLink}>
            &lt;
          </Link>
          <div className="flex items-center justify-between w-full ml-4">
            <h1 className="text-[#1A1A1A] text-[24px] font-bold">
              გამოცდილება
            </h1>
            <hr />
            <span className="text-lg">2/3</span>
          </div>
        </div>

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
            onChange={handleChange}
            value={values.experience.position}
            type="text"
            name="position"
            className="mt-[8px] mb-[8px] border border-[#BCBCBC] px-[16px] py-[14px]"
            placeholder="დეველოპერი, დიზაინერი, ა.შ."
            error={inputErrors.position}
          />
          <p className="font-light text-sm">მინიმუმ 2 სიმბოლო</p>
        </div>

        <div className="flex flex-col mt-[40px]">
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
            value={values.experience.employer}
            type="text"
            name="employer"
            className="mt-[8px] mb-[8px] border border-[#BCBCBC] px-[16px] py-[14px]"
            error={inputErrors.employer}
          />
          <p className="font-light text-sm">მინიმუმ 2 სიმბოლო</p>
        </div>

        <div className="flex justify-between gap-[32px] mt-[40px] mb-[46px]">
          <div className="flex flex-col w-full">
            <label
              htmlFor="started_at"
              className="text-sm font-medium text-[#1A1A1A]"
            >
              დაწყების რიცხვი
            </label>
            <input
              onChange={handleChange}
              value={values.experience.started_at}
              type="date"
              name="started_at"
              className="mt-[8px] border border-[#BCBCBC] px-[16px] py-[14px]"
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
              type="date"
              name="ended_at"
              className="mt-[8px] border border-[#BCBCBC] px-[16px] py-[14px]"
            />
          </div>
        </div>

        <div className="mb-[51px]">
          <label
            htmlFor="description"
            className="text-sm font-medium text-[#1A1A1A]"
          >
            აღწერა
          </label>
          <Input
            inputName="description"
            onChange={handleChange}
            type="text"
            name="description"
            className="mt-[8px] mb-[8px] border border-[#BCBCBC] w-full px-[16px] py-[14px] min-h-[123px]"
            placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"
            error={inputErrors.description}
          />
        </div>

        <hr />
        <button className="bg-[#62A1EB] mt-[45px] mb-[75px] px-[18px] py-[18px] text-white">
          მეტი გამოცდილების დამატება
        </button>

        <div className="flex justify-between">
          <Link
            to="/personal-info"
            as={NavLink}
            className="bg-[#6B40E3] text-white py-[14px] px-[35px] rounded-lg"
          >
            უკან
          </Link>
          <button
            onClick={handleSubmittion}
            className="bg-[#6B40E3] text-white py-[14px] px-[35px] rounded-lg"
          >
            შემდეგი
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
            src={localStorage.getItem("image") || ""}
            alt="preview"
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
      </div>
    </div>
  );
};

export default Experience;
