-- Crie uma function que receba uma determinada categoria de filme em formato 
-- de texto (ex: 'Action' , 'Horror' ) e retorna a quantidade total de filmes registrados nessa categoria.

SELECT * FROM sakila.film_category;
SELECT * FROM sakila.category;

DELIMITER $$

CREATE FUNCTION ShowTotalMoviesByCategory(category VARCHAR(100))
RETURNS INT READS SQL DATA
BEGIN
	DECLARE total_movies INT;
    SELECT COUNT(*)
    FROM sakila.category AS c
    INNER JOIN sakila.film_category AS fc ON fc.category_id = c.category_id
    WHERE c.name = category INTO total_movies;
    RETURN total_movies;
END $$

DELIMITER ;

SELECT ShowTotalMoviesByCategory('Horror');