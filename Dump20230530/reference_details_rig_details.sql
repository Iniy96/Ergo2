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
-- Table structure for table `rig_details`
--

DROP TABLE IF EXISTS `rig_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rig_details` (
  `s_no` int NOT NULL AUTO_INCREMENT,
  `rig_name` varchar(50) DEFAULT NULL,
  `short_name` varchar(50) DEFAULT NULL,
  `customer_name` varchar(50) DEFAULT NULL,
  `details` varchar(50) DEFAULT NULL,
  `design` varchar(50) DEFAULT NULL,
  `location` varchar(50) DEFAULT NULL,
  `hull_no` varchar(50) DEFAULT NULL,
  `design_2` varchar(50) DEFAULT NULL,
  `new_group` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`s_no`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rig_details`
--

LOCK TABLES `rig_details` WRITE;
/*!40000 ALTER TABLE `rig_details` DISABLE KEYS */;
INSERT INTO `rig_details` VALUES (1,'Compact_Driller','CMD','Shelf_Drilling','View_Details','MLT_116C','Oman','216','Letourneau','116-C'),(2,'Compact_Driller','CMD','Shelf-Drilling','View_details','MLT 82-SD','Nigeria','148456','82SD','82-SD-C'),(3,'BAL','BAL','Shelf-Drilling','view_details','MLT 82-SD-C','oman','71','Baker Marine','82-SD-C'),(4,'KMN','KMN','Shelf-Drilling','view_details','MLT 82-SD-C','USA','71','Leteourneaue','82-SD-C'),(5,'Trident16','T16','Shelf-Drilling','View-details','Modec 300 C38','Egypt','NA','Mitsui Modec','300-C-38'),(6,'Valaris 141','Valaris 141 ','Valaris','view_details','LeTourneau Super 116E ','Saudi Arabia','285','Letourneau','Super 116E'),(11,'AD1','AD1','Shelf-Drilling','view_details','MLT 82-SD-C','oman','71','MLT Super 116 E','82-SD-C'),(12,'SDR','SDR','Shelf-Drilling','view_details','MLT 82-SD-C','oman','71','LeTourneau Super 116-C','82-SD-C'),(14,'T08','T08','Shelf-Drilling','view_details','MLT D-C','india','71','Keppel FELS N-Class','82-C'),(15,'Stavanger','Stavanger','Shelf-Drilling','view-details','MLT 82-SDC','Oman','174656','82 SDC','82-SD');
/*!40000 ALTER TABLE `rig_details` ENABLE KEYS */;
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
