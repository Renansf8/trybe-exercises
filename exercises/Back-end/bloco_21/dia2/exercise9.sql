SELECT t.name, t.location
FROM Pixar.Theater AS t
WHERE NOT EXISTS (
	SELECT * FROM Pixar.Movies
    WHERE Movies.theater_id = t.id
)