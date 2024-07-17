import { Link, NavLink } from "react-router-dom";
import { FaAnglesLeft } from "react-icons/fa6";
import Input from "../components/Input";
import "../index.css";
import { useContext } from "react";
import { ResumeContext } from "../ResumeProvider";

const Resume = ({ selectedDegree, graduationDate }) => {
  const { inputErrors, values } = useContext(ResumeContext);

  return (
    <div className="flex h-screen justify-center items-start">
      <div className="bg-[#F9F9F9] px-[126px] max-w-[1098px] w-full h-screen">
        <div className="title-container flex items-center">
          <Link to="/" as={NavLink}>
            <span>
              {" "}
              <FaAnglesLeft />{" "}
            </span>
          </Link>{" "}
        </div>

        <div className="sideBar-container w-[822px] flex items-center justify-center">
          <div>
            <img
              className="w-[246px] h-[246px] rounded-full   my-[47px]"
              src={localStorage.getItem("image" || "")}
              alt="preview"
            />
          </div>

          <div className="name-surname-email-mobile-container">
            <div>
              <h1 className="text-[#F93B1D] font-bold text-[34px] mb-[17px] flex gap-[20px] font-face-helvetica leading-10	">
                <p>{values.general.first_name}</p>
                <p>{values.general.last_name}</p>
              </h1>
              <p className="text-[#1A1A1A] font-medium text-[18px] font-face-helvetica">
                {values.general.email ? (
                  <>
                    <span>@</span> {values.general.email}
                  </>
                ) : (
                  ""
                )}
              </p>
              <p className="text-[#1A1A1A] font-medium text-[18px]">
                {values.general.phone_number ? (
                  <>
                    <span>&#128222;</span> {values.general.phone_number}
                  </>
                ) : (
                  ""
                )}
              </p>
            </div>
          </div>

          {/*//todo ჩასამატებელია ამ ადგილას ნიკას მიერ გაკეთებული და ნიკას პეიჯიდან მოსული ინფორმაცია*/}

          {/*//ამ ადგილიდან იწყება ჩემს პეიჯზე რაც შეივსება ის ინფორმაცია*/}
          <div>
            <div className="school-degree-graduation_date-description-container">
              <div className="education-container mt-[534px]">
                <p className="text-[#000000] font-normal text-[16px]">
                  {selectedDegree}
                </p>
                <p className="text-[#000000] font-normal text-[16px]">
                  {graduationDate}
                </p>

                {values.education ? (
                  <>
                    <h4 className="text-[#F93B1D] font-bold text-[18px]">
                      გ ა ნ ა თ ლ ე ბ ა
                    </h4>
                    <p className="text-[#000000] font-normal text-[16px]">
                      {values.education.school}
                    </p>

                    {/*// აქ მოდის  degree და რიცხვი კალენდარიდან*/}
                    <p className="text-[#000000] font-normal text-[16px]">
                      {selectedDegree}
                    </p>
                    <p className="text-[#000000] font-normal text-[16px]">
                      {graduationDate}
                    </p>

                    <p className="text-[#000000] font-normal text-[16px]">
                      {values.education.description}
                    </p>
                  </>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
