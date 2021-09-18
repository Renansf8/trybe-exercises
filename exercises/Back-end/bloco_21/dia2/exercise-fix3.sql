SELECT id, title FROM hotel.Books AS b
WHERE NOT EXISTS (
	SELECT * FROM hotel.Books_Lent
    WHERE b.Id = book_id);
    
SELECT id, title FROM hotel.Books AS b
WHERE EXISTS (
	SELECT * FROM hotel.Books_Lent
    WHERE b.Id = book_id AND b.title LIKE '%lost%');

SELECT * FROM hotel.CarSales;
SELECT * FROM hotel.Customers;
SELECT 
    Name
FROM
    hotel.Customers AS cust
WHERE
    NOT EXISTS( SELECT 
            *
        FROM
            hotel.CarSales
        WHERE
            cust.CustomerID = CustomerID);

SELECT 
	cus.name, car.name
FROM
	hotel.Cars AS car
		INNER JOIN
    hotel.Customers AS cus
WHERE 
	EXISTS ( SELECT 
		*
	FROM
		hotel.CarSales
	WHERE 
		CustomerID = cus.CustomerId
			AND carID = car.ID
    );
