//task model
const { db, ObjectId } = require('./mongo');
const userModel = require('./users');
const collection = db.db("gratitude").collection("tasks");

let highestId = 4;

const list = [
    {
        title: 'Do your homework',
        completed: true,
        dueDate: new Date("2/2/2022"),
        assignedBy: 'seashellSeller',
        assignedFor: 'stevenWilliams67',
        id: 1,
    },
    {
        title: 'Do my homework', 
        completed: true , 
        dueDate: new Date("2/28/2022") , 
        assignedBy: 'seashellSeller', 
        assignedFor:'seashellSeller',
        id: 2
    },
    {
        title: 'Make Dinner', 
        completed: false, 
        dueDate: new Date("3/9/2022"), 
        assignedBy:'stevenWilliams67', 
        assignedFor:'seashellSeller',
        id: 3
    },
    {
        title:'Wash the dishes', 
        completed: false, 
        dueDate: new Date("3/10/2022"), 
        assignedBy:'stevenWilliams67', 
        assignedFor:'percyJackson',
        id: 4
    },
];

async function get(id){
    const task = await collection.findOne({ _id: new ObjectId(id) });
    if(!task){
        throw { status: 404, message: 'Post not found' };
    }
    return task ;
}

async function getAssignedBy(assignedBy){
    const tasks = await collection.find({ assignedBy }).toArray();
    //return Promise.all( tasks.map(x=> includeAB(x) ) );
    return Promise.all( tasks );
}

async function getAssignedFor(assignedFor){
    const tasks = await collection.find({ assignedFor }).toArray();
    return Promise.all( tasks );
}

async function getAssociatedWith(username){

    const tasks = await collection.find({ $or: [{assignedBy:username}, {assignedFor: username}] }).toArray();
    return Promise.all( tasks );

}

async function create(task) {
    task.id = ++highestId;
    task.dueDate = new Date(task.dueDate);
    const result = await collection.insertOne(task);
    task = await get(result.insertedId);
    return  task;
}

async function remove(id){
    const task = await collection.findOneAndDelete({ _id: new ObjectId(id)});
    return task.value;
}

async function update(id, newTask){
    console.log(id);
    console.log(newTask);
    
    newTask = await collection.findOneAndUpdate(
        {_id: new ObjectId(id)}, 
        { $set: newTask },
        {returnDocument: 'after'})
    
    return newTask;
}

//puts what is in our list into the database
function seed(){
    return collection.insertMany(list);
}

module.exports = {
    collection,
    seed,
    get,
    getAssignedBy,
    getAssignedFor,
    getAssociatedWith,
    create,
    remove,
    update,
    async  getList(){
        const tasks = await collection.find({}).toArray();;
        return Promise.all( tasks);
    }
}