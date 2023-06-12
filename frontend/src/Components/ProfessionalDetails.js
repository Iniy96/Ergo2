import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProfessionalDetailsui from '../Components/ProfessionalDetailsui';
import '../Components/css/professionaldetails.css'
import '../Components/css/adding.css'
// import Editcomponent from './Editcomponent';
import ProfessionalDetailsEdit from '../Components/Professionaldetailsedit';
import { NavbarCompensator } from './NavbarCompensator';
import { TitileAndSearch } from './TitileAndSearch';
import { TitleAndSearchCompensator } from './TitleAndSearchCompensator';

const ProfessionalDetails = () => {
  const [editIndex, setEditIndex] = useState(-1);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [newEmployee, setNewEmployee] = useState();
  const [formData, setFormData] = useState({
    name: '',
    designation: '',
    signature: '',
    rigs: '',
    jackingExperience: '',
    skiddingExperience: '',
    craneExperience: '',
    upcomingProjectDuration: '',
    availability: '',
  });
  //adding button functionality
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    // setFormData({
    //   ...formData,
    //   [event.target.name]: event.target.value,
    //   s_no:formData.length+1
    // });
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
      s_no: formData.length + 1,
    }));
  };



  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost:8002/post2', {
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
          name: '',
          designation: '',
          signature: '',
          rigs: '',
          jackingExperience: '',
          skiddingExperience: '',
          craneExperience: '',
          upcomingProjectDuration: '',
          availability: '',

        });
      })
      .catch(error => console.log(error));
  };









  const fetchProfessionalDetails = async () => {
    try {
      const response = await axios.get("http://localhost:8002/professional_details");
      setEmployees(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchProfessionalDetails();
  }, []);



  const handleEditClick = (index) => {
    setEditIndex(index);
    setNewEmployee(employees[index]);
  };

  const handleCancelEditClick = () => {
    setEditIndex(-1);
    setNewEmployee({
      S_No: '',
      name: '',
      designation: '',
      signature: '',
      rigs: '',
      jackingExperience: '',
      skiddingExperience: '',
      craneExperience: '',
      upcomingProjectDuration: '',
      availability: '',
    });
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const handleHandbookClick = () => {
    // Render a handbook of the rigs
  };

  const handleStopClose = (e) => {
    e.stopPropagation()
  }


  const handleSaveClick = () => {
    if (editIndex !== -1) {
      employees[editIndex] = newEmployee;
    } else {
      employees.push(newEmployee);
    }
    setEditIndex(-1);
    setNewEmployee({
      S_No: '',
      name: '',
      designation: '',
      signature: '',
      rigs: '',
      jackingExperience: '',
      skiddingExperience: '',
      craneExperience: '',
      upcomingProjectDuration: '',
      availability: '',
    });
  };

  const handleDeleteClick = (index) => {
    employees.splice(index, 1);
    setEditIndex(-1);
  };

  const getAvailabilityColor = (availability) => {
    if (availability >= 80) {
      return 'green';
    } else if (availability >= 50) {
      return 'orange';
    } else {
      return 'red';
    }
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
    title: "Professional Details",
    searchTerm: searchTerm,
    handleSearchChange: handleSearchChange,
    placeholder: "Search by Customer name,Rig short name ",
    addEditBtn: {
      AddBtn: handleAddNew,
      EditBtn: handleEdit
    }
  }

  return (
    <div>
      <TitileAndSearch data={titleAndSearchProp} />
      <TitleAndSearchCompensator />
      <div>

        {showForm && (
          <div className='popup-container professionalpopup' onClick={(e) => {
            e.stopPropagation()
            setShowForm(false)
          }}>
            {/* popup label is in adding.css */}
            <div className="popup pt-5" onClick={handleStopClose}>
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
                  Name:
                  <input
                    type="text"
                    name="name"
                    value={formData.Customer_Name}
                    onChange={handleInputChange}
                  />
                </label>


                <label>
                  Designation:
                  <input
                    type="text"
                    name="Designation"
                    value={formData.Designation}
                    onChange={handleInputChange}
                  />
                </label>
                <label>
                  Signature:
                  <input
                    type="text"
                    name="Signature"
                    value={formData.Signature}
                    onChange={handleInputChange}
                  />
                </label>
                <label>
                  Visas Owned:
                  <input
                    type="text"
                    name="Components"
                    value={formData.Visas_owned}
                    onChange={handleInputChange}
                  />
                </label>
                <label>
                  Rigs :
                  <input
                    type="text"
                    name="Rigs"
                    value={formData.Rigs}
                    onChange={handleInputChange}
                  />
                </label>
                <label>
                  Jacking Experience:
                  <input
                    type="text"
                    name="jackingExperience"
                    value={formData.jackingExperience}
                    onChange={handleInputChange}
                  />
                </label>
                <label>
                  Skidding Experience:
                  <input
                    type="text"
                    name="skiddingExperience"
                    value={formData.skiddingExperience}
                    onChange={handleInputChange}
                  />
                </label>
                <label>
                  Crane Experience:
                  <input
                    type="text"
                    name="craneExperience"
                    value={formData.craneExperience}
                    onChange={handleInputChange}
                  />
                </label>
                <label>
                  upcoming Project Duration :
                  <input
                    type="text"
                    name="upcomingProjectDuration"
                    value={formData.upcomingProjectDuration}
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








      <div className='professionaltable-container'>
        <table className='professionaltable'>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Name</th>
              <th>Designation</th>
              <th>Signature</th>
              <th>Visas Owned</th>
              <th>Rigs</th>
              <th>Jacking Experience</th>
              <th>Skidding Experience</th>
              <th>Crane Experience</th>
              <th>Upcoming Project Duration</th>

            </tr>
          </thead>
          <tbody>
            {employees.filter((item) => {
              if (!searchTerm) return item;
              if (item.Customer_Name?.toLowerCase().includes(searchTerm.toLowerCase()) || item.Rigs?.toLowerCase().includes(searchTerm.toLowerCase())) return item;
            }).map((employee, index) => (
              <tr key={index}>
                <td className='EditRadioBtnEnabbled'>
                  {enableEdit &&
                    <>
                      <ProfessionalDetailsEdit
                        s_no={index + 1}
                        Customer_Name={employee.Customer_Name}
                        Designation={employee.Designation}
                        Signature={employee.Signature}
                        Components={employee.Visas_owned}
                        Rigs={employee.Rigs}
                        jackingExperience={employee.jackingExperience}
                        skiddingExperience={employee.skiddingExperience}
                        craneExperience={employee.craneExperience}
                        upcomingProjectDuration={employee.upcomingProjectDuration}
                        handleEdit={handleEdit}
                      />
                    </>
                  }




                  {index + 1}</td>
                <td>{employee.Customer_Name && employee.Customer_Name || '-'}</td>
                <td>{employee.Designation && employee.Designation || '-'}</td>
                <td>{employee.Signature && employee.Signature || '-'}</td>
                <td>{employee.Visas_owned && employee.Visas_owned || '-'}</td>
                <td>{employee.Rigs && employee.Rigs || '-'}</td>
                <td>{employee.jackingExperience && employee.jackingExperience || '-'}</td>
                <td>{employee.skiddingExperience && employee.skiddingExperience || '-'}</td>
                <td>{employee.craneExperience && employee.craneExperience || '-'}</td>
                <td>{employee.upcomingProjectDuration && employee.upcomingProjectDuration || '-'}</td>
                {/* <td className={getAvailabilityColor(employee.availability)}>
                {employee.availability}% available
              </td> */}

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};


export default ProfessionalDetails;
