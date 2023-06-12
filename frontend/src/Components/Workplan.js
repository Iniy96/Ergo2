import React, { useState } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import axios from 'axios';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import "../Components/css/workplan.css"


function Workplan() {
  const [formData, setFormData] = useState({
    client: 'Customer_Name',
    Rig_Name: 'Rig_Name',
    Sales_Order_NO: 'Sales_Order_NO',
    Rig_Location: 'Rig_Location',
    ProjectName: 'Service_Component',
    scopeofwork:'Service_Component',
    TeamMembers:'Supervisor1',
    MobilisationDetails:'Technician1',
    ProjectDuration:'Po_Days',
    JobDetails:'Service_Component',
    EntryPermit:'Rig_Location'
    // Add other form fields here
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const [projectList, setProjectList] = useState([]);
  const { id } = useParams()

  useEffect(() => {
    const fetchProject = async () => {
      const res = await axios.get('http://localhost:8002/project_details');
      const filter = res.data.data.filter(el => el.Sales_Order_NO === id)
      setProjectList(filter);
    };


    fetchProject();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call your API to post the form data
    // Once the API call is successful, proceed to generate the PDF
    generatePDF(formData);
  };

  const generatePDF = (formData) => {
	const input = document.getElementById('workplan');
	const inputHeight = input.clientHeight;
	const inputWidth = input.clientWidth;
	html2canvas(input, { height: inputHeight, width: inputWidth }).then((canvas) => {
	  const imgData = canvas.toDataURL('image/png');
	  const pdf = new jsPDF('p', 'mm', 'a4'); // Set PDF document size to A4
	  const pdfWidth = pdf.internal.pageSize.getWidth();
	  const pdfHeight = pdf.internal.pageSize.getHeight();
	  pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight); // Adjust image position and size to fit the PDF
	  // Save or preview the PDF
	  pdf.save('workplan.pdf');
	});
  };


  
  
  return (
    <div className='workplancontainer'>
      <div className="col col-lg-6 mx-auto d-flex justify-content-center" style={{ marginTop: '33px' }}>
        <form id="workplan">
          <table className="table table-responsive table-bordered mx-auto m-0">
            <thead>
              <tr>
                <th className="text-center table-light" colSpan="2">Work Plan</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className="table-dark"  scope="row">Head</th>
                <td className="table-dark">Description</td>
              </tr>
              <tr>
                <th className="table-light" scope="row">Client</th>
                <td className="table-light">  {projectList[0]?.Customer_Name} 
        </td>
              </tr>
              <tr>
                <th className="table-light" scope="row">Rig Name</th>
                <td className="table-light">{projectList[0]?.Rig_Name} </td>
              </tr>
              <tr>
                <th className="table-light" scope="row">Sales Order No</th>
                <td className="table-light">{ projectList[0]?.Sales_Order_NO} </td>
              </tr>
              <tr>
                <th className="table-light" scope="row">Rig Location</th>
                <td className="table-light"> { projectList[0]?.Rig_Location} </td>
              </tr>
              <tr>
                <th className="table-light" scope="row">Project Name</th>
                <td className="table-light">{projectList[0]?.Service_Component} </td>
              </tr>
              {/* Add other table rows */}
			  <tr>
					<th className="table-light"scope="row">Scope of Work</th>
					<td className="table-light">{projectList[0]?.Service_Component} </td>
				</tr>
				<tr>
					<th className="table-light"scope="row">Team Members</th>
					<td className="table-light">{projectList[0]?.Supervisor1}</td>
				</tr>
				<tr>
					<th className="table-light"scope="row">Mobilisation Details</th>
					<td className="table-light" >{projectList[0]?.Technician1} </td>
				</tr>
				<tr>
					<th className="table-light"scope="row">Project Duration</th>
					<td className="table-light">Estimated {projectList[0]?.Po_Days}days</td>
				</tr>
				<tr>
					<th className="table-light" scope="row">Job Details</th>
					<td className="table-light" >The scope is,{projectList[0]?.Service_Component} </td>
				</tr>
				<tr>
					<th className="table-light"scope="row">Final Deliverable</th>
					<td className="table-light">1. Daily Report &amp; Final Report<br/>
		           2. Status Sheet<br/>
		                 3. Feedback form</td>
				</tr>
				<tr>
					<th className="table-light"scope="row">Tools &amp; Consumables</th>
					<td className="table-light">Available at rig</td>
				</tr>
				<tr>
					<th className="table-light"scope="row">Reporting</th>
					<td className="table-light">1. Daily Report to be sent to central team every evening<br/>
		2. Final report to be prepared .<br/>
		3. Parts list to be made.</td>
				</tr>
				<tr>
					<th className="table-light" scope="row">Contact Point</th>
					<td className="table-light">1st Contact: Operation Team (projects@ergontec.com, +971527256908) <br/>2nd Contact: Technical Team (operation@ergontec.com, +971521988815)<br/> 3rd Contact: Mathew (mbm@ergontec.com, +971585039099)</td>
				</tr>
				<tr>
					<th className="table-light"scope="row">Essential Documents Checklist</th>
					<td className="table-light">1. Passport<br/>
		2. BOSIET<br/>
		3. Medical (Health) Certificate<br/>
		4. National identity Card (or Driving License)<br/>
		5. Valid PCR (Covid) Test Report<br/>
		6. Entry Permit for {projectList[0]?.Rig_Location}</td>
				</tr>
				<tr>
					<th className="table-light" scope="row">Points to Note</th>
					<td className="table-light">1. Please ensure that the Ergon Reporting formats are followed for the task.<br/>
		2. Please ensure that all mandatory HSE documents are filled in correctly and returned after the completion of the job<br/>
		3. Please ensure that daily progress reports are sent into the central team on a regular basis<br/>
		4. Please ensure that all DPR’s and timesheets are signed and stamped by the
		client on completion of the task.<br/>
		5. In case of any variation in the Scope of Work defined above, please inform the central team.</td>
				</tr>
        </tbody>
          </table>
              <div className='bg-white'>
              
                  <div >
                    <h6  >Prepared By</h6>
                    <h6  >Signed By</h6>
                  </div>
                  <div >
                    <h6  >Shubham Mehta</h6>
                    <h6></h6>
                  </div>
                  <div>
                    <div  >TSD-OPS-FOR-009-19, Rev.01</div>
                    <div >30 April 2022</div>
                  </div>
                  <div >6</div>
              </div>
        </form>
      </div> 
      <a class="opennewtabbtn" href="/workplan" target="_blank" title="Open in New Tab" >Open in New Tab<img src="https://seekicon.com/free-icon-download/box-arrow-up-right_1.svg" height="15" width="49"/> </a>
              
              <button  type="submit" class="Downloadpdfbtn" onClick={handleSubmit} style={{bgcolor: '#E36662'}}>Download Pdf</button>
    </div>
  );
}

export default Workplan;
