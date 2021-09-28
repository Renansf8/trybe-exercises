USE sakila;
CREATE INDEX index_address ON address(postal_code);

SELECT 
    *
FROM
    sakila.address
WHERE
    postal_code = '36693';

DROP INDEX index_address ON address;

SELECT 
    *
FROM
    sakila.address
WHERE
    postal_code = '36693';