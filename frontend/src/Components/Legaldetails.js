import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../Components/css/adding.css"
import "../Components/css/legaldetails.css"
import EditLegalDetails from '../Components/Editlegaldetails';
import { NavbarCompensator } from './NavbarCompensator';
import { TitileAndSearch } from './TitileAndSearch';
import { TitleAndSearchCompensator } from './TitleAndSearchCompensator';
const LegalDetails = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedRigId, setSelectedRigId] = useState(null);
  const [showForm, setShowForm] = useState(false);
  // const [formData, setFormData] = useState()
  const [formData, setFormData] = useState({
    s_no: '',
    country: '',
    File_name_for_legal_requirements: '',
    Documents: ''
  });
  //adding button functionality
  const handleInputChange = (event) => {

    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
      s_no: formData.length + 1
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost:8002/post1', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(response => response.json())
      .then(data => {
        setShowForm(true)
        console.log(data);
        setFormData({
          s_no: '',
          country: '',
          File_name_for_legal_requirements: '',
          Documents: ''

        });
      })
      .catch(error => console.log(error));
  };

  useEffect(() => {
    async function fetchLegalDetails() {
      try {
        const response = await axios.get("http://localhost:8002/legal_details");
        setSearchResults(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchLegalDetails();
  }, []);

  const handleEditClick = () => {

  }

  const handleListClick = () => {
    // Render a list view of the rigs
  };

  const handleMapViewClick = () => {
    // Render a map view of the rigs
  };

  const handleHandbookClick = () => {
    // Render a handbook of the rigs
  };

  const handleDetailsClick = (rig) => {
    console.log(rig);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  //edit functionality
  const [enableEdit, setEnableEdit] = useState(false)

  //Buton Functions for TitleAndSearch component
  const handleEdit = () => {
    setEnableEdit(pre => !pre)
  }
  const handleAddNew = () => {
    setShowForm(pre => !pre)
  }
  //data sent to TitleAndSearch component as prop 
  const titleAndSearchProp = {
    title: "Legal Details",
    searchTerm: searchTerm,
    handleSearchChange: handleSearchChange,
    placeholder: "Search by Customer name,Rig short name ",
    addEditBtn: {
      AddBtn: handleAddNew,
      EditBtn: handleEdit
    }
  }

  return (
    <>
      <TitileAndSearch data={titleAndSearchProp} />
      <TitleAndSearchCompensator />
      <div className='legaldetailscontent'>
        <div>

          {showForm && (
            <div className='popup-container professionalpopup legalpopup' onClick={() => setShowForm(false)}>
              <div className="popup pt-5">
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
                    Country:
                    <input
                      type="text"
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                    />
                  </label>
                  <label>
                    File_name_for_legal_requirements :
                    <input
                      type="text"
                      name="File_name_for_legal_requirements"
                      value={formData.File_name_for_legal_requirements}
                      onChange={handleInputChange}
                    />
                  </label>
                  <label>
                    Documents :
                    <input
                      type="text"
                      name="Documents"
                      value={formData.Documents}
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

        <table className='tablecontent'>
          <thead>
            <tr>

              <th>S. No</th>
              <th>Country</th>
              <th>File_name_for_legal_requirements </th>
              <th>Documents</th>

            </tr>
          </thead>
          <tbody>
            {searchResults.filter((item) => {
              if (!searchTerm) return item;
              if (item.country?.toLowerCase().includes(searchTerm.toLowerCase())) return item;

            }).map((legal_details, index) => (
              <tr key={index}>
                <td className='legalEditRadioBtnEnabbled'>
                  {enableEdit &&
                    <>
                      <EditLegalDetails
                        s_no={index + 1}
                        country={legal_details.country}
                        File_name_for_legal_requirements={legal_details.File_name_for_legal_requirements}
                        Documents={legal_details.Documents}
                        handleEdit={handleEdit}

                      />
                    </>
                  }

                  {index + 1}</td>
                <td>{legal_details.country}</td>
                <td>{legal_details.File_name_for_legal_requirements}</td>
                <td> <a class="btn" href="https://www.shelfdrilling.com/wp-content/uploads/2021/01/Shelf-Drilling_Compact-Driller_Spec-Sheet-Jan-2021.pdf" target="newtab" title="View documents">View Document<img src="https://seekicon.com/free-icon-download/box-arrow-up-right_1.svg" height="15" width="49" /> </a></td>


              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default LegalDetails;
