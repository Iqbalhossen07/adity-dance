-- phpMyAdmin SQL Dump
-- version 5.2.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Aug 16, 2026 at 11:39 AM
-- Server version: 9.7.1
-- PHP Version: 8.4.23

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `adity`
--

-- --------------------------------------------------------

--
-- Table structure for table `cache`
--

CREATE TABLE `cache` (
  `key` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `value` mediumtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `expiration` bigint NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `cache`
--

INSERT INTO `cache` (`key`, `value`, `expiration`) VALUES
('adity-dance-cache-filament-edit-profile:1', 'i:2;', 1786880388),
('adity-dance-cache-filament-edit-profile:1:timer', 'i:1786880388;', 1786880388),
('adity-dance-cache-livewire-rate-limiter:d33aead8631947c28330742a8545f6e0309b2a31', 'i:2;', 1786880388),
('adity-dance-cache-livewire-rate-limiter:d33aead8631947c28330742a8545f6e0309b2a31:timer', 'i:1786880388;', 1786880388);

-- --------------------------------------------------------

--
-- Table structure for table `cache_locks`
--

CREATE TABLE `cache_locks` (
  `key` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `owner` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `expiration` bigint NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `events`
--

CREATE TABLE `events` (
  `id` bigint UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci,
  `event_date` date NOT NULL,
  `location` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `ticket_link` varchar(500) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image_path` varchar(500) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `sort_order` int UNSIGNED NOT NULL DEFAULT '0',
  `is_published` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `events`
--

INSERT INTO `events` (`id`, `title`, `description`, `event_date`, `location`, `ticket_link`, `image_path`, `sort_order`, `is_published`, `created_at`, `updated_at`) VALUES
(1, 'Event 1', 'A memorable celebration of dance and culture.', '2025-07-02', 'Dagenham, Essex', NULL, NULL, 1, 1, '2026-08-16 09:51:28', '2026-08-16 09:51:28');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `gallery_categories`
--

CREATE TABLE `gallery_categories` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `sort_order` int UNSIGNED NOT NULL DEFAULT '0',
  `is_published` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `gallery_categories`
--

INSERT INTO `gallery_categories` (`id`, `name`, `slug`, `sort_order`, `is_published`, `created_at`, `updated_at`) VALUES
(1, 'A Rising Lioness 2024', 'rising-lioness', 1, 1, '2026-08-16 09:51:28', '2026-08-16 09:51:28'),
(2, 'Who Am I?', 'who-am-i', 2, 1, '2026-08-16 09:51:28', '2026-08-16 09:51:28');

-- --------------------------------------------------------

--
-- Table structure for table `gallery_images`
--

CREATE TABLE `gallery_images` (
  `id` bigint UNSIGNED NOT NULL,
  `gallery_category_id` bigint UNSIGNED DEFAULT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image_path` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `alt_text` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `sort_order` int UNSIGNED NOT NULL DEFAULT '0',
  `is_published` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `gallery_images`
--

INSERT INTO `gallery_images` (`id`, `gallery_category_id`, `title`, `image_path`, `alt_text`, `sort_order`, `is_published`, `created_at`, `updated_at`) VALUES
(1, 1, 'A Rising Lioness performance', 'gallery/1.jpg', 'A Rising Lioness performance', 1, 1, '2026-08-16 09:51:28', '2026-08-16 09:51:28'),
(2, 1, 'A Rising Lioness performance', 'gallery/2.jpg', 'A Rising Lioness performance', 2, 1, '2026-08-16 09:51:28', '2026-08-16 09:51:28'),
(3, 1, 'A Rising Lioness performance', 'gallery/3.jpg', 'A Rising Lioness performance', 3, 1, '2026-08-16 09:51:28', '2026-08-16 09:51:28'),
(4, 1, 'A Rising Lioness performance', 'gallery/4.jpg', 'A Rising Lioness performance', 4, 1, '2026-08-16 09:51:28', '2026-08-16 09:51:28'),
(5, 1, 'A Rising Lioness performance', 'gallery/5.jpg', 'A Rising Lioness performance', 5, 1, '2026-08-16 09:51:28', '2026-08-16 09:51:28'),
(6, 1, 'A Rising Lioness performance', 'gallery/6.jpg', 'A Rising Lioness performance', 6, 1, '2026-08-16 09:51:28', '2026-08-16 09:51:28'),
(7, 2, 'Who Am I performance', 'gallery/7.jpg', 'Who Am I performance', 7, 1, '2026-08-16 09:51:28', '2026-08-16 09:51:28'),
(8, 2, 'Who Am I performance', 'gallery/8.jpg', 'Who Am I performance', 8, 1, '2026-08-16 09:51:28', '2026-08-16 09:51:28'),
(9, 2, 'Adity Dance portrait', 'gallery/about-adity.jpg', 'Adity Dance portrait', 9, 1, '2026-08-16 09:51:28', '2026-08-16 09:51:28'),
(10, 1, 'Adity Dance CIC performance', 'gallery/about.jpg', 'Adity Dance CIC performance', 10, 1, '2026-08-16 09:51:28', '2026-08-16 09:51:28'),
(11, 2, 'Adity Roy', 'gallery/adity.jpg', 'Adity Roy', 11, 1, '2026-08-16 09:51:28', '2026-08-16 09:51:28'),
(12, 1, 'Bharatanatyam performance', 'gallery/hero-1.png', 'Bharatanatyam performance', 12, 1, '2026-08-16 09:51:28', '2026-08-16 09:51:28');

-- --------------------------------------------------------

--
-- Table structure for table `jobs`
--

CREATE TABLE `jobs` (
  `id` bigint UNSIGNED NOT NULL,
  `queue` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `attempts` smallint UNSIGNED NOT NULL,
  `reserved_at` int UNSIGNED DEFAULT NULL,
  `available_at` int UNSIGNED NOT NULL,
  `created_at` int UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `job_batches`
--

CREATE TABLE `job_batches` (
  `id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `total_jobs` int NOT NULL,
  `pending_jobs` int NOT NULL,
  `failed_jobs` int NOT NULL,
  `failed_job_ids` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `options` mediumtext COLLATE utf8mb4_unicode_ci,
  `cancelled_at` int DEFAULT NULL,
  `created_at` int NOT NULL,
  `finished_at` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '0001_01_01_000000_create_users_table', 1),
(2, '0001_01_01_000001_create_cache_table', 1),
(3, '0001_01_01_000002_create_jobs_table', 1),
(4, '2026_08_16_102758_create_gallery_categories_table', 1),
(5, '2026_08_16_102759_create_gallery_images_table', 1),
(6, '2026_08_16_102800_create_videos_table', 1),
(7, '2026_08_16_102801_create_events_table', 1),
(8, '2026_08_16_103940_add_ticket_link_to_events_table', 1),
(9, '2026_08_16_104042_rename_youtube_id_to_youtube_url_on_videos_table', 1),
(10, '2026_08_16_112300_widen_url_columns_on_events_and_videos_tables', 2);

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint UNSIGNED DEFAULT NULL,
  `ip_address` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_agent` text COLLATE utf8mb4_unicode_ci,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_activity` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sessions`
--

INSERT INTO `sessions` (`id`, `user_id`, `ip_address`, `user_agent`, `payload`, `last_activity`) VALUES
('01evM3nzVGNx525bmWcPbmwXd7AXEOLJ6UlEnouK', NULL, '127.0.0.1', 'curl/8.7.1', 'eyJfdG9rZW4iOiJTSDVQV2JleEJSa25HYkE4cTIyOUQ2RnNsd21mZDJMSERVV2dibTRnIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2FkaXR5LnRlc3RcL3ZpZGVvcyIsInJvdXRlIjoidmlkZW9zIn0sIl9mbGFzaCI6eyJvbGQiOltdLCJuZXciOltdfX0=', 1786879272),
('1ByDSM6aodgmRpZsv47Xm4zdz9DeVV9UE7zxdFNY', NULL, '127.0.0.1', 'curl/8.7.1', 'eyJfdG9rZW4iOiJTOGhubDVSRDJ5cXBsMlNZbUUzSFhWRW5Cb1cyVTJYZ0prQ2tTUXFTIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2FkaXR5LnRlc3RcL2NvbnRhY3QiLCJyb3V0ZSI6ImNvbnRhY3QifSwiX2ZsYXNoIjp7Im9sZCI6W10sIm5ldyI6W119fQ==', 1786879489),
('1kASqKd9PFOgxh8K8qgLhREeXzeBhoX6taSgBTYT', NULL, '127.0.0.1', 'curl/8.7.1', 'eyJfdG9rZW4iOiJFUmhMUXVVaHpNU2dWUDhiMEdDbzVUWEFrUzBEQUUyWWg2aVpzT016IiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2FkaXR5LnRlc3RcL2V2ZW50cyIsInJvdXRlIjoiZXZlbnRzIn0sIl9mbGFzaCI6eyJvbGQiOltdLCJuZXciOltdfX0=', 1786879272),
('27uuKMUUHNH3ZvEFWagJ3h2qPR1Scbu6q1ul34cG', NULL, '127.0.0.1', 'curl/8.7.1', 'eyJfdG9rZW4iOiJncWJIVDUzclgydXFkN2xSeE0zZDV4OEh1SnZibHRjNEZ2a0JrdHZRIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2FkaXR5LnRlc3RcL3ZpZGVvcyIsInJvdXRlIjoidmlkZW9zIn0sIl9mbGFzaCI6eyJvbGQiOltdLCJuZXciOltdfX0=', 1786879489),
('28mC7okHPijz9UnFtnOQ8z5olGN5c3rV2PAdzSQZ', NULL, '127.0.0.1', 'curl/8.7.1', 'eyJfdG9rZW4iOiJOQWlTUlUwdHBrUTBOeFpEY0NuR05yRXJJRllIWmRiZm92ZUZUeWNuIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2FkaXR5LnRlc3RcL3NpdGVtYXAueG1sIiwicm91dGUiOiJzaXRlbWFwIn0sIl9mbGFzaCI6eyJvbGQiOltdLCJuZXciOltdfX0=', 1786877497),
('2CBe2bMwATN78J6zO9urBDEmKJhmqhWhMrAvIa4t', NULL, '127.0.0.1', 'curl/8.7.1', 'eyJfdG9rZW4iOiJOdVF5RzRUUHZNOHFQOG82SWJDRDMwdG9UaHRkZlVzZzlUOGRhdElEIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2FkaXR5LnRlc3RcL2V2ZW50cyIsInJvdXRlIjoiZXZlbnRzIn0sIl9mbGFzaCI6eyJvbGQiOltdLCJuZXciOltdfX0=', 1786879354),
('3mRUSYvMm2gDO13BYZRenU9haJ4LmOAdaxZTDwH7', NULL, '127.0.0.1', 'Symfony', 'eyJfdG9rZW4iOiI5U0lYM3d1eTl0VzNiWDdFWXRrZ3l4OGVCekJDU1pTWlpQYTMwM1V4IiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2xvY2FsaG9zdFwvYWRtaW5cL2xvZ2luIiwicm91dGUiOiJmaWxhbWVudC5hZG1pbi5hdXRoLmxvZ2luIn0sIl9mbGFzaCI6eyJvbGQiOltdLCJuZXciOltdfX0=', 1786877673),
('43aSky1ghlpVfUvB015C7fbacW2gR6Bnh6D8cOhM', NULL, '127.0.0.1', 'curl/8.7.1', 'eyJfdG9rZW4iOiJNZmF4RVZOSEl5UHA1T3p3bzBjZGNzbE5kTXltcHpEd0tzblpvUlMwIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2FkaXR5LnRlc3RcL2dhbGxlcnkiLCJyb3V0ZSI6ImdhbGxlcnkifSwiX2ZsYXNoIjp7Im9sZCI6W10sIm5ldyI6W119fQ==', 1786879489),
('4kwX6GwwCYXS4vleo7K4y8sS0diwmmVHnkEQjgq2', NULL, '127.0.0.1', 'curl/8.7.1', 'eyJfdG9rZW4iOiJzTG9ocWpUNExZUmFxUTQzbTRQWTJCVmRtdDk5RzRvS2tIT3o2SUxYIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2FkaXR5LnRlc3RcL3NpdGVtYXAueG1sIiwicm91dGUiOiJzaXRlbWFwIn0sIl9mbGFzaCI6eyJvbGQiOltdLCJuZXciOltdfX0=', 1786879308),
('4pXJy8pRBJZQeO03ITiBYrGFyGVD4kIYbLdI9dlv', NULL, '127.0.0.1', 'curl/8.7.1', 'eyJfdG9rZW4iOiI0R21WcmlFbmhDQU1jTlhyYVBHVHNlc2RZMTFDeXBNbURBMG9lT2U3IiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2FkaXR5LnRlc3RcL2dhbGxlcnkiLCJyb3V0ZSI6ImdhbGxlcnkifSwiX2ZsYXNoIjp7Im9sZCI6W10sIm5ldyI6W119fQ==', 1786879272),
('5CZE40bDJFPd7SDUkRo43nxCGGS6uFQzEBJqFkyl', 1, '127.0.0.1', 'Symfony', 'eyJfdG9rZW4iOiJ0WEVTdEZHck9WTGNMV0x1REJ5a1ZMNGQ0bFU1SjV4NDd1RTZFQmJ3IiwibG9naW5fd2ViXzU5YmEzNmFkZGMyYjJmOTQwMTU4MGYwMTRjN2Y1OGVhNGUzMDk4OWQiOjEsInBhc3N3b3JkX2hhc2hfd2ViIjoiOTk5N2IwMmJiYzJjMGZiNDUzMjZhMGE5MDc2ZDU0M2Q2MjMxMmM5ZThjNTg4YTQ0N2JjMjc4MmQ4ZDJlZWE4MiIsIl9wcmV2aW91cyI6eyJ1cmwiOiJodHRwOlwvXC9hZGl0eS50ZXN0XC9hZG1pbiIsInJvdXRlIjoiZmlsYW1lbnQuYWRtaW4ucGFnZXMuZGFzaGJvYXJkIn0sIl9mbGFzaCI6eyJvbGQiOltdLCJuZXciOltdfX0=', 1786880202),
('5icw9CYGmdoBtL0VCdjbXfLox4PeE35vvclOXXRD', NULL, '127.0.0.1', 'curl/8.7.1', 'eyJfdG9rZW4iOiJUTXBBdXB0TmdGdWlDcmFlNUJpOWxtd0kyY2t1bnROcUd5ZFJ3VjVEIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2FkaXR5LnRlc3RcL3JvYm90cy50eHQiLCJyb3V0ZSI6InJvYm90cyJ9LCJfZmxhc2giOnsib2xkIjpbXSwibmV3IjpbXX19', 1786879308),
('5iQCuX5ZcOjMaLMJpsEbKYTml9Tyzh4mPFUnLmAR', NULL, '127.0.0.1', 'Symfony', 'eyJfdG9rZW4iOiJFNE5ybWlKdGo0RGdVdFZkaWlXR2FQaTdUdzNIVUE0VFJnbkhKT0hmIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2xvY2FsaG9zdCIsInJvdXRlIjoiaG9tZSJ9LCJfZmxhc2giOnsib2xkIjpbXSwibmV3IjpbXX19', 1786879773),
('6xn9QJIT43gSvACigSRWMZoQNTSZ1ZPuEoYB9p62', NULL, '127.0.0.1', 'curl/8.7.1', 'eyJfdG9rZW4iOiJERjBCM3ZXRnNoU3J3REZLdGhLY0JvVXhIcGd6N2R6SDBLclQwZ2VwIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2FkaXR5LnRlc3RcL2Fib3V0Iiwicm91dGUiOiJhYm91dCJ9LCJfZmxhc2giOnsib2xkIjpbXSwibmV3IjpbXX19', 1786879354),
('7YcjaYHz78ygHFvIVS6sheJCWPqSy13dNN3rCmhe', NULL, '127.0.0.1', 'curl/8.7.1', 'eyJfdG9rZW4iOiJGcUdXN0IyTTZrWldVeUFyMHZBeFM4ZEhMd2J0R3FpSXlSN3owRkNKIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2FkaXR5LnRlc3RcL3NpdGVtYXAueG1sIiwicm91dGUiOiJzaXRlbWFwIn0sIl9mbGFzaCI6eyJvbGQiOltdLCJuZXciOltdfX0=', 1786879454),
('8hyjiD4VEJUbTFyt2mouhjCKvaOTJ8u4AJFDsCUS', NULL, '127.0.0.1', 'curl/8.7.1', 'eyJfdG9rZW4iOiJRYVoxTWdObTNjQ2I3RGVPbFI3cWh1UHRmQUtUMlRrd2dJM1VwbXI0IiwidXJsIjp7ImludGVuZGVkIjoiaHR0cDpcL1wvYWRpdHkudGVzdFwvYWRtaW5cL2dhbGxlcnktaW1hZ2VzIn0sIl9wcmV2aW91cyI6eyJ1cmwiOiJodHRwOlwvXC9hZGl0eS50ZXN0XC9hZG1pblwvZ2FsbGVyeS1pbWFnZXMiLCJyb3V0ZSI6ImZpbGFtZW50LmFkbWluLnJlc291cmNlcy5nYWxsZXJ5LWltYWdlcy5pbmRleCJ9LCJfZmxhc2giOnsib2xkIjpbXSwibmV3IjpbXX19', 1786879446),
('9OX932hOG0bNrDcMnz9FyYfnnmuxH3yujjEjDZQ0', NULL, '127.0.0.1', 'curl/8.7.1', 'eyJfdG9rZW4iOiJrQlJQODcwVmRYN0JoS0hWVm01YmZEU3VxdlhydUVvWThiQlZEcGpoIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2FkaXR5LnRlc3RcL2dhbGxlcnkiLCJyb3V0ZSI6ImdhbGxlcnkifSwiX2ZsYXNoIjp7Im9sZCI6W10sIm5ldyI6W119fQ==', 1786879721),
('9vXk4meCX5sOvkWU2IadkZ4dEoX32PVRVW6RfWQE', 1, '127.0.0.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/151.0.0.0 Safari/537.36', 'eyJ1cmwiOltdLCJfcHJldmlvdXMiOnsidXJsIjoiaHR0cDpcL1wvYWRpdHkudGVzdFwvYWRtaW4iLCJyb3V0ZSI6ImZpbGFtZW50LmFkbWluLnBhZ2VzLmRhc2hib2FyZCJ9LCJfZmxhc2giOnsib2xkIjpbXSwibmV3IjpbXX0sIl90b2tlbiI6IjVNdWJHN3piZXNmR1lDU29Wb3p4OGxpaVIzT055Tkxqejh5UlhyeTciLCJsb2dpbl93ZWJfNTliYTM2YWRkYzJiMmY5NDAxNTgwZjAxNGM3ZjU4ZWE0ZTMwOTg5ZCI6MSwicGFzc3dvcmRfaGFzaF93ZWIiOiIzYWRhYjMyZDQ2NzE1OWM5OTdiYzU0M2JiMWU4NGMxNTMwMTI0MjJlZGQ1YjlhYTZiZTI1MGNhMjM1NWQ0MjM0IiwidGFibGVzIjp7ImM2MDlmMzVmNTY0NThiMzAzZGViZWJmZTMwNzYzNmQ5X2NvbHVtbnMiOlt7InR5cGUiOiJjb2x1bW4iLCJuYW1lIjoidGl0bGUiLCJsYWJlbCI6IlRpdGxlIiwiaXNIaWRkZW4iOmZhbHNlLCJpc1RvZ2dsZWQiOnRydWUsImlzVG9nZ2xlYWJsZSI6ZmFsc2UsImlzVG9nZ2xlZEhpZGRlbkJ5RGVmYXVsdCI6bnVsbH0seyJ0eXBlIjoiY29sdW1uIiwibmFtZSI6InlvdXR1YmVfdXJsIiwibGFiZWwiOiJZb3VUdWJlIGxpbmsiLCJpc0hpZGRlbiI6ZmFsc2UsImlzVG9nZ2xlZCI6dHJ1ZSwiaXNUb2dnbGVhYmxlIjpmYWxzZSwiaXNUb2dnbGVkSGlkZGVuQnlEZWZhdWx0IjpudWxsfSx7InR5cGUiOiJjb2x1bW4iLCJuYW1lIjoic29ydF9vcmRlciIsImxhYmVsIjoiU29ydCBvcmRlciIsImlzSGlkZGVuIjpmYWxzZSwiaXNUb2dnbGVkIjp0cnVlLCJpc1RvZ2dsZWFibGUiOmZhbHNlLCJpc1RvZ2dsZWRIaWRkZW5CeURlZmF1bHQiOm51bGx9LHsidHlwZSI6ImNvbHVtbiIsIm5hbWUiOiJpc19wdWJsaXNoZWQiLCJsYWJlbCI6IklzIHB1Ymxpc2hlZCIsImlzSGlkZGVuIjpmYWxzZSwiaXNUb2dnbGVkIjp0cnVlLCJpc1RvZ2dsZWFibGUiOmZhbHNlLCJpc1RvZ2dsZWRIaWRkZW5CeURlZmF1bHQiOm51bGx9LHsidHlwZSI6ImNvbHVtbiIsIm5hbWUiOiJjcmVhdGVkX2F0IiwibGFiZWwiOiJDcmVhdGVkIGF0IiwiaXNIaWRkZW4iOmZhbHNlLCJpc1RvZ2dsZWQiOmZhbHNlLCJpc1RvZ2dsZWFibGUiOnRydWUsImlzVG9nZ2xlZEhpZGRlbkJ5RGVmYXVsdCI6dHJ1ZX0seyJ0eXBlIjoiY29sdW1uIiwibmFtZSI6InVwZGF0ZWRfYXQiLCJsYWJlbCI6IlVwZGF0ZWQgYXQiLCJpc0hpZGRlbiI6ZmFsc2UsImlzVG9nZ2xlZCI6ZmFsc2UsImlzVG9nZ2xlYWJsZSI6dHJ1ZSwiaXNUb2dnbGVkSGlkZGVuQnlEZWZhdWx0Ijp0cnVlfV0sIjNlMzY4NzY4MTUwMWQ0NjU3YTc0ODkzOTcwNDc5ZGFlX2NvbHVtbnMiOlt7InR5cGUiOiJjb2x1bW4iLCJuYW1lIjoidGl0bGUiLCJsYWJlbCI6IlRpdGxlIiwiaXNIaWRkZW4iOmZhbHNlLCJpc1RvZ2dsZWQiOnRydWUsImlzVG9nZ2xlYWJsZSI6ZmFsc2UsImlzVG9nZ2xlZEhpZGRlbkJ5RGVmYXVsdCI6bnVsbH0seyJ0eXBlIjoiY29sdW1uIiwibmFtZSI6ImV2ZW50X2RhdGUiLCJsYWJlbCI6IkV2ZW50IGRhdGUiLCJpc0hpZGRlbiI6ZmFsc2UsImlzVG9nZ2xlZCI6dHJ1ZSwiaXNUb2dnbGVhYmxlIjpmYWxzZSwiaXNUb2dnbGVkSGlkZGVuQnlEZWZhdWx0IjpudWxsfSx7InR5cGUiOiJjb2x1bW4iLCJuYW1lIjoibG9jYXRpb24iLCJsYWJlbCI6IkxvY2F0aW9uIiwiaXNIaWRkZW4iOmZhbHNlLCJpc1RvZ2dsZWQiOnRydWUsImlzVG9nZ2xlYWJsZSI6ZmFsc2UsImlzVG9nZ2xlZEhpZGRlbkJ5RGVmYXVsdCI6bnVsbH0seyJ0eXBlIjoiY29sdW1uIiwibmFtZSI6InRpY2tldF9saW5rIiwibGFiZWwiOiJUaWNrZXQiLCJpc0hpZGRlbiI6ZmFsc2UsImlzVG9nZ2xlZCI6dHJ1ZSwiaXNUb2dnbGVhYmxlIjp0cnVlLCJpc1RvZ2dsZWRIaWRkZW5CeURlZmF1bHQiOmZhbHNlfSx7InR5cGUiOiJjb2x1bW4iLCJuYW1lIjoiaW1hZ2VfcGF0aCIsImxhYmVsIjoiSW1hZ2UiLCJpc0hpZGRlbiI6ZmFsc2UsImlzVG9nZ2xlZCI6dHJ1ZSwiaXNUb2dnbGVhYmxlIjpmYWxzZSwiaXNUb2dnbGVkSGlkZGVuQnlEZWZhdWx0IjpudWxsfSx7InR5cGUiOiJjb2x1bW4iLCJuYW1lIjoic29ydF9vcmRlciIsImxhYmVsIjoiU29ydCBvcmRlciIsImlzSGlkZGVuIjpmYWxzZSwiaXNUb2dnbGVkIjp0cnVlLCJpc1RvZ2dsZWFibGUiOmZhbHNlLCJpc1RvZ2dsZWRIaWRkZW5CeURlZmF1bHQiOm51bGx9LHsidHlwZSI6ImNvbHVtbiIsIm5hbWUiOiJpc19wdWJsaXNoZWQiLCJsYWJlbCI6IlB1Ymxpc2hlZCIsImlzSGlkZGVuIjpmYWxzZSwiaXNUb2dnbGVkIjp0cnVlLCJpc1RvZ2dsZWFibGUiOmZhbHNlLCJpc1RvZ2dsZWRIaWRkZW5CeURlZmF1bHQiOm51bGx9LHsidHlwZSI6ImNvbHVtbiIsIm5hbWUiOiJjcmVhdGVkX2F0IiwibGFiZWwiOiJDcmVhdGVkIGF0IiwiaXNIaWRkZW4iOmZhbHNlLCJpc1RvZ2dsZWQiOmZhbHNlLCJpc1RvZ2dsZWFibGUiOnRydWUsImlzVG9nZ2xlZEhpZGRlbkJ5RGVmYXVsdCI6dHJ1ZX0seyJ0eXBlIjoiY29sdW1uIiwibmFtZSI6InVwZGF0ZWRfYXQiLCJsYWJlbCI6IlVwZGF0ZWQgYXQiLCJpc0hpZGRlbiI6ZmFsc2UsImlzVG9nZ2xlZCI6ZmFsc2UsImlzVG9nZ2xlYWJsZSI6dHJ1ZSwiaXNUb2dnbGVkSGlkZGVuQnlEZWZhdWx0Ijp0cnVlfV0sIjMxOTZiNzgwNjFkNTdiZjdlNzcwYmFjYjQzOGY0NGQwX2NvbHVtbnMiOlt7InR5cGUiOiJjb2x1bW4iLCJuYW1lIjoibmFtZSIsImxhYmVsIjoiTmFtZSIsImlzSGlkZGVuIjpmYWxzZSwiaXNUb2dnbGVkIjp0cnVlLCJpc1RvZ2dsZWFibGUiOmZhbHNlLCJpc1RvZ2dsZWRIaWRkZW5CeURlZmF1bHQiOm51bGx9LHsidHlwZSI6ImNvbHVtbiIsIm5hbWUiOiJzbHVnIiwibGFiZWwiOiJTbHVnIiwiaXNIaWRkZW4iOmZhbHNlLCJpc1RvZ2dsZWQiOnRydWUsImlzVG9nZ2xlYWJsZSI6ZmFsc2UsImlzVG9nZ2xlZEhpZGRlbkJ5RGVmYXVsdCI6bnVsbH0seyJ0eXBlIjoiY29sdW1uIiwibmFtZSI6InNvcnRfb3JkZXIiLCJsYWJlbCI6IlNvcnQgb3JkZXIiLCJpc0hpZGRlbiI6ZmFsc2UsImlzVG9nZ2xlZCI6dHJ1ZSwiaXNUb2dnbGVhYmxlIjpmYWxzZSwiaXNUb2dnbGVkSGlkZGVuQnlEZWZhdWx0IjpudWxsfSx7InR5cGUiOiJjb2x1bW4iLCJuYW1lIjoiaXNfcHVibGlzaGVkIiwibGFiZWwiOiJJcyBwdWJsaXNoZWQiLCJpc0hpZGRlbiI6ZmFsc2UsImlzVG9nZ2xlZCI6dHJ1ZSwiaXNUb2dnbGVhYmxlIjpmYWxzZSwiaXNUb2dnbGVkSGlkZGVuQnlEZWZhdWx0IjpudWxsfSx7InR5cGUiOiJjb2x1bW4iLCJuYW1lIjoiY3JlYXRlZF9hdCIsImxhYmVsIjoiQ3JlYXRlZCBhdCIsImlzSGlkZGVuIjpmYWxzZSwiaXNUb2dnbGVkIjpmYWxzZSwiaXNUb2dnbGVhYmxlIjp0cnVlLCJpc1RvZ2dsZWRIaWRkZW5CeURlZmF1bHQiOnRydWV9LHsidHlwZSI6ImNvbHVtbiIsIm5hbWUiOiJ1cGRhdGVkX2F0IiwibGFiZWwiOiJVcGRhdGVkIGF0IiwiaXNIaWRkZW4iOmZhbHNlLCJpc1RvZ2dsZWQiOmZhbHNlLCJpc1RvZ2dsZWFibGUiOnRydWUsImlzVG9nZ2xlZEhpZGRlbkJ5RGVmYXVsdCI6dHJ1ZX1dLCJkY2IxNGU3NTJjNTI0MTczYmY3ZTllMDRkN2NhYjFiNV9jb2x1bW5zIjpbeyJ0eXBlIjoiY29sdW1uIiwibmFtZSI6ImltYWdlX3BhdGgiLCJsYWJlbCI6IkltYWdlIiwiaXNIaWRkZW4iOmZhbHNlLCJpc1RvZ2dsZWQiOnRydWUsImlzVG9nZ2xlYWJsZSI6ZmFsc2UsImlzVG9nZ2xlZEhpZGRlbkJ5RGVmYXVsdCI6bnVsbH0seyJ0eXBlIjoiY29sdW1uIiwibmFtZSI6InRpdGxlIiwibGFiZWwiOiJUaXRsZSIsImlzSGlkZGVuIjpmYWxzZSwiaXNUb2dnbGVkIjp0cnVlLCJpc1RvZ2dsZWFibGUiOmZhbHNlLCJpc1RvZ2dsZWRIaWRkZW5CeURlZmF1bHQiOm51bGx9LHsidHlwZSI6ImNvbHVtbiIsIm5hbWUiOiJjYXRlZ29yeS5uYW1lIiwibGFiZWwiOiJDYXRlZ29yeSIsImlzSGlkZGVuIjpmYWxzZSwiaXNUb2dnbGVkIjp0cnVlLCJpc1RvZ2dsZWFibGUiOmZhbHNlLCJpc1RvZ2dsZWRIaWRkZW5CeURlZmF1bHQiOm51bGx9LHsidHlwZSI6ImNvbHVtbiIsIm5hbWUiOiJzb3J0X29yZGVyIiwibGFiZWwiOiJTb3J0IG9yZGVyIiwiaXNIaWRkZW4iOmZhbHNlLCJpc1RvZ2dsZWQiOnRydWUsImlzVG9nZ2xlYWJsZSI6ZmFsc2UsImlzVG9nZ2xlZEhpZGRlbkJ5RGVmYXVsdCI6bnVsbH0seyJ0eXBlIjoiY29sdW1uIiwibmFtZSI6ImlzX3B1Ymxpc2hlZCIsImxhYmVsIjoiUHVibGlzaGVkIiwiaXNIaWRkZW4iOmZhbHNlLCJpc1RvZ2dsZWQiOnRydWUsImlzVG9nZ2xlYWJsZSI6ZmFsc2UsImlzVG9nZ2xlZEhpZGRlbkJ5RGVmYXVsdCI6bnVsbH0seyJ0eXBlIjoiY29sdW1uIiwibmFtZSI6InVwZGF0ZWRfYXQiLCJsYWJlbCI6IlVwZGF0ZWQgYXQiLCJpc0hpZGRlbiI6ZmFsc2UsImlzVG9nZ2xlZCI6ZmFsc2UsImlzVG9nZ2xlYWJsZSI6dHJ1ZSwiaXNUb2dnbGVkSGlkZGVuQnlEZWZhdWx0Ijp0cnVlfV19LCJmaWxhbWVudCI6W119', 1786880346),
('A14wsuZ5XAY1yKFkPGNp4HS3HMIAWwPdcF73ibIr', NULL, '127.0.0.1', 'curl/8.7.1', 'eyJfdG9rZW4iOiJCSkZiU3pFT0ZqdUNiSHp0TUZQZmdFZWJGNHR5cHZjVHRWTkZMRExLIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2FkaXR5LnRlc3RcL2V2ZW50cyIsInJvdXRlIjoiZXZlbnRzIn0sIl9mbGFzaCI6eyJvbGQiOltdLCJuZXciOltdfX0=', 1786877496),
('A1lbcDY1TZO3RQb017POTwDhHtVxPgs1VZzI0xhz', NULL, '127.0.0.1', 'curl/8.7.1', 'eyJfdG9rZW4iOiJEVWVhYWxrczBldDUwdW9seEh3eE9aU3l4b3hBZUswd2RDQ1ZQcjRBIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2FkaXR5LnRlc3RcL3ZpZGVvcyIsInJvdXRlIjoidmlkZW9zIn0sIl9mbGFzaCI6eyJvbGQiOltdLCJuZXciOltdfX0=', 1786879757),
('A3GvL6ViiTUMnRSUQnAVan4hPaAhNhVIG4DfknFe', NULL, '127.0.0.1', 'curl/8.7.1', 'eyJfdG9rZW4iOiJHTGtUSWNuSDd1QnVjNnMyTDBlaU5yWGtWZnA3OVJtMnI4Q0tvZ20xIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2FkaXR5LnRlc3RcL2V2ZW50cyIsInJvdXRlIjoiZXZlbnRzIn0sIl9mbGFzaCI6eyJvbGQiOltdLCJuZXciOltdfX0=', 1786879757),
('bdsbgOf66xSPO4mSR10Ka8jQ1KIY4KsBFoCP3iRj', NULL, '127.0.0.1', 'curl/8.7.1', 'eyJfdG9rZW4iOiI1cWNObGlDdjJLNE9qcDdDRUZRTUJleUJqWndQS21LYURvTEdmcnJkIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2FkaXR5LnRlc3RcL2Fib3V0Iiwicm91dGUiOiJhYm91dCJ9LCJfZmxhc2giOnsib2xkIjpbXSwibmV3IjpbXX19', 1786879446),
('bpGsSAYvD05gH6Ns1LPTt0A3k2VNFBAKDFvoavBT', NULL, '127.0.0.1', 'curl/8.7.1', 'eyJfdG9rZW4iOiJJc2JzTDI3a1FSajk5MVhNSlp1UEs3SzI1WjlDQm5vb1l0TWgxYkthIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2FkaXR5LnRlc3RcL3NpdGVtYXAueG1sIiwicm91dGUiOiJzaXRlbWFwIn0sIl9mbGFzaCI6eyJvbGQiOltdLCJuZXciOltdfX0=', 1786879272),
('BSBmFwZrrKMdT864Rmo4Xn0Qqeflb3ngEQE5OBOt', NULL, '127.0.0.1', 'curl/8.7.1', 'eyJfdG9rZW4iOiJyTzAzekgxTEdoRDc5TjZScWk0Y0sxWEU0cHg1TnhjVzFsaUpRaGZrIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2FkaXR5LnRlc3RcL2NvbnRhY3QiLCJyb3V0ZSI6ImNvbnRhY3QifSwiX2ZsYXNoIjp7Im9sZCI6W10sIm5ldyI6W119fQ==', 1786879721),
('c1MvUNjQtwMjKU96WmGIhoAPWsB09kxHWQA1S02Z', NULL, '127.0.0.1', 'curl/8.7.1', 'eyJfdG9rZW4iOiIydDdGa0VKeDQwSXg1WldTTzF2MWFvc0RicU5MOGJFcDcwR3hEV0lyIiwidXJsIjp7ImludGVuZGVkIjoiaHR0cDpcL1wvYWRpdHkudGVzdFwvYWRtaW5cL2V2ZW50cyJ9LCJfcHJldmlvdXMiOnsidXJsIjoiaHR0cDpcL1wvYWRpdHkudGVzdFwvYWRtaW5cL2V2ZW50cyIsInJvdXRlIjoiZmlsYW1lbnQuYWRtaW4ucmVzb3VyY2VzLmV2ZW50cy5pbmRleCJ9LCJfZmxhc2giOnsib2xkIjpbXSwibmV3IjpbXX19', 1786879446),
('c5i3kaOJ3opepPUn6xQa8Dx3Zg3bKGtjeJerQJ9a', 1, '127.0.0.1', 'Symfony', 'eyJsb2dpbl93ZWJfNTliYTM2YWRkYzJiMmY5NDAxNTgwZjAxNGM3ZjU4ZWE0ZTMwOTg5ZCI6MSwiX3Rva2VuIjoiUWxaaW4xb0psTlRnVHRoNVFoN1l6VnBnNWRLZ0Ezbkt1dXQ0dUhDaSIsInBhc3N3b3JkX2hhc2hfd2ViIjoiOTk5N2IwMmJiYzJjMGZiNDUzMjZhMGE5MDc2ZDU0M2Q2MjMxMmM5ZThjNTg4YTQ0N2JjMjc4MmQ4ZDJlZWE4MiIsIl9wcmV2aW91cyI6eyJ1cmwiOiJodHRwOlwvXC9sb2NhbGhvc3RcL2FkbWluIiwicm91dGUiOiJmaWxhbWVudC5hZG1pbi5wYWdlcy5kYXNoYm9hcmQifSwiX2ZsYXNoIjp7Im9sZCI6W10sIm5ldyI6W119fQ==', 1786879455),
('CB3lAlBwr9VcdKUCnDxlNMFez14pNjvE8dT9gUVE', NULL, '127.0.0.1', 'curl/8.7.1', 'eyJfdG9rZW4iOiJpajRIaURzRkRZZmNyam13eVJoQnZKaHduS2s5YnE1ZW9XZ241VWpoIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2FkaXR5LnRlc3RcL2V2ZW50cyIsInJvdXRlIjoiZXZlbnRzIn0sIl9mbGFzaCI6eyJvbGQiOltdLCJuZXciOltdfX0=', 1786879471),
('CF8ZukbhlsOwqNRbEpuT0sZ0kL8RwK16MuYaLXVG', NULL, '127.0.0.1', 'curl/8.7.1', 'eyJfdG9rZW4iOiJwejRQbWRzSkhIcGZ2a3NDajJkMWpoaFRXRkpVN1pPNGxMbnRVQnBDIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2FkaXR5LnRlc3RcL3JvYm90cy50eHQiLCJyb3V0ZSI6InJvYm90cyJ9LCJfZmxhc2giOnsib2xkIjpbXSwibmV3IjpbXX19', 1786879272),
('CxLBGUyae9Q7ZdgaY1TXOBGt1rOfPEt8OJ1d0qpJ', NULL, '127.0.0.1', 'curl/8.7.1', 'eyJfdG9rZW4iOiJuWnpJTHpoV1F5Wm10VzdIZXFYM25MaWkyMTk0YWVNZXlGanFndUdEIiwidXJsIjp7ImludGVuZGVkIjoiaHR0cDpcL1wvYWRpdHkudGVzdFwvYWRtaW5cL3ZpZGVvcyJ9LCJfcHJldmlvdXMiOnsidXJsIjoiaHR0cDpcL1wvYWRpdHkudGVzdFwvYWRtaW5cL3ZpZGVvcyIsInJvdXRlIjoiZmlsYW1lbnQuYWRtaW4ucmVzb3VyY2VzLnZpZGVvcy5pbmRleCJ9LCJfZmxhc2giOnsib2xkIjpbXSwibmV3IjpbXX19', 1786879446),
('cXMt2IgglKZgDLNdnsxXPVybqqDc07DAS3IeXAdx', NULL, '127.0.0.1', 'curl/8.7.1', 'eyJfdG9rZW4iOiIycjlsMUlaQW1DMEVDZ0Noa3dYWXNMTDlacmZ2SVpTOWVVN3NQcEkwIiwidXJsIjp7ImludGVuZGVkIjoiaHR0cDpcL1wvYWRpdHkudGVzdFwvYWRtaW5cL2dhbGxlcnktY2F0ZWdvcmllcyJ9LCJfcHJldmlvdXMiOnsidXJsIjoiaHR0cDpcL1wvYWRpdHkudGVzdFwvYWRtaW5cL2dhbGxlcnktY2F0ZWdvcmllcyIsInJvdXRlIjoiZmlsYW1lbnQuYWRtaW4ucmVzb3VyY2VzLmdhbGxlcnktY2F0ZWdvcmllcy5pbmRleCJ9LCJfZmxhc2giOnsib2xkIjpbXSwibmV3IjpbXX19', 1786879446),
('d13gM4I3WxoUH1lqQv5PiCHW6lz69dfMUeeE21gt', NULL, '127.0.0.1', 'curl/8.7.1', 'eyJfdG9rZW4iOiJZZ05QWFRCUlppQk9nZnlxckVaUktQNmFZdEkzTVJ5YTdNUWVRRkc0IiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2FkaXR5LnRlc3RcL3JvYm90cy50eHQiLCJyb3V0ZSI6InJvYm90cyJ9LCJfZmxhc2giOnsib2xkIjpbXSwibmV3IjpbXX19', 1786879723),
('d2w7FPGoAj3XjHzF88tNOnLxeFHUZW034xCltxIq', NULL, '127.0.0.1', 'curl/8.7.1', 'eyJfdG9rZW4iOiI3QVgxU2trNnNzUjhzaHJvdVlXYmE5em5FVjZ6a1J3THhFSjFOU3JLIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2FkaXR5LnRlc3RcL2NvbnRhY3QiLCJyb3V0ZSI6ImNvbnRhY3QifSwiX2ZsYXNoIjp7Im9sZCI6W10sIm5ldyI6W119fQ==', 1786879758),
('D5QA0uRV3HlrwS4rhG1MWFI3fVpsboVmMgI41JOI', NULL, '127.0.0.1', 'curl/8.7.1', 'eyJfdG9rZW4iOiI0RVlyTU5iOExpNWo1UkF2RU5BWVFBY25iSTh6U1duUWlDV1lnYmNxIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2FkaXR5LnRlc3RcL2NvbnRhY3QiLCJyb3V0ZSI6ImNvbnRhY3QifSwiX2ZsYXNoIjp7Im9sZCI6W10sIm5ldyI6W119fQ==', 1786877496),
('d79j23EY1Nmn7PeXzZg2y5LDOYD0gHVhiXhRtdkZ', NULL, '127.0.0.1', 'curl/8.7.1', 'eyJfdG9rZW4iOiJTWTkza29mSUJEeGdDdTBQaTI2OTlURWtxYVJhYWNXMWdxT0dacm8yIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2FkaXR5LnRlc3RcL2dhbGxlcnkiLCJyb3V0ZSI6ImdhbGxlcnkifSwiX2ZsYXNoIjp7Im9sZCI6W10sIm5ldyI6W119fQ==', 1786879722),
('dd9xQ1LqALpW3o46Ifh03rS7JmHtHoHJeekwaiBE', 1, '127.0.0.1', 'Symfony', 'eyJsb2dpbl93ZWJfNTliYTM2YWRkYzJiMmY5NDAxNTgwZjAxNGM3ZjU4ZWE0ZTMwOTg5ZCI6MSwiX3Rva2VuIjoib2hveFJNOU54WnVreVMwNGowMFB3aDkxaFZtRlJwWHlOR0JYWFFjSSIsInBhc3N3b3JkX2hhc2hfd2ViIjoiOTk5N2IwMmJiYzJjMGZiNDUzMjZhMGE5MDc2ZDU0M2Q2MjMxMmM5ZThjNTg4YTQ0N2JjMjc4MmQ4ZDJlZWE4MiIsIl9wcmV2aW91cyI6eyJ1cmwiOiJodHRwOlwvXC9sb2NhbGhvc3RcL2FkbWluIiwicm91dGUiOiJmaWxhbWVudC5hZG1pbi5wYWdlcy5kYXNoYm9hcmQifSwiX2ZsYXNoIjp7Im9sZCI6W10sIm5ldyI6W119fQ==', 1786879722),
('DImF5DfqOKzJiIrrgZt7245EXyEEV2Jy9vzGIxqu', NULL, '127.0.0.1', 'curl/8.7.1', 'eyJfdG9rZW4iOiIzaE1DcmlSRG53NVAyVzdPeExSanZRaFRwNUdJUUZQVXRoTjRXaTJrIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2FkaXR5LnRlc3RcL3ZpZGVvcyIsInJvdXRlIjoidmlkZW9zIn0sIl9mbGFzaCI6eyJvbGQiOltdLCJuZXciOltdfX0=', 1786879272),
('dTjIrtBMqk4OBQocPceGcHOaWn3EfKe77P88hMAz', 1, '127.0.0.1', 'Symfony', 'eyJsb2dpbl93ZWJfNTliYTM2YWRkYzJiMmY5NDAxNTgwZjAxNGM3ZjU4ZWE0ZTMwOTg5ZCI6MSwiX3Rva2VuIjoib2I3Vjc1VTg1akxhNFdiR2l2b00zcWFSM292c3pyQ2dXek9FTWFSaiIsInBhc3N3b3JkX2hhc2hfd2ViIjoiOTk5N2IwMmJiYzJjMGZiNDUzMjZhMGE5MDc2ZDU0M2Q2MjMxMmM5ZThjNTg4YTQ0N2JjMjc4MmQ4ZDJlZWE4MiIsIl9wcmV2aW91cyI6eyJ1cmwiOiJodHRwOlwvXC9sb2NhbGhvc3RcL2FkbWluIiwicm91dGUiOiJmaWxhbWVudC5hZG1pbi5wYWdlcy5kYXNoYm9hcmQifSwiX2ZsYXNoIjp7Im9sZCI6W10sIm5ldyI6W119fQ==', 1786879344),
('dVqLtvBqr47BnvK7xqPm6BXS8mMhVm2tQg9vuliR', NULL, '127.0.0.1', 'curl/8.7.1', 'eyJfdG9rZW4iOiJGMXlYejNLdU41TjNaaWJRaXo3N0hYS3MxTWR5Wmh4SURiTGZqd2pxIiwidXJsIjp7ImludGVuZGVkIjoiaHR0cDpcL1wvYWRpdHkudGVzdFwvYWRtaW5cL2dhbGxlcnktY2F0ZWdvcmllcyJ9LCJfcHJldmlvdXMiOnsidXJsIjoiaHR0cDpcL1wvYWRpdHkudGVzdFwvYWRtaW5cL2dhbGxlcnktY2F0ZWdvcmllcyIsInJvdXRlIjoiZmlsYW1lbnQuYWRtaW4ucmVzb3VyY2VzLmdhbGxlcnktY2F0ZWdvcmllcy5pbmRleCJ9LCJfZmxhc2giOnsib2xkIjpbXSwibmV3IjpbXX19', 1786879446),
('e5crKJ7jQ1sdxXCMAUJSviYJpyXnar2Uw1dlxFP1', NULL, '127.0.0.1', 'curl/8.7.1', 'eyJfdG9rZW4iOiI0SmJhbkpWZHRoaXZTMTV0SUFtY25nVERSYXI1VnVFNFVxUGFJWXk3IiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2FkaXR5LnRlc3QiLCJyb3V0ZSI6ImhvbWUifSwiX2ZsYXNoIjp7Im9sZCI6W10sIm5ldyI6W119fQ==', 1786879272),
('EWzcEl9dRWocau4qZ6EbaTGnZYqcfofLG4LXVMfA', NULL, '127.0.0.1', 'curl/8.7.1', 'eyJfdG9rZW4iOiJYdE91RmZjMTZFWk9qT283dVByeGlSaGxZaTdEOEFndWs2TUVzNk1JIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2FkaXR5LnRlc3RcL2dhbGxlcnkiLCJyb3V0ZSI6ImdhbGxlcnkifSwiX2ZsYXNoIjp7Im9sZCI6W10sIm5ldyI6W119fQ==', 1786879471),
('exkIa0IOrUOMeEHH8UnwYj4a4kmTx7kWHddkKfRJ', 1, '127.0.0.1', 'Symfony', 'eyJsb2dpbl93ZWJfNTliYTM2YWRkYzJiMmY5NDAxNTgwZjAxNGM3ZjU4ZWE0ZTMwOTg5ZCI6MSwiX3Rva2VuIjoicmF0UEU2ZTJFU29rWnU1VDUzV2VvUEJ3R1dPSWVCZUwycHpveTNSaCIsInBhc3N3b3JkX2hhc2hfd2ViIjoiOTk5N2IwMmJiYzJjMGZiNDUzMjZhMGE5MDc2ZDU0M2Q2MjMxMmM5ZThjNTg4YTQ0N2JjMjc4MmQ4ZDJlZWE4MiIsIl9wcmV2aW91cyI6eyJ1cmwiOiJodHRwOlwvXC9sb2NhbGhvc3RcL2FkbWluXC9ldmVudHNcL2NyZWF0ZSIsInJvdXRlIjoiZmlsYW1lbnQuYWRtaW4ucmVzb3VyY2VzLmV2ZW50cy5jcmVhdGUifSwiX2ZsYXNoIjp7Im9sZCI6W10sIm5ldyI6W119fQ==', 1786879323),
('EXNu3vtUeyjCaIVdohS7fLIZ0dkw0q8wvUlAwWzl', NULL, '127.0.0.1', 'curl/8.7.1', 'eyJfdG9rZW4iOiJBdWZMQ1BOWDdNc1RMWTQ3VHF4dmZjVHhjanJrWFBUbGxDSlVkckU5IiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2FkaXR5LnRlc3RcL2NvbnRhY3QiLCJyb3V0ZSI6ImNvbnRhY3QifSwiX2ZsYXNoIjp7Im9sZCI6W10sIm5ldyI6W119fQ==', 1786879723),
('F0pBK2Pk1Tj66AXcq0hi86nSJJOnzSAAu8Z0iKPw', NULL, '127.0.0.1', 'curl/8.7.1', 'eyJfdG9rZW4iOiJoeDduZUlzc1d5OGF4RUJybXBLN1V0Vk9jMmNGbFc5b2dwUWtiS0hwIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2FkaXR5LnRlc3RcL2V2ZW50cyIsInJvdXRlIjoiZXZlbnRzIn0sIl9mbGFzaCI6eyJvbGQiOltdLCJuZXciOltdfX0=', 1786879272),
('fu4CeupWL4vzgxLyFRw8VKCc4B0l9bEG60ZPf44H', NULL, '127.0.0.1', 'curl/8.7.1', 'eyJfdG9rZW4iOiJtU2pISW85MmF5TEpEOTgyZmU4YkgyaUNVTUl3NXMzSXZaOGZzTktBIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2FkaXR5LnRlc3QiLCJyb3V0ZSI6ImhvbWUifSwiX2ZsYXNoIjp7Im9sZCI6W10sIm5ldyI6W119fQ==', 1786879722),
('g3ynGYEv7RPnSEs9iMAdu3dYu6rNv4XQ3vnFcpmh', NULL, '127.0.0.1', 'curl/8.7.1', 'eyJfdG9rZW4iOiJVeHBoc3kxU1lxdHV2dmd0QzZ4OHZ2RjJWWllITW91V3ZXZ1AyNTRlIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2FkaXR5LnRlc3RcL3NpdGVtYXAueG1sIiwicm91dGUiOiJzaXRlbWFwIn0sIl9mbGFzaCI6eyJvbGQiOltdLCJuZXciOltdfX0=', 1786879723),
('geZGmtvmZLW8QCKsqn3DirnX16xUyx0IsvEjfyRM', NULL, '127.0.0.1', 'curl/8.7.1', 'eyJfdG9rZW4iOiJXMUNycUdjQ1Zuc0VQOVRWZGlEeXluZG83ODY4UW5HT1FaRGpVU2psIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2FkaXR5LnRlc3RcL2FkbWluXC9sb2dpbiIsInJvdXRlIjoiZmlsYW1lbnQuYWRtaW4uYXV0aC5sb2dpbiJ9LCJfZmxhc2giOnsib2xkIjpbXSwibmV3IjpbXX19', 1786879722),
('gvwb6CJMhUjtxujcSsYO2pE49b6Imp2bhcAYswBZ', NULL, '127.0.0.1', 'curl/8.7.1', 'eyJfdG9rZW4iOiJYVnBDWURRSW9OVnhmb2VZT0hZWmRlU2lKbDYyWm10NW1GWTJ6eHV5IiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2FkaXR5LnRlc3RcL3ZpZGVvcyIsInJvdXRlIjoidmlkZW9zIn0sIl9mbGFzaCI6eyJvbGQiOltdLCJuZXciOltdfX0=', 1786879471),
('GWDMVmJxLro7fyc30xdFYdI9HAcocj2wl4RvrjjO', NULL, '127.0.0.1', 'curl/8.7.1', 'eyJfdG9rZW4iOiJhWHQyNzRMQTlweEtUNkpaZWV2RGdiU3p5Z25IcUVXOUFUc1RiY0FHIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2FkaXR5LnRlc3RcL3JvYm90cy50eHQiLCJyb3V0ZSI6InJvYm90cyJ9LCJfZmxhc2giOnsib2xkIjpbXSwibmV3IjpbXX19', 1786879446),
('h0gj9g3X5mNfNlf8UEzH0p07ZLXdbPBquFa1aEL6', NULL, '127.0.0.1', 'curl/8.7.1', 'eyJfdG9rZW4iOiI2Z0IydGE3RzhlZ0JNM3JGVzUzaWZIeVhhQTE5cExET0FlWHJlcTY0IiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2FkaXR5LnRlc3RcL2FkbWluXC9sb2dpbiIsInJvdXRlIjoiZmlsYW1lbnQuYWRtaW4uYXV0aC5sb2dpbiJ9LCJfZmxhc2giOnsib2xkIjpbXSwibmV3IjpbXX19', 1786877497),
('h6CRGSzov4rVKMYgtOm9WUB4ib7H1OFXDNNWh20u', NULL, '127.0.0.1', 'curl/8.7.1', 'eyJfdG9rZW4iOiJoNkpLMEVneEFYTFNTbTBRZkh6aEVSRzBCWlJpRDhWbTZHTERmVEpZIiwidXJsIjp7ImludGVuZGVkIjoiaHR0cDpcL1wvYWRpdHkudGVzdFwvYWRtaW4ifSwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2FkaXR5LnRlc3RcL2FkbWluIiwicm91dGUiOiJmaWxhbWVudC5hZG1pbi5wYWdlcy5kYXNoYm9hcmQifSwiX2ZsYXNoIjp7Im9sZCI6W10sIm5ldyI6W119fQ==', 1786879446),
('H95xE406xDA21I77WcpkOD72qt8yfMgG7qLBfFp0', NULL, '127.0.0.1', 'curl/8.7.1', 'eyJfdG9rZW4iOiJiblpuMG5NRlNISDRrVHJrYk9lRHk4N0FEQ3FaQTlWZ1FxaEFNdTFFIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2FkaXR5LnRlc3RcL2Fib3V0Iiwicm91dGUiOiJhYm91dCJ9LCJfZmxhc2giOnsib2xkIjpbXSwibmV3IjpbXX19', 1786879272),
('HRhDm1z6RgQCrBGMFDxzwTZP9a8EthhYaD1gouqV', NULL, '127.0.0.1', 'curl/8.7.1', 'eyJfdG9rZW4iOiJzRVJVWlZMUEg4dFFtcUlEb0xTaGNlWHJoeFJhOTV0MDV1RkFRR2NyIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2FkaXR5LnRlc3RcL2dhbGxlcnkiLCJyb3V0ZSI6ImdhbGxlcnkifSwiX2ZsYXNoIjp7Im9sZCI6W10sIm5ldyI6W119fQ==', 1786877496),
('idNhI0pG6Ki4lgEuW74HSOSMdyLBRCyOqbnbKuP2', NULL, '127.0.0.1', 'curl/8.7.1', 'eyJfdG9rZW4iOiI2Zng2d2tGOU55NTh6WWVvcWdXenhzdzQwR0N6cjJGNmUzZVpxblB4IiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2FkaXR5LnRlc3RcL2Fib3V0Iiwicm91dGUiOiJhYm91dCJ9LCJfZmxhc2giOnsib2xkIjpbXSwibmV3IjpbXX19', 1786879757),
('iGgmb0Ksu8aE79F5bWl7WY4MljHnrPG1KQMjeffp', NULL, '127.0.0.1', 'curl/8.7.1', 'eyJfdG9rZW4iOiJVcnNjUHZQYjZDS1JFenhndWJwd2ZvTVJrUlRlc3MzU2phOTB1U2ZNIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2FkaXR5LnRlc3RcL2V2ZW50cyIsInJvdXRlIjoiZXZlbnRzIn0sIl9mbGFzaCI6eyJvbGQiOltdLCJuZXciOltdfX0=', 1786879446),
('izbBjE0pkfEmv4BCdYrmSNIwHZfMdOuagikTowJq', NULL, '127.0.0.1', 'curl/8.7.1', 'eyJfdG9rZW4iOiJQVlFGck5pd0RERUxYcUlaV0pPVEk4dXRXeEhWZEZ6bE9mV2RYMmlJIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2FkaXR5LnRlc3RcL3ZpZGVvcyIsInJvdXRlIjoidmlkZW9zIn0sIl9mbGFzaCI6eyJvbGQiOltdLCJuZXciOltdfX0=', 1786879721),
('j7yEru7pNvnKHYqjFMaUcVtcpzUarQsuhl4JF5Zn', NULL, '127.0.0.1', 'curl/8.7.1', 'eyJfdG9rZW4iOiJjNmNVOExTMUtuYmxQcWtqbWxRRFlicmJXa2pIWE54R2FnamE5cGt5IiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2FkaXR5LnRlc3RcL2Fib3V0Iiwicm91dGUiOiJhYm91dCJ9LCJfZmxhc2giOnsib2xkIjpbXSwibmV3IjpbXX19', 1786879722),
('jpCs7sjeTHJ9J209K1zF5BGdHeCj7v7fK5YZzHuR', NULL, '127.0.0.1', 'curl/8.7.1', 'eyJfdG9rZW4iOiJKbmVRT2lkTUJxalBIRnBGWFk0bWZCZU11ajQ1WXZVcFpBOXFSa09yIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2FkaXR5LnRlc3RcL2Fib3V0Iiwicm91dGUiOiJhYm91dCJ9LCJfZmxhc2giOnsib2xkIjpbXSwibmV3IjpbXX19', 1786879721),
('jR4XQNPJgwcv7uHEbICOHqv3N5F3TZLJrmtUOmGh', NULL, '127.0.0.1', 'curl/8.7.1', 'eyJfdG9rZW4iOiJ0eTNXY2NkV1cwa1pIbVZnSjdlVkdOdnA4STFjRzlLQVhxV0ZLQkQ4IiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2FkaXR5LnRlc3RcL3JvYm90cy50eHQiLCJyb3V0ZSI6InJvYm90cyJ9LCJfZmxhc2giOnsib2xkIjpbXSwibmV3IjpbXX19', 1786877497),
('kptM15sl4WGqguZnckZPwJv8la1RyLXRy9vCclp9', NULL, '127.0.0.1', 'curl/8.7.1', 'eyJfdG9rZW4iOiI1RENITjE0bFI0ak81TUREQ3g3enl2R3Z2TzdhNnVuSk1ueFA2aEdMIiwidXJsIjp7ImludGVuZGVkIjoiaHR0cDpcL1wvYWRpdHkudGVzdFwvYWRtaW5cL2FjY291bnQtc2V0dGluZ3MifSwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2FkaXR5LnRlc3RcL2FkbWluXC9hY2NvdW50LXNldHRpbmdzIiwicm91dGUiOiJmaWxhbWVudC5hZG1pbi5hY2NvdW50LXNldHRpbmdzIn0sIl9mbGFzaCI6eyJvbGQiOltdLCJuZXciOltdfX0=', 1786880123),
('KZMu0dvNYqhL8ldphdjMd7Y8ujjLrz46ZvoaWo9P', NULL, '127.0.0.1', 'curl/8.7.1', 'eyJfdG9rZW4iOiJidWM2c3NBeTNyUW1BaXZ4ZndhU2txcHJicXQyYmpJYVhsS1JYcFdLIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2FkaXR5LnRlc3RcL3ZpZGVvcyIsInJvdXRlIjoidmlkZW9zIn0sIl9mbGFzaCI6eyJvbGQiOltdLCJuZXciOltdfX0=', 1786879446),
('LARGl9kiJeVsOvK9yYqSnS8SAlzILe4E3HJJyegA', NULL, '127.0.0.1', 'curl/8.7.1', 'eyJfdG9rZW4iOiI2SzdLZ1o2SjdEa1ZYc0c1SFpYbWpVbjJNZjVwQjB0dlhLUENUS2tJIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2FkaXR5LnRlc3QiLCJyb3V0ZSI6ImhvbWUifSwiX2ZsYXNoIjp7Im9sZCI6W10sIm5ldyI6W119fQ==', 1786879287),
('lEaWid91UmPo16yyc78tMpS1MZnHnYd0Goa6o9VI', NULL, '127.0.0.1', 'curl/8.7.1', 'eyJfdG9rZW4iOiJ4Tk9KdUxpS3lzSU52azlLbHdWQlQwbEFNTHBaYzl4TjdaTnBDbkFrIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2FkaXR5LnRlc3QiLCJyb3V0ZSI6ImhvbWUifSwiX2ZsYXNoIjp7Im9sZCI6W10sIm5ldyI6W119fQ==', 1786879272),
('LJazZ5DNAPx3N3tJH2QszxiMoonaxviXmJZQaa2Z', 1, '127.0.0.1', 'Symfony', 'eyJsb2dpbl93ZWJfNTliYTM2YWRkYzJiMmY5NDAxNTgwZjAxNGM3ZjU4ZWE0ZTMwOTg5ZCI6MSwiX3Rva2VuIjoieE1ETzNzTlJaVFNONzJCelJIZVFnRDgwRUVvMG9HdUVPOERuMmU5ZiIsInBhc3N3b3JkX2hhc2hfd2ViIjoiOTk5N2IwMmJiYzJjMGZiNDUzMjZhMGE5MDc2ZDU0M2Q2MjMxMmM5ZThjNTg4YTQ0N2JjMjc4MmQ4ZDJlZWE4MiIsIl9wcmV2aW91cyI6eyJ1cmwiOiJodHRwOlwvXC9sb2NhbGhvc3RcL2FkbWluXC9hY2NvdW50LXNldHRpbmdzIiwicm91dGUiOiJmaWxhbWVudC5hZG1pbi5hY2NvdW50LXNldHRpbmdzIn0sIl9mbGFzaCI6eyJvbGQiOltdLCJuZXciOltdfX0=', 1786880114),
('LOpldxut8mLLddPHBAGJ0U4scPttXSpjBKGoup4x', NULL, '127.0.0.1', 'curl/8.7.1', 'eyJfdG9rZW4iOiJjTUVYUlRQODNzOHJ1YnlOYkJlb2RaN0RtT1B3SXRQb1Bad2RPaGxFIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2FkaXR5LnRlc3RcL2Fib3V0Iiwicm91dGUiOiJhYm91dCJ9LCJfZmxhc2giOnsib2xkIjpbXSwibmV3IjpbXX19', 1786879272),
('M3j5Y5cYNO0ImE7qrY2d2ApUMgi1lReEMnMAmWjm', NULL, '127.0.0.1', 'curl/8.7.1', 'eyJfdG9rZW4iOiJWU2VTUWhkZjlzb3NZdm5TdVV0cDQ5Z2xqTE96WWh1cFVCQ0xMc3NXIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2FkaXR5LnRlc3RcL2FkbWluXC9sb2dpbiIsInJvdXRlIjoiZmlsYW1lbnQuYWRtaW4uYXV0aC5sb2dpbiJ9LCJfZmxhc2giOnsib2xkIjpbXSwibmV3IjpbXX19', 1786877696),
('MF2z7HVXKrlZBfjWBlcGT6OfjQ51agLdggd7nXei', NULL, '127.0.0.1', 'curl/8.7.1', 'eyJfdG9rZW4iOiJOMXJxRTFWUnVXeElzT0pXdk4xc21LdlRmdlFKNDJFV0JjTjZlSWJnIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2FkaXR5LnRlc3RcL2FkbWluIiwicm91dGUiOiJmaWxhbWVudC5hZG1pbi5wYWdlcy5kYXNoYm9hcmQifSwiX2ZsYXNoIjp7Im9sZCI6W10sIm5ldyI6W119LCJ1cmwiOnsiaW50ZW5kZWQiOiJodHRwOlwvXC9hZGl0eS50ZXN0XC9hZG1pbiJ9fQ==', 1786880123),
('mLl7JVgFWF3x0xTHF5Jls2Oax0szUa7vU2hnLeXq', NULL, '127.0.0.1', 'curl/8.7.1', 'eyJfdG9rZW4iOiJOZzhVc3NoaWxvTE9LWkg4VUpuVE5DQ0pYc0tTbzFUcG83RU1HUUN3IiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2FkaXR5LnRlc3RcL2V2ZW50cyIsInJvdXRlIjoiZXZlbnRzIn0sIl9mbGFzaCI6eyJvbGQiOltdLCJuZXciOltdfX0=', 1786879721),
('nI0ASlRa6t0qMJizl7CFZ3oErqz3qc96nzO0TzRA', 1, '127.0.0.1', 'Symfony', 'eyJfdG9rZW4iOiJoQlZndjZtRkZqRUhWdEZTbExOVGV3QWtlRGdWeUl0dlJ5WXhZb0pTIiwibG9naW5fd2ViXzU5YmEzNmFkZGMyYjJmOTQwMTU4MGYwMTRjN2Y1OGVhNGUzMDk4OWQiOjEsInBhc3N3b3JkX2hhc2hfd2ViIjoiOTk5N2IwMmJiYzJjMGZiNDUzMjZhMGE5MDc2ZDU0M2Q2MjMxMmM5ZThjNTg4YTQ0N2JjMjc4MmQ4ZDJlZWE4MiIsIl9wcmV2aW91cyI6eyJ1cmwiOiJodHRwOlwvXC9hZGl0eS50ZXN0XC9hZG1pblwvYWNjb3VudC1zZXR0aW5ncyIsInJvdXRlIjoiZmlsYW1lbnQuYWRtaW4uYWNjb3VudC1zZXR0aW5ncyJ9LCJfZmxhc2giOnsib2xkIjpbXSwibmV3IjpbXX19', 1786880154),
('NMkLpy0OKyhAEu4NSLRBqloqglb1D81LYy3JSglT', NULL, '127.0.0.1', 'curl/8.7.1', 'eyJfdG9rZW4iOiJHSGdjZDRHcVRZeGpNQ0pFaE1uczJGQ290WmxKYzZmTGU0cmFOWVYzIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2FkaXR5LnRlc3RcL2NvbnRhY3QiLCJyb3V0ZSI6ImNvbnRhY3QifSwiX2ZsYXNoIjp7Im9sZCI6W10sIm5ldyI6W119fQ==', 1786879272),
('NzCtuJok8e7rz7rBvFfPKwLHZXSB8x2O10rCx7fs', NULL, '127.0.0.1', 'curl/8.7.1', 'eyJfdG9rZW4iOiJnVnhNTng3RmIyd1h4MDd6ejY0c0NnSHBTUWFPOW1MUjRieGREQ3JtIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2FkaXR5LnRlc3RcL3ZpZGVvcyIsInJvdXRlIjoidmlkZW9zIn0sIl9mbGFzaCI6eyJvbGQiOltdLCJuZXciOltdfX0=', 1786879722),
('OicY68wGPo3jTMHmIOIJsoADt1W5Hv4thmAZq7Vw', NULL, '127.0.0.1', 'curl/8.7.1', 'eyJfdG9rZW4iOiJLYUM3TWNjTHdJUVl5VHNsNWRBV1lnSUVya2xldHJoakNucDRBVjdQIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2FkaXR5LnRlc3RcL2NvbnRhY3QiLCJyb3V0ZSI6ImNvbnRhY3QifSwiX2ZsYXNoIjp7Im9sZCI6W10sIm5ldyI6W119fQ==', 1786879471),
('oqHz83VK9VhB8wKU0aVCn9zFlSGar1fRh4nekDmP', NULL, '127.0.0.1', 'curl/8.7.1', 'eyJfdG9rZW4iOiIzODRPQllYUFQ4bUdGaFhGYjljMWtrOHhabVF1SllvdzhXUkFPRTNxIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2FkaXR5LnRlc3RcL2NvbnRhY3QiLCJyb3V0ZSI6ImNvbnRhY3QifSwiX2ZsYXNoIjp7Im9sZCI6W10sIm5ldyI6W119fQ==', 1786879273),
('Ov38JreMBKwK84txEYDP33JnQvXQCJNXoX0AQMzh', NULL, '127.0.0.1', 'curl/8.7.1', 'eyJfdG9rZW4iOiJ1U1RNUzZSY09sem9QU2N3TWdQb1FDRmh3QW0xM2Joc09McnVzQVdSIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2FkaXR5LnRlc3QiLCJyb3V0ZSI6ImhvbWUifSwiX2ZsYXNoIjp7Im9sZCI6W10sIm5ldyI6W119fQ==', 1786879489),
('P9xgg8Fx3M2uMt2Gj7hDdZvt4zUtI05jmAijQWgz', NULL, '127.0.0.1', 'curl/8.7.1', 'eyJfdG9rZW4iOiJNSVdhN1FKOUFuNTRuVXFoQWNLc2hxQnpmcE5DQUN2blNPS25PMW83IiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2FkaXR5LnRlc3QiLCJyb3V0ZSI6ImhvbWUifSwiX2ZsYXNoIjp7Im9sZCI6W10sIm5ldyI6W119fQ==', 1786879308),
('Pr89cuuA9xR2R7Hj3Gw7xmO6rILWWqxBfus7PdUm', NULL, '127.0.0.1', '', 'eyJfdG9rZW4iOiJITHRBNlhzZE5ER3QxZTlBSklUWTBsbjF3cnNnNjJvTnBib1duWFhMIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2FkaXR5LnRlc3QiLCJyb3V0ZSI6ImhvbWUifSwiX2ZsYXNoIjp7Im9sZCI6W10sIm5ldyI6W119fQ==', 1786879740),
('ps3YtxFxM4fRa0s9PzdVhib1KGlykoKs77Qds5Mh', NULL, '127.0.0.1', 'curl/8.7.1', 'eyJfdG9rZW4iOiJqNzJuM05ydGoyNFh6dDdZMEJrY0NiVGtKYTdLcW5RU2JhVnI2OXpMIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2FkaXR5LnRlc3QiLCJyb3V0ZSI6ImhvbWUifSwiX2ZsYXNoIjp7Im9sZCI6W10sIm5ldyI6W119fQ==', 1786879446),
('Q5udhnKBzqxtaa6pqBc1P72icBBufRffLqteCFtq', NULL, '127.0.0.1', 'curl/8.7.1', 'eyJfdG9rZW4iOiJ2N3U3SWphZmlqVlVDU01XYWJ1QXdNaUw0Ykp4eHE1enNFRkJPbTAzIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2FkaXR5LnRlc3RcL2Fib3V0Iiwicm91dGUiOiJhYm91dCJ9LCJfZmxhc2giOnsib2xkIjpbXSwibmV3IjpbXX19', 1786879050),
('qdJBrP22LCNI73QpmmPBMxrgQtj78DJFNq88yslE', NULL, '127.0.0.1', 'curl/8.7.1', 'eyJfdG9rZW4iOiJhNUlNZHFkZjliQjdnZ1ZzakNTaFRpR2hPdU9ZbHVZcG10cnViUjBkIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2FkaXR5LnRlc3RcL3NpdGVtYXAueG1sIiwicm91dGUiOiJzaXRlbWFwIn0sIl9mbGFzaCI6eyJvbGQiOltdLCJuZXciOltdfX0=', 1786879446),
('QhCFjHEJHsBaylbxRv224jBXgmrcOJ6lPCO6t4VT', NULL, '127.0.0.1', 'curl/8.7.1', 'eyJfdG9rZW4iOiJHYjhMeGpNempnUWVXdW9FcWJ6SExFZFFCeHpMR3Zld1lQR1VBSWM1IiwidXJsIjp7ImludGVuZGVkIjoiaHR0cDpcL1wvYWRpdHkudGVzdFwvYWRtaW4ifSwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2FkaXR5LnRlc3RcL2FkbWluIiwicm91dGUiOiJmaWxhbWVudC5hZG1pbi5wYWdlcy5kYXNoYm9hcmQifSwiX2ZsYXNoIjp7Im9sZCI6W10sIm5ldyI6W119fQ==', 1786879446),
('qlQyExoty7JiS2gsKzmpuKCso6k25oJr9FFXCy2U', NULL, '127.0.0.1', 'curl/8.7.1', 'eyJfdG9rZW4iOiJGU2VZUEZTaWVKbGZPcnlKZ3dQbkRUVng0aURMcEk5OWdkUUJhbWxvIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2FkaXR5LnRlc3RcL3NpdGVtYXAueG1sIiwicm91dGUiOiJzaXRlbWFwIn0sIl9mbGFzaCI6eyJvbGQiOltdLCJuZXciOltdfX0=', 1786879721),
('QNynAiqBARRCACt2GgsWwKzJXdy2Sck9jX0RbWSH', NULL, '127.0.0.1', 'curl/8.7.1', 'eyJfdG9rZW4iOiJCNE9lN2lldnhYQmRhMTFRT2dKV3plR0NyWGpFT2I4aWtOaEx4UzZaIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2FkaXR5LnRlc3RcL2Fib3V0Iiwicm91dGUiOiJhYm91dCJ9LCJfZmxhc2giOnsib2xkIjpbXSwibmV3IjpbXX19', 1786879489),
('r6WNnhHe6B67jWKx92ysLmKnudTR7Z6F5Vnxhj8Q', NULL, '127.0.0.1', 'curl/8.7.1', 'eyJfdG9rZW4iOiJOajdSNUlXV1JmVU5DZkJZMkdpeUZFQzA1VUhCdFNRVEE0Q3VkNEFXIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2FkaXR5LnRlc3RcL2dhbGxlcnkiLCJyb3V0ZSI6ImdhbGxlcnkifSwiX2ZsYXNoIjp7Im9sZCI6W10sIm5ldyI6W119fQ==', 1786879272),
('rAZrhSlUZ3U8tLOeMlhlvI0cyFBtKPpsOpPczDIN', NULL, '127.0.0.1', 'curl/8.7.1', 'eyJfdG9rZW4iOiIzVFRnQ3I1Q0hKQnpPM2dUazFseEhmWUpPOVVlcWJWWTNkOFBvbDFlIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2FkaXR5LnRlc3RcL2Fib3V0Iiwicm91dGUiOiJhYm91dCJ9LCJfZmxhc2giOnsib2xkIjpbXSwibmV3IjpbXX19', 1786877496),
('rv9S4FIgoZGAS4T32p4hsnIvRExPvplx5m1RIDfx', NULL, '127.0.0.1', 'curl/8.7.1', 'eyJfdG9rZW4iOiJBN3JVUDdiZlZwaTc1a2F3N3lCS0N1M0dQNzFQT3hseHdHMDhYSHNnIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2FkaXR5LnRlc3RcL3JvYm90cy50eHQiLCJyb3V0ZSI6InJvYm90cyJ9LCJfZmxhc2giOnsib2xkIjpbXSwibmV3IjpbXX19', 1786879454),
('SGua8L2bYlCXK2zV7hQ6EbI2l9eNZ8iAhTHZgZjs', NULL, '127.0.0.1', 'curl/8.7.1', 'eyJfdG9rZW4iOiJrTW5VZEoyc3dVUmtjYUJmWUEwS2VMdmtpNDRhZnBDS2dzM3B3dFBuIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2FkaXR5LnRlc3QiLCJyb3V0ZSI6ImhvbWUifSwiX2ZsYXNoIjp7Im9sZCI6W10sIm5ldyI6W119fQ==', 1786879446),
('SNNmI0mRSt6Sk4loF8esBUP6nEhBwMSU145okV1F', NULL, '127.0.0.1', 'curl/8.7.1', 'eyJfdG9rZW4iOiJudWFScjJwUkVTb2NMODBsS0FEZUxtRnc1S3pGblhCWXRYVmtXZ2lsIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2FkaXR5LnRlc3QiLCJyb3V0ZSI6ImhvbWUifSwiX2ZsYXNoIjp7Im9sZCI6W10sIm5ldyI6W119fQ==', 1786879344),
('SZUwgDEmq4jU2pWTo0yDvWsqo2XfFijrVaWU53Z7', NULL, '127.0.0.1', 'curl/8.7.1', 'eyJfdG9rZW4iOiI5eXp3Snc5WVZjdm8zNXJGUlpaTjJuakJQS2xaV0dQRDlHeTlaSWhFIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2FkaXR5LnRlc3RcL3ZpZGVvcyIsInJvdXRlIjoidmlkZW9zIn0sIl9mbGFzaCI6eyJvbGQiOltdLCJuZXciOltdfX0=', 1786879354),
('Twm6ckfy7cjZHoERKBICjxwOwVEPjOAhgDS9c2T3', NULL, '127.0.0.1', 'curl/8.7.1', 'eyJfdG9rZW4iOiJ3d2ZxTHc5TzZHMzhDWWJkcHRGY01aSlNxc1N5NjgweFpkQWdoR1ZaIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2FkaXR5LnRlc3RcL3JvYm90cy50eHQiLCJyb3V0ZSI6InJvYm90cyJ9LCJfZmxhc2giOnsib2xkIjpbXSwibmV3IjpbXX19', 1786879721),
('U1sp66HrGp1UbIaXT16DyfHp8ODjQwlycmStoZoJ', NULL, '127.0.0.1', 'curl/8.7.1', 'eyJfdG9rZW4iOiI3Y1dWTkNnQTdQSmRhRzJwWGlXSTJQemhRUDhCUG5MbGMyaW5lNWtDIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2FkaXR5LnRlc3RcL2dhbGxlcnkiLCJyb3V0ZSI6ImdhbGxlcnkifSwiX2ZsYXNoIjp7Im9sZCI6W10sIm5ldyI6W119fQ==', 1786879757),
('U6wNCaT7XZoQmpAjItT1al9Sonf8o8m3SAfUIc32', NULL, '127.0.0.1', 'curl/8.7.1', 'eyJfdG9rZW4iOiJXTnJvc29RWmhqNDBIMHNlYkNld3JVUTROVTAwOWtKcG5TTVNOVTF4IiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2FkaXR5LnRlc3QiLCJyb3V0ZSI6ImhvbWUifSwiX2ZsYXNoIjp7Im9sZCI6W10sIm5ldyI6W119fQ==', 1786879722),
('u7UYkECVHlxtxwRcXBMl95r4cwm9CWcu8pjjJc7t', NULL, '127.0.0.1', 'curl/8.7.1', 'eyJfdG9rZW4iOiJlYWdUT1ZKY1RkanM0WTdhUVJEdVVGaWU2UlBNdzVlWkVjM25SdnN1IiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2FkaXR5LnRlc3RcL2dhbGxlcnkiLCJyb3V0ZSI6ImdhbGxlcnkifSwiX2ZsYXNoIjp7Im9sZCI6W10sIm5ldyI6W119fQ==', 1786879446),
('V26QtqFHKFewdDQgma1pFFbKY1aBYqhc23EbPO0o', 1, '127.0.0.1', 'Symfony', 'eyJsb2dpbl93ZWJfNTliYTM2YWRkYzJiMmY5NDAxNTgwZjAxNGM3ZjU4ZWE0ZTMwOTg5ZCI6MSwiX3Rva2VuIjoiTVltdkgzejU1UTNGcFN1b2tPRGVUTENJRlNNc25xN25nZXNmcUJkTCIsInBhc3N3b3JkX2hhc2hfd2ViIjoiOTk5N2IwMmJiYzJjMGZiNDUzMjZhMGE5MDc2ZDU0M2Q2MjMxMmM5ZThjNTg4YTQ0N2JjMjc4MmQ4ZDJlZWE4MiIsIl9wcmV2aW91cyI6eyJ1cmwiOiJodHRwOlwvXC9sb2NhbGhvc3RcL2FkbWluIiwicm91dGUiOiJmaWxhbWVudC5hZG1pbi5wYWdlcy5kYXNoYm9hcmQifSwiX2ZsYXNoIjp7Im9sZCI6W10sIm5ldyI6W119fQ==', 1786880107),
('VqhIQ2n2gDZCKVLCDw8uyTih0AeSDEwPLMJ11LTk', NULL, '127.0.0.1', 'curl/8.7.1', 'eyJfdG9rZW4iOiJ2WkRqVFVXaGVmdXNGaWk0a0w5YTlTeXFIRTJRR0g4ZWFpanRrbGY1IiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2FkaXR5LnRlc3RcL2FkbWluXC9sb2dpbiIsInJvdXRlIjoiZmlsYW1lbnQuYWRtaW4uYXV0aC5sb2dpbiJ9LCJfZmxhc2giOnsib2xkIjpbXSwibmV3IjpbXX19', 1786879272),
('VQPXccRZAr0jZTQkYgYn5lzLCl22jF8gTZgLLIWo', NULL, '127.0.0.1', 'curl/8.7.1', 'eyJfdG9rZW4iOiJJMUgyUXpCOFk3OEtIMm1GaklPcVVMRXowcjJlbGtRbzdJRzYxN0R2IiwidXJsIjp7ImludGVuZGVkIjoiaHR0cDpcL1wvYWRpdHkudGVzdFwvYWRtaW5cL2dhbGxlcnktaW1hZ2VzIn0sIl9wcmV2aW91cyI6eyJ1cmwiOiJodHRwOlwvXC9hZGl0eS50ZXN0XC9hZG1pblwvZ2FsbGVyeS1pbWFnZXMiLCJyb3V0ZSI6ImZpbGFtZW50LmFkbWluLnJlc291cmNlcy5nYWxsZXJ5LWltYWdlcy5pbmRleCJ9LCJfZmxhc2giOnsib2xkIjpbXSwibmV3IjpbXX19', 1786879446),
('vR6hz6RmNR74UPqfPfZPuPLaK6NFwBdS4utEI6IC', NULL, '127.0.0.1', 'curl/8.7.1', 'eyJfdG9rZW4iOiIxQ0I3R280b3dEMWh6UzZ0R1ZnSGhqZlNoV2ZwaHlSQTNwQkYxVjFEIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2FkaXR5LnRlc3RcL3NpdGVtYXAueG1sIiwicm91dGUiOiJzaXRlbWFwIn0sIl9mbGFzaCI6eyJvbGQiOltdLCJuZXciOltdfX0=', 1786879489),
('wmbMKRPxA2LMIeX6dJOClgOOU1kyZSnMyoUztRJq', NULL, '127.0.0.1', 'curl/8.7.1', 'eyJfdG9rZW4iOiJOY0RKVUUyajhST1UxVkZHUURYZkRkVzdST0hxMlFid2RaZ21ERjdmIiwidXJsIjp7ImludGVuZGVkIjoiaHR0cDpcL1wvYWRpdHkudGVzdFwvYWRtaW5cL3ZpZGVvcyJ9LCJfcHJldmlvdXMiOnsidXJsIjoiaHR0cDpcL1wvYWRpdHkudGVzdFwvYWRtaW5cL3ZpZGVvcyIsInJvdXRlIjoiZmlsYW1lbnQuYWRtaW4ucmVzb3VyY2VzLnZpZGVvcy5pbmRleCJ9LCJfZmxhc2giOnsib2xkIjpbXSwibmV3IjpbXX19', 1786879446),
('wNr0utVYajXHwg5FdqQiema2b1N9svthxHcfnTs6', NULL, '127.0.0.1', 'curl/8.7.1', 'eyJfdG9rZW4iOiJEQ1haM3ZOZ3FidVpKR3hjNXdza3FMd3dRWW1CTlpabXltU3dyN0ExIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2FkaXR5LnRlc3RcL2Fib3V0Iiwicm91dGUiOiJhYm91dCJ9LCJfZmxhc2giOnsib2xkIjpbXSwibmV3IjpbXX19', 1786879471),
('wOeJETuL3tavtEtajDUNP41SqCbUpb8wM7s2oezD', NULL, '127.0.0.1', 'curl/8.7.1', 'eyJfdG9rZW4iOiI5YkxXdGQyTGZuUVpZTjdqVFhmb3Z5Q3BQQUJSelJiaU1YSzdqY1hZIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2FkaXR5LnRlc3RcL3ZpZGVvcyIsInJvdXRlIjoidmlkZW9zIn0sIl9mbGFzaCI6eyJvbGQiOltdLCJuZXciOltdfX0=', 1786877496),
('wQ1PwIoTEUivA13wwj8pxSpafBedaNomSpM3sPw3', NULL, '127.0.0.1', 'curl/8.7.1', 'eyJfdG9rZW4iOiJBdld3YWU1NWhCYlFHaGh1cXZCUkZuNm1mYTV5SWZqbG1PVW1hQWgwIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2FkaXR5LnRlc3QiLCJyb3V0ZSI6ImhvbWUifSwiX2ZsYXNoIjp7Im9sZCI6W10sIm5ldyI6W119fQ==', 1786879757),
('wQgehH3eE782bJgOg2uVsFXY5MnXOuUm4fH64AFo', NULL, '127.0.0.1', 'curl/8.7.1', 'eyJfdG9rZW4iOiJ6UFF1R3pkZUNuWW0yUXRqc3VISU1IOTlLRTlyY0Zka004dnJDMGlEIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2FkaXR5LnRlc3QiLCJyb3V0ZSI6ImhvbWUifSwiX2ZsYXNoIjp7Im9sZCI6W10sIm5ldyI6W119fQ==', 1786879721),
('x9m51YQlutBltNhlCMouxAkFVyXoMtrdo35DM8mV', NULL, '127.0.0.1', 'curl/8.7.1', 'eyJfdG9rZW4iOiJucWpxbTBySHh4anNzU0dBNTdTZTN3a1BkUEpHWU1WTHlMS1hkZ0JRIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2FkaXR5LnRlc3RcL3JvYm90cy50eHQiLCJyb3V0ZSI6InJvYm90cyJ9LCJfZmxhc2giOnsib2xkIjpbXSwibmV3IjpbXX19', 1786879489),
('xDzmRqhJ0RSOkh9LdVAd6Wt5LPDM5WCzmtn6pRWD', NULL, '127.0.0.1', 'curl/8.7.1', 'eyJfdG9rZW4iOiJCVXFwM0lsQ09Cd3NBelIwZXZsNEttVldlVmN0emRMS0Y5V3NQbWNpIiwidXJsIjp7ImludGVuZGVkIjoiaHR0cDpcL1wvYWRpdHkudGVzdFwvYWRtaW5cL2V2ZW50cyJ9LCJfcHJldmlvdXMiOnsidXJsIjoiaHR0cDpcL1wvYWRpdHkudGVzdFwvYWRtaW5cL2V2ZW50cyIsInJvdXRlIjoiZmlsYW1lbnQuYWRtaW4ucmVzb3VyY2VzLmV2ZW50cy5pbmRleCJ9LCJfZmxhc2giOnsib2xkIjpbXSwibmV3IjpbXX19', 1786879446),
('XvhhzJZ5jjuC7aokLwDKRfVKpFFXWcvCc9K6eDoo', NULL, '127.0.0.1', 'curl/8.7.1', 'eyJfdG9rZW4iOiJwcVFjRHQwV0trcTd2UnVaMDZ2QnJjaEkzM0tXRUdTQmZxQ29RMWI4IiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2FkaXR5LnRlc3RcL2FkbWluXC9sb2dpbiIsInJvdXRlIjoiZmlsYW1lbnQuYWRtaW4uYXV0aC5sb2dpbiJ9LCJfZmxhc2giOnsib2xkIjpbXSwibmV3IjpbXX19', 1786879446),
('Yjq4fgdJxWUOXFtPz0YdeaVHTRQZ8CruBVPfYO62', NULL, '127.0.0.1', 'curl/8.7.1', 'eyJfdG9rZW4iOiJXT0k1ZVpxT0NCaUZBUmNmUDQ1ZTA3UDdWR2Vkc2FuSWhxRXAyd3BJIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2FkaXR5LnRlc3QiLCJyb3V0ZSI6ImhvbWUifSwiX2ZsYXNoIjp7Im9sZCI6W10sIm5ldyI6W119fQ==', 1786878115),
('ylqBwAEbGpxCOfSHaTVEAD5jSbq8sDLXp4Zhy8Yp', NULL, '127.0.0.1', 'curl/8.7.1', 'eyJfdG9rZW4iOiJaY0UxMWptNU0xYjRhTHQxRnh6Sjd3cVBjMmhiNHNNWTYwc1dTUkUzIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2FkaXR5LnRlc3RcL2V2ZW50cyIsInJvdXRlIjoiZXZlbnRzIn0sIl9mbGFzaCI6eyJvbGQiOltdLCJuZXciOltdfX0=', 1786879722),
('YNgqBNflI5zILlGrTiktEkA2HD0JOEatyAD3IXv4', NULL, '127.0.0.1', 'curl/8.7.1', 'eyJfdG9rZW4iOiJwR0VnTGFUaTYzUWJYcFZMS2I0Z2dFaG5kSnRwWllBSWpjMGJ6SFJ0IiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2FkaXR5LnRlc3RcL2Fib3V0Iiwicm91dGUiOiJhYm91dCJ9LCJfZmxhc2giOnsib2xkIjpbXSwibmV3IjpbXX19', 1786879353),
('yPdaZz3RDd59bEFe8YBy2KzYZiOHM8YYTbTZh02b', NULL, '127.0.0.1', 'curl/8.7.1', 'eyJfdG9rZW4iOiJBTllXcGVHbGVhc3h6MVVwV29zWEFkMTFuM2lFbTgzTDR0d1hvbW04IiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2FkaXR5LnRlc3QiLCJyb3V0ZSI6ImhvbWUifSwiX2ZsYXNoIjp7Im9sZCI6W10sIm5ldyI6W119fQ==', 1786877496),
('YQH1if7sIpKPoBFYZ8BMT74WrIiR8cxrKhNy5Afg', 1, '127.0.0.1', 'Symfony', 'eyJsb2dpbl93ZWJfNTliYTM2YWRkYzJiMmY5NDAxNTgwZjAxNGM3ZjU4ZWE0ZTMwOTg5ZCI6MSwiX3Rva2VuIjoiRmZZUklPRHdrVzFPNTd2Skg2OThrWnBvek1LUjI3RDFmdHhXMXdEZiIsInBhc3N3b3JkX2hhc2hfd2ViIjoiOTk5N2IwMmJiYzJjMGZiNDUzMjZhMGE5MDc2ZDU0M2Q2MjMxMmM5ZThjNTg4YTQ0N2JjMjc4MmQ4ZDJlZWE4MiIsInRhYmxlcyI6eyIzZTM2ODc2ODE1MDFkNDY1N2E3NDg5Mzk3MDQ3OWRhZV9jb2x1bW5zIjpbeyJ0eXBlIjoiY29sdW1uIiwibmFtZSI6InRpdGxlIiwibGFiZWwiOiJUaXRsZSIsImlzSGlkZGVuIjpmYWxzZSwiaXNUb2dnbGVkIjp0cnVlLCJpc1RvZ2dsZWFibGUiOmZhbHNlLCJpc1RvZ2dsZWRIaWRkZW5CeURlZmF1bHQiOm51bGx9LHsidHlwZSI6ImNvbHVtbiIsIm5hbWUiOiJldmVudF9kYXRlIiwibGFiZWwiOiJFdmVudCBkYXRlIiwiaXNIaWRkZW4iOmZhbHNlLCJpc1RvZ2dsZWQiOnRydWUsImlzVG9nZ2xlYWJsZSI6ZmFsc2UsImlzVG9nZ2xlZEhpZGRlbkJ5RGVmYXVsdCI6bnVsbH0seyJ0eXBlIjoiY29sdW1uIiwibmFtZSI6ImxvY2F0aW9uIiwibGFiZWwiOiJMb2NhdGlvbiIsImlzSGlkZGVuIjpmYWxzZSwiaXNUb2dnbGVkIjp0cnVlLCJpc1RvZ2dsZWFibGUiOmZhbHNlLCJpc1RvZ2dsZWRIaWRkZW5CeURlZmF1bHQiOm51bGx9LHsidHlwZSI6ImNvbHVtbiIsIm5hbWUiOiJ0aWNrZXRfbGluayIsImxhYmVsIjoiVGlja2V0IiwiaXNIaWRkZW4iOmZhbHNlLCJpc1RvZ2dsZWQiOnRydWUsImlzVG9nZ2xlYWJsZSI6dHJ1ZSwiaXNUb2dnbGVkSGlkZGVuQnlEZWZhdWx0IjpmYWxzZX0seyJ0eXBlIjoiY29sdW1uIiwibmFtZSI6ImltYWdlX3BhdGgiLCJsYWJlbCI6IkltYWdlIiwiaXNIaWRkZW4iOmZhbHNlLCJpc1RvZ2dsZWQiOnRydWUsImlzVG9nZ2xlYWJsZSI6ZmFsc2UsImlzVG9nZ2xlZEhpZGRlbkJ5RGVmYXVsdCI6bnVsbH0seyJ0eXBlIjoiY29sdW1uIiwibmFtZSI6InNvcnRfb3JkZXIiLCJsYWJlbCI6IlNvcnQgb3JkZXIiLCJpc0hpZGRlbiI6ZmFsc2UsImlzVG9nZ2xlZCI6dHJ1ZSwiaXNUb2dnbGVhYmxlIjpmYWxzZSwiaXNUb2dnbGVkSGlkZGVuQnlEZWZhdWx0IjpudWxsfSx7InR5cGUiOiJjb2x1bW4iLCJuYW1lIjoiaXNfcHVibGlzaGVkIiwibGFiZWwiOiJQdWJsaXNoZWQiLCJpc0hpZGRlbiI6ZmFsc2UsImlzVG9nZ2xlZCI6dHJ1ZSwiaXNUb2dnbGVhYmxlIjpmYWxzZSwiaXNUb2dnbGVkSGlkZGVuQnlEZWZhdWx0IjpudWxsfSx7InR5cGUiOiJjb2x1bW4iLCJuYW1lIjoiY3JlYXRlZF9hdCIsImxhYmVsIjoiQ3JlYXRlZCBhdCIsImlzSGlkZGVuIjpmYWxzZSwiaXNUb2dnbGVkIjpmYWxzZSwiaXNUb2dnbGVhYmxlIjp0cnVlLCJpc1RvZ2dsZWRIaWRkZW5CeURlZmF1bHQiOnRydWV9LHsidHlwZSI6ImNvbHVtbiIsIm5hbWUiOiJ1cGRhdGVkX2F0IiwibGFiZWwiOiJVcGRhdGVkIGF0IiwiaXNIaWRkZW4iOmZhbHNlLCJpc1RvZ2dsZWQiOmZhbHNlLCJpc1RvZ2dsZWFibGUiOnRydWUsImlzVG9nZ2xlZEhpZGRlbkJ5RGVmYXVsdCI6dHJ1ZX1dfSwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2xvY2FsaG9zdFwvYWRtaW5cL2V2ZW50cyIsInJvdXRlIjoiZmlsYW1lbnQuYWRtaW4ucmVzb3VyY2VzLmV2ZW50cy5pbmRleCJ9LCJfZmxhc2giOnsib2xkIjpbXSwibmV3IjpbXX19', 1786879308),
('YvigteIU0NoBoLvWkxnOXOZnDolOPMgVI0YmuZty', 1, '127.0.0.1', 'Symfony', 'eyJfdG9rZW4iOiJYeUhaRFVxUWo5SXFlb2RZZHUweFRSbTJxbXI1c01BWlgyZVRBaHhCIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2xvY2FsaG9zdFwvYWRtaW4iLCJyb3V0ZSI6ImZpbGFtZW50LmFkbWluLnBhZ2VzLmRhc2hib2FyZCJ9LCJfZmxhc2giOnsib2xkIjpbXSwibmV3IjpbXX0sImxvZ2luX3dlYl81OWJhMzZhZGRjMmIyZjk0MDE1ODBmMDE0YzdmNThlYTRlMzA5ODlkIjoxLCJwYXNzd29yZF9oYXNoX3dlYiI6Ijk5OTdiMDJiYmMyYzBmYjQ1MzI2YTBhOTA3NmQ1NDNkNjIzMTJjOWU4YzU4OGE0NDdiYzI3ODJkOGQyZWVhODIifQ==', 1786879773),
('zaePcgtTznOCKR6a4u5nCP0VmMZaWqvfOxOvn2TX', NULL, '127.0.0.1', '', 'eyJfdG9rZW4iOiJXbXNtZkoxazRpcmFleG85NjBpRkdZcXZuUWw4bmpTMldSZzRmZnJYIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2FkaXR5LnRlc3RcL2V2ZW50cyIsInJvdXRlIjoiZXZlbnRzIn0sIl9mbGFzaCI6eyJvbGQiOltdLCJuZXciOltdfX0=', 1786879740),
('zasZ21ls9bGkmbBSVjJQZGcjdlk39HjWqPUvRtXt', NULL, '127.0.0.1', 'curl/8.7.1', 'eyJfdG9rZW4iOiI0SnI5eTRidXJSbGhKcDlYYzZTcWpHRzdFQ2RlNko0aHo1UEVFbjZrIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2FkaXR5LnRlc3RcL2V2ZW50cyIsInJvdXRlIjoiZXZlbnRzIn0sIl9mbGFzaCI6eyJvbGQiOltdLCJuZXciOltdfX0=', 1786879489),
('ZinyQxKHMnkmzTQVKEMgrAYQZdXebfvxhIgLrEny', NULL, '127.0.0.1', 'curl/8.7.1', 'eyJfdG9rZW4iOiJndU5DZjc4MW8zZjluaUZRNmMxWERZTVkxTmZVQWVzNFZqeGh5NkNUIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2FkaXR5LnRlc3QiLCJyb3V0ZSI6ImhvbWUifSwiX2ZsYXNoIjp7Im9sZCI6W10sIm5ldyI6W119fQ==', 1786878085),
('znjJvCnrkMcuyq5m3XKiQrd9aRjemYIvoRGGY1X2', NULL, '127.0.0.1', 'curl/8.7.1', 'eyJfdG9rZW4iOiJPaHF1OW5oMFdSVnlRSlFBMXhwNHNKa2QwMzg3VHhVSnpHdU4yMmZMIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2FkaXR5LnRlc3RcL2NvbnRhY3QiLCJyb3V0ZSI6ImNvbnRhY3QifSwiX2ZsYXNoIjp7Im9sZCI6W10sIm5ldyI6W119fQ==', 1786879446),
('ZVAaYFnfdfwsijKGrmDi2LMXC7YloayccA523N3p', NULL, '127.0.0.1', 'curl/8.7.1', 'eyJfdG9rZW4iOiJMOVVveG1nYXo2anh5WlA1enVyZ2NvSDVVT2JoT3FFV2w5Rmo5NGVSIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2FkaXR5LnRlc3QiLCJyb3V0ZSI6ImhvbWUifSwiX2ZsYXNoIjp7Im9sZCI6W10sIm5ldyI6W119fQ==', 1786879354);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Adity Admin', 'admin@aditydance.co.uk', NULL, '$2y$12$jULuwX310m4pTVmLX93z9.ghe5MK6c1Aika.NIJWGtaU3FtQvsdam', NULL, '2026-08-16 09:51:28', '2026-08-16 10:38:57');

-- --------------------------------------------------------

--
-- Table structure for table `videos`
--

CREATE TABLE `videos` (
  `id` bigint UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `youtube_url` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci,
  `sort_order` int UNSIGNED NOT NULL DEFAULT '0',
  `is_published` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `videos`
--

INSERT INTO `videos` (`id`, `title`, `youtube_url`, `description`, `sort_order`, `is_published`, `created_at`, `updated_at`) VALUES
(1, 'Who Am I? – From UK to USA at the International Lalon and Folk Festival', 'https://www.youtube.com/watch?v=RiZ0YNi_AHQ', 'Highlights from the International Lalon and Folk Festival.', 1, 1, '2026-08-16 09:51:28', '2026-08-16 09:51:28');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cache`
--
ALTER TABLE `cache`
  ADD PRIMARY KEY (`key`),
  ADD KEY `cache_expiration_index` (`expiration`);

--
-- Indexes for table `cache_locks`
--
ALTER TABLE `cache_locks`
  ADD PRIMARY KEY (`key`),
  ADD KEY `cache_locks_expiration_index` (`expiration`);

--
-- Indexes for table `events`
--
ALTER TABLE `events`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`),
  ADD KEY `failed_jobs_connection_queue_failed_at_index` (`connection`,`queue`,`failed_at`);

--
-- Indexes for table `gallery_categories`
--
ALTER TABLE `gallery_categories`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `gallery_categories_slug_unique` (`slug`);

--
-- Indexes for table `gallery_images`
--
ALTER TABLE `gallery_images`
  ADD PRIMARY KEY (`id`),
  ADD KEY `gallery_images_gallery_category_id_foreign` (`gallery_category_id`);

--
-- Indexes for table `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `jobs_queue_index` (`queue`);

--
-- Indexes for table `job_batches`
--
ALTER TABLE `job_batches`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sessions_user_id_index` (`user_id`),
  ADD KEY `sessions_last_activity_index` (`last_activity`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- Indexes for table `videos`
--
ALTER TABLE `videos`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `events`
--
ALTER TABLE `events`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `gallery_categories`
--
ALTER TABLE `gallery_categories`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `gallery_images`
--
ALTER TABLE `gallery_images`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `videos`
--
ALTER TABLE `videos`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `gallery_images`
--
ALTER TABLE `gallery_images`
  ADD CONSTRAINT `gallery_images_gallery_category_id_foreign` FOREIGN KEY (`gallery_category_id`) REFERENCES `gallery_categories` (`id`) ON DELETE SET NULL;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
