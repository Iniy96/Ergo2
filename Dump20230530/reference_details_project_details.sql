-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: localhost    Database: reference_details
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `project_details`
--

DROP TABLE IF EXISTS `project_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `project_details` (
  `ID_No` int NOT NULL AUTO_INCREMENT,
  `Sales_Order_NO` varchar(255) DEFAULT NULL,
  `Po_No` varchar(255) DEFAULT NULL,
  `Po_Days` varchar(255) DEFAULT NULL,
  `Quote_No` varchar(255) DEFAULT NULL,
  `Sales_Order_Date` varchar(255) DEFAULT NULL,
  `Service_Component` varchar(255) DEFAULT NULL,
  `Document_Date` varchar(255) DEFAULT NULL,
  `Rig_Name` varchar(255) DEFAULT NULL,
  `Customer_Name` varchar(255) DEFAULT NULL,
  `Rig_Location` varchar(255) DEFAULT NULL,
  `Rig_Type` varchar(255) DEFAULT NULL,
  `Estimated_Date_Of_Commencement` varchar(255) DEFAULT NULL,
  `Estimated_Project_Completion_Month` varchar(255) DEFAULT NULL,
  `Tool2` varchar(255) DEFAULT NULL,
  `Supervisor1` varchar(255) DEFAULT NULL,
  `Technician1` varchar(255) DEFAULT NULL,
  `Item_ID2` varchar(255) DEFAULT NULL,
  `Make2` varchar(255) DEFAULT NULL,
  `Model2` varchar(255) DEFAULT NULL,
  `Po_Date` varchar(255) DEFAULT NULL,
  `Tool1` varchar(255) DEFAULT NULL,
  `Item_ID1` varchar(255) DEFAULT NULL,
  `Make1` varchar(255) DEFAULT NULL,
  `Model1` varchar(255) DEFAULT NULL,
  `Serial_Number1` varchar(255) DEFAULT NULL,
  `Calibration_Date1` varchar(255) DEFAULT NULL,
  `Calibration_Due_Date1` varchar(255) DEFAULT NULL,
  `Acceptance_Criteria1` varchar(255) DEFAULT NULL,
  `Serial_Number2` varchar(255) DEFAULT NULL,
  `Calibration_Date2` varchar(255) DEFAULT NULL,
  `Calibration_Due_Date2` varchar(255) DEFAULT NULL,
  `Acceptance_Criteria2` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`ID_No`)
) ENGINE=InnoDB AUTO_INCREMENT=170018 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `project_details`
--

LOCK TABLES `project_details` WRITE;
/*!40000 ALTER TABLE `project_details` DISABLE KEYS */;
INSERT INTO `project_details` VALUES (170001,'003','2151623','60','455665311','2023-05-04','Crane System Remediation','2023-05-11','CMD','shelf','india','mlt','2023-06-01','','Torque Wrench','Tejpal Singh Chattwal','Shivam','ET-SRP-10',NULL,'2416S','2023-05-10','Dial Indicator ','ET-SRP-12','Insize ','2307 - 1','547','12 Jan 2022 ','11 Jan 2023  ','25.41mm ','UCZ262','12 Jan 2022 ','11 Jan 2023  ','0.095mm '),(170002,'623001','2151623','60','455665311','04-05-2023','Crane System Remediation','11-05-2023','MLT','Shelf-Drilling','India','MLT 82-SD-C','25-05-2023','24-07-2023','Torque Wrench','Tejpal Singh Chattwal','Shivam','ET-SRP-07',NULL,'6016C',NULL,'Torque Wrench','ET-SRP-08','CAT','1628718','17365','12 Jan 2022','11 Jan 2023','351 lb ft','DRK87266','12 Jan 2022','11 Jan 2023','93.60 ft lb'),(170003,'623002','2151623','60','455665311','04-05-2023','Crane System Remediation','11-05-2023','SDK','Shelf-Drilling','India','MLT 82-SD-C','25-05-2023','24-07-2023','Torque Wrench','Tejpal Singh Chattwal','Shivam','ET-SRP-07',NULL,'6016C','27-05-2023','Torque Wrench','ET-SRP-08','CAT','1628718','17365','12 Jan 2022','11 Jan 2023','351 lb ft','DRK87266','12 Jan 2022','11 Jan 2023','93.60 ft lb'),(170004,'623004','2151623','90','455665311','2023-05-04','Crane System Remediation','2023-05-11','SDR','shelf','india','mlt','2023-06-01','','','Tejpal Singh Chattwal','Shivam','',NULL,'','2023-05-10','','','','','','','','','','','',''),(170005,'623005','2151623','90','455665311','2023-05-04','Crane System Remediation','2023-05-11','BAL','shelf','india','mlt','2023-06-01','','Dial Indicator ','Tejpal Singh Chattwal','Shivam','ET-SRP-47',NULL,'2414S','2023-05-10','Analog Outside Micrometer','ET-SRP-47','Mitutoyo','2414S','AVWJ52','28-Apr-22','27-Apr-23','0.410 inch','AVWJ52','28-Apr-22','27-Apr-23','0.410 inch'),(170006,'623006','2151623','90','455665311','2023-05-04','Crane System Remediation','2023-05-11','AD1','shelf','india','mlt','2023-06-01','','Torque Wrench ','Tejpal Singh Chattwal','Shivam','ET-SRP-09',NULL,'KI-121','2023-05-10','Torque Wrench','ET-SRP-44','KINDRICK','KDTW4340T','2011413381','12 Jan 2022 ','11 Jan 2023  ','351 lb ft ','77738','12 Jan 2022 ','11 Jan 2023  ',' 0.08961”'),(170007,'623007','2151623','90','455665311','2023-05-04','Crane System Remediation','2023-05-11','CET','shelf','india','mlt','2023-06-01','','Dial Indicator','Tejpal Singh Chattwal','Shivam','ET-SRP-12',NULL,'2307 - 1','2023-05-10','Analog Outside Micrometer','ET-SRP-43','Insize','2307-1','3127','12 Jan 2022 ','11 Jan 2023  ','0 .09mm','547','12 Jan 2022 ','11 Jan 2023  ','25.41mm '),(170008,'623008','2151623','90','455665311','2023-05-04','Crane System Remediation','2023-05-11','T16','Shelf-Drilling','India','MLT 82-SD-C','2023-06-01','','Dial Indicator ','Tejpal Singh Chattwal','Shivam','ET-SRP-49',NULL,'2414S','2023-05-10','Analog Outside Micrometer','ET-SRP-12','Insize ','2307 - 1','547','12 Jan 2022 ','11 Jan 2023  ','25.41mm ','AVWJ55','28-Apr-22','27-Apr-23','0.510 inch'),(170009,'623009','2151623','90','455665311','2023-05-04','Crane System Remediation','2023-05-11','141','Shelf-Drilling','India','MLT 82-SD-C','2023-06-01','','Dial Indicator ','Tejpal Singh Chattwal','Shivam','ET-SRP-12',NULL,'2307 - 1','2023-05-10','Dial Indicator ','ET-SRP-10','Mitutoyo ','2416S','UCZ262','12 Jan 2022 ','11 Jan 2023  ','0.095mm ','547','12 Jan 2022 ','11 Jan 2023  ','25.41mm '),(170010,'623010','2151623','90','455665311','2023-05-04','Crane System Remediation','2023-05-11','KMN','Shelf-Drilling','India','MLT 82-SD-C','2023-06-01','','Dial Indicator','Tejpal Singh Chattwal','Shivam','ET-SRP-09',NULL,'ARTHERMO','2023-05-10','Dial Indicator','ET-156','02-','HTS','FIG-1','12/12/2000','12/12/2000','356.32 lb ft','FIG.569 A Ø 50','02-Aug-22','01-Aug-23','1.19 °C'),(170011,'623011','2151623','90','455665311','2023-05-04','Crane System Remediation','2023-05-11','JTA','Shelf-Drilling','India','MLT 82-SD-C','2023-06-01','','Analog Inside Micrometer','Tejpal Singh Chattwal','Shivam','ET-156',NULL,'HTS','2023-05-10','Dial Indicator','ET-156','02-','HTS','FIG-1','12/12/2000','12/12/2000','356.32 lb ft','FIG-1','12/12/2000','12/12/2000','356.32 lb ft'),(170012,'623012','2151623','90','455665311','2023-05-04','Crane System Remediation','2023-05-11','H15','Shelf-Drilling','India','MLT 82-SD-C','2023-06-01','','Dial Thermo','Tejpal Singh Chattwal','Shivam','ET-SRP-67',NULL,'VDC-6”AX/571-211-30','2023-05-10','Analog Depth Micrometer','ET-SRP-09','HTS-DT-01','ARTHERMO','FIG.569 A Ø 50','02-Aug-22','01-Aug-23','1.19 °C','7260','23-Jun-22','22-Jun-23','0.02 mm'),(170013,'623013','2151623','60','455665311','04-05-2023','Crane System Remediation','11-05-2023','143','Shelf-Drilling','India','MLT 82-SD-C','25-05-2023','24-07-2023','Torque Wrench','Tejpal Singh Chattwal','Shivam','ET-SRP-07','Proto','6016C','27-05-2023','Torque Wrench','ET-SRP-08','CAT','1628718','17365','12 Jan 2022','11 Jan 2023','351 lb ft','DRK87266','12 Jan 2022','11 Jan 2023','93.60 ft lb'),(170014,'623013','2151623','60','455665311','04-05-2023','Crane System Remediation','11-05-2023','143','Shelf-Drilling','India','MLT 82-SD-C','25-05-2023','24-07-2023','Torque Wrench','Tejpal Singh Chattwal','Shivam','ET-SRP-07','Proto','6016C','27-05-2023','Torque Wrench','ET-SRP-08','CAT','1628718','17365','12 Jan 2022','11 Jan 2023','351 lb ft','DRK87266','12 Jan 2022','11 Jan 2023','93.60 ft lb'),(170015,'623015','2151623','90','455665311','2023-05-04','Crane System Remediation','2023-05-11','123','Shelf-Drilling','oman','MLT 82-SD-C','2023-06-01','','Dial Indicator','Tejpal Singh Chattwal','Shivam','ET-SRP-64','Mitutoyo','2416A','2023-05-17','Coating Thickness Gauge','ET-SRP-66','Mitutoyo ','CD-P6”S/500-752-20','B22055568','23-Jun-22','22-Jun-23','0.02 mm','BHGM08','21-Jan-22','20-Jan-23','0.001 inch'),(170016,'623015','2151623','90','455665311','2023-05-04','Crane System Remediation','2023-05-11','123','','','','2023-06-01','','','Tejpal Singh Chattwal','Shivam','','','','2023-05-17','','','','','','','','','','','',''),(170017,'623016','2151623','90','455665311','2023-05-04','Crane System Remediation','2023-05-11','123','Shelf-Drilling','oman','MLT 82-SD-C','2023-06-01','','Dial Indicator','Tejpal Singh Chattwal','Shivam','ET-SRP-64','Mitutoyo','2416A','2023-05-17','Coating Thickness Gauge','ET-SRP-09','HTS-DT-01','ARTHERMO','FIG.569 A Ø 50','02-Aug-22','01-Aug-23','1.19 °C','BHGM08','21-Jan-22','20-Jan-23','0.001 inch');
/*!40000 ALTER TABLE `project_details` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-05-30 17:48:56
