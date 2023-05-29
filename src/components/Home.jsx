import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Header } from "../common/Header/Header";
import { homeData } from "./homeData";
import { Footer } from "../common/footer/Footer";
import parse from "html-react-parser";
import { Button } from "primereact/button";
import { NavButtonsWrapper } from "../common/button/NavButtonsWrapper";

//images
import banner from "../utils/images/header_img/checklist.jpg";
import hm from "../utils/images/home_img/home_img.jpg";
import home_env from "../utils/images/home_img/home_environmental.png";
import f_img_home from "../utils/images/home_img/f_img_1.png";

export const Home = () => {
  const language = useSelector((state) => state.language.language);
  const [content, setContent] = useState("");

  useEffect(() => {
    if (language.toLowerCase() === "english") {
      setContent(homeData.english);
    } else if (language.toLowerCase() === "french") {
      setContent(homeData.french);
    }
  }, [language]);

  return (
    <>
      <Header
        img={banner}
        title={content.header}
        badgeValue={content.badgeValue}
      />
      {/* <div className="flex justify-content-center">
        <img
          className="responsive"
          src={hm}
          alt="step1_1"
          width="70%"
          height="300"
        />
      </div> */}
      <div className="text-center mt-4 ml-2 mr-2 md:ml-4 md:mr-4 lg:ml-8 lg:mr-8">
        <p>
          <b>{content.b1}</b>
        </p>
        <p>{parse(content.p1 ? content.p1 : "")}</p>
        <div className="flex justify-content-center ">
          {language.toLowerCase() === "english" ? (
            <img
              className="responsive"
              src={home_env}
              alt="step1_1"
              width="70%"
              height="300"
            />
          ) : (
            <img
              className="responsive"
              src={f_img_home}
              alt="step1_1"
              width="70%"
              height="300"
            />
          )}
        </div>
        {/* <div class="">
          <div class="relative card-container green-container">
            <div
              class="relative flex align-items-center"
              style={{ minWidth: "300px", minHeight: "160px" }}
            >
              <img
                className="responsive absolute"
                src={hm}
                alt="step1_1"
                width="70%"
                height="300"
              />
              <div className="grid">
                <div className="col-6 absolute text-white">
                  <h1>Relative</h1>
                </div>
                <div className="col-6">
                  <Button
                    label="Cliquze ici"
                    className="absolute right-0 mr-6"
                    style={{ height: "90px", width: "350px" }}
                    rounded
                  />
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <p className="mt-6">{parse(content.p2 ? content.p2 : "")}</p>
      </div>
      <div className="text-center mt-6">
        {content?.btnInfo?.map((ele) => {
          return <NavButtonsWrapper key={ele} content={ele} />;
        })}
        <div className="mt-6 pb-2 text-center">
          <p className="mb-4 mt-6">
            <Footer content={content} />
          </p>
        </div>
      </div>
    </>
  );
};
