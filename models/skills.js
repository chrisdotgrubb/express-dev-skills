const skills = [
	{
		id: 0,
		name: 'html',
		isKnown: true,
		description: 'The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.',
		url: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg',
	},
	{
		id: 1,
		name: 'css',
		isKnown: true,
		description: 'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML',
		url: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg',
	},
	{
		id: 2,
		name: 'javascript',
		isKnown: true,
		description: 'JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.',
		url: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
	},
	{
		id: 3,
		name: 'python',
		isKnown: true,
		description: 'Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation via the off-side rule.',
		url: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg',
	},
	{
		id: 4,
		name: 'flask',
		isKnown: false,
		description: 'Flask is a micro web framework written in Python. It is classified as a microframework because it does not require particular tools or libraries.',
		url: 'https://upload.wikimedia.org/wikipedia/commons/3/3c/Flask_logo.svg',
	},
	{
		id: 5,
		name: 'ruby',
		isKnown: false,
		description: 'Ruby is an interpreted, high-level, general-purpose programming language which supports multiple programming paradigms.',
		url: 'https://upload.wikimedia.org/wikipedia/commons/7/73/Ruby_logo.svg',
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
