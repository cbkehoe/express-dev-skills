const skills = [
    {id: 111, skill: 'JavaScript', done: false},
    {id: 222, skill: 'HTML', done: false},
    {id: 333, skill: 'CSS', done: false}
];

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
};

function getAll() {
    return skills;
}

function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id)
}

function create(skill) {
    // Add the id
    skill.id = Date.now() % 1000000;
    // New todos wouldn't be done :)
    skill.done = false;
    skills.push(skill);
  }

  function deleteOne(id) {
      const idx = skills.findIndex(skill => skill.id === parseInt(id))
      skills.splice(idx, 1);
  }