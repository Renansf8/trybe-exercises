-- Utilizando o EXISTS , selecione o nome e localização dos cinemas que possuem filmes em cartaz.

SELECT * FROM Pixar.Theater;
SELECT t.name, t.location
FROM Pixar.Theater AS t
WHERE EXISTS (
	SELECT * FROM Pixar.Movies 
    WHERE Movies.theater_id = t.id
);