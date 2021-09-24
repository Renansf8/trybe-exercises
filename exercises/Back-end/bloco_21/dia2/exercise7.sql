-- Faça duas buscas, uma utilizando SUBQUERY e outra utilizando INNER JOIN , que retornem as avaliações dos filmes lançados depois de 2009.

SELECT * FROM Pixar.Movies;
SELECT rating 
FROM Pixar.BoxOffice 
WHERE movie_id IN (
	SELECT id FROM Pixar.Movies
    WHERE year > 2009
);
SELECT b.rating 
FROM Pixar.BoxOffice AS b
INNER JOIN
Pixar.Movies AS m
ON b.movie_id = m.id
WHERE m.year > 2009;