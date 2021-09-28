USE sakila;
CREATE VIEW address_info AS (
	SELECT a.address_id, a.address, a.district, a.city_id, c.city 
    FROM sakila.address AS a
    JOIN
    sakila.city AS c ON a.city_id = c.city_id
    ORDER BY city
);

SELECT * FROM sakila.city;
SELECT * FROM address_info;