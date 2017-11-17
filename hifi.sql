-- phpMyAdmin SQL Dump
-- version 4.3.11
-- http://www.phpmyadmin.net
--
-- Vært: 127.0.0.1
-- Genereringstid: 17. 11 2017 kl. 11:01:09
-- Serverversion: 5.6.24
-- PHP-version: 5.6.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `hifi`
--

-- --------------------------------------------------------

--
-- Struktur-dump for tabellen `accesstokens`
--

CREATE TABLE IF NOT EXISTS `accesstokens` (
  `id` int(11) NOT NULL,
  `userid` int(11) NOT NULL,
  `token` varchar(600) NOT NULL,
  `created` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Struktur-dump for tabellen `produkt`
--

CREATE TABLE IF NOT EXISTS `produkt` (
  `id` int(11) NOT NULL,
  `navn` varchar(30) NOT NULL,
  `pris` int(11) NOT NULL,
  `beskrivelse` varchar(100) NOT NULL,
  `billede` varchar(50) NOT NULL,
  `varenr` int(11) NOT NULL,
  `fk_type` int(11) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=42 DEFAULT CHARSET=latin1;

--
-- Data dump for tabellen `produkt`
--

INSERT INTO `produkt` (`id`, `navn`, `pris`, `beskrivelse`, `billede`, `varenr`, `fk_type`) VALUES
(2, 'creek destiny cd', 249, 'lorem ipsum', './img/cd_afspillere/creek_destiny_cd.jpg', 2, 1),
(3, 'creek evo cd', 269, 'lorem ipsum', './img/cd_afspillere/creek_evo_cd.jpg', 3, 1),
(4, 'exp 2010s cd', 189, 'lorem ipsum', './img/cd_afspillere/exp_2010s_cd.gif', 4, 1),
(5, 'creek classic', 249, 'lorem ipsum', './img/dvdafspillere/creek_classic.jpg', 5, 2),
(6, 'exposure 2010s', 249, 'lorem ipsum', './img/dvdafspillere/exposure_2010s.jpg', 6, 2),
(7, 'parasound d200', 249, 'lorem ipsum', './img/dvdafspillere/parasound_d200.jpg', 7, 2),
(8, 'parasound halod3', 249, 'lorem ipsum', './img/dvdafspillere/parasound_halod3.jpg', 8, 2),
(9, 'manley mahi', 299, 'lorem ipsum', './img/effektforstaerkere/manley_mahi.jpg', 9, 3),
(10, 'manley neoclassi c300b', 299, 'lorem ipsum', './img/effektforstaerkere/manley_neoclassic300b.jpg', 10, 3),
(11, 'manley snapper', 329, 'lorem ipsum', './img/effektforstaerkere/manley_snapper.jpg', 11, 3),
(12, 'parasound haloa23', 299, 'lorem ipsum', './img/effektforstaerkere/parasound_haloa23.jpg', 12, 3),
(13, 'creek obh 22 preamp', 299, 'lorem ipsum', './img/forstaerkere/creek_obh_22_passive_preamp.jpg', 13, 4),
(14, 'parasound classic7100', 299, 'lorem ipsum', './img/forstaerkere/parasound_classic7100.jpg', 14, 4),
(15, 'parasound halop3', 299, 'lorem ipsum', './img/forstaerkere/parasound_halop3.jpg', 15, 4),
(16, 'project prebox', 299, 'lorem ipsum', './img/forstaerkere/project_prebox.jpg', 16, 4),
(17, 'boesendorfer vcs wall', 599, 'lorem ipsum', './img/højtalere/boesendorfer_vcs_wall.gif', 17, 5),
(18, 'epos m5', 699, 'lorem ipsum', './img/højtalere/epos_m5.gif', 18, 5),
(19, 'harbeth', 899, 'lorem ipsum', './img/højtalere/harbeth_hl7es2.jpg', 19, 5),
(20, 'harbeth monitor30', 799, 'lorem ipsum', './img/højtalere/harbeth_monitor30.jpg', 20, 5),
(21, 'harbeth p3es2', 999, 'lorem ipsum', './img/højtalere/harbeth_p3es2.jpg', 21, 5),
(22, 'creek a50i', 299, 'lorem ipsum', './img/int_forstaerkere/creek_a50i.jpg', 22, 6),
(26, 'creek classic5350se', 199, 'lorem ipsum', './img/int_forstaerkere/creek_classic5350se.jpg', 23, 6),
(27, 'creek destinyamp', 249, 'lorem ipsum', './img/int_forstaerkere/creek_destinyamp.jpg', 24, 6),
(28, 'manley snapper', 499, 'lorem ipsum', './img/int_forstaerkere/manley_snapper.jpg', 25, 6),
(29, 'manley stingray', 499, 'lorem ipsum', './img/int_forstaerkere/manley_stingray.jpg', 26, 6),
(31, 'project debut 3 red', 299, 'lorem ipsum', './img/pladespillere/pro_ject_debut_3_red.jpg', 28, 7),
(32, 'project debut 3 blue', 299, 'lorem ipsum', './img/pladespillere/pro_ject_debut_3_bl.jpg', 27, 7),
(33, 'project debut 3 yellow', 299, 'lorem ipsum', './img/pladespillere/pro_ject_debut_3_yellow.jpg', 29, 7),
(34, 'project rpm5', 349, 'lorem ipsum', './img/pladespillere/pro_ject_rpm5.jpg', 30, 7),
(35, 'project rpm10', 349, 'lorem ipsum', './img/pladespillere/pro_ject_rpm10.jpg', 31, 7),
(36, 'jolida jd102d', 799, 'lorem ipsum', './img/roer_forstaerkere/jolida_jd102b.jpg', 32, 8),
(37, 'jolida jd202a', 799, 'lorem ipsum', './img/roer_forstaerkere/jolida_jd202a.jpg', 33, 8),
(38, 'jolida jd300b', 799, 'lorem ipsum', './img/roer_forstaerkere/jolida_jd300b.jpg', 34, 8),
(39, 'jolida jd302b', 799, 'lorem ipsum', './img/roer_forstaerkere/jolida_jd302b.jpg', 35, 8),
(40, 'jolida jd502b', 799, 'lorem ipsum', './img/roer_forstaerkere/jolida_jd502b.jpg', 36, 8),
(41, 'test', 209, 'test', './img/cd_afspillere/creek_classic_cd.jpg', 1, 1);

-- --------------------------------------------------------

--
-- Struktur-dump for tabellen `type`
--

CREATE TABLE IF NOT EXISTS `type` (
  `id` int(11) NOT NULL,
  `navn` varchar(30) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;

--
-- Data dump for tabellen `type`
--

INSERT INTO `type` (`id`, `navn`) VALUES
(1, 'cdafspillere'),
(2, 'dvdafspillere'),
(3, 'effektforstaerkere'),
(4, 'forstaerkere'),
(5, 'hojtalere'),
(6, 'intforstaerkere'),
(7, 'pladespillere'),
(8, 'roerforstaerkere');

-- --------------------------------------------------------

--
-- Struktur-dump for tabellen `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL,
  `username` varchar(30) NOT NULL,
  `password` varchar(100) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Data dump for tabellen `users`
--

INSERT INTO `users` (`id`, `username`, `password`) VALUES
(1, 'admin', 'sha1$db4788b0$1$fdb72d43f670f34e23fd2d6f559ed543ad1248c9');

--
-- Begrænsninger for dumpede tabeller
--

--
-- Indeks for tabel `accesstokens`
--
ALTER TABLE `accesstokens`
  ADD PRIMARY KEY (`id`);

--
-- Indeks for tabel `produkt`
--
ALTER TABLE `produkt`
  ADD PRIMARY KEY (`id`), ADD KEY `fk_type` (`fk_type`);

--
-- Indeks for tabel `type`
--
ALTER TABLE `type`
  ADD PRIMARY KEY (`id`);

--
-- Indeks for tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Brug ikke AUTO_INCREMENT for slettede tabeller
--

--
-- Tilføj AUTO_INCREMENT i tabel `accesstokens`
--
ALTER TABLE `accesstokens`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- Tilføj AUTO_INCREMENT i tabel `produkt`
--
ALTER TABLE `produkt`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=42;
--
-- Tilføj AUTO_INCREMENT i tabel `type`
--
ALTER TABLE `type`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=9;
--
-- Tilføj AUTO_INCREMENT i tabel `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
--
-- Begrænsninger for dumpede tabeller
--

--
-- Begrænsninger for tabel `produkt`
--
ALTER TABLE `produkt`
ADD CONSTRAINT `produkt_ibfk_1` FOREIGN KEY (`fk_type`) REFERENCES `type` (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
