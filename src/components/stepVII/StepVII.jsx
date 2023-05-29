import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Header } from "../../common/Header/Header";
import checklistBanner from "../../utils/images/header_img/checklist.jpg";
import { stepVIIData } from "./stepVIIData";
import { renderButtons } from "../helper";
import { googleAnalytics } from "../../configurations/googleAnalyticsConfig";
import { Footer } from "../../common/footer/Footer";
import parse from "html-react-parser";

const StepVII = () => {
  const language = useSelector((state) => state.language.language);
  const [content, setContent] = useState("");

  useEffect(() => {
    googleAnalytics();
   }, []);

  useEffect(()=>{
    if(language.toLowerCase() === 'english'){
    setContent(stepVIIData.english)
    }
    else if(language.toLowerCase()  === 'french'){
      setContent(stepVIIData.french)
    }
      }, [language])

  return (
    <>
      <Header img={checklistBanner} title={content.header} badgeValue={content.badgeValue}/>
      <div className="ml-2 mr-2 md:ml-4 md:mr-4 lg:ml-8 lg:mr-8">
        {renderButtons(content?.btnInfo, false)}
        <h1 className="text-center">{content.title}</h1>
        <p>{content.p1}</p>
        <ol>
       {
           content?.number_bullets?.map((ele)=>{
                return(<li key={ele}>{parse(ele ? ele : "")}</li>);
            })
        }
       </ol>
<p>{content.p2}</p>
<p>{content.p3}</p>
<iframe width="100%" height="480px" src="https://forms.office.com/r/2mbibK4exB?embed=true" frameborder="0" marginwidth="0" marginheight="0" style={{border: "none", maxWidth:"100%", maxHeight:"100vh"}} allowfullscreen webkitallowfullscreen mozallowfullscreen msallowfullscreen> </iframe>
<div className="mt-6 text-center">
        <Footer content = {content}/>
        </div>
        {renderButtons(content?.btnInfo, false)}
      </div>
    </>
  );
};
export default StepVII;
