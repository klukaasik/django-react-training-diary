-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: localhost    Database: api
-- ------------------------------------------------------
-- Server version	8.0.28

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
-- Table structure for table `api_traininghistory`
--

DROP TABLE IF EXISTS `api_traininghistory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `api_traininghistory` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(200) NOT NULL,
  `date` date NOT NULL,
  `start_time` time(6) NOT NULL,
  `end_time` time(6) NOT NULL,
  `user_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `api_traininghistory_user_id_9a1aa2c9_fk_api_customuser_id` (`user_id`),
  CONSTRAINT `api_traininghistory_user_id_9a1aa2c9_fk_api_customuser_id` FOREIGN KEY (`user_id`) REFERENCES `api_customuser` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=119 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `api_traininghistory`
--

LOCK TABLES `api_traininghistory` WRITE;
/*!40000 ALTER TABLE `api_traininghistory` DISABLE KEYS */;
INSERT INTO `api_traininghistory` VALUES (3,'sdsadsfsdf','2022-02-10','15:39:31.000000','15:39:32.000000',5),(6,'hehe','2022-02-13','20:31:44.000000','20:31:45.000000',7),(8,'siema','2022-02-14','14:20:00.000000','14:30:00.000000',7),(110,'bgtfc','0111-11-11','03:12:00.000000','05:12:00.000000',1),(111,'bg34redc','1111-11-11','11:11:00.000000','22:22:00.000000',1),(112,'dfgb','1234-01-11','11:11:00.000000','11:11:00.000000',1),(113,'HEHE','1111-11-11','11:11:00.000000','11:11:00.000000',1),(114,'DZIEKI DZIALA','0001-11-11','11:11:00.000000','11:01:00.000000',1),(116,'WITAM','2022-02-18','14:00:00.000000','16:00:00.000000',1),(117,'WITAM','1111-11-11','12:45:00.000000','15:32:00.000000',5),(118,'TRENING NÓG','2022-02-18','15:00:00.000000','17:00:00.000000',1);
/*!40000 ALTER TABLE `api_traininghistory` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-02-18 15:55:57
