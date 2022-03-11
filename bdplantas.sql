-- phpMyAdmin SQL Dump
-- version 4.9.7
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3307
-- Tiempo de generación: 11-03-2022 a las 19:54:35
-- Versión del servidor: 10.5.13-MariaDB
-- Versión de PHP: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `bdplantas`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `altura_plantas`
--

DROP TABLE IF EXISTS `altura_plantas`;
CREATE TABLE IF NOT EXISTS `altura_plantas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_planta` varchar(50) NOT NULL,
  `alt_total` decimal(8,2) DEFAULT NULL,
  `alt_fuste` decimal(8,2) DEFAULT NULL,
  `alt_com` decimal(8,2) DEFAULT NULL,
  `alt_tacon` decimal(8,2) DEFAULT NULL,
  `fecha_alt` date NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_planta` (`id_planta`,`fecha_alt`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `altura_plantas`
--

INSERT INTO `altura_plantas` (`id`, `id_planta`, `alt_total`, `alt_fuste`, `alt_com`, `alt_tacon`, `fecha_alt`) VALUES
(3, 'E2021', '545.21', '54.00', '23.00', '45.00', '2021-12-12'),
(4, 'E2024', '545.21', '54.00', '23.00', '45.00', '2021-12-12');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `fam_plantas`
--

DROP TABLE IF EXISTS `fam_plantas`;
CREATE TABLE IF NOT EXISTS `fam_plantas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  `descripcion` tinytext DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `nombre` (`nombre`)
) ENGINE=MyISAM AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `fam_plantas`
--

INSERT INTO `fam_plantas` (`id`, `nombre`, `descripcion`) VALUES
(1, 'MYRTACEAE', 'familia de plantas arbóreas, generalmente perennifolias cítrico y aromáticas, perteneciente al orden Myrtales.'),
(2, 'MALVACEAE', 'familia de plantas arbóreas, generalmente perennifolias cítrico y aromáticas, perteneciente al orden Myrtales.'),
(3, 'MORACEAE', ' familia del orden Rosales. Pueden ser árboles o arbustos, tener la hoja caduca o perenne, y raramente son hierbas, monoicas o dioicas.'),
(4, 'LAURACEAE', ' familia del orden Rosales. Pueden ser árboles o arbustos, tener la hoja caduca o perenne, y raramente son hierbas, monoicas o dioicas.'),
(8, 'SOLANACEAE', ' familia del orden Rosales. Pueden ser árboles o arbustos, tener la hoja caduca o perenne, y raramente son hierbas, monoicas o dioicas.'),
(10, 'E2020', NULL),
(11, 'E2021', NULL),
(12, 'E2023', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `local_plantas`
--

DROP TABLE IF EXISTS `local_plantas`;
CREATE TABLE IF NOT EXISTS `local_plantas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_planta` varchar(50) NOT NULL,
  `latitud` varchar(30) DEFAULT NULL,
  `longitud` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `latitud` (`latitud`,`longitud`),
  KEY `id_planta` (`id_planta`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `local_plantas`
--

INSERT INTO `local_plantas` (`id`, `id_planta`, `latitud`, `longitud`) VALUES
(3, 'E2021', '645454564546454', '34434533454'),
(4, 'E2021', '64545456454', '3443433454'),
(5, 'E2021', '64545456454', '34434533454'),
(6, 'E2021', '5454564546454', '34434533454'),
(7, 'E2021', '5454564546454', '4334434533454');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `plantas`
--

DROP TABLE IF EXISTS `plantas`;
CREATE TABLE IF NOT EXISTS `plantas` (
  `codigo` varchar(50) NOT NULL,
  `nombre_comun` varchar(100) NOT NULL,
  `nombre_cient` varchar(100) NOT NULL,
  `familia` int(11) NOT NULL,
  `imagen` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`codigo`),
  UNIQUE KEY `codigo` (`codigo`),
  UNIQUE KEY `nombre_cient` (`nombre_cient`),
  KEY `familia` (`familia`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `plantas`
--

INSERT INTO `plantas` (`codigo`, `nombre_comun`, `nombre_cient`, `familia`, `imagen`) VALUES
('E2323', 'cafe', 'hemileya bastatrix', 0, NULL),
('E2324', 'AGUAJE', 'VASTODRUM', 0, NULL),
('E2023', 'palo blanco', 'NARSTIDUM', 2, 'default_plantas.png');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `vol_plantas`
--

DROP TABLE IF EXISTS `vol_plantas`;
CREATE TABLE IF NOT EXISTS `vol_plantas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_alt_plant` int(11) NOT NULL,
  `dap` decimal(8,2) DEFAULT NULL,
  `factor_forma` decimal(8,2) DEFAULT NULL,
  `fecha_vol` date NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_alt_plant` (`id_alt_plant`,`fecha_vol`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `vol_plantas`
--

INSERT INTO `vol_plantas` (`id`, `id_alt_plant`, `dap`, `factor_forma`, `fecha_vol`) VALUES
(1, 3, '12.21', '12.00', '2021-12-12');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
