import React, { useState } from 'react'
import '../Components/css/editcomponent.css'
import axios from 'axios';
import ProfessionalDetails from './ProfessionalDetails';

const ProfessionalDetailsEdit = ({
  // s_no,
  Customer_Name,
  Designation,
  Signature,
  Components,
  Rigs,
  jackingExperience,
  skiddingExperience,
  craneExperience,
  upcomingProjectDuration,
  availability,
  handleEdit
}) => {
  const [checked, setChecked] = useState(false)
  const [formData, setFormData] = useState({
    // S_No:S_No,
    Customer_Name: Customer_Name,
    Designation: Designation,
    Signature: Signature,
    Components: Components,
    Rigs: Rigs,
    jackingExperience: jackingExperience,
    skiddingExperience: skiddingExperience,
    craneExperience: craneExperience,
    upcomingProjectDuration: upcomingProjectDuration
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleStopClose = (e) => {
    e.stopPropagation()
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await axios.put("http://localhost:8002/post/" + formData.s_no, formData)
    const data = await res.json()
    console.log(data)
  }

  const handleCancel = ()=>{
    setChecked(false) 
    handleEdit()
  }

  return (
    <div>
      <div className='editRadioButtonProfessional'>
        <input
          type="radio"
          name="rig"
          // checked={selectedRigId === rig.id}
          onClick={() => setChecked(true)}
        />
      </div>
      {
        checked &&
        <>
          <div className='popup-container professionalpopup  ' onClick={(e) => {
            e.stopPropagation()
            setChecked(false)
            handleEdit()
          }}>
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
                    name="Customer_Name"
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
                    value={formData.Components}
                    onChange={handleInputChange}
                  />
                </label>
                <label>
                  Rigs:
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
                  Upcoming Project Duration(Rig name):

                  <input
                    type="text"
                    name="upcomingProjectDuration"
                    value={formData.upcomingProjectDuration}
                    onChange={handleInputChange}
                  />
                </label>
                <div className='d-flex justify-content-evenly mt-5'>
                  <button type="submit" className='btn btn-success'>Submit</button>
                  <button onClick={handleCancel} className='btn btn-danger'>Cancel</button>
                </div>
              </form>
            </div>
          </div>
        </>
      }


    </div>
  )
}

export default ProfessionalDetailsEdit;