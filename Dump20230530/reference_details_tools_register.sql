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
-- Table structure for table `tools_register`
--

DROP TABLE IF EXISTS `tools_register`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tools_register` (
  `Id_No` int NOT NULL,
  `Item_No` text,
  `Description` varchar(255) NOT NULL,
  `Manufacturer` text,
  `Model` text,
  `Serial_No` text,
  `Cal_Date` text,
  `Due_Date` text,
  `Range_Value` text,
  `Nominal_Value` text,
  `Measured_Value` text,
  `Acceptance_Criteria` text,
  `Frequency` text,
  `Cert_No` text,
  `Status` text,
  `Remarks` text,
  PRIMARY KEY (`Description`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tools_register`
--

LOCK TABLES `tools_register` WRITE;
/*!40000 ALTER TABLE `tools_register` DISABLE KEYS */;
INSERT INTO `tools_register` VALUES (32,'ET-SRP-62','Analog Depth Micrometer','Mitutoyo ','129-132','205907','07-Jul-22','06-Jul-23','0 - 6 inch','0  inch','0 inch','0.0001','1 Year','CC/2022/07/01603','Okay to be used ','Digital vernier Caliper'),(28,'ET-SRP-60','Analog Inside Micrometer','Mitutoyo ','137-212','5002181','07-Jul-22','06-Jul-23','2-12 inch','2 inch','2 inch','2.001','1 Year','CC/2022/07/01605','Okay to be used ','Slip Gauge Block Set'),(44,'ET-SRP-71','Coating Thickness Gauge','(Defelsko) Positector','Positector 6000 FS Probe','FS 397795','02-Aug-22','01-Aug-23','0-1500 µm','66.58 µm','68 µm','67.91 µm','1 Year','0386-22.01','Okay to be used ','Ultrasonic Thickness Gauge'),(15,'ET-SRP-64','Dial Indicator','Mitutoyo','2416A','BHGM08','21-Jan-22','20-Jan-23','0 – 1 inch','0 inch','0  inch','0.001 inch','1 Year','22010238','Okay to be used ','Gauge Block Set'),(69,'ET-156','Dial Thermo','02-','HTS','FIG-1','12/12/2000','12/12/2000','120','120','356.32 lb ft','356.32 lb ft','41.2','023','okay to be used','Torque '),(64,'ET-SRP-09','Dial Thermometer','HTS-DT-01','ARTHERMO','FIG.569 A Ø 50','02-Aug-22','01-Aug-23','0-120 °C','0 °C','0.023 °C','1.19 °C','1 Year','A0386-22.17','Okay to be used ','Dry Block Calibrator'),(38,'ET-SRP-66','Digital Caliper','Mitutoyo ','CD-P6”S/500-752-20','B22055568','23-Jun-22','22-Jun-23','0-150 mm','0 mm','0  mm','0.02 mm','1 Year','GCLC/63278.02/2022','Okay to be used ','Gauge Block Set'),(39,'ET-SRP-67','Digital Depth Gauge','Mitutoyo ','VDC-6”AX/571-211-30','7260','23-Jun-22','22-Jun-23','0-150 mm','0 mm','0 mm','0.02 mm','1 Year','GCLC/63278.03/2022','Okay to be used ','Gauge Block Set GTS-337'),(40,'ET-SRP-68','Digital Outside Micrometer','Mitutoyo ','MDC-1”SXF/293-832-30','71058234','23-Jun-22','22-Jun-23','0-1 inch','0 inch','0 inch','0.0001 inch','1 Year','GCLC/63278.04/2022','Okay to be used ','Gauge Block Set GTS-337'),(30,'ET-SRP-61','Feeler Gauge','Precision','-','22-1821-01','07-Jul-22','06-Jul-23','0.002-0.040 inch','0.002 inch','0.002 inch','0.002','1 Year','CC/2022/07/01604','Okay to be used ','Digital vernier Caliper'),(16,'ET-SRP-45','Load Cell','Transducer Techniques','THC-5K-T','413837','01-Apr-22','01-Apr-23','0-5000 lbs.','1.473','1.1475','0.6548','1 Year','140698','Okay to be used. ','Transducer Techniques'),(45,'ET-SRP-72','Measuring Tape','Stanley','-','MT-0372A-01','02-Aug-22','01-Aug-23','0-2 m','1000 mm','1000 mm','1000 mm','1 Year','0386-22.02','Okay to be used ','Steel rule'),(50,'ET-SRP-77','Right Angle','Stanley','-','RA-0372A-01','02-Aug-22','01-Aug-23','6 °','-','-','-','1 Year','0386-22.07','Okay to be used ','Gauge Block Set'),(53,'ET-SRP-80','Steel Scale','Claeke','-','SS-0372A-01','02-Aug-22','01-Aug-23','2 meter','1000 mm','1000 mm','1000 mm','1 Year','0386-22.10','Okay to be used ','Steel rule'),(43,'ET-SRP-70','Telescopic Gauge','KENNEDY','KEN-518-1180K','63278-TG-01','23-Jun-22','22-Jun-23','8-54 mm','8 mm','-','-','1 Year','GCLC/63278.06/2022','Okay to be used ','Gauge Block Set GTS-337'),(1,'ET-SRP-07','Torque Wrench ','Proto ','6016C','DRK87266','12 Jan 2022 ','11 Jan 2023  ','30 – 150 ft lb','90 ft lb ','91.15 ft lb ','93.60 ft lb ','1 Year','GCLC/50400.01/2022 ','Okay to be used ','Torque Transducer '),(49,'ET-SRP-76','Vernier Caliper','Stainless','-','VC-0372A-01','02-Aug-22','01-Aug-23','0-200 mm','0 mm','0 mm','0 mm','1 Year','0386-22.06','Okay to be used ','Gauge Block Set'),(55,'ET-SRP-82','Welding Machine-Multi Process','Lincoln Electric','OPTIMARC®CV/CC500i','Z1160201042','02-Aug-22','01-Aug-23','50-500 A','50 A','50.4 A','51 A','1 Year','0386-22.12','Okay to be used ','Clamp Meter');
/*!40000 ALTER TABLE `tools_register` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-05-30 17:48:57
