-- Utilizando a tabela sakila.payment, monte uma function que retorna a quantidade total de pagamentos 
-- feitos até o momento por um determinado customer_id .
SELECT * FROM sakila.payment;
USE sakila;
DELIMITER $$

CREATE FUNCTION TotalPayments(id INT) 
RETURNS INT READS SQL DATA
BEGIN
	DECLARE total_payments INT;
    SELECT COUNT(*)
    FROM sakila.payment
    WHERE customer_id = id INTO total_payments;
    RETURN total_payments;
END $$

DELIMITER ;
    
SELECT TotalPayments(2);
