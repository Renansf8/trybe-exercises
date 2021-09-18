SELECT * FROM sakila.actor;
SELECT * FROM sakila.film_actor;
SELECT act.actor_id, act.first_name, film.film_id 
FROM sakila.actor AS act
INNER JOIN sakila.film_actor AS film
ON act.actor_id = film.actor_id;
SELECT * FROM sakila.staff;
SELECT * FROM sakila.address;
SELECT staf.staff_id, staf.first_name, addr.address 
FROM sakila.staff AS staf
INNER JOIN sakila.address AS addr
ON staf.address_id = addr.address_id;