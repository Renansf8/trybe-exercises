SELECT * FROM sakila.film;
SELECT active, COUNT(*) FROM sakila.customer
GROUP BY active;
SELECT store_id, active, COUNT(*) FROM sakila.customer
GROUP BY store_id, active;
SELECT AVG(rental_duration) AS 'média de duração', rating FROM sakila.film
GROUP BY rating
ORDER BY 'média de duração' DESC;
SELECT * FROM sakila.address;
SELECT  COUNT(address) AS Quantidade_de_endereços, district
FROM sakila.address
GROUP BY district
ORDER BY Quantidade_de_endereços DESC; 
SELECT rating, AVG(length)
    FROM sakila.film
    GROUP BY rating
    HAVING AVG(length) BETWEEN 115 AND 121.5
    ORDER BY AVG(length) DESC;
SELECT rating, SUM(replacement_cost) AS custo_de_substituição
    FROM sakila.film
    GROUP BY rating
    HAVING custo_de_substituição > 3950.5
    ORDER BY custo_de_substituição;
