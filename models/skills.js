const skills = [
	{
		id: 0,
		name: 'html',
		isKnown: true
	},
	{
		id: 1,
		name: 'css',
		isKnown: true
	},
	{
		id: 2,
		name: 'javascript',
		isKnown: true
	},
	{
		id: 3,
		name: 'python',
		isKnown: true
	},
	{
		id: 4,
		name: 'flask',
		isKnown: false
	},
	{
		id: 5,
		name: 'ruby',
		isKnown: false
	}
]


module.exports = {
	getAll,
	getOne,
	getName,
}


function getAll() {
	return skills;
}


function getOne(id) {
	return skills.find(skill => skill.id === id);
}

function getName(id) {
	const skill = skills.find(skill => skill.id === id);
	return skill.name;
}
