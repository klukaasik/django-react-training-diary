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
-- Table structure for table `api_customuser`
--

DROP TABLE IF EXISTS `api_customuser`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `api_customuser` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `password` varchar(128) NOT NULL,
  `last_login` datetime(6) DEFAULT NULL,
  `is_superuser` tinyint(1) NOT NULL,
  `username` varchar(150) NOT NULL,
  `first_name` varchar(150) NOT NULL,
  `last_name` varchar(150) NOT NULL,
  `email` varchar(254) NOT NULL,
  `is_staff` tinyint(1) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `date_joined` datetime(6) NOT NULL,
  `weight` decimal(4,1) DEFAULT NULL,
  `height` decimal(4,1) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `api_customuser`
--

LOCK TABLES `api_customuser` WRITE;
/*!40000 ALTER TABLE `api_customuser` DISABLE KEYS */;
INSERT INTO `api_customuser` VALUES (1,'pbkdf2_sha256$320000$80hipkHF7a4DpV5fmMheZy$EHW7sX0h8yFzku5ywuV5wprVJfE+vb2U4o3VD1xsfbo=','2022-02-13 14:31:59.524290',1,'neith','','','',1,1,'2022-02-10 12:37:25.963854',NULL,NULL),(2,'siema1234',NULL,0,'siema','','','',0,1,'2022-02-10 12:51:06.000000',42.0,153.0),(3,'siema12345',NULL,0,'koks','','','',0,1,'2022-02-10 16:17:50.960403',NULL,NULL),(5,'pbkdf2_sha256$320000$QlHmBaeHc7SBMf2hIqWH81$yy0zLnZTgYDPluUi2aTMngmGybji7KDwXhyVCSiL0lc=',NULL,0,'koks99','','','',0,1,'2022-02-10 16:27:24.798311',NULL,NULL),(7,'pbkdf2_sha256$320000$2f7jAEuCt5wzsMtCfgRnPU$0a7B7MtICCmf4iMtMOItsqaGKXfFvcN0VdByaGDiFuU=',NULL,0,'newuser11','','','',0,1,'2022-02-12 18:15:12.402477',NULL,NULL),(8,'pbkdf2_sha256$320000$EOi4xNOzEnMv1xPK2E79cG$zsNPdSQJcUt09kOuyDqYcBb3SCM3KeRqhR2S6gj0Roc=',NULL,0,'qiwofjdsnj','','','',0,1,'2022-02-12 18:23:41.016193',NULL,NULL),(9,'pbkdf2_sha256$320000$9Sd2M2oIBPQTwqpCBYyPV3$lsFr3cDJCLrIj0bB5E4eatRhaUR3lWmjr4zj2qcCZTA=',NULL,0,'dupa','','','',0,1,'2022-02-17 19:02:26.472905',NULL,NULL),(10,'pbkdf2_sha256$320000$MAWR3m5ld1wO28NG5nNRXp$AT8RyXmRXrpRBIXyosKUGgvq0/7CUc6/znPf18z/CMY=',NULL,1,'wikwi','','','',1,1,'2022-02-17 19:10:01.806668',NULL,NULL),(11,'pbkdf2_sha256$320000$WUUnWA4yBun6PwcGXMAxhf$+s2rLTFkVOlwZeLJC/4tjm+dyg7NZ/Qb0ytRaOI9TW0=',NULL,0,'kamilxd','','','',0,1,'2022-02-18 11:30:56.982455',NULL,NULL),(12,'pbkdf2_sha256$320000$UGzvSoDmkKV5lPmraithBh$KGpcpx+I59KyddV+Zx9o1NIRj3fxsH5qlKdwVgumrwg=',NULL,0,'witam','','','',0,1,'2022-02-18 13:42:01.219838',NULL,NULL),(13,'pbkdf2_sha256$320000$BqW6jxuFStD0PwtQzXF9FF$ZEMXQYCiBk8ZU/ehrU2NoXjhezLVqSLjO0hUVr2PNkU=',NULL,0,'witam1','','','',0,1,'2022-02-18 13:46:26.338797',NULL,NULL),(14,'pbkdf2_sha256$320000$VpbgJz7e2si1QiPlqFm7Ic$dmcqmso4vKCvc2g62brJC/6NtwirWo0QJBJcDJ590ZA=',NULL,0,'witam2','','','',0,1,'2022-02-18 13:58:28.001377',NULL,NULL);
/*!40000 ALTER TABLE `api_customuser` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-02-18 15:55:58
