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
-- Table structure for table `api_exercise`
--

DROP TABLE IF EXISTS `api_exercise`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `api_exercise` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(200) NOT NULL,
  `description` longtext NOT NULL,
  `type` varchar(100) NOT NULL,
  `body_part` varchar(100) NOT NULL,
  `imagepath` longtext NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `api_exercise`
--

LOCK TABLES `api_exercise` WRITE;
/*!40000 ALTER TABLE `api_exercise` DISABLE KEYS */;
INSERT INTO `api_exercise` VALUES (1,'Przysiad','Aby prawidłowo wykonywać przysiady, potrzebna jest znajomość techniki. Źle robione mogą skutkować przeciążeniem stawów kolanowych, nadwyrężeniem kręgosłupa czy nawet bolesną kontuzją.','lower_part','Wielostawowe','bieznia'),(2,'Hip thrust','Ćwiczenie na mięśnie pośladkowe, ze szczególnym uwzględnieniem mięśnia pośladkowego wielkiego. Do pracy zaangażuje się też pośladkowy średni ale jego wpływ na wygląd nie jest tak duży. Hip thrust to ćwiczenie wielostawowe, więc do pracy włącza się synchronicznie kilka grup mięśniowych.','lower_part','Pośladki, staw skokowy, wielostawowe','./images/hipthrust.jpg'),(4,'Martwy ciąg','Martwy ciąg to jedno z najskuteczniejszych ćwiczeń budujących siłę i ogólną sprawność. To jednocześnie ćwiczenie bardzo kompleksowe, angażujące do pracy dużą grupę mięśni a w związku z tym – ćwiczenie, które po prostu łatwo wykonać źle.','lower_part','Wielostawowe',''),(10,'Deska','Ćwiczenie deski (plank) przynosi szybkie i niesamowite efekty wizualne, z tego względu, że do pracy zostaje zaangażowanych wiele partii mięśniowych – mięśnie brzucha, pleców, ramion oraz nóg.','waist','Brzuch',''),(12,'Facepull','Face pulls, czyli przyciąganie linki wyciągu górnego do twarzy, to ćwiczenie, które pozwala wzmocnić tylny akton mięśni naramiennych.','upper_part','Barki, plecy','src\\images\\facepull.jpg'),(13,'Skakanka','Sposobów skakania na skakance jest wiele, więc wybieramy ten, który najbardziej nam odpowiada. Należy wykonać obwody składające się z 15 sekund skakania i 30 sekund odpoczynku lub cały czas wolno skakać, tak by utrzymać odpowiednie tętno.','aerobic','',''),(14,'Słonik','Pozycja wyjściowa: stojąca, nogi w lekkim rozkroku, tułów pochylamy w przód, dłonie dotykają stopy.','stretching','',''),(15,'Wyciskanie żołnierskie','Wyciskanie żołnierskie to jedno z najlepszych ćwiczeń na masę, które angażuje mięśnie naramienne oraz stabilizujące. Wyciskanie żołnierskie można wykonywać stojąc, na siedząco, ze sztangą, z kettlebells, z hantlami, a każdy wariant nieco inaczej wpływa na rozbudowę sylwetki','upper_part','Ramiona, triceps, klatka',''),(16,'Skłony skośne w siadzie rozkrocznym','Skłon do prawej nogi, do środka, do lewej nogi, powrót do pozycji wyjściowej.','stretching','',''),(17,'Rowerek','Rowerek stacjonarny.','aerobic','',''),(18,'Wyciskanie sztangi','Wyciskanie sztangi na ławce poziomej to jedno z popularniejszych ćwiczeń, które wykonywane jest na siłowniach. Najważniejsze będzie uzyskanie właściwej pozycji, co nie jest prostym zadaniem. Należy pamiętać o kilku elementach, takich jak chociażby ustawienie łopatek, odcinka piersiowego i lędźwiowego kręgosłupa, nadgarstków, stóp, oraz nóg. Nieprawidłowość w którymkolwiek z powyżej wymienionych elementów będzie powodem zepsucia pozycji.','upper_part','Mięśnie piersiowe',''),(19,'Rozpiętki','Rozpiętki są wartościowym ćwiczeniem fizycznym, ale powinny być traktowane jako dodatek do treningu, a nie jego główna część. Dość mocno angażują klatkę piersiową i silnie działają na zwiększenie jej siły w rozciągnięciu, dlatego mogą być nieco kontuzjogennym ćwiczeniem, zwłaszcza dla osób początkujących.','upper_part','Mięśnie piersiowe',''),(20,'Podciąganie na drążku','Podciąganie na drążku to ćwiczenie bardzo uniwersalne. Stanowi jedno z najważniejszych ćwiczeń kalistenicznych i siłowych zarazem. W jego trakcie wzmacniamy przede wszystkim najszersze grzbietu, lecz również chwyt oraz mięśnie stabilizujące.','upper_part','Mięśnie piersiowe, ręce, plecy',''),(21,'Pompki','Pompki to świetne ćwiczenie na klatkę piersiową, które dodatkowo oddziałuje na biceps i mięśnie stabilizujące. Ważne, by robić pompki prawidłowo, z zachowaniem neutralnej krzywizny kręgosłupa - tylko wówczas ćwiczenie to przyniesie oczekiwane rezultaty.','upper_part','Mięśnie piersiowe, biceps',''),(22,'Crunches','Podstawowe ćwiczenie na mięśnie brzucha, wokół którego powstało wiele mitów i legend. Nieprawidłowo wykonywane może prowadzić do kontuzji lub dolegliwości bólowych kręgosłupa lędźwiowego lub szyjnego.','waist','Brzuch',''),(23,'Heel touches','Do wykonania tego ćwiczenia nie potrzebujesz żadnego sprzętu. Przystępując do tego ćwiczenia: połóż się na podłodze na plecach z nogami ugiętymi w kolanach do kąta 90 stopni i stopami ułożonymi płasko na podłodze.','waist','Brzuch',''),(24,'Nożyce','Nożyce angażują partie mięśniowe brzucha i ud, a także wzmacniają cały kręgosłup. Poprawnie wykonywane mogą dawać zadowalające efekty w niedługim czasie.','waist','Brzuch',''),(25,'Dzień dobry','\"Dzień dobry\" z ang. Good Mornings exercise, to ćwiczenie bardzo mocno angażujące do pracy całą grupę tylnej części ud (mięśnie dwugłowe ud, m. półbłoniasty, połścięgnisty), która jest fajnie rozciągana i mięśnie pośladkowe, te z kolei wraz z prostownikami grzbietu, przy wyproście przejmują największe obciążenie.','lower_part','Pośladki, mięśnie dwugłowe',''),(26,'Glute bridge','\"Glute bridge\" aktywuje do pracy pośladek i mięsień czworogłowy uda. To ćwiczenie świetnie wzmacnia pośladki i dolną partię pleców - mięśnie które odpowiadają za prawidłową postawę ciała. Choć \"glute bridge\" celuje w pośladki, aktywuje także core, czyli mięśnie głębokie, które podtrzymują kręgosłup i wzmacniają cały gorset.','lower_part','Pośladki, mięśnie głębokie',''),(27,'Bieg na bieżni','Bieżnia stacjonarna - tempo/wznos zależny od preferencji.','aerobic','',''),(28,'Wykrok do przodu','Pozycja wyjściowa: Stanie w szerokim rozkroku, jedna noga zgięta w kolanie ustawiona do przodu; tułów wyprostowany, lekko pochylony do przodu.','stretching','',''),(29,'Rozciąganie przedramienia','Pozycja wyjściowa: Stojąca, nogi w lekkim rozkroku.','stretching','','');
/*!40000 ALTER TABLE `api_exercise` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-02-18 15:55:59
