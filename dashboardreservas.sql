-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 26-04-2024 a las 04:26:18
-- Versión del servidor: 10.4.22-MariaDB
-- Versión de PHP: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `dashboardreservas`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tabla_clases`
--

CREATE TABLE `tabla_clases` (
  `id_clase` int(11) NOT NULL,
  `nombre_clase` varchar(50) NOT NULL,
  `cupos_clase` int(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tabla_clases`
--

INSERT INTO `tabla_clases` (`id_clase`, `nombre_clase`, `cupos_clase`) VALUES
(1, 'Aeróbicos', 5),
(2, 'Spinning', 10),
(3, 'Yoga', 20),
(4, 'Funcionales', 10);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tabla_instalaciones`
--

CREATE TABLE `tabla_instalaciones` (
  `id_instalacion` int(11) NOT NULL,
  `nombre_instalacion` varchar(50) NOT NULL,
  `cupos_instalacion` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tabla_instalaciones`
--

INSERT INTO `tabla_instalaciones` (`id_instalacion`, `nombre_instalacion`, `cupos_instalacion`) VALUES
(1, 'Pesas', '10'),
(2, 'Maquinas', '5'),
(3, 'Sala de baile', '30');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tabla_metas`
--

CREATE TABLE `tabla_metas` (
  `id_meta` int(11) NOT NULL,
  `nombre_meta` varchar(50) NOT NULL,
  `datos_meta` varchar(50) NOT NULL,
  `id_usuario` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tabla_reservas`
--

CREATE TABLE `tabla_reservas` (
  `id_reserva` int(11) NOT NULL,
  `inicio_reserva` date NOT NULL,
  `final_reserva` date NOT NULL,
  `categoria_reserva` varchar(50) NOT NULL,
  `id_clase` int(11) DEFAULT NULL,
  `id_instalacion` int(11) DEFAULT NULL,
  `id_usuario` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tabla_reservas`
--

INSERT INTO `tabla_reservas` (`id_reserva`, `inicio_reserva`, `final_reserva`, `categoria_reserva`, `id_clase`, `id_instalacion`, `id_usuario`) VALUES
(32, '2024-04-25', '2024-04-25', 'Clases', 3, NULL, 4),
(33, '2024-04-25', '2024-04-25', 'Instalacion', NULL, 1, 4);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tabla_rutinas`
--

CREATE TABLE `tabla_rutinas` (
  `id_rutina` int(11) NOT NULL,
  `nombre_rutina` varchar(50) NOT NULL,
  `datos_rutina` varchar(50) NOT NULL,
  `id_usuario` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tabla_usuario`
--

CREATE TABLE `tabla_usuario` (
  `id_usuario` int(50) NOT NULL,
  `usuario` varchar(50) NOT NULL,
  `contrasena` varchar(50) NOT NULL,
  `membrecia` varchar(50) NOT NULL,
  `foto` varchar(50) NOT NULL,
  `role` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tabla_usuario`
--

INSERT INTO `tabla_usuario` (`id_usuario`, `usuario`, `contrasena`, `membrecia`, `foto`, `role`) VALUES
(4, 'cenfo', '123', 'Platino', '', 'Usuario');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `tabla_clases`
--
ALTER TABLE `tabla_clases`
  ADD PRIMARY KEY (`id_clase`);

--
-- Indices de la tabla `tabla_instalaciones`
--
ALTER TABLE `tabla_instalaciones`
  ADD PRIMARY KEY (`id_instalacion`);

--
-- Indices de la tabla `tabla_metas`
--
ALTER TABLE `tabla_metas`
  ADD PRIMARY KEY (`id_meta`),
  ADD KEY `id_usuario` (`id_usuario`);

--
-- Indices de la tabla `tabla_reservas`
--
ALTER TABLE `tabla_reservas`
  ADD PRIMARY KEY (`id_reserva`),
  ADD KEY `id_clase` (`id_clase`),
  ADD KEY `id_instalacion` (`id_instalacion`),
  ADD KEY `id_usuario` (`id_usuario`);

--
-- Indices de la tabla `tabla_rutinas`
--
ALTER TABLE `tabla_rutinas`
  ADD PRIMARY KEY (`id_rutina`),
  ADD KEY `id_usuario` (`id_usuario`);

--
-- Indices de la tabla `tabla_usuario`
--
ALTER TABLE `tabla_usuario`
  ADD PRIMARY KEY (`id_usuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `tabla_clases`
--
ALTER TABLE `tabla_clases`
  MODIFY `id_clase` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `tabla_instalaciones`
--
ALTER TABLE `tabla_instalaciones`
  MODIFY `id_instalacion` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `tabla_metas`
--
ALTER TABLE `tabla_metas`
  MODIFY `id_meta` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `tabla_reservas`
--
ALTER TABLE `tabla_reservas`
  MODIFY `id_reserva` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT de la tabla `tabla_rutinas`
--
ALTER TABLE `tabla_rutinas`
  MODIFY `id_rutina` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `tabla_usuario`
--
ALTER TABLE `tabla_usuario`
  MODIFY `id_usuario` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `tabla_metas`
--
ALTER TABLE `tabla_metas`
  ADD CONSTRAINT `tabla_metas_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `tabla_usuario` (`id_usuario`);

--
-- Filtros para la tabla `tabla_reservas`
--
ALTER TABLE `tabla_reservas`
  ADD CONSTRAINT `tabla_reservas_ibfk_1` FOREIGN KEY (`id_clase`) REFERENCES `tabla_clases` (`id_clase`),
  ADD CONSTRAINT `tabla_reservas_ibfk_2` FOREIGN KEY (`id_instalacion`) REFERENCES `tabla_instalaciones` (`id_instalacion`),
  ADD CONSTRAINT `tabla_reservas_ibfk_3` FOREIGN KEY (`id_usuario`) REFERENCES `tabla_usuario` (`id_usuario`);

--
-- Filtros para la tabla `tabla_rutinas`
--
ALTER TABLE `tabla_rutinas`
  ADD CONSTRAINT `tabla_rutinas_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `tabla_usuario` (`id_usuario`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
