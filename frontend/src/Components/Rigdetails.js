import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Components/css/rigdetails.css'
import "../Components/css/adding.css"
import Slider from '../Components/slider';
import Editcomponent from './Editcomponent';
import upwardarrowbox from '../Components/upwardarrowbox.png'
import ErgonProjectsMap from "../Components/css/image/ErgonProjectsMap.jpg"
import { Link } from 'react-router-dom';
import UploadDocument from './Uploaddocument';
import CombinedRigDetails from "../Components/CombinedRigDetails.pdf"
import { Document, Page } from '@react-pdf/renderer';
import { NavbarCompensator } from './NavbarCompensator';
import { TitileAndSearch } from './TitileAndSearch';
import { TitleAndSearchCompensator } from './TitleAndSearchCompensator';
import Showmap from './Showmap';
import { ShowHandbook } from './ShowHandbook';
import convertToBase64 from '../helpers/ConvertToBase64';

const Rigdetails = () => {
  //handling button group (List, Map,Handbook) buton states
  const [showListView, setshowListView] = useState(true)
  const [showMapView, setshowMapView] = useState(false);
  const [showHandbookView, setshowHandbookView] = useState(false);

  const [ToggleBtnGroupColorRed, setToggleBtnGroupColorRed] = useState("List")
  //******************************************************** */
  const [showImage, setShowImage] = useState(false);
  const [searchTerm, setSearchTerm] = useState(""); //stores and updates the value of search filter form the TitleAndSearch Component
  const [searchResults, setSearchResults] = useState([]);
  const [selectedRig, setSelectedRig] = useState(null);
  const [selectedRigId, setSelectedRigId] = useState(null);
  const [showForm, setShowForm] = useState(false); //handling popup
  //edition functionality
  const [enableEdit, setEnableEdit] = useState(false)
  // const [formData, setFormData] = useState()
  const [formData, setFormData] = useState({
    s_no: "",
    rig_name: "",
    short_name: "",
    customer_name: "",
    details: "",
    design: "",
    location: "",
    hull_no: "",
    design_2: "",
    new_group: ""
  });

  //adding button functionality
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
      s_no: formData.length + 1,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    /* fetch('http://localhost:8002/post', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(response => response.json())
      .then(data => {
        setShowForm(false)
        console.log(data);
        setFormData({
          s_no: '',
          rig_name: '',
          short_name: '',
          customer_name: '',
          details: '',
          design: '',
          location: '',
          hull_no: '',
          design_2: '',
          new_group: ''
        });
      })
      .catch(error => console.log(error)); */
  };

  useEffect(() => {
    async function fetchRigDetails() {
      try {
        const response = await axios.get("http://localhost:8002/rig_details");
        setSearchResults(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchRigDetails();
  }, []);

  const handleStopClose = (e) => {
    e.stopPropagation()
  }




  //Buton Functions for TitleAndSearch component
  const handleEdit = () => {
    setEnableEdit(pre => !pre)
  }
  const handleAddNew = () => {
    setShowForm(pre => !pre)
  }
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
  //data sent to TitleAndSearch component as prop 
  const titleAndSearchProp = {
    title: "Rig Details",
    searchTerm: searchTerm,
    handleSearchChange: handleSearchChange,
    placeholder: "Search by Location and Rig short name ",
    addEditBtn: {
      AddBtn: handleAddNew,
      EditBtn: handleEdit
    }
  }


  //******************handle List,Map ,Handbook views */
 
  const handleListViewBtn = () => {
    setshowListView(true)
    setshowMapView(false)
    setshowHandbookView(false)
    setToggleBtnGroupColorRed("List")
  }
  const handleMapViewBtn = () => {
    setshowListView(false)
    setshowMapView(true)
    setshowHandbookView(false)
    setToggleBtnGroupColorRed("Map")
  }
  const handleHandBookViewBtn = () => {
    setshowListView(false)
    setshowMapView(false)
    setshowHandbookView(true)
    setToggleBtnGroupColorRed("HandBook")
  }

  const handleFileUpload = async (e) => {
    const base64 = await convertToBase64(e.target.files[0]);
    setFormData((prevState) => ({
      ...prevState,
      details: e.target.files[0],
      s_no: formData.length + 1,
    }));
  }

  return (

    <>
      <TitileAndSearch data={titleAndSearchProp} />
      <TitleAndSearchCompensator />

      <div className='bg-white position-fixed pb-1 pt-1 ps-3 w-100' >
        <div class="btn-group" role="group">
          <button type="button" class={`ToggleBtnGroupColor ${ToggleBtnGroupColorRed ==="List"?"ToggleBtnGroupColorRed":""}`} onClick={handleListViewBtn}>List</button>
          <button type="button" class={`ToggleBtnGroupColor ${ToggleBtnGroupColorRed ==="Map"?"ToggleBtnGroupColorRed":""}`} onClick={handleMapViewBtn}>Map</button>
          <button type="button" class={`ToggleBtnGroupColor ${ToggleBtnGroupColorRed ==="HandBook"?"ToggleBtnGroupColorRed":""}`}  onClick={handleHandBookViewBtn}>Handbook</button>
        </div>
      </div>


      <div style={{ height: "3rem" }}></div>
      <div>
        {/**new add */}
        {showForm && (
          <div className='popup-container professionalpopup rigpopup' onClick={(e) => {
            e.stopPropagation()
            setShowForm(false)
          }} style={{ zIndex: 1000 }}>

            <div className="popup  pt-5 " onClick={handleStopClose}>
              <form onSubmit={handleSubmit}>
                {/* <label>
              S.NO
              <input
                type="text"
                name="s_no"
                value={formData.rig_name}
                onChange={handleInputChange}
              />
            </label> */}
                <label>
                  Rig Name:
                  <input
                    type="text"
                    name="rig_name"
                    value={formData.rig_name}
                    onChange={handleInputChange}
                  />
                </label>
                <label>
                  Short Name:
                  <input
                    type="text"
                    name="short_name"
                    value={formData.short_name}
                    onChange={handleInputChange}
                  />
                </label>
                <label>
                  Customer Name:
                  <input
                    type="text"
                    name="customer_name"
                    value={formData.customer_name}
                    onChange={handleInputChange}
                  />
                </label>
                <label>
                  Details:<br />(Upload Document)
                  {/* <input
                type="text"
                name="details"
                value={formData.details}
                onChange={handleInputChange}
              /> */}
                  <div className='rigaddupload' style={{ marginLeft: '30px' }}>
                    < input type='file' onChange={handleFileUpload} style={{ paddingRight: "10px" }} />
                  </div>
                </label>
                <label>
                  Design:
                  <input
                    type="text"
                    name="design"
                    value={formData.design}
                    onChange={handleInputChange}
                  />
                </label>
                <label>
                  Location:
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                  />
                </label>
                <label>
                  Hull Number:
                  <input
                    type="text"
                    name="hull_no"
                    value={formData.hull_no}
                    onChange={handleInputChange}
                  />
                </label>
                <label>
                  Design 2:
                  <input
                    type="text"
                    name="design_2"
                    value={formData.design_2}
                    onChange={handleInputChange}
                  />
                </label>
                <label>
                  New Group:
                  <input
                    type="text"
                    name="new_group"
                    value={formData.new_group}
                    onChange={handleInputChange}
                  />
                </label>
                <div className='d-flex justify-content-evenly mt-5'>
                  <button type="submit" className='btn btn-success'>Submit</button>
                  <button onClick={() => setShowForm(false)} className='btn btn-danger'>Cancel</button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
      <div className='rigtablecontainer '>
        {
          showListView && (
            <div className='rigtable-table-fix-container'>
              <table >
                <thead>
                  <tr>
                    {/* <th>Select</th> */}
                    <th>S. No</th>
                    <th>Rig Name</th>
                    <th>Short name</th>
                    <th>Customer Name</th>
                    <th>Details</th>
                    <th>Design</th>
                    <th>Location</th>
                    <th>Hull no.</th>
                    <th>Class</th>
                  </tr>
                </thead>
                <tbody>
                  {searchResults.filter((item) => {
                    if (!searchTerm) return item;
                    if (item.location?.toLowerCase().includes(searchTerm.toLowerCase()) || item.short_name
                      ?.toLowerCase().includes(searchTerm.toLowerCase())) return item;
                  }).map((rig, index) => (

                    <tr key={rig.id}>
                      {/* <td>
                <input
                  type="radio"
                  name="rig"
                  checked={selectedRigId === rig.id}
                  onChange={() => setSelectedRigId(rig.id)}
                />
              </td> */}
                      <td className='EditRadioBtnEnabbled'>
                        {enableEdit &&
                          <>
                            <Editcomponent
                              s_no={index + 1}
                              rig_name={rig.rig_name}
                              short_name={rig.short_name}
                              customer_name={rig.customer_name}
                              details={rig.details}
                              design={rig.design}
                              location={rig.location}
                              hull_no={rig.hull_no}
                              design_2={rig.design_2}
                              new_group={rig.new_group}
                              handleEdit={handleEdit}

                            />
                          </>
                        }

                        {index + 1}
                      </td>
                      <td>{rig.rig_name}</td>
                      <td>{rig.short_name}</td>
                      <td>{rig.customer_name}</td>
                      <td>
                        {/* <button onClick={() => handleDetailsClick(rig)}>
                  View Details
                </button> */}
                        <a class="btn" href="https://www.shelfdrilling.com/wp-content/uploads/2021/01/Shelf-Drilling_Compact-Driller_Spec-Sheet-Jan-2021.pdf" target="_newtab" title="View details">View details<img src="https://seekicon.com/free-icon-download/box-arrow-up-right_1.svg" height="15" width="49" /> </a>
                      </td>
                      <td>{rig.design}</td>
                      <td>{rig.location}</td>
                      <td>{rig.hull_no}</td>
                      <td>{rig.new_group}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        {
          showMapView && <Showmap />
        }
        {
          showHandbookView && <ShowHandbook />
        }
       
      </div>

    </>

  );
};

export default Rigdetails;
