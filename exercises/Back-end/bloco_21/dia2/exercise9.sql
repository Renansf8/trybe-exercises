-- Utilizando o EXISTS , selecione o nome e localização dos cinemas que não possuem filmes em cartaz.

SELECT t.name, t.location
FROM Pixar.Theater AS t
WHERE NOT EXISTS (
	SELECT * FROM Pixar.Movies
    WHERE Movies.theater_id = t.id
)