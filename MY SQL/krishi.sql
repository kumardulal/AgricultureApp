-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 12, 2022 at 11:08 PM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 7.3.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `agriculturedb`
--

-- --------------------------------------------------------

--
-- Table structure for table `krishi`
--

CREATE TABLE `krishi` (
  `userid` int(10) NOT NULL,
  `firstname` varchar(20) NOT NULL,
  `lastname` varchar(20) NOT NULL,
  `phonenumber` varchar(15) NOT NULL,
  `tole` varchar(20) NOT NULL,
  `napagapa` varchar(30) NOT NULL,
  `district` varchar(30) NOT NULL,
  `province` varchar(25) NOT NULL,
  `usertype` varchar(10) NOT NULL,
  `password` varchar(20) NOT NULL,
  `dalahan` varchar(2) NOT NULL,
  `tarkari` varchar(2) NOT NULL,
  `chau` varchar(2) NOT NULL,
  `telhan` varchar(2) NOT NULL,
  `gai` varchar(2) NOT NULL,
  `vaisi` varchar(2) NOT NULL,
  `bakhra` varchar(2) NOT NULL,
  `khukhura` varchar(2) NOT NULL,
  `kukur` varchar(2) NOT NULL,
  `macha` varchar(2) NOT NULL,
  `others` varchar(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `krishi`
--

INSERT INTO `krishi` (`userid`, `firstname`, `lastname`, `phonenumber`, `tole`, `napagapa`, `district`, `province`, `usertype`, `password`, `dalahan`, `tarkari`, `chau`, `telhan`, `gai`, `vaisi`, `bakhra`, `khukhura`, `kukur`, `macha`, `others`) VALUES
(1, 'Sagun', 'Rayamajhi', '9844042581', 'madhutar', 'kamalamai', 'sindhuli', 'Bagmati', 'कृषक', '', '1', '0', '1', '0', '0', '0', '0', '1', '0', '0', '0'),
(2, 'Suman ', 'Magar', '9844042883', 'madhutar', 'kamalamai', 'sindhuli', 'bagmati', 'कृषक', '', '1', '0', '1', '1', '1', '1', '1', '1', '1', '1', '0'),
(3, 'fsdfsdf', 'dsfdsf', '4444444444', 'fdsf', 'fdsfsdfdsfds', 'fdffdsfdsf', 'fdsfds', 'कृषक', 'fdsfsd', '0', '0', '0', '0', '1', '0', '0', '1', '0', '0', '0'),
(4, 'kdkdkd', 'fgdfgdfsfgdf', '9844042585', 'fsdfsdf', 'fdsfds', 'fdsfds', 'fdsfsdf', 'कृषक', 'kdkdkd', '0', '0', '1', '0', '0', '1', '0', '1', '0', '0', '0'),
(5, 'Pradip ', 'Fuyal', '9844042525', 'anythng', 'kamalmai', 'sindhuli', 'bagmati', 'कृषक', 'pradip', '0', '1', '0', '1', '1', '0', '0', '1', '0', '0', '0'),
(6, 'dfgfdg', 'fgfgf', 'gggggggggg', 'gfgfdgfd', 'gfdgfd', 'gfdgfdgfd', 'gfdgdfg', 'कृषक', 'gfdgfdg', '0', '0', '0', '0', '0', '0', '1', '1', '0', '0', '0');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `krishi`
--
ALTER TABLE `krishi`
  ADD PRIMARY KEY (`userid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `krishi`
--
ALTER TABLE `krishi`
  MODIFY `userid` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
