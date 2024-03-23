import React, { useEffect, useState } from "react";
import StringUtils from "../utils/String";
import { useQuery } from "react-query";
import { publicInfo } from "../axios/dashboard";
import MyData from "../data/MyData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

export default function MainSection({ username, profile }) {
  const [userInfo, setUserInfo] = useState();
  const [isFirstTime, setIsFirstTime] = useState(true);
  if (
    username === undefined ||
    (username === "vikramnegi-9162604468" && isFirstTime)
  ) {
    setUserInfo(MyData.publicInfo);
    setIsFirstTime(false);
  }

  const { isLoading } = useQuery(["data"], () => publicInfo(username), {
    onSuccess: (data) => {
      setUserInfo(data.data?.data);
    },
    onError: (error) => {
      setUserInfo(MyData.publicInfo);
    },
  });

  return (
    <section
      className="section home-section mt-24 only-bg"
      id="home"
      tabIndex="42"
    >
      {userInfo && (
        <div>
          <h1>
            Hey, I'm{" "}
            <span className="name">
              {StringUtils.capitalizeString(userInfo?.user.firstName) +
                " " +
                StringUtils.capitalizeString(userInfo?.user.lastName)}
            </span>
          </h1>
          <p className="aboutShort">{userInfo?.profileDescription}</p>

          <button
            className="button"
            name="about"
            // onClick="scrollToSection(this)"
            tabIndex="2"
          >
            About Me
            {/* <ion-icon name="chevron-forward-outline"></ion-icon> */}
          </button>
          <div
            className=" bg-transparent hover:bg-sky-500 text-sky-500 font-semibold hover:text-white py-2 px-4 border border-sky-500 hover:border-transparent rounded flex items-center justify-center cursor-pointer gap-2"
            name=""
            // onClick="scrollToSection(this)"
            tabIndex="2"
          >
            <FontAwesomeIcon icon={faDownload} />
            Download Resume
          </div>
        </div>
      )}
      <div className="img_sec">
        <div className="imgDiv">
          <img
            src={profile.image}
            className="profile-image"
            alt="ProfileImage"
          />
        </div>
      </div>
    </section>
  );
}
