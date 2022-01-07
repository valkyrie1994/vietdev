const user = require ('./index').db('test').collection('user');
const ObjectId = require('mongodb').ObjectId;
const save = async ({ username , password }) =>{
    const kq = await user.insertOne({username , password});
    return kq.ops[0];
    
}
const getAll = async () => {
    const cursor = await user.find();
    return cursor.toArray();
}
const getByID = async (id) => {
    return await user.findOne ({_id:ObjectId(id)});
}
const update = async (id, {username, password}) => {
    const kq = await user.replaceOne ({_id:ObjectId(id)},{username,password})
    return kq.ops[0];
}
const removeByID = async id =>{
    await user.deleteOne({_id:ObjectId(id)});
}
module.exports = {getAll,getByID,removeByID,save,update}