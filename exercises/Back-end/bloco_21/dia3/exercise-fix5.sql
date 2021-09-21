-- Crie uma function que, dado o parâmetro de entrada inventory_id , 
-- retorna o nome do filme vinculado ao registro de inventário com esse id.

SELECT * FROM sakila.inventory;
USE sakila;
DELIMITER $$

CREATE FUNCTION InfoFilm(id INT)
RETURNS VARCHAR(100) READS SQL DATA
BEGIN
	DECLARE info_film VARCHAR(100);
    SELECT DISTINCT f.title FROM sakila.inventory AS i
    INNER JOIN sakila.film AS f ON f.film_id = i.film_id
    WHERE i.inventory_id = id INTO info_film;
    RETURN info_film;
END $$

DELIMITER ;

SELECT InfoFilm(2);

