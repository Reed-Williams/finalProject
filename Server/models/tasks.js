//user model
let highestId = 4;

const list = [
    {
        title: 'Do your homework',
        completed: true,
        dueDate: new Date("2/2/2022"),
        assignedBy: 1,
        assignedFor: 2,
        id: 1,
    },
    {
        title: 'Do my homework', 
        completed: true , 
        dueDate: new Date("2/28/2022") , 
        assignedBy: 1, 
        assignedFor:1,
        id: 2
    },
    {
        title: 'Make Dinner', 
        completed: false, 
        dueDate: new Date("3/9/2022"), 
        assignedBy:2, 
        assignedFor:1,
        id: 3
    },
    {
        title:'Wash the dishes', 
        completed: false, 
        dueDate: new Date("3/10/2022"), 
        assignedBy:2, 
        assignedFor:3,
        id: 4
    },
];

function getAssignedBy(assignedBy){
    return list.filter(task => task.assignedBy === parseInt(assignedBy));
}

function getAssignedFor(assignedFor){
    return list.filter(task => task.assignedFor === parseInt(assignedFor));
}

function getAssociatedWith(userid){
    const assignedByList = list.filter(task => task.assignedBy === parseInt(userid));
    const assignedForList = list.filter(task => task.assignedFor === parseInt(userid));
    return assignedByList.concat(assignedForList);
}

function create(task) {
    task.id = ++highestId;
    list.push(task);
    return task;
}

function remove(id){
    const index = list.findIndex(task => task.id === parseInt(id));
    const task = list.splice(index,1);
    return task[0];
}

function update(id, newTask){
    const index = list.findIndex(task => task.id === parseInt(id));
    const oldTask = list[index];
    newTask = list[index] = { ...oldTask, ...newTask };
    return newTask;
}

module.exports = {
    getAssignedBy,
    getAssignedFor,
    getAssociatedWith,
    create,
    remove,
    update,
    get list(){
        return list.map(x=> ({...x, password: undefined }) );
    }
}