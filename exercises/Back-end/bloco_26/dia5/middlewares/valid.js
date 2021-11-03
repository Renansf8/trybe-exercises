const isValid = (req, res, next) => {
	const { name, initials, country } = req.body;

	const nameB = !name || name.length < 5;
	const initialsB = !initials || initials.length > 3 || initials.toUpperCase() !== initials;
	const countryB = !country || country.length < 3;
	
	if (nameB || initialsB || countryB) return res.status(400).json({ message: "invalid data"})

	next();
}

module.exports= { isValid };