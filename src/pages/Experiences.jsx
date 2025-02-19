import React, { useState } from "react";
import { getExperience } from "../axios/dashboard";
import { useQuery } from "react-query";
import DateTimeFormatter from "../utils/dateTime_functionality";
import { Link } from "react-router-dom";
import create from "../utils/Theme";
import MyData from "../data/MyData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faPlus } from "@fortawesome/free-solid-svg-icons";
import { getUsername } from "./admin/utils/auth";
import AddSectionDetailsBtn from "../utils/AddSectionDetailsBtn";

const ExperienceTimeline = ({ experience, index }) => {
  const theme = create();
  return (
    <div class={`flex-start md:flex  `}>
      <div
        class={`-ml-[23px] flex h-[45px] ${
          theme.theme == "light" ? "bg-[#FFFFFF]" : "bg-[#0F0E17]"
        } w-[45px] items-center justify-center rounded-full border border-2  text-info-700`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="h-10 w-10"
        >
          <path
            fill-rule="evenodd"
            d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
      <div
        class={`mb-20 ml-6 block max-w-5xl rounded-lg p-6  light:text-white ${
          index % 2 ? "" : ""
        }
          `}
      >
        <div class="mb-4 flex gap-3 items-center">
          <Link class="text-md text-info transition duration-150 ease-in-out hover:text-info-600 focus:text-info-600 active:text-info-700">
            {experience.title}
          </Link>
          <p
            className={`${
              theme.theme != "light" ? "text-neutral-700" : "text-neutral-800"
            } text-[12px]  `}
          >
            {experience.from &&
              DateTimeFormatter.getFormattedDate(experience.from)}{" "}
            -{" "}
            {experience.to != null
              ? DateTimeFormatter.getFormattedDate(experience.to)
              : "Present"}
          </p>
        </div>
        <h3
          class={`mb-4 text-2xl font-semibold ${
            theme.theme == "light" ? "text-neutral-900" : "text-neutral-100"
          }`}
        >
          @{experience.company} | {experience.location}
        </h3>
        <div class="mb-4 flex flex-wrap gap-2">
          {experience.skills.map((skill, index) => {
            return (
              <span
                key={index}
                className={`${
                  theme.theme != "light" ? "text-[#FFFFFF]" : "text-[#0F0E17]"
                } rounded-2xl border-[#96c4f1] border-[0.8px] px-6 py-2 text-[10px] font-semibold`}
              >
                {skill}
              </span>
            );
          })}
        </div>

        <p
          class={`${
            theme.theme != "light" ? "text-[#FFFFFF]" : "text-[#0F0E17]"
          } mb-6  text-[14px]`}

          // dangerouslySetInnerHTML={{
          //   __html: experience.description,
          // }}
        >
          {experience.description.length > 200
            ? experience.description.substring(0, 200) + "..."
            : experience.description}
        </p>
        <span>
          <button
            type="button"
            className={`${
              theme.theme !== "light" ? "text-[#FFFFFF]" : "text-[#0F0E17]"
            } btn font-semibold btn-primary mr-4 text-[14px] py-2 rounded-md transition duration-750 ease-in-out group relative overflow-hidden`}
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            View Details{" "}
          </button>
          <div
            className={`hidden sm:inline ml-2 ${
              theme.theme == "light" ? "text-neutral-900" : "text-neutral-100"
            } transition duration-1000 ease-in-out`}
          >
            <FontAwesomeIcon
              className="icon-move-animation"
              icon={faArrowRight}
            />
          </div>
        </span>
      </div>
    </div>
  );
};

export default function Experiences() {
  const experiences = MyData.experience.experiences;

  // const experiences = [
  //   {
  //     name: "NeonFlake",
  //     jobTitle: "SDE Intern",
  //     joinDate: "Sep 2021",
  //     leaveDate: "Present",
  //     workedOn: ["Flutter", "NodeJS", "MongoDB", "Firebase", "Git", "Web"],

  //     description:
  //       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio autem nihil porro consectetur tempore similique laudantium aliquid labore quibusdam quam vel aperiam eligendi, esse illum est pariatur. Dignissimos saepe inventore, nisi consequatur doloribus id obcaecati autem a quo? Corporis voluptatum doloremque quisquam dicta eveniet rerum maiores cum aut, accusantium veniam.",
  //   },
  //   {
  //     name: "OEPP Pvt. Ltd.",
  //     jobTitle: "Flutter Developer",
  //     joinDate: "Sep 2021",
  //     leaveDate: "Dec 2021",
  //     workedOn: ["Flutter", "NodeJS", "MongoDB", "Firebase", "Git", "Web"],
  //     description:
  //       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio autem nihil porro consectetur tempore similique laudantium aliquid labore quibusdam quam vel aperiam eligendi, esse illum est pariatur. Dignissimos saepe inventore, nisi consequatur doloribus id obcaecati autem a quo? Corporis voluptatum doloremque quisquam dicta eveniet rerum maiores cum aut, accusantium veniam.",
  //   },
  //   {
  //     name: "GuruCool",
  //     jobTitle: "Data Trainee",
  //     joinDate: "Feb 2021",
  //     leaveDate: "July 2021",
  //     workedOn: [
  //       "Data Science",
  //       "Python",
  //       "Git",
  //       "Data Visualization",
  //       "Data Analysis",
  //     ],
  //     description:
  //       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio autem nihil porro consectetur tempore similique laudantium aliquid labore quibusdam quam vel aperiam eligendi, esse illum est pariatur. Dignissimos saepe inventore, nisi consequatur doloribus id obcaecati autem a quo? Corporis voluptatum doloremque quisquam dicta eveniet rerum maiores cum aut, accusantium veniam.",
  //   },
  // ];

  return (
    <section
      className="section experience-section"
      id="experience"
      tabIndex="24"
    >
      <div
        style={{
          width: "100%",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
        // data-aos="zoom-in-up"
        data-aos-duration="700"
        data-aos-once="true"
      >
        <h1 className="title">
          Experience
          <p>These are the experiences where I've previously worked.</p>
        </h1>
        {
          experiences == null && getUsername() != null ? (
            <AddSectionDetailsBtn title={"Add Experience"} />
          ) : (
            <ol class="border-l-2 border-info-100">
              {experiences.map((experience, index) => {
                return (
                  <ExperienceTimeline experience={experience} index={index} />
                );
              })}
            </ol>
          )
          /*experiences.map((experience, index) => {
            return (
              // <div key={index} className="expContainer">
              <div key={index} className="flex sm:flex-row flex-col mb-10">
                <ul className="w-[50%] sm:mb-0 mb-10 h-[50px] pl-10 items-center text-[#0090dd] font-semibold hover:bg-gray-200 pt-6 border-l-2 border-gray-600">
                  <li className="companyName active" tabIndex={24}>
                    {experience.company}
                  </li>
                </ul>
                <div className="bg-[#d9d9df] rounded-[15px]">
                  <div className=" bg-[#28282e] rounded-t-3xl px-5">
                    <h4 className="expTitle py-3  text-white ">
                      {experience.title}
                    </h4>
                    <p className="period text-gray-200 py-2">
                      From {DateTimeFormatter.getFormattedDate(experience.from)}{" "}
                      -{" "}
                      {experience.to != null
                        ? DateTimeFormatter.getFormattedDate(experience.to)
                        : "Present"}
                    </p>
                  </div>

                  <div className="flex ml-10 gap-3 flex-row flex-wrap justify-start items-center my-3">
                    {experience.skills.map((work, i) => {
                      return (
                        <span
                          key={i}
                          className="tags mt-5 text-white text-[16px] px-5 py-2 rounded-[5px]  mr-2 mb-2"
                          style={{
                            border: "1px solid #00d2ff",
                            backgroundImage:
                              "linear-gradient(to right, #0090dd, #00d2ff)",
                            backgroundClip: "padding-box",
                          }}
                        >
                          {work}
                        </span>
                      );
                    })}
                  </div>

                  <p className="px-10 py-5 sm:text-[16px] text-[#232323] text-[14px]">
                    {experience.description}
                  </p>
                </div>
              </div>
            );
          })
        )}
      </div> */
        }
      </div>
    </section>
  );
}
