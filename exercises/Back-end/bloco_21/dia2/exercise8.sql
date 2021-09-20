SELECT * FROM Pixar.Theater;
SELECT t.name, t.location
FROM Pixar.Theater AS t
WHERE EXISTS (
	SELECT * FROM Pixar.Movies 
    WHERE Movies.theater_id = t.id
);