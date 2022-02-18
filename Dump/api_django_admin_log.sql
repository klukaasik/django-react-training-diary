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
-- Table structure for table `django_admin_log`
--

DROP TABLE IF EXISTS `django_admin_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_admin_log` (
  `id` int NOT NULL AUTO_INCREMENT,
  `action_time` datetime(6) NOT NULL,
  `object_id` longtext,
  `object_repr` varchar(200) NOT NULL,
  `action_flag` smallint unsigned NOT NULL,
  `change_message` longtext NOT NULL,
  `content_type_id` int DEFAULT NULL,
  `user_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `django_admin_log_content_type_id_c4bce8eb_fk_django_co` (`content_type_id`),
  KEY `django_admin_log_user_id_c564eba6_fk_api_customuser_id` (`user_id`),
  CONSTRAINT `django_admin_log_content_type_id_c4bce8eb_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`),
  CONSTRAINT `django_admin_log_user_id_c564eba6_fk_api_customuser_id` FOREIGN KEY (`user_id`) REFERENCES `api_customuser` (`id`),
  CONSTRAINT `django_admin_log_chk_1` CHECK ((`action_flag` >= 0))
) ENGINE=InnoDB AUTO_INCREMENT=50 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_admin_log`
--

LOCK TABLES `django_admin_log` WRITE;
/*!40000 ALTER TABLE `django_admin_log` DISABLE KEYS */;
INSERT INTO `django_admin_log` VALUES (1,'2022-02-10 12:37:52.781661','1','siady',1,'[{\"added\": {}}]',7,1),(2,'2022-02-10 12:38:15.523840','2','hipthrusty',1,'[{\"added\": {}}]',7,1),(3,'2022-02-10 12:38:31.145240','3','tak',1,'[{\"added\": {}}]',7,1),(4,'2022-02-10 12:38:53.750284','1','Kamil Łukasik',1,'[{\"added\": {}}]',8,1),(5,'2022-02-10 12:41:39.601312','2','neith',1,'[{\"added\": {}}]',8,1),(6,'2022-02-10 12:42:21.174656','1','koks trening',1,'[{\"added\": {}}]',9,1),(7,'2022-02-10 12:51:42.925659','2','siema',1,'[{\"added\": {}}]',6,1),(8,'2022-02-10 12:52:15.948733','3','ale mi sie nie chce tego robic',1,'[{\"added\": {}}]',8,1),(9,'2022-02-10 12:52:49.517178','2','ale trening',1,'[{\"added\": {}}]',9,1),(10,'2022-02-10 14:00:14.026082','1','koks trening',2,'[{\"changed\": {\"fields\": [\"Statistics\"]}}]',9,1),(11,'2022-02-10 15:30:57.733803','1','1b7186054c7e2ec65b5a0373340c281ad2446ec6',1,'[{\"added\": {}}]',11,1),(12,'2022-02-10 15:39:35.446240','3','sdsads',1,'[{\"added\": {}}]',9,1),(13,'2022-02-10 15:39:45.092411','1','koks trening',2,'[{\"changed\": {\"fields\": [\"Statistics\"]}}]',9,1),(14,'2022-02-11 16:41:58.346621','4','skoki ze sztangom',1,'[{\"added\": {}}]',7,1),(15,'2022-02-13 14:32:23.452225','4','ale mi sie nie chce tego robic',1,'[{\"added\": {}}]',9,1),(16,'2022-02-13 17:52:29.694631','5','siema',1,'[{\"added\": {}}]',9,1),(17,'2022-02-13 18:34:10.451184','5','siema',2,'[{\"changed\": {\"fields\": [\"Statistics\"]}}]',9,1),(18,'2022-02-13 18:37:55.817111','3','ale mi sie nie chce tego robic',2,'[{\"changed\": {\"fields\": [\"History\"]}}]',8,1),(19,'2022-02-13 18:38:03.943750','2','neith',2,'[{\"changed\": {\"fields\": [\"History\"]}}]',8,1),(20,'2022-02-13 18:38:08.670961','1','Kamil Łukasik',2,'[{\"changed\": {\"fields\": [\"History\"]}}]',8,1),(21,'2022-02-13 20:31:45.791445','6','hehe',1,'[{\"added\": {}}]',9,1),(22,'2022-02-14 18:22:55.378676','3','ale mi sie nie chce tego robic',2,'[{\"changed\": {\"fields\": [\"History\"]}}]',8,1),(23,'2022-02-14 18:23:17.931882','1','Kamil Łukasik',2,'[]',8,1),(24,'2022-02-14 18:24:47.470382','2','neith',2,'[{\"changed\": {\"fields\": [\"History\"]}}]',8,1),(25,'2022-02-14 18:25:17.982002','2','neith',2,'[{\"changed\": {\"fields\": [\"History\"]}}]',8,1),(26,'2022-02-14 18:31:02.000518','4','siady',1,'[{\"added\": {}}]',8,1),(27,'2022-02-14 18:31:15.190593','3','sdsads',2,'[{\"changed\": {\"fields\": [\"User\"]}}]',9,1),(28,'2022-02-14 18:39:46.182133','7','no witam',1,'[{\"added\": {}}]',9,1),(29,'2022-02-14 18:40:09.474277','5','no witam',1,'[{\"added\": {}}]',8,1),(30,'2022-02-14 18:40:51.955586','4','siady',2,'[{\"changed\": {\"fields\": [\"History\"]}}]',8,1),(32,'2022-02-14 18:54:03.726802','7','no witam',3,'',9,1),(33,'2022-02-14 19:00:20.690765','8','siema',1,'[{\"added\": {}}]',9,1),(34,'2022-02-14 19:35:26.616646','9','sdasdasd',1,'[{\"added\": {}}]',9,1),(35,'2022-02-14 19:35:59.595101','10','asd',1,'[{\"added\": {}}]',9,1),(36,'2022-02-14 19:36:08.459266','11','asda',1,'[{\"added\": {}}]',9,1),(37,'2022-02-14 19:36:28.628631','6','aaaa',1,'[{\"added\": {}}]',8,1),(38,'2022-02-14 19:36:39.619560','7','aaa',1,'[{\"added\": {}}]',8,1),(39,'2022-02-14 19:36:59.233911','8','ale trening',1,'[{\"added\": {}}]',8,1),(40,'2022-02-15 12:50:59.239003','11','apdejcik',2,'[{\"changed\": {\"fields\": [\"Name\"]}}]',9,1),(41,'2022-02-16 16:26:27.678736','10','plecy',2,'[{\"changed\": {\"fields\": [\"Type\"]}}]',7,1),(42,'2022-02-16 16:26:47.419167','12','makabra',2,'[{\"changed\": {\"fields\": [\"Type\"]}}]',7,1),(43,'2022-02-16 16:27:08.950477','4','skoki ze sztangom',2,'[{\"changed\": {\"fields\": [\"Type\"]}}]',7,1),(44,'2022-02-16 16:27:13.762420','10','plecy',2,'[{\"changed\": {\"fields\": [\"Type\"]}}]',7,1),(45,'2022-02-16 16:27:19.997675','2','hipthrusty',2,'[{\"changed\": {\"fields\": [\"Type\"]}}]',7,1),(46,'2022-02-16 16:27:28.910177','1','siady',2,'[{\"changed\": {\"fields\": [\"Type\"]}}]',7,1),(47,'2022-02-16 16:27:38.205976','13','aerovic',1,'[{\"added\": {}}]',7,1),(48,'2022-02-16 16:27:54.545886','14','stretch',1,'[{\"added\": {}}]',7,1),(49,'2022-02-16 16:33:28.423022','15','siema',1,'[{\"added\": {}}]',7,1);
/*!40000 ALTER TABLE `django_admin_log` ENABLE KEYS */;
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
