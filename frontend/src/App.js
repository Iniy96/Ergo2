import React, { useState, useEffect } from 'react'

import './App.css';

import Navbar from './Components/Navbar';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import DailyTracker from './Components/DailyTracker';
import SurveySchedule from './Components/SurveySchedule';
import ReferenceDetails from './Components/ReferenceDetails';
import LegalDetails from './Components/Legaldetails';
import ProfessionalDetails from './Components/ProfessionalDetails';
import Templates from './Components/Templates';
import Projects from './Components/Projects';
import Documents from './Components/Documents';
import Mobilizations from './Components/Mobilizations';
import Signout from './Components/Signout';
import RigDetails from './Components/Rigdetails';
import LoginPage from './Components/loginpage'
import ToolsRegister from './Components/Toolsregister';
import ProjectDetails from './Components/Projects';
import ProjectListingPage from './Components/Projectlistingpage';
import CreateProject from './Components/Createproject';
import ProgressSteps from './Components/Projectreport';
import Dosplan from './Components/Dosplan';
import Workplan from './Components/Workplan';
import ShowMap from './Components/Showmap';
import HandBook from './Components/Handbook';
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const ProjectReport=()=>{
    
  }
  useEffect(() => {
    setIsLoggedIn(sessionStorage.getItem("isLoggedIn"));
  }, [isLoggedIn]);
  return (
    <div>
       <div className="bg-gray-900 flex flex-col gap-10 h-screen items-center justify-center">
      <ProjectReport/>
    </div>
  

       <BrowserRouter>
       { isLoggedIn   && <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>}
      
        <Routes>
          <Route path="/" element={<LoginPage/>}/>
          <Route path="/dashboard"  element={<Dashboard/>}/>
          <Route path="/dailytracker"  element={<DailyTracker/>}/>
          <Route path="/surveyschedule"  element={<SurveySchedule/>}/>
          <Route path="/referencedetails"  element={<ReferenceDetails/>}/>
          <Route path="/rigdetails" element={<RigDetails/>} />
          <Route path="/Showmap" element={<ShowMap/>} />
          <Route path="/handbook" element={<HandBook/>}/>
          <Route path="/legaldetails" element={<LegalDetails/>} />
          <Route path="/toolsregister" element={<ToolsRegister/>} />
          <Route path="/professionaldetails"  element={<ProfessionalDetails/>}/>
          <Route path="/templates" element={<Templates/>}/>
         
          <Route path="/projects"  element={<ProjectListingPage/>}/>
          <Route path="/createproject"  element={<CreateProject/>}/>
          <Route path="/projectreport/:id" element={<ProgressSteps/>}/>
          <Route path="/dosplan" element={<Dosplan/>}/>
          <Route path="/workplan" element={<Workplan/>}/>
          

          
         
          <Route path="/createnew"  element={<ProjectDetails/>}/>
          <Route path="/documents"  element={<Documents/>}/>
          <Route path="/mobilizations"  element={<Mobilizations/>}/>
          <Route path="/signout"  element={<Signout/>}/>
        </Routes>
       </BrowserRouter>
    </div>
  );
}


export default App;
