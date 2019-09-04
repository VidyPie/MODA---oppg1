-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: vidypie.com.mysql.service.one.com:3306
-- Generation Time: 04. Sep, 2019 21:31 PM
-- Tjener-versjon: 10.3.17-MariaDB-1:10.3.17+maria~bionic
-- PHP Version: 7.2.19-0ubuntu0.18.04.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `vidypie_com`
--

-- --------------------------------------------------------

--
-- Tabellstruktur for tabell `ACCESS`
--

CREATE TABLE `ACCESS` (
  `ID` int(11) NOT NULL,
  `USERNAME` varchar(20) NOT NULL,
  `PASSWORD` varchar(20) NOT NULL,
  `PERMISSIONS` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dataark for tabell `ACCESS`
--

INSERT INTO `ACCESS` (`ID`, `USERNAME`, `PASSWORD`, `PERMISSIONS`) VALUES
(1, 'vidar', 'dHJvbW1lMTAwOQ==', 1);

-- --------------------------------------------------------

--
-- Tabellstruktur for tabell `ADVERT`
--

CREATE TABLE `ADVERT` (
  `TITLE` text NOT NULL,
  `IMAGE` text NOT NULL,
  `USERNAME` text NOT NULL,
  `TEXT` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dataark for tabell `ADVERT`
--

INSERT INTO `ADVERT` (`TITLE`, `IMAGE`, `USERNAME`, `TEXT`) VALUES
('Nesten ny sykkel', 'https://www.engrosservice.no/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/t/e/terrengsykkel6.jpg', 'vidypie_com', 'Selger nesten ny sykkel grunnet manglende interesse. '),
('Gammel bil', 'https://www.autolist.com/6tuem73u73an/3AMBy4a36bDgV70jbnscnH/6d1f978c7dbf5e72fa98f7b7d42cfc5d/get-rid-of-old-car-1166-image.jpg', 'vidarned', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\r\n\r\nAt vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.'),
('Steikepanne', 'https://i.ytimg.com/vi/Rbemzsgu16o/maxresdefault.jpg', 'vidarned', 'Selger dinna goe steikepanna. Nesten like god som ny. Kun seriøse henvendelser.');

-- --------------------------------------------------------

--
-- Tabellstruktur for tabell `Category`
--

CREATE TABLE `Category` (
  `Cat_ID` int(11) NOT NULL,
  `category` varchar(128) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dataark for tabell `Category`
--

INSERT INTO `Category` (`Cat_ID`, `category`) VALUES
(2, 'Sopp?'),
(3, 'Planter?'),
(4, 'Fugler?');

-- --------------------------------------------------------

--
-- Tabellstruktur for tabell `FANTUSERS`
--

CREATE TABLE `FANTUSERS` (
  `USERNAME` text NOT NULL,
  `PASSWORD` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dataark for tabell `FANTUSERS`
--

INSERT INTO `FANTUSERS` (`USERNAME`, `PASSWORD`) VALUES
('vidypie', 'test'),
('12345', '12345'),
('123456', '12345'),
('1234567', '12345'),
('12345678', '12345'),
('asdfasd', '12345'),
('wegfwgwg', '12345'),
('45678', '12345'),
('inge34', '12345'),
('tronderiklindgaard', 'tronderik'),
('vidarned', '12345');

-- --------------------------------------------------------

--
-- Tabellstruktur for tabell `IMAGE`
--

CREATE TABLE `IMAGE` (
  `ID` int(11) NOT NULL,
  `PATH` varchar(300) CHARACTER SET utf8 COLLATE utf8_unicode_520_ci NOT NULL,
  `CATEGORY` int(11) NOT NULL,
  `COMMENT` varchar(300) CHARACTER SET utf8 COLLATE utf8_unicode_520_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dataark for tabell `IMAGE`
--

INSERT INTO `IMAGE` (`ID`, `PATH`, `CATEGORY`, `COMMENT`) VALUES
(100000, 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Mel_Gibson_Cannes_2016_3.jpg/250px-Mel_Gibson_Cannes_2016_3.jpg', 0, 'en kommentar');

-- --------------------------------------------------------

--
-- Tabellstruktur for tabell `User`
--

CREATE TABLE `User` (
  `User_ID` int(11) NOT NULL,
  `Level` int(11) NOT NULL,
  `Userkey` varchar(42) NOT NULL,
  `Username` varchar(30) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dataark for tabell `User`
--

INSERT INTO `User` (`User_ID`, `Level`, `Userkey`, `Username`) VALUES
(1, 2, '*23AE809DDACAF96AF0FD78ED04B6A265E05AA257', 'Admin');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `ACCESS`
--
ALTER TABLE `ACCESS`
  ADD PRIMARY KEY (`ID`),
  ADD UNIQUE KEY `USERNAME` (`USERNAME`);

--
-- Indexes for table `IMAGE`
--
ALTER TABLE `IMAGE`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `CATEGORY` (`CATEGORY`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
