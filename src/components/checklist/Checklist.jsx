import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import parse from "html-react-parser";
import { Link } from "react-router-dom";
import checklistBanner from "../../utils/images/header_img/checklist.jpg";
import { checkListData } from "./checklistData";
import { Header } from "../../common/Header/Header";
import { renderButtons } from "../helper";
import { googleAnalytics } from "../../configurations/googleAnalyticsConfig";
import { Footer } from "../../common/footer/Footer";

const Checklist = () => {
  const language = useSelector((state) => state.language.language);
  const [content, setContent] = useState("");

  useEffect(() => {
    googleAnalytics();
  }, []);

  useEffect(() => {
    if (language.toLowerCase() === "english") {
      setContent(checkListData.english);
    } else if (language.toLowerCase() === "french") {
      setContent(checkListData.french);
    }
  }, [language]);

  const listBodyTemplate = (arr) => {
    return (
      <>
        <p>
          <b>{arr.description}</b>
        </p>
        <ul>
          {arr?.bullet_list?.map((ele) => {
            return <li key={ele}>{parse(ele)}</li>;
          })}
        </ul>
      </>
    );
  };

  return (
    <>
      <Header
        img={checklistBanner}
        title={content.title}
        badgeValue={content.badgeValue}
      />
      <div className="ml-2 mr-2 md:ml-4 md:mr-4 lg:ml-8 lg:mr-8">
        {renderButtons(content?.btnInfo, false)}
       
        <div className="mt-2">{content.subtitle} <Link to="/step1">{content.subtitle_link}</Link>  {content.subtitle_e} </div>
        <div className="mt-2">
          <DataTable
            className="mt-4"
            value={content.arr}
            showGridlines
            tableStyle={{ minWidth: "50rem" }}
          >
            <Column field="id" header=""></Column>
            <Column
              field="description"
              header={content.tableHeader}
              body={listBodyTemplate}
            ></Column>
          </DataTable>

          <DataTable
            className="mt-6"
            value={content.arr2}
            showGridlines
            tableStyle={{ minWidth: "50rem" }}
          >
            <Column field="id" header=""></Column>
            <Column
              field="description"
              header={content.tableHeader_2}
              body={listBodyTemplate}
            ></Column>
          </DataTable>
        </div>
       
        <div className="mt-6 pb-2 text-center">{content.footer} <Footer content = {content}/></div>
        
      </div>
    </>
  );
};

export default Checklist;
