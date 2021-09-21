SELECT * FROM sakila.film_actor;
USE sakila;
DELIMITER $$

CREATE PROCEDURE ShowPopularActors()
BEGIN
	SELECT actor_id, COUNT(*) AS 'quantidade de filmes' 
    FROM film_actor
    GROUP BY actor_id
    ORDER BY COUNT(*) DESC
    LIMIT 10;
END $$

DELIMITER ;

CALL ShowPopularActors;