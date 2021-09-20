SELECT * FROM Pixar.BoxOffice;
SELECT * FROM Pixar.Movies;
SELECT m.title, r.rating 
FROM Pixar.Movies AS m
INNER JOIN
Pixar.BoxOffice AS r
ON m.id = r.movie_id
ORDER BY r.rating DESC;