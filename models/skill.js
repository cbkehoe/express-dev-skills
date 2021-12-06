const skills = [
    {id: 111, skill: 'JavaScript', done: false},
    {id: 222, skill: 'HTML', done: false},
    {id: 333, skill: 'CSS', done: false}
];

module.exports = {
    getAll
};

function getAll() {
    return skills;
}

