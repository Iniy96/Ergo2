import { colors } from '@mui/material';
import React from 'react';
import "../Components/css/TSDstyle.css"
import axios from 'axios';
import { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';
import Erogonlogo from '../../src/Components/Erogonlogo.png'
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const Dosplan = () => {
  const styles = {
    color: 'red',
    fontSize: '16px',
    fontWeight: 'bold'
  };

    // const tableStyles = {
    //     border: '1px solid black',
    //     borderCollapse: 'collapse',
    //     // width: '100%',
    //   };
    
    //   const thStyles = {
    //     fontWeight: 'bold',
    //     textAlign: 'left',
    //     padding: '40px',
    //     backgroundColor: 'white',
    //     margintop:'10px',
    //   };
    
    //   const tdStyles = {
    //     border: '1px solid black',
    //     // padding: '5px',
    //   };
    const [formData, setFormData] = useState({
      // Initial form data here
      Rig_Name: '',
      Sales_Order_NO: '',
      Rig_Location: ''
    });

    const [projectList, setProjectList] = useState([]);
    const { id } = useParams()
    console.log(projectList);
    
    useEffect(() => {
      const fetchProject = async () => {
        try {
          const res = await axios.get('http://localhost:8002/project_details');
          const filter = res.data.data.filter(el => el.Sales_Order_NO === id);
          setProjectList(filter);
    
          // Update the formData state with the fetched project details
          if (filter.length > 0) {
            const project = filter[0];
            setFormData(prevFormData => ({
              ...prevFormData,
              Rig_Name: project.Rig_Name,
              Sales_Order_NO: project.Sales_Order_NO,
              Rig_Location: project.Rig_Location,
              // Add other form fields here
            }));
          }
        } catch (error) {
          console.error('Error fetching project details:', error);
        }
      };
    
      fetchProject();
    }, [id]);
    
    useEffect(() => {
      console.log('Project List:', projectList);
    }, [projectList]);
    
    const handleSubmit = async (e) => {
      e.preventDefault();
      // Call your API to post the form data
      // Once the API call is successful, proceed to generate the PDF
      await generatePDF(formData);
    };
    
    const generatePDF = async (formData) => {
      try {
        const input = document.getElementById('dosplan');
        if (!input) {
          throw new Error('Element with ID "dosplan" not found');
        }
    
        const canvas = await html2canvas(input);
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();
        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save('dosplan.pdf');
      } catch (error) {
        console.error('Error generating PDF:', error);
      }
    };
    
   
  return (
    <div className='dosplanContainer'>
  
  <table >
    <thead>
      <tr>
        <th colSpan={2} rowSpan={7}>
          <img src={Erogonlogo} style={{height:"85px",width:'150px'}}/>
        </th>
        <th
          colSpan={3}
          rowSpan={7}
          style={{ fontSize: 20, fontWeight: "bold" }}
        >
          Ergon Technologies
          <br />
          Design and Development Plan
        </th>
        <td>Record No.</td>
        <td>
        {projectList[0]?.Sales_Order_NO}
        </td>
      </tr>
      <tr>
        <td>Revision No.</td>
        <td>0</td>
      </tr>
      <tr>
        <td>Date</td>
        <td>
        {projectList[0]?.Document_Date}
        </td>
      </tr>
      <tr>
        <td>Sales Order No.</td>
        <td>
        {projectList[0]?.Sales_Order_NO}
        </td>
      </tr>
      <tr>
        <td>Customer Name</td>
        <td>
        {projectList[0]?.Customer_Name}
        </td>
      </tr>
      <tr>
        <td>Description</td>
        <td>
        {projectList[0]?.Service_Component}
        </td>
      </tr>
      <tr>
        <td>Specification</td>
        <td>
        {projectList[0]?.Rig_Type}
        </td>
      </tr>
      <tr>
        <th>S. No.</th>
        <th>Process to be carried out</th>
        <th>Document (Reference) Number</th>
        <th>Responsible for review</th>
        <th>Planned Completion Date</th>
        <th>Recommendation / Correction (if any)</th>
        <th>Status</th>
      </tr>
      <tr>
        <th colSpan={2}>I. Design Input</th>
        <th />
        <th />
        <th />
        <th />
        <th />
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Refer OEM Manual/ Criteria</td>
        <td>
          Refer OEM Manual/ Criteria
          <br />
          for various services/ Scope
          <br />
          of work from customer/
          <br />
          Email from customer
          <br />
          –Scope of work to also
          <br />
          include if it is an inspection
          <br />
          or an overhaul
        </td>
        <td>
          The scope of work was reviewed
          <br />
          by the Operations manager and
          <br />
          approved by CEO
        </td>
        <td>
        {projectList[0]?.Document_Date}
        </td>
        <td>
          If there is a change
          <br />
          in scope of work, it
          <br />
          has to be
          <br />
          communicated to
          <br />
          customer
        </td>
        <td>Completed</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Review of applicable legal requirements</td>
        <td>
          The job is to be carried out
          <br />
          in Offshore in {projectList[0]?.Rig_Location}. For
          <br />
          this applicable {projectList[0]?.Rig_Location} labor
          <br />
          laws {projectList[0]?.File_name_for_legal_requirements} were
          <br />
          reviewed. The visas were
          <br />
          arranged by Ergon
          <br />
          Technologies and passes to
          <br />
          the rig were arranged by
          <br />
          Customer.
        </td>
        <td>
          All applicable labor law was
          <br />
          reviewed by the operations
          <br />
          manager and approved by CEO
          <br />
          in contract review process.
          <br />
          Offshore passes were reviewed
          <br />
          by the operations manager.
        </td>
        <td>
        {projectList[0]?.Document_Date}
        </td>
        <td>NA</td>
        <td>Completed</td>
      </tr>
    </tbody>
  </table>
  <div className="">
    <div className="left">TSD-OPS-FOR-009-19,</div>
    <div className="center">Rev.01 30 April 2022</div>
    <div className="right">1</div>
  </div>
  {/* page2 */}
  <table>
    <thead>
      <tr>
        <th colSpan={2} rowSpan={7}>
          <img src={Erogonlogo} width="250px" height="105px" />
        </th>
        <th
          colSpan={3}
          rowSpan={7}
          style={{ fontSize: 20, fontWeight: "bold" }}
        >
          Ergon Technologies
          <br />
          Design and Development Plan
        </th>
        <td>Record No.</td>
        <td>
        {projectList[0]?.Sales_Order_NO}
        </td>
      </tr>
      <tr>
        <td>Revision No.</td>
        <td>0</td>
      </tr>
      <tr>
        <td>Date</td>
        <td>
        {projectList[0]?.Document_Date}
        </td>
      </tr>
      <tr>
        <td>Sales Order No.</td>
        <td>
        {projectList[0]?.Sales_Order_NO}
        </td>
      </tr>
      <tr>
        <td>Customer Name</td>
        <td>
        {projectList[0]?.Customer_Name}
        </td>
      </tr>
      <tr>
        <td>Description</td>
        <td>
        {projectList[0]?.Service_Component}
        </td>
      </tr>
      <tr>
        <td>Specification</td>
        <td>
        {projectList[0]?.Rig_Type}
        </td>
      </tr>
      <tr>
        <th>S. No.</th>
        <th>Process to be carried out</th>
        <th>Document (Reference) Number</th>
        <th>Responsible for review</th>
        <th>Planned Completion Date</th>
        <th>Recommendation / Correction (if any)</th>
        <th>Status</th>
      </tr>
      <tr>
        <th colSpan={2}>I. Design Input</th>
        <th />
        <th />
        <th />
        <th />
        <th />
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>3</td>
        <td>
          Review of requirement of any external <br />
          source (e.g. OEM, MPI)
        </td>
        <td>
          For the  {projectList[0]?.Service_Component}, OEM Manual,
          {projectList[0]?.new_group} Operating and           
          <br /> Maintenance Manual; Parts <br />
          catalogue and Accessory
          <br /> manuals
        </td>
        <td>
          The manual was obtained and <br />
          reviewed by operations manager. <br />
          Some roustabouts have been
          <br /> requested to assist with the
          <br /> opening of covers, draining of oil etc.
        </td>
        <td>
          Manual review <br />
          completed at a date
          <br /> before mobilization
          <br /> and mechanics/ roustabout
          <br /> availability confirmed
        </td>
        <td>NA</td>
        <td>Completed</td>
      </tr>
      <tr>
        <td>4</td>
        <td>
          Review of service-related products to be
          <br /> used in this project (e.g. dial gauge,
          <br /> compressor, etc.)
        </td>
        <td>
          {" "}
          Critical SRP: {projectList[0]?.Tool1} of <br />
          {projectList[0]?.Make1} make and model –<br />
          {projectList[0]?.Model1}, serial no{" "}
          {projectList[0]?.Serial_Number1} and <br />
          {projectList[0]?.Tool2} of  {projectList[0]?.Make2} make and model –{" "}
          {projectList[0]?.Model2} and serial no -{" "}
          {projectList[0]?.Serial_Number2} were
          <br /> provided by Ergon Technologies.
        </td>
        <td>
          Calibration certificate of {projectList[0]?.Tool1}and{" "}
          {projectList[0]?.Tool2}
          <br /> were reviewed by the Operations manager.
        </td>
        <td>
        {projectList[0]?.Document_Date}
        </td>
        <td>NA</td>
        <td>Completed</td>
      </tr>
    </tbody>
  </table>
  <div className="">
    <div className="left">TSD-OPS-FOR-009-19, Rev.01</div>
    <div className="center">30 April 2022</div>
    <div className="right">2</div>
  </div>
  {/* page3 */}
  <table>
    <thead>
      <tr>
        <th colSpan={2} rowSpan={7}>
          <img src={Erogonlogo} width="250px" height="105px" />
        </th>
        <th
          colSpan={3}
          rowSpan={7}
          style={{ fontSize: 20, fontWeight: "bold" }}
        >
          Ergon Technologies
          <br />
          Design and Development Plan
        </th>
        <td>Record No.</td>
        <td>
        {projectList[0]?.Sales_Order_NO}
        </td>
      </tr>
      <tr>
        <td>Revision No.</td>
        <td>0</td>
      </tr>
      <tr>
        <td>Date</td>
        <td>
        {projectList[0]?.Document_Date}
        </td>
      </tr>
      <tr>
        <td>Sales Order No.</td>
        <td>
        {projectList[0]?.Sales_Order_NO}
        </td>
      </tr>
      <tr>
        <td>Customer Name</td>
        <td>
        {projectList[0]?.Customer_Name}
        </td>
      </tr>
      <tr>
        <td>Description</td>
        <td>
        {projectList[0]?.Service_Component}
        </td>
      </tr>
      <tr>
        <td>Specification</td>
        <td>
        {projectList[0]?.Rig_Type}
        </td>
      </tr>
      <tr>
        <th>S. No.</th>
        <th>Process to be carried out</th>
        <th>Document (Reference) Number</th>
        <th>Responsible for review</th>
        <th>Planned Completion Date</th>
        <th>Recommendation / Correction (if any)</th>
        <th>Status</th>
      </tr>
      <tr>
        <th colSpan={2}>I. Design Input</th>
        <th />
        <th />
        <th />
        <th />
        <th />
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>5</td>
        <td>
          Review of requirement of any external <br />
          source (e.g. OEM, MPI)
        </td>
        <td>
          HSE Site Personnel. The job is to be carried out in the months of{" "}
          {projectList[0]?.Estimated_Date_Of_Commencement} to{" "}
          {projectList[0]?.Estimated_Project_Completion_Month} .{" "}
        </td>
        <td>
          The operations manager assessed the condition of the location so that
          the quality of work due to this environmental and operational
          condition is not hampered. .
        </td>
        <td>
        {projectList[0]?.Document_Date}
        </td>
        <td>NA</td>
        <td>Completed</td>
      </tr>
      <tr>
        <td>6</td>
        <td>Review of Result of Risk Assessment </td>
        <td>TSD-OPS-REG-002-19- Risk Register </td>
        <td>
          Review of risk assessment was
          <br /> done, and results recorded
          <br /> by supervisor and approved
          <br /> by operations manager{" "}
        </td>
        <td>
        {projectList[0]?.Document_Date}
        </td>
        <td>NA</td>
        <td>Completed</td>
      </tr>
      <tr>
        <td>7</td>
        <td>
          Review of Historical performance and <br />
          other information derived from previous <br />
          similar service designs{" "}
        </td>
        <td />
        <td>Review of previous jobs of similar nature was done .</td>
        <td>
        {projectList[0]?.Document_Date}
        </td>
        <td>NA</td>
        <td>Completed</td>
      </tr>
      <tr>
        <td />
        <td />
        <td />
        <td />
        <td />
        <td />
        <td />
      </tr>
      <tr>
        <td />
        <td />
        <td />
        <td />
        <td />
        <td />
        <td />
      </tr>
      <tr>
        <th colSpan={2}>II. Design Input</th>
        <td colSpan={5} />
        {/* <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th> */}
      </tr>
      <tr>
        <td>1</td>
        <td>Preparation of Service Quality Plan</td>
        <td>
        {projectList[0]?.Sales_Order_NO}-  {projectList[0]?.Po_Date}
        </td>
        <td>Operations Manager</td>
        <td>
        {projectList[0]?.Document_Date}
        </td>
        <td>MR</td>
        <td>Completed</td>
      </tr>
    </tbody>
  </table>
  <div className="">
    <div className="left">TSD-OPS-FOR-009-19, Rev.01</div>
    <div className="center">30 April 2022</div>
    <div className="right">3</div>
  </div>
  <table>
    <thead>
      <tr>
        <th colSpan={2} rowSpan={7}>
          <img src={Erogonlogo} width="250px" height="105px" />
        </th>
        <th
          colSpan={3}
          rowSpan={7}
          style={{ fontSize: 20, fontWeight: "bold" }}
        >
          Ergon Technologies
          <br />
          Design and Development Plan
        </th>
        <td>Record No.</td>
        <td>
        {projectList[0]?.Sales_Order_NO}
        </td>
      </tr>
      <tr>
        <td>Revision No.</td>
        <td>0</td>
      </tr>
      <tr>
        <td>Date</td>
        <td>
        {projectList[0]?.Document_Date}
        </td>
      </tr>
      <tr>
        <td>Sales Order No.</td>
        <td>
        {projectList[0]?.Sales_Order_NO}
        </td>
      </tr>
      <tr>
        <td>Customer Name</td>
        <td>
        {projectList[0]?.Customer_Name}
        </td>
      </tr>
      <tr>
        <td>Description</td>
        <td>
        {projectList[0]?.Service_Component}
        </td>
      </tr>
      <tr>
        <td>Specification</td>
        <td>
        {projectList[0]?.Rig_Type}
        </td>
      </tr>
      <tr>
        <th>S. No.</th>
        <th>Process to be carried out</th>
        <th>Document (Reference) Number</th>
        <th>Responsible for review</th>
        <th>Planned Completion Date</th>
        <th>Recommendation / Correction (if any)</th>
        <th>Status</th>
      </tr>
      {/* <tr>
          <th colspan="2">I. Design Input</th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
      </tr> */}
    </thead>
    <tbody>
      <tr>
        <td>2</td>
        <td>Preparation of Mobilization Plan</td>
        <td>Task Briefing over call</td>
        <td>Operations Manager</td>
        <td>
        {projectList[0]?.Document_Date}
        </td>
        <td>MR</td>
        <td>Completed</td>
      </tr>
      <tr>
        <td>3</td>
        <td>
          Identification of Customer Allowance (+/- <br />
          workdays)
        </td>
        <td>Email</td>
        <td> Operations manager</td>
        <td>30 Days</td>
        <td>MR</td>
        <td>Reviewed</td>
      </tr>
      <tr>
        <td>4</td>
        <td>
          Selection of Team as per Competency <br />
          requirement
        </td>
        <td>
          Competency matrix register <br />
          TSD-ADM-FOR-009 was <br />
          referred to for finalizing the <br />
          team – {projectList[0]?.Supervisor1} ,{projectList[0]?.Technician1}
        </td>
        <td>Operations Manager</td>
        <td>
        {projectList[0]?.Document_Date}
        </td>
        <td>MR</td>
        <td>Completed</td>
      </tr>
      <tr>
        <td>5</td>
        <td>Selection of Measuring Equipment</td>
        <td>
          Critical SRP: {projectList[0]?.Tool1}
          of <br />
          {projectList[0]?.Make1} make and model – <br />
          {projectList[0]?.Model1}, serial no{" "}
          {projectList[0]?.Serial_Number1} and <br />
          {projectList[0]?.Tool2} of {projectList[0]?.Make2} make <br />
          and model –  {projectList[0]?.Model2} and <br />
          serial no - {projectList[0]?.Serial_Number2} were <br />
          provided by Ergon <br />
          Technologies.
        </td>
        <td>Operations Manager</td>
        <td>
        {projectList[0]?.Document_Date}
        </td>
        <td>MR</td>
        <td>Completed</td>
      </tr>
    </tbody>
  </table>
  <div className="">
    <div className="left">TSD-OPS-FOR-009-19, Rev.01</div>
    <div className="center">30 April 2022</div>
    <div className="right">4</div>
  </div>
  <table>
    <thead>
      <tr>
        <th colSpan={2} rowSpan={7}>
          <img src={Erogonlogo} width="250px" height="105px" />
        </th>
        <th
          colSpan={3}
          rowSpan={7}
          style={{ fontSize: 20, fontWeight: "bold" }}
        >
          Ergon Technologies
          <br />
          Design and Development Plan
        </th>
        <td>Record No.</td>
        <td>
        {projectList[0]?.Sales_Order_NO}
        </td>
      </tr>
      <tr>
        <td>Revision No.</td>
        <td>0</td>
      </tr>
      <tr>
        <td>Date</td>
        <td>
        {projectList[0]?.Document_Date}
        </td>
      </tr>
      <tr>
        <td>Sales Order No.</td>
        <td>
        {projectList[0]?.Sales_Order_NO}
        </td>
      </tr>
      <tr>
        <td>Customer Name</td>
        <td>
        {projectList[0]?.Customer_Name}
        </td>
      </tr>
      <tr>
        <td>Description</td>
        <td>
        {projectList[0]?.Service_Component}
        </td>
      </tr>
      <tr>
        <td>Specification</td>
        <td>
        {projectList[0]?.Rig_Type}
        </td>
      </tr>
      <tr>
        <th>S. No.</th>
        <th>Process to be carried out</th>
        <th>Document (Reference) Number</th>
        <th>Responsible for review</th>
        <th>Planned Completion Date</th>
        <th>Recommendation / Correction (if any)</th>
        <th>Status</th>
      </tr>
      {/* <tr>
          <th colspan="2">I. Design Input</th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
      </tr> */}
    </thead>
    <tbody>
      <tr>
        <td>6</td>
        <td>Identification of Acceptance Criteria</td>
        <td>
        {projectList[0]?.Tool1} should have
          <br />
          measurement with +/-
          <br />
          {projectList[0]?.Acceptance_Criteria1} accuracy. <br />
          {projectList[0]?.Tool2} with accuracy of +/-
          <br />
          {projectList[0]?.Acceptance_Criteria2}
        </td>
        <td>Operations Manager</td>
        <td>
        {projectList[0]?.Document_Date}
        </td>
        <td>MR</td>
        <td>Completed</td>
      </tr>
      <tr>
        <td>7</td>
        <td>
          Execution of service design - Quality of <br />
          Job
        </td>
        <td>
          Daily Reports &amp; Client
          <br />
          Feedback, general condition <br />
          of the internal components.
        </td>
        <td> Operations manager</td>
        <td>
        {projectList[0]?.Document_Date}
        </td>
        <td>MR</td>
        <td>Completed</td>
      </tr>
      <tr>
        <td>8</td>
        <td>Identification of critical service-related products </td>
        <td>
          Service quality plan TSD- OPS-SQP-{" "}
          {projectList[0]?.Sales_Order_NO}-
          {projectList[0]?.Po_Date}{" "}
        </td>
        <td>Operations Manager</td>
        <td>
        {projectList[0]?.Document_Date}
        </td>
        <td>MR</td>
        <td>Completed</td>
      </tr>
      <tr>
        <td>9</td>
        <td>
          Implementation of Pre-Job briefing – briefing the Techs about the job
        </td>
        <td>As per client job scope. Informed to techs .</td>
        <td>Operations Manager</td>
        <td>
        {projectList[0]?.Document_Date}
        </td>
        <td>MR</td>
        <td>Completed</td>
      </tr>
    </tbody>
  </table>
  <div className="">
    <div className="left">TSD-OPS-FOR-009-19, Rev.01</div>
    <div className="center">30 April 2022</div>
    <div className="right">5</div>
  </div>
  <table>
    <tbody>
      <tr>
        <th colSpan={2} rowSpan={7}>
          <img src={Erogonlogo} width="250px" height="105px" />
        </th>
        <th
          colSpan={3}
          rowSpan={7}
          style={{ fontSize: 20, fontWeight: "bold" }}
        >
          Ergon Technologies
          <br />
          Design and Development Plan
        </th>
        <td>Record No.</td>
        <td>
        {projectList[0]?.Sales_Order_NO}
        </td>
      </tr>
      <tr>
        <td>Revision No.</td>
        <td>0</td>
      </tr>
      <tr>
        <td>Date</td>
        <td>
        {projectList[0]?.Document_Date}
        </td>
      </tr>
      <tr>
        <td>Sales Order No.</td>
        <td>
        {projectList[0]?.Sales_Order_NO}
        </td>
      </tr>
      <tr>
        <td>Customer Name</td>
        <td>
         
        {projectList[0]?.Customer_Name}
        </td>
      </tr>
      <tr>
        <td>Description</td>
        <td>
        {projectList[0]?.Service_Component}
        </td>
      </tr>
      <tr>
        <td>Specification</td>
        <td>
        {projectList[0]?.Rig_Type}
        </td>
      </tr>
      <tr>
        <th>S. No.</th>
        <th>Process to be carried out</th>
        <th>Document (Reference) Number</th>
        <th>Responsible for review</th>
        <th>Planned Completion Date</th>
        <th>Recommendation / Correction (if any)</th>
        <th>Status</th>
      </tr>
    </tbody>
  </table>
  <h3 className="prepheading">
    <b>Preparation</b>
  </h3>
  <h3 className="reviewheading">
    <b>Review</b>
  </h3>
  <h3 className="approvalheading">
    <b>Approval</b>
  </h3>
  <h4 className="grpprep">Prepared by</h4>
  <h4 className="grpname">Nishad Majeed</h4>
  <h4 className="date">Date</h4>
  <h4 className="inputboxpr">
  {projectList[0]?.Document_Date}
  </h4>
  <h3 className="grpreview">
    <b>Reviewed by</b>
  </h3>
  <h3 className="grpreviewname">
  {projectList[0]?.Supervisor1}  
  </h3>
  <h4 className="date1">Date</h4>
  <h4 className="inputboxre">
  {projectList[0]?.Document_Date}
  </h4>
  <h3 className="grpapprove">
    <b>Approved by</b>
  </h3>
  <h3 className="grpapprovename">
    Syed Ain Ahmad
    <b />
  </h3>
  <h4 className="date2">Date</h4>
  <h4 className="inputboxap">
  {projectList[0]?.Document_Date}
  </h4>
  <h3 className="prepsign">Signature</h3>
  <h3 className="reviewsign">Signature</h3>
  <h3 className="appovalsign">Signature</h3>
  <footer>
    <div className="">
      <div className="left">TSD-OPS-FOR-009-19, Rev.01</div>
      <div className="center">30 April 2022</div>
      <div className="right">6</div>
    </div>
  </footer>
  
  <a class="opennewtabbtn" href="/dosplan" target="_blank" title="Open in New Tab" >Open in New Tab<img src="https://seekicon.com/free-icon-download/box-arrow-up-right_1.svg" height="15" width="49"/> </a>
              
              <button  type="submit" class="Downloadpdfbtn" onClick={handleSubmit} style={{bgcolor: '#E36662'}}>Download Pdf</button>
              <div id="dosplan">
      {/* Content to capture with html2canvas */}
    </div>
</div>


  );
};

export default Dosplan;
