USE sakila;
CREATE VIEW film_with_category AS (
	SELECT c.name, fc.film_id, f.title
    FROM sakila.category AS c
    JOIN
    sakila.film_category AS fc ON c.category_id = fc.category_id
    JOIN 
    sakila.film AS f ON f.film_id = fc.film_id
    ORDER BY f.title
);

SELECT * FROM category;
SELECT * FROM film_category;
SELECT * FROM film_with_category;
DROP VIEW film_with_category;