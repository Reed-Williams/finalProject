//user model
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { db, isConnected, ObjectId } = require('./mongo');
const collection = db.db("gratitude").collection("usersfp");

let highestId = 3;

const list = [ 
    {
        name: 'Sally',
        username: 'seashellSeller',
        password: 'starfish',
        email: 'sheSellsSeashells@gmail.com',
        id: 1,
    },
    {
        name: 'Steve',
        username: 'stevenWilliams67',
        password: 'mustang',
        email: 'swilliam39@newpaltz.edu',
        id: 2,
    },
    {
        name: 'Percy',
        username: 'percyJackson',
        password: 'blueberry',
        email: 'pjackso21@yahoo.com',
        id: 3,
    },
];

async function get(id){
    const user = await collection.findOne({ _id: new ObjectId(id) });
    if(!user){
        throw { statusCode: 404, message: 'User not found'};
    }
    return { ...user, password: undefined };
}

async function getByUsername(username){
    const user = await collection.findOne({ username });
    if(!user){
        throw { statusCode: 404, message: 'User not found'};
    }
    return { ...user, password: undefined };
}

async function create(user) {
    user.id = ++highestId;

    if(!user.username){
        throw { stat: 400, message: 'Username is Required'}
    }

    user.password = await bcrypt.hash(user.password, +process.env.SALT_ROUNDS);

    const result = await collection.insertOne(user);
    //result doesn't give us all the info we want to return, so we get it after inserting it
    user = await get(result.insertedId);
    return {...user, password: undefined};
}

async function remove(id){
    const user = await collection.findOneAndDelete({ _id: new ObjectId(id) });
    return { ...user.value , password: undefined};
}

async function update(id, newUser){
    if(newUser.password){
        newUser.password = await bcrypt.hash(newUser.password, +process.env.SALT_ROUNDS);
    }
    newUser = await collection.findOneAndUpdate(
        { _id: new ObjectId(id) },
        { $set: newUser },
        { returnDocument: 'after' }
    );
    return { ...newUser, password: undefined};
}

async function login(username, password){
    //find the user in the collection
    const user = await collection.findOne({ username });
    //if no user with this username- throw an eror
    if(!user){
        throw{ statusCode: 404, message: 'User not found'};
    }
    //encrpyt password entered by user so we are looking for the right thing
    //in the database. Throw error id there isn't a match
    if(!await bcrypt.compare(password, user.password)){
        throw { statusCode: 401, message: 'Invalid password' };
    }
    const data = {...user, password: undefined};
    const token = jwt.sign(data, process.env.JWT_SECRET)
    //return token as a new property in the user
    return {...user, token};
}

//return to the user from the token 
function fromToken(token){
    //resolve and reject are two functions 
    //below we have what is happening under the hood of async await
    return new Promise((resolve, reject) => {
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded)=> {
            if(err){
                reject(err);
            }
            else{
                resolve(decoded);
            }
        });
    });
}

//puts what is in our list into the database
function seed(){
    return collection.insertMany(list);
}

//new function for searching by first letter(s):
async function search(s){
    const users = await collection.find({ $or:[
        {username:{$regex: s, $options:'i'}},
        {name: {$regex: s, $options:'i'}},
        {email: {$regex: s, $options:'i'}}
    ]}).toArray();
    return users;
}

module.exports = {
    collection,
    seed,
    getByUsername,
    get,
    create,
    remove,
    update,
    login,
    fromToken,
    search,
    //we say getList because java script can't have async getters 
    async getList(){
        //the await needs to be wrapped in ( ) bc map needs an array not a promise
        return (await collection.find().toArray()).map(x=> ({...x, password: undefined }) );
    }
}