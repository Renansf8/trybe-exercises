SELECT * FROM Pixar.Movies;
SELECT * FROM Pixar.Theater;
SELECT t.name, t.location, m.title, m.director, m.year, m.length_minutes, m.theater_id
FROM Pixar.Theater AS t
LEFT JOIN 
Pixar.Movies AS m ON t.id = m.id
ORDER BY t.name; 
