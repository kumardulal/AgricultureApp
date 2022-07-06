-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 04, 2022 at 04:27 AM
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
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `userid` int(20) NOT NULL,
  `fullname` varchar(50) NOT NULL,
  `phonenumber` varchar(10) NOT NULL,
  `fulladdress` varchar(20) NOT NULL,
  `usertype` varchar(20) NOT NULL,
  `userfield` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL,
  `userbio` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`userid`, `fullname`, `phonenumber`, `fulladdress`, `usertype`, `userfield`, `password`, `userbio`) VALUES
(1, 'Pradip Fuyal', '984458457', 'kathmandu road galli', 'Enterprise', 'Others', 'pradip', ''),
(6, 'Ganesh Dulal', '9844042582', 'sindhuli, Nepl', 'Farmer', 'Animal husbandry ', 'ganesh', ''),
(13, 'Yogesh Thapa', '9741667448', 'kathmandu bazar', 'Farmer', 'Horticulture', 'yogesh', ''),
(14, 'Kumar Dulal', '974166', 'Madhutar,sindhuli', 'Farmer', 'Animal Husbandary', 'kumar', ''),
(15, 'pradip Dai', '9844042883', 'ktm', 'Enterprise', 'Horticulture', '9844', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`userid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `userid` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
