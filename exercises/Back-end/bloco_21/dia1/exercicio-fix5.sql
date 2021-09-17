SELECT * FROM sakila.film;
SELECT AVG(length) AS 'Média de duração' FROM sakila.film;
SELECT MIN(length) AS 'Duração Mínima' FROM sakila.film;
SELECT MAX(length) AS 'Duração Máxima' FROM sakila.film;
SELECT SUM(length) AS 'Tempo de Exibição Total' FROM sakila.film;
SELECT COUNT(*) AS 'Filmes registrados' FROM sakila.film;