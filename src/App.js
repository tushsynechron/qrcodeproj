import React, {useEffect} from "react";
import "primereact/resources/themes/lara-light-indigo/theme.css"; // This imports theme.css from primereact themes module
import "primereact/resources/primereact.min.css";
import "primeflex/primeflex.css";
import 'primeicons/primeicons.css';
import "./App.css";
import "./utils/fonts/trade-gothic-bold-condensed-20.ttf"
import { BrowserRouter, Routes, Route } from "react-router-dom";


import { Navigationbar } from "./common/Navigationbar/Navigationbar";
import Checklist from "./components/checklist/Checklist";
import Step1 from "./components/stepI/Step1";
import StepII from "./components/stepII/StepII";
import { Home } from "./components/Home";
import { StepThreeForm } from "./components/stepIII/StepThreeForm";
import StepIV from "./components/stepIV/StepIV";
import StepFive from "./components/stepV/StepFive";
import StepVI from "./components/stepVI/StepVI";
import StepVII from "./components/stepVII/StepVII";
import { googleAnalytics } from "./configurations/googleAnalyticsConfig";



function App() {

  useEffect(() => {
   googleAnalytics();
  }, []);
  return (
    <>
      <div style={{ backgroundColor: "#eff6fc" }}>
      <BrowserRouter>
        <Navigationbar/>
        
          <Routes>
            <Route exact path="" Component={Home} />
            <Route path="/checklist" Component={Checklist} />
            <Route path="/step1" Component={Step1} />
            <Route path="/step2" Component={StepII} />
            <Route path="/step3" Component={StepThreeForm} />
            <Route path="/step4" Component={StepIV} />
            <Route path="/step5" Component={StepFive} />
            <Route path="/step6" Component={StepVI} />
            <Route path="/step7" Component={StepVII} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
