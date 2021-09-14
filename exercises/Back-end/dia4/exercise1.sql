SELECT * FROM sakila.staff;
INSERT INTO `sakila`.`staff` 
	(first_name, last_name, address_id, email, store_id, active, username, password)
VALUES 
	('Renan', 'Ferreira', 5,'renan@gmail.com' ,1, 1, 'Renan', 123456);SELECT * FROM sakila.staff;
INSERT INTO `sakila`.`staff` 	
	(first_name, last_name, address_id, email, store_id, active, username, password)
VALUES 
	('Ruan', 'Santiago', 5,'ruan@gmail.com' ,1, 1, 'Ruan', 12345678),
	('Ramon', 'Ferreira', 5,'ramon@gmail.com' ,1, 1, 'Ramon', 345678);
SELECT * FROM sakila.actor;
INSERT INTO sakila.actor (first_name, last_name)
	SELECT first_name, last_name
    FROM sakila.customer
    ORDER BY customer_id
    LIMIT 5;
SELECT * FROM sakila.category;
INSERT INTO sakila.category (name)
	VALUES ('Thriller'); 
SELECT * FROM sakila.store;
INSERT INTO sakila.store (manager_staff_id, address_id)
	VALUES (3, 3);
