USE sakila;
DELIMITER $$

CREATE PROCEDURE ShowFilmByCategory(IN category VARCHAR(50))
BEGIN 
	SELECT f.film_id, f.title, fc.category_id, c.name
    FROM sakila.film AS f
    INNER JOIN sakila.film_category AS fc ON f.film_id = fc.film_id
    INNER JOIN sakila.category AS c ON c.category_id = fc.category_id
    WHERE c.name = category;
END $$

DELIMITER ;

CALL ShowFilmByCategory('Action');