USE sakila;
CREATE VIEW film_info AS (
	SELECT a.actor_id, CONCAT(a.first_name, ' ', last_name) AS actor, f.title 
    FROM sakila.actor AS a 
    JOIN 
    sakila.film_actor AS af ON a.actor_id = af.actor_id
    JOIN 
    sakila.film AS f ON f.film_id = af.film_id
    ORDER BY actor
);


SELECT * FROM actor;
SELECT * FROM film_actor;
SELECT * FROM film;
SELECT * FROM film_info;