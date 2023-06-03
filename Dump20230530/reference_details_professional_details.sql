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
-- Table structure for table `professional_details`
--

DROP TABLE IF EXISTS `professional_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `professional_details` (
  `S_No` int NOT NULL AUTO_INCREMENT,
  `Customer_Name` varchar(50) DEFAULT NULL,
  `Designation` varchar(50) DEFAULT NULL,
  `Signature` varchar(50) DEFAULT NULL,
  `Components` varchar(50) DEFAULT NULL,
  `Rigs` varchar(50) DEFAULT NULL,
  `jackingExperience` varchar(255) DEFAULT NULL,
  `skiddingExperience` varchar(255) DEFAULT NULL,
  `craneExperience` varchar(45) DEFAULT NULL,
  `upcomingProjectDuration` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`S_No`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `professional_details`
--

LOCK TABLES `professional_details` WRITE;
/*!40000 ALTER TABLE `professional_details` DISABLE KEYS */;
INSERT INTO `professional_details` VALUES (1,'Tejpal Singh Chattwal','Supervisor','signature','jacking','cmd','3','26_days_cmd',NULL,NULL),(2,'Shivam','Technician','signature2','crane','MLT','17','17/11/1997-07/07/1998_JKSR',NULL,NULL),(3,'Pramod Krishna Murthy','Supervisior','sinature3','crane','CMM','4','29/12/2019-29/12/2026_CDD',NULL,NULL),(4,'aditya roy','Supervisior','sinature4','jacking','JK','17','29/12/2019-29/12/2026_JK',NULL,NULL);
/*!40000 ALTER TABLE `professional_details` ENABLE KEYS */;
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
