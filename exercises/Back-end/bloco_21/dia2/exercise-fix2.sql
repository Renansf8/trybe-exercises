SELECT * FROM sakila.film;
SELECT t1.film_id, t1.replacement_cost, t2.film_id, t2.replacement_cost 
FROM sakila.film AS t1, sakila.film AS t2
WHERE t1.replacement_cost = t2.replacement_cost;
SELECT A.title, A.rental_duration, B.title, B.rental_duration
FROM sakila.film AS A, sakila.film AS B 
WHERE A.rental_duration = B.rental_duration
HAVING A.rental_duration BETWEEN 2 AND 4;