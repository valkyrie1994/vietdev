const {getAll, getByID, removeByID,save, update} = require('../dal/user.dao');
const createUser = async ({username, password}) =>{
    const user = {
        username, password 
    }
    return await save(user);
}
const getUsers = async() => {
    return await getAll();
}
const getUser = async id => {
 return await getByID(id);
}
const deleteUser = async id => {
    return await removeByID(id);
   }
   const updateUser = async id => {
    return await updadate(id,{username,password});
   }   
module.exports = {
    createUser,getUsers,getUser,deleteUser,updateUser
}