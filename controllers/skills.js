const Skill = require('../models/skills')


module.exports = {
	index,
	show,
	new: newSkill,
	create,
}


function index(req, res) {
	res.render('skills/index', {
		skills: Skill.getAll(),
		title: 'Skills!',
	});
}


function show(req, res) {
	const id = parseInt(req.params.id);
	res.render('skills/show', {
		skill: Skill.getOne(id),
		title: Skill.getName(id),
	});
}

function newSkill(req, res) {
	res.render('skills/new', {
		title: 'Add new skill',
	});
}

function create(req, res) {
	Skill.create(req.body);
	res.redirect('/skills');
}