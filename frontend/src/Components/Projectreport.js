import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step, { useStepContext } from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import axios from "axios";
import { useEffect, useState } from "react";
import "../Components/css/projectreport.css";
import { useParams } from "react-router-dom";
import Workplan from "./Workplan";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import Dosplan from "./Dosplan";
const steps = [
  "Pre-Project Kickoff",
  "Pre-Mobilization",
  "Field reporting",
  "Post-Demobilization",
];

const isStepOptional = (step) => {
  return step === 1;
};

const HorizontalLinearStepper = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const { id } = useParams();

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const [showPreview, setShowPreview] = useState(false);
  const [showDosplanPreview, setShowDosplanPreview] = useState(false);
  const handlePreview = () => {
    setShowPreview(true);
   
  };

  const handleDosplanPreview = () => {
    
    setShowDosplanPreview(true);
  };

  const handleClosePreview = () => {
    setShowPreview(false);
   
  };

const handleDosplanClosePreview = () =>{
  setShowDosplanPreview(false);
}

  const [projectList, setProjectList] = useState([]);

  useEffect(() => {
    const fetchProject = async () => {
      const res = await axios.get("http://localhost:8002/project_details");
      const filter = res.data.data.filter((el) => el.Sales_Order_NO === id);
      setProjectList(filter);
    };

    fetchProject();
  }, []);

  // const generatePDF = () => {
  //   const input = document.getElementById('workplan');
  //   const inputHeight = input.clientHeight;
  //   const inputWidth = input.clientWidth;
  //   html2canvas(input, { height: inputHeight, width: inputWidth }).then((canvas) => {
  //     const imgData = canvas.toDataURL('image/png');
  //     const pdf = new jsPDF('p', 'mm', 'a4'); // Set PDF document size to A4
  //     const pdfWidth = pdf.internal.pageSize.getWidth();
  //     const pdfHeight = pdf.internal.pageSize.getHeight();
  //     pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight); // Adjust image position and size to fit the PDF
  //     // Save or preview the PDF
  //     pdf.save('workplan.pdf');
  //   });
  //   };
  const [downLoadStart,setDownLoadStart] = useState(false)
  const generatePDF1 = async() => {
    await setDownLoadStart(true)
    const input = document.getElementById("workplan2");
    const inputHeight =  await input.clientHeight;
    const inputWidth = await input.clientWidth;
    html2canvas(input, { height: inputHeight, width: inputWidth }).then(
      (canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF("p", "mm", "a4"); // Set PDF document size to A4
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();
        pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight); // Adjust image position and size to fit the PDF
        // Save or preview the PDF
        pdf.save("workplan2.pdf");
      }
    );
    setDownLoadStart(false)
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    generatePDF1();
  };

  console.log(projectList);

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // Initialize a state variable for completeness status
  const [isComplete, setIsComplete] = useState(false);

  // Check the completeness status based on field values
  useEffect(() => {
    const checkCompleteness = () => {
      // Check if all fields are filled
      const isAllFieldsFilled =
        projectList[0]?.Sales_Order_NO &&
        projectList[0]?.Rig_Location &&
        projectList[0]?.Service_Component;
      setIsComplete(isAllFieldsFilled);
    };

    checkCompleteness();
  }, [projectList]);

  // Update the button JSX based on the completeness status
  const buttonContent = isComplete ? "Complete" : "Pending";

  // Render the button component
  <Typography
    component="button"
    variant="button"
    fontSize={15}
    sx={{
      fontWeight: "bold",
      color: "white",
      bgcolor: isComplete ? "#6FCF8A" : "#E36662",
      padding: "4px 8px",
      borderRadius: "2px",
      cursor: "pointer",
      height: "28px",
      width: "192px",
    }}
  >
    {buttonContent}
  </Typography>;

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Box sx={{ width: "100%", mt: 10 }}>
        <h5>SO: {projectList[0]?.Sales_Order_NO}</h5>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {
              sx: {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              },
            };
            if (isStepOptional(index)) {
              labelProps.optional = <Typography variant="caption"></Typography>;
            }
            if (index === activeStep) {
              stepProps.completed = false;
            }
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        <Box
          sx={{
            borderBottom: 1,
            borderColor: "black",
            borderRight: 1,
            borderColor: "black",
            borderLeft: 1,
            borderTop: 1,
            mt: 5,
            ml: 26,
            justifyContent: 80,
            bgcolor: "#D9D9D9",
            width: "1110px",
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            sx={{
              "& .MuiTabs-indicator": {
                backgroundColor: "black",
              },
              "& .MuiTab-root": {
                color: "black",
                fontWeight: "bold",
              },
              "& .Mui-selected": {
                backgroundColor: "#7591D8",
              },
            }}
          >
            <Tab label="Project Checklist" {...a11yProps(0)} />
            <Tab label="Project Details" {...a11yProps(1)} />
            <Tab label="Team Details" {...a11yProps(2)} />
            <Tab label="Tools Details" {...a11yProps(3)} />
            <Tab label="Spares Mobilization" {...a11yProps(4)} />
            <Tab label="Documents" {...a11yProps(5)} />
            <Tab label="Reports" {...a11yProps(6)} />
          </Tabs>
        </Box>
      </Box>
      <TabPanel value={value} index={0} fontSize={19}>
        <Box
          sx={{
            mt: -3,
            ml: 1,
            bgcolor: "#D9D9D9",
            height: "500px",
            width: "1111px",
            borderRight: 1,
            borderLeft: 1,
            borderBottom: 1,
          }}
        >
          Project Checklist
        </Box>
      </TabPanel>

      <TabPanel value={value} index={1} fontSize={19}>
        <Box
          sx={{
            mt: -3,
            ml: 1,
            bgcolor: "#D9D9D9",
            height: "500px",
            width: "1111px",
            borderRight: 1,
            borderLeft: 1,
            borderBottom: 1,
          }}
        >
          <Box sx={{ display: "flex", bgcolor: "#D9D9D9" }}>
            <Box sx={{ flexGrow: 15, pr: 15, ml: "28px", mt: 6 }}>
              <div>
                {/* <Typography variant="h6">Project 1</Typography> */}
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography
                    fontSize={19}
                    sx={{ ml: 2, fontWeight: "bold", color: "black" }}
                  >
                    Sales Order No:
                  </Typography>
                  <Box sx={{ ml: 12 }}>
                    <Typography
                      fontSize={19}
                      sx={{ fontWeight: "bold", color: "black" }}
                    >
                      {projectList[0]?.Sales_Order_NO}
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography
                    fontSize={19}
                    sx={{ ml: 2, fontWeight: "bold", color: "black" }}
                    mt={2}
                  >
                    Sales Order Date:
                  </Typography>
                  <Box sx={{ ml: 10 }}>
                    <Typography
                      fontSize={19}
                      sx={{ fontWeight: "bold", color: "black" }}
                    >
                      {projectList[0]?.Sales_Order_Date}
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography
                    fontSize={19}
                    sx={{ ml: 2, fontWeight: "bold", color: "black" }}
                    mt={2}
                  >
                    PO No:
                  </Typography>
                  <Box sx={{ ml: 22 }}>
                    <Typography
                      fontSize={19}
                      sx={{ fontWeight: "bold", color: "black" }}
                    >
                      {projectList[0]?.Po_No}
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography
                    fontSize={19}
                    sx={{ ml: 2, fontWeight: "bold", color: "black" }}
                    mt={2}
                  >
                    PO Days:
                  </Typography>
                  <Box sx={{ ml: 19 }}>
                    <Typography
                      fontSize={19}
                      sx={{ fontWeight: "bold", color: "black" }}
                    >
                      {projectList[0]?.Po_Days}
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography
                    fontSize={19}
                    sx={{ ml: 2, fontWeight: "bold", color: "black" }}
                    mt={2}
                  >
                    Quote No:
                  </Typography>
                  <Box sx={{ ml: 18 }}>
                    <Typography
                      fontSize={19}
                      sx={{ fontWeight: "bold", color: "black" }}
                    >
                      {projectList[0]?.Quote_No}
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography
                    fontSize={19}
                    sx={{ ml: 2, fontWeight: "bold", color: "black" }}
                    mt={2}
                  >
                    Estimated Date <br /> Of Commencement:
                  </Typography>
                  <Box sx={{ ml: 7 }}>
                    <Typography
                      fontSize={19}
                      sx={{ fontWeight: "bold", color: "black" }}
                    >
                      {projectList[0]?.Estimated_Date_Of_Commencement}
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography
                    fontSize={19}
                    sx={{ ml: 2, fontWeight: "bold", color: "black" }}
                    mt={2}
                  >
                    Estimated Project <br />
                    Completion Date:
                  </Typography>
                  <Box sx={{ ml: 9 }}>
                    <Typography
                      fontSize={19}
                      sx={{ fontWeight: "bold", color: "black" }}
                    >
                      {projectList[0]?.Estimated_Project_Completion_Month}
                    </Typography>
                  </Box>
                </Box>

                {/* Render additional project details here */}
              </div>
            </Box>
            <Box sx={{ flexGrow: 16, mt: 5 }}>
              <div>
                {/* <Typography variant="h6">Project 1</Typography> */}
                {/* Render additional project details here */}
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography
                    fontSize={19}
                    sx={{ ml: 7, fontWeight: "bold", color: "black" }}
                    mt={2}
                  >
                    Rig name*:
                  </Typography>
                  <Box sx={{ ml: 15 }}>
                    <Typography
                      fontSize={18}
                      sx={{ fontWeight: "bold", color: "black" }}
                    >
                      {projectList[0]?.Rig_Name}
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography
                    fontSize={19}
                    sx={{ ml: 7, fontWeight: "bold", color: "black" }}
                    mt={2}
                  >
                    Customer name:
                  </Typography>
                  <Box sx={{ ml: 9 }}>
                    <Typography
                      fontSize={19}
                      sx={{ fontWeight: "bold", color: "black" }}
                    >
                      {projectList[0]?.Customer_Name}
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography
                    fontSize={19}
                    sx={{ ml: 7, fontWeight: "bold", color: "black" }}
                    mt={2}
                  >
                    Rig Location:
                  </Typography>
                  <Box sx={{ ml: 13 }}>
                    <Typography
                      fontSize={19}
                      sx={{ fontWeight: "bold", color: "black" }}
                    >
                      {projectList[0]?.Rig_Location}
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography
                    fontSize={19}
                    sx={{ ml: 7, fontWeight: "bold", color: "black" }}
                    mt={2}
                  >
                    Rig type:
                  </Typography>
                  <Box sx={{ ml: 18 }}>
                    <Typography
                      fontSize={19}
                      sx={{ fontWeight: "bold", color: "black" }}
                    >
                      {projectList[0]?.Rig_Type}
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography
                    fontSize={19}
                    sx={{ ml: 7, fontWeight: "bold", color: "black" }}
                    mt={2}
                  >
                    Service Component:
                  </Typography>
                  <Box sx={{ ml: 5 }}>
                    <Typography
                      fontSize={19}
                      sx={{ fontWeight: "bold", color: "black" }}
                    >
                      {projectList[0]?.Service_Component}
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography
                    fontSize={19}
                    sx={{ ml: 7, fontWeight: "bold", color: "black" }}
                    mt={2}
                  >
                    Document Date:
                  </Typography>
                  <Box sx={{ ml: 10 }}>
                    <Typography
                      fontSize={19}
                      sx={{ fontWeight: "bold", color: "black" }}
                    >
                      {projectList[0]?.Document_Date}
                    </Typography>
                  </Box>
                </Box>
              </div>
            </Box>
          </Box>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={2} fontSize={19}>
        <Box
          sx={{
            mt: -3,
            ml: 1,
            bgcolor: "#D9D9D9",
            height: "500px",
            width: "1111px",
            borderRight: 1,
            borderLeft: 1,
            borderBottom: 1,
          }}
        >
          Team Details
        </Box>
      </TabPanel>
      <TabPanel value={value} index={3} fontSize={19}>
        <Box
          sx={{
            mt: -3,
            ml: 1,
            bgcolor: "#D9D9D9",
            height: "500px",
            width: "1111px",
            borderRight: 1,
            borderLeft: 1,
            borderBottom: 1,
          }}
        >
          <Box sx={{ display: "flex", bgcolor: "#D9D9D9" }}>
            <Box sx={{ flexGrow: 15, pr: 15, ml: "28px", mt: 6 }}>
              <div>
                {/* <Typography variant="h6">Project 1</Typography> */}
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography
                    fontSize={19}
                    sx={{ ml: 2, fontWeight: "bold", color: "black" }}
                  >
                    Tool 1:
                  </Typography>
                  <Box sx={{ ml: 22 }}>
                    <Typography
                      fontSize={19}
                      sx={{ fontWeight: "bold", color: "black" }}
                    >
                      {projectList[0]?.Tool1}
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography
                    fontSize={19}
                    sx={{ ml: 2, fontWeight: "bold", color: "black" }}
                    mt={2}
                  >
                    Item ID:
                  </Typography>
                  <Box sx={{ ml: 21 }}>
                    <Typography
                      fontSize={19}
                      sx={{ fontWeight: "bold", color: "black" }}
                    >
                      {projectList[0]?.Item_ID1}
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography
                    fontSize={19}
                    sx={{ ml: 2, fontWeight: "bold", color: "black" }}
                    mt={2}
                  >
                    Make:
                  </Typography>
                  <Box sx={{ ml: 23 }}>
                    <Typography
                      fontSize={19}
                      sx={{ fontWeight: "bold", color: "black" }}
                    >
                      {projectList[0]?.Make1}
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography
                    fontSize={19}
                    sx={{ ml: 2, fontWeight: "bold", color: "black" }}
                    mt={2}
                  >
                    Model:
                  </Typography>
                  <Box sx={{ ml: 22 }}>
                    <Typography
                      fontSize={19}
                      sx={{ fontWeight: "bold", color: "black" }}
                    >
                      {projectList[0]?.Model1}
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography
                    fontSize={19}
                    sx={{ ml: 2, fontWeight: "bold", color: "black" }}
                    mt={2}
                  >
                    Serial Number:
                  </Typography>
                  <Box sx={{ ml: 12.5 }}>
                    <Typography
                      fontSize={19}
                      sx={{ fontWeight: "bold", color: "black" }}
                    >
                      {projectList[0]?.Serial_Number1}
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography
                    fontSize={19}
                    sx={{ ml: 2, fontWeight: "bold", color: "black" }}
                    mt={2}
                  >
                    Calibration Date:
                  </Typography>
                  <Box sx={{ ml: 10 }}>
                    <Typography
                      fontSize={19}
                      sx={{ fontWeight: "bold", color: "black" }}
                    >
                      {projectList[0]?.Calibration_Date1}
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography
                    fontSize={19}
                    sx={{ ml: 2, fontWeight: "bold", color: "black" }}
                    mt={2}
                  >
                    Calibration Due Date:
                  </Typography>
                  <Box sx={{ ml: 5 }}>
                    <Typography
                      fontSize={19}
                      sx={{ fontWeight: "bold", color: "black" }}
                    >
                      {projectList[0]?.Calibration_Due_Date1}
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography
                    fontSize={19}
                    sx={{ ml: 2, fontWeight: "bold", color: "black" }}
                    mt={2}
                  >
                    Acceptance Criteria:
                  </Typography>
                  <Box sx={{ ml: 6.5 }}>
                    <Typography
                      fontSize={19}
                      sx={{ fontWeight: "bold", color: "black" }}
                    >
                      {projectList[0]?.Acceptance_Criteria1}
                    </Typography>
                  </Box>
                </Box>

                {/* Render additional project details here */}
              </div>
            </Box>
            <Box sx={{ flexGrow: 16, mt: 5 }}>
              <div>
                {/* <Typography variant="h6">Project 1</Typography> */}
                {/* Render additional project details here */}
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography
                    fontSize={19}
                    sx={{ ml: 7, fontWeight: "bold", color: "black" }}
                    mt={2}
                  >
                    Tool 2:
                  </Typography>
                  <Box sx={{ ml: 22 }}>
                    <Typography
                      fontSize={18}
                      sx={{ fontWeight: "bold", color: "black" }}
                    >
                      {projectList[0]?.Tool2}
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography
                    fontSize={19}
                    sx={{ ml: 7, fontWeight: "bold", color: "black" }}
                    mt={2}
                  >
                    Item ID 2:
                  </Typography>
                  <Box sx={{ ml: 19 }}>
                    <Typography
                      fontSize={19}
                      sx={{ fontWeight: "bold", color: "black" }}
                    >
                      {projectList[0]?.Item_ID2}
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography
                    fontSize={19}
                    sx={{ ml: 7, fontWeight: "bold", color: "black" }}
                    mt={2}
                  >
                    Make:
                  </Typography>
                  <Box sx={{ ml: 13 }}>
                    <Typography
                      fontSize={19}
                      sx={{ fontWeight: "bold", color: "black" }}
                    >
                      {projectList[0]?.Make2}
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography
                    fontSize={19}
                    sx={{ ml: 7, fontWeight: "bold", color: "black" }}
                    mt={2}
                  >
                    Model:
                  </Typography>
                  <Box sx={{ ml: 22.5 }}>
                    <Typography
                      fontSize={19}
                      sx={{ fontWeight: "bold", color: "black" }}
                    >
                      {projectList[0]?.Model2}
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography
                    fontSize={19}
                    sx={{ ml: 7, fontWeight: "bold", color: "black" }}
                    mt={2}
                  >
                    Serial Number:
                  </Typography>
                  <Box sx={{ ml: 13 }}>
                    <Typography
                      fontSize={19}
                      sx={{ fontWeight: "bold", color: "black" }}
                    >
                      {projectList[0]?.Serial_Number2}
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography
                    fontSize={19}
                    sx={{ ml: 7, fontWeight: "bold", color: "black" }}
                    mt={2}
                  >
                    Calibration Date:
                  </Typography>
                  <Box sx={{ ml: 11 }}>
                    <Typography
                      fontSize={19}
                      sx={{ fontWeight: "bold", color: "black" }}
                    >
                      {projectList[0]?.Calibration_Date2}
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography
                    fontSize={19}
                    sx={{ ml: 7, fontWeight: "bold", color: "black" }}
                    mt={2}
                  >
                    Calibration Due Date:
                  </Typography>
                  <Box sx={{ ml: 6 }}>
                    <Typography
                      fontSize={19}
                      sx={{ fontWeight: "bold", color: "black" }}
                    >
                      {projectList[0]?.Calibration_Due_Date2}
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography
                    fontSize={19}
                    sx={{ ml: 7, fontWeight: "bold", color: "black" }}
                    mt={2}
                  >
                    Acceptance Criteria:
                  </Typography>
                  <Box sx={{ ml: 7 }}>
                    <Typography
                      fontSize={19}
                      sx={{ fontWeight: "bold", color: "black" }}
                    >
                      {projectList[0]?.Acceptance_Criteria2}
                    </Typography>
                  </Box>
                </Box>
              </div>
            </Box>
          </Box>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Box
          sx={{
            mt: -3,
            ml: 1,
            bgcolor: "#D9D9D9",
            height: "500px",
            width: "1111px",
            borderRight: 1,
            borderLeft: 1,
            borderBottom: 1,
          }}
        >
          Spares Mobilization
        </Box>
      </TabPanel>
      <TabPanel value={value} index={5}>
        <Box
          sx={{
            mt: -3,
            ml: 1,
            bgcolor: "#D9D9D9",
            height: "500px",
            width: "1111px",
            borderRight: 1,
            borderLeft: 1,
            borderBottom: 1,
          }}
        >
          <Box sx={{ display: "flex", bgcolor: "#D9D9D9" }}>
            {/* <Box sx={{ flexGrow: 15, pr: 15, ml: '28px', mt: 6 }}></Box> */}
            <div>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography
                  fontSize={19}
                  sx={{ ml: 9, mt: 4, fontWeight: "bold", color: "black" }}
                >
                  1. Work Plan:
                </Typography>
                <Box sx={{ ml: 23, mt: 4 }}>
                  <Typography
                    component="button"
                    variant="button"
                    fontSize={15}
                    sx={{
                      fontWeight: "bold",
                      color: "white",
                      bgcolor: "##6FCF8A",
                      padding: "4px 8px",
                      borderRadius: "2px",
                      cursor: "pointer",
                      height: "28px",
                      width: "192px",
                      buttonContent,
                    }}
                  >
                    complete
                  </Typography>
                </Box>
                <Box sx={{ ml: 4, mt: 4 }}>
                  <Typography
                    component="button"
                    variant="button"
                    fontSize={15}
                    sx={{
                      fontWeight: "bold",
                      color: "white",
                      bgcolor: "#E36662",
                      padding: "4px 8px",
                      borderRadius: "2px",
                      cursor: "pointer",
                      height: "28px",
                      width: "192px",
                     
                    }}
                    onClick={handlePreview}
                  >
                    Preview
                  </Typography>

                  {showPreview && (
                    <div className="popup-container pdfContainer">
                      <div className="popup-content">
                        <button
                          className="close-button"
                          onClick={handleClosePreview}
                        >
                          Close
                        </button>
                        <Workplan />
                      </div>
                    </div>
                  )}
                </Box>
                <Box sx={{ ml: 4, mt: 4 }}>
                  <Typography
                    component="button"
                    variant="button"
                    fontSize={14}
                    sx={{
                      fontWeight: "bold",
                      color: "white",
                      bgcolor: "#E36662",
                      padding: "4px 8px",
                      borderRadius: "1px",
                      cursor: "pointer",
                      height: "28px",
                      width: "192px",
                    }}
                    onClick={handleSubmit}
                  >
                    Download PDF
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography
                  fontSize={19}
                  sx={{ ml: 9, mt: 4, fontWeight: "bold", color: "black" }}
                >
                  2. Dos Plan:
                </Typography>
                <Box sx={{ ml: 24.5, mt: 4 }}>
                  <Typography
                    component="button"
                    variant="button"
                    fontSize={15}
                    sx={{
                      fontWeight: "bold",
                      color: "white",
                      bgcolor: "##6FCF8A",
                      padding: "4px 8px",
                      borderRadius: "2px",
                      cursor: "pointer",
                      height: "28px",
                      width: "192px",
                    }}
                  >
                    complete
                  </Typography>
                </Box>
                <Box sx={{ ml: 4, mt: 4 }}>
                  <Typography
                    component="button"
                    variant="button"
                    fontSize={15}
                    sx={{
                      fontWeight: "bold",
                      color: "white",
                      bgcolor: "#E36662",
                      padding: "4px 8px",
                      borderRadius: "2px",
                      cursor: "pointer",
                      height: "28px",
                      width: "192px",
                    }}
                    onClick={handleDosplanPreview}
                  > 
                    Preview
                  </Typography>
                  {showDosplanPreview && (
                    <div className="popup-container pdfContainer">
                      <div className="popup-content">
                        <button
                          className="close-button"
                          onClick={handleDosplanClosePreview}
                        >
                          Close
                        </button>
                        <Dosplan />
                      </div>
                    </div>
                  )}
                </Box>
                <Box sx={{ ml: 4, mt: 4 }}>
                  <Typography
                    component="button"
                    variant="button"
                    fontSize={14}
                    sx={{
                      fontWeight: "bold",
                      color: "white",
                      bgcolor: "#E36662",
                      padding: "4px 8px",
                      borderRadius: "1px",
                      cursor: "pointer",
                      height: "28px",
                      width: "192px",
                    }}
                  >
                    Download PDF
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography
                  fontSize={19}
                  sx={{ ml: 9, mt: 4, fontWeight: "bold", color: "black" }}
                >
                  3. Mobilization Plan:
                </Typography>
                <Box sx={{ ml: 15, mt: 4 }}>
                  <Typography
                    component="button"
                    variant="button"
                    fontSize={15}
                    sx={{
                      fontWeight: "bold",
                      color: "white",
                      bgcolor: "##6FCF8A",
                      padding: "4px 8px",
                      borderRadius: "2px",
                      cursor: "pointer",
                      height: "28px",
                      width: "192px",
                    }}
                  >
                    complete
                  </Typography>
                </Box>
                <Box sx={{ ml: 4, mt: 4 }}>
                  <Typography
                    component="button"
                    variant="button"
                    fontSize={15}
                    sx={{
                      fontWeight: "bold",
                      color: "white",
                      bgcolor: "#E36662",
                      padding: "4px 8px",
                      borderRadius: "2px",
                      cursor: "pointer",
                      height: "28px",
                      width: "192px",
                    }}
                  >
                    Preview
                  </Typography>
                </Box>
                <Box sx={{ ml: 4, mt: 4 }}>
                  <Typography
                    component="button"
                    variant="button"
                    fontSize={14}
                    sx={{
                      fontWeight: "bold",
                      color: "white",
                      bgcolor: "#E36662",
                      padding: "4px 8px",
                      borderRadius: "1px",
                      cursor: "pointer",
                      height: "28px",
                      width: "192px",
                    }}
                  >
                    Download PDF
                  </Typography>
                </Box>
              </Box>
            </div>
          </Box>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={6}>
        <Box
          sx={{
            mt: -3,
            ml: 1,
            bgcolor: "#D9D9D9",
            height: "500px",
            width: "1111px",
            borderRight: 1,
            borderLeft: 1,
            borderBottom: 1,
          }}
        >
          Reports
        </Box>
      </TabPanel>

      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
            <Button onClick={handleReset} sx={{ mr: 1 }}>
              Reset
            </Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
          <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? "Finish" : "Next"}
            </Button>
          </Box>
        </React.Fragment>
      )}


    {/*pdf download section*/}
      <div>
        {
          downLoadStart &&
          (
            <div className="workplancontainer">
            <div
              className="col col-lg-6 mx-auto d-flex justify-content-center"
              style={{ marginTop: "33px" }}
            >
              <form id="workplan2">
                <table className="table table-responsive table-bordered mx-auto">
                  <thead>
                    <tr>
                      <th className="text-center table-light" colSpan="2">
                        Work Plan
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th className="table-dark" scope="row">
                        Head
                      </th>
                      <td className="table-dark">Description</td>
                    </tr>
                    <tr>
                      <th className="table-light" scope="row">
                        Client
                      </th>
                      <td className="table-light">
                        <input
                          type="text"
                          name="client"
                          value={projectList[0]?.Customer_Name}
                          onChange={handleChange}
                        />
                      </td>
                    </tr>
                    <tr>
                      <th className="table-light" scope="row">
                        Rig Name
                      </th>
                      <td className="table-light">
                        <input
                          type="text"
                          name="rigName"
                          value={projectList[0]?.Rig_Name}
                          onChange={handleChange}
                        />
                      </td>
                    </tr>
                    <tr>
                      <th className="table-light" scope="row">
                        Sales Order No
                      </th>
                      <td>
                        <input
                          type="number"
                          name="salesOrderNo"
                          value={projectList[0]?.Sales_Order_NO}
                          onChange={handleChange}
                        />
                      </td>
                    </tr>
                    <tr>
                      <th className="table-light" scope="row">
                        Rig Location
                      </th>
                      <td className="table-light">
                        {" "}
                        <input
                          type="text"
                          name="rigLocation"
                          value={projectList[0]?.Rig_Location}
                          onChange={handleChange}
                        />
                      </td>
                    </tr>
                    <tr>
                      <th className="table-light" scope="row">
                        Project Name
                      </th>
                      <td className="table-light">
                        <input
                          type="text"
                          name="projectName"
                          value={projectList[0]?.Service_Component}
                          onChange={handleChange}
                        />
                      </td>
                    </tr>
                    {/* Add other table rows */}
                    <tr>
                      <th className="table-light" scope="row">
                        Scope of Work
                      </th>
                      <td className="table-light">
                        <input
                          type="text"
                          value={projectList[0]?.Service_Component}
                        />
                      </td>
                    </tr>
                    <tr>
                      <th className="table-light" scope="row">
                        Team Members
                      </th>
                      <td>
                        <input type="text" value={projectList[0]?.Supervisor1} />
                      </td>
                    </tr>
                    <tr>
                      <th className="table-light" scope="row">
                        Mobilisation Details
                      </th>
                      <td className="table-light">
                        <input
                          type="text"
                          value={projectList[0]?.Estimated_Date_Of_Commencement}
                        />
                      </td>
                    </tr>
                    <tr>
                      <th className="table-light" scope="row">
                        Project Duration
                      </th>
                      <td>
                        Estimated{" "}
                        <input type="text" value={projectList[0]?.Po_Days} /> days
                      </td>
                    </tr>
                    <tr>
                      <th className="table-light" scope="row">
                        Job Details
                      </th>
                      <td className="table-light">
                        The scope is,
                        <input
                          type="text"
                          value={projectList[0]?.Service_Component}
                        />
                      </td>
                    </tr>
                    <tr>
                      <th className="table-light" scope="row">
                        Final Deliverable
                      </th>
                      <td className="table-light">
                        1. Daily Report &amp; Final Report 2. Status Sheet 3.
                        Feedback form
                      </td>
                    </tr>
                    <tr>
                      <th className="table-light" scope="row">
                        Tools &amp; Consumables
                      </th>
                      <td className="table-light">Available at rig</td>
                    </tr>
                    <tr>
                      <th className="table-light" scope="row">
                        Reporting
                      </th>
                      <td className="table-light">
                        1. Daily Report to be sent to central team every evening
                        2. Final report to be prepared . 3. Parts list to be made.
                      </td>
                    </tr>
                    <tr>
                      <th className="table-light" scope="row">
                        Contact Point
                      </th>
                      <td className="table-light">
                        1st Contact: Operation Team (projects@ergontec.com,
                        +971527256908) 2nd Contact: Technical Team
                        (operation@ergontec.com, +971521988815) 3rd Contact:
                        Mathew (mbm@ergontec.com, +971585039099)
                      </td>
                    </tr>
                    <tr>
                      <th className="table-light" scope="row">
                        Essential Documents Checklist
                      </th>
                      <td className="table-light">
                        1. Passport 2. BOSIET 3. Medical (Health) Certificate 4.
                        National identity Card (or Driving License) 5. Valid PCR
                        (Covid) Test Report 6. Entry Permit for{" "}
                        <input type="text" value={projectList[0]?.Rig_Location} />
                      </td>
                    </tr>
                    <tr>
                      <th className="table-light" scope="row">
                        Points to Note
                      </th>
                      <td className="table-light">
                        1. Please ensure that the Ergon Reporting formats are
                        followed for the task. 2. Please ensure that all mandatory
                        HSE documents are filled in correctly and returned after
                        the completion of the job 3. Please ensure that daily
                        progress reports are sent into the central team on a
                        regular basis 4. Please ensure that all DPR’s and
                        timesheets are signed and stamped by the client on
                        completion of the task. 5. In case of any variation in the
                        Scope of Work defined above, please inform the central
                        team.
                      </td>
                    </tr>
                  </tbody>
                </table>
  
                <div>
                  <h6
                    className="table-light"
                    style={{ marginLeft: "400px", marginTop: "10px" }}
                  >
                    Prepared By
                  </h6>
                  <h6
                    className="table-light"
                    style={{ marginLeft: "800px", marginTop: "-30px" }}
                  >
                    Signed By
                  </h6>
                </div>
                <div>
                  <h6
                    className="table-light"
                    style={{ marginLeft: "400px", marginTop: "30px" }}
                  >
                    Shubham Mehata
                  </h6>
                  <h6></h6>
                </div>
                <div className="">
                  <div
                    className="table-light"
                    style={{ textAlign: "left", marginTop: "70px" }}
                  >
                    TSD-OPS-FOR-009-19, Rev.01
                  </div>
                  <div
                    className="table-light"
                    style={{ textAlign: "center", marginTop: "-20px" }}
                  >
                    30 April 2022
                  </div>
                  <div
                    className="table-light"
                    style={{ textAlign: "right", marginTop: "-30px" }}
                  >
                    6
                  </div>
                </div>
              </form>
            </div>
            </div>
          )
        }
      </div>
    </Box>
  );
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default HorizontalLinearStepper;
