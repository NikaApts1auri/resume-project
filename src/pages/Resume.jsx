/* eslint-disable react/prop-types */
import { Link, NavLink } from "react-router-dom";
import { FaAnglesLeft } from "react-icons/fa6";
import "../index.css";
import { useContext } from "react";
import { ResumeContext } from "../ResumeProvider";

const Resume = ({ selectedDegree, graduationDate }) => {
  const { inputErrors, values } = useContext(ResumeContext);
  console.log(inputErrors);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg max-w-[1098px] w-full p-8 md:p-16">
        <div className="flex justify-between items-center mb-8">
          <Link
            to="/"
            as={NavLink}
            className="text-gray-600 hover:text-gray-900"
          >
            <FaAnglesLeft size={24} />
          </Link>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center">
          <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-10">
            <img
              className="w-48 h-48 md:w-60 md:h-60 rounded-full object-cover"
              src={localStorage.getItem("image" || "")}
              alt="preview"
            />
          </div>

          <div className="flex-1">
            <div className="mb-6">
              <h1 className="text-red-600 font-bold text-2xl md:text-4xl flex flex-wrap gap-4">
                <p>{values.general.first_name}</p>
                <p>{values.general.last_name}</p>
              </h1>
              <p className="text-gray-800 font-medium text-lg">
                {values.general.email && (
                  <>
                    <span>@</span> {values.general.email}
                  </>
                )}
              </p>
              <p className="text-gray-800 font-medium text-lg">
                {values.general.phone_number && (
                  <>
                    <span>&#128222;</span> {values.general.phone_number}
                  </>
                )}
              </p>
            </div>

            {values.education && (
              <div>
                <h4 className="text-red-600 font-bold text-lg md:text-xl mb-2">
                  განათლება
                </h4>
                <p className="text-gray-800 text-base md:text-lg">
                  {values.education.school}
                </p>
                <p className="text-gray-800 text-base md:text-lg">
                  {selectedDegree}
                </p>
                <p className="text-gray-800 text-base md:text-lg">
                  {graduationDate}
                </p>
                <p className="text-gray-800 text-base md:text-lg">
                  {values.education.description}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
