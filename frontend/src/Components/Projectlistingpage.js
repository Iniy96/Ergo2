import React, { useEffect, useState } from "react";
import '../Components/css/projectlistingpage.css'
import plus from '../Components/plus.png'
import sort from '../Components/sort.png'
import { Link, useNavigate } from "react-router-dom"
import axios from "axios";
import Stepper from "../Components/Projectreport";
import ProgressSteps from "../Components/Projectreport";
import { NavbarCompensator } from "./NavbarCompensator";
import { TitileAndSearch } from "./TitileAndSearch";
import { TitleAndSearchCompensator } from "./TitleAndSearchCompensator";

const ProjectListingPage = () => {
  const navigate = useNavigate()
  const [projectList, setProjectList] = useState([])

  useEffect(() => {
    const fetchProject = async () => {
      const res = await axios.get("http://localhost:8002/project_details")
      setProjectList(res.data.data)
    }
    fetchProject()
  }, [])

  //Buton Functions for TitleAndSearch component
  const handleFilter = () => {

  }
  const handleCreateNew = () => {
    navigate("/createnew")
  }
  //data sent to TitleAndSearch component as prop 
  const titleAndSearchProp = {
    title: "Projects",
    searchTerm: "",
    handleSearchChange: "",
    placeholder: "Search by Customer name, Rig short name",
    filterCreteNewBtn: {
      FilterBtn: handleFilter,
      CreateNewBtn: handleCreateNew
    }
  }

  return (
    <>
      <TitileAndSearch data={titleAndSearchProp} />
      <TitleAndSearchCompensator />
      <div >
        {
          projectList.map(el => {
            console.log("el",el);
            return (
              <Link to={"/projectreport/" + el.Sales_Order_NO} className="link">
                <div className="projectList">
                  <div className="d-flex">

                    <h5 className="">SO : <span>{el.Sales_Order_NO}</span></h5>
                    <div className="mx-4">|</div>
                    <h5 >PO : <span>{el.Po_No}</span></h5>
                    {/* <button>SEction</button> */}
                  </div>
                  <div className="content">
                    <div className="">{el.Rig_Name}</div>
                    <div className="">{el.Rig_Location}</div>
                    <div className="">{el.Service_Component}</div>
                    {/* <div className="">{el.Po_No}</div> */}
                    <div className="">Team : 3*</div>
                  </div>
                </div>
              </Link>
            )
          })
        }
      </div>
    </>
  );
};

export default ProjectListingPage;
