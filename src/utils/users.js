const users=[]

const addUser =({id,username,room}) =>{
    username=username.trim().toLowerCase()
    room=room.trim().toLowerCase()

    //Validate
    if(!username || !room){
        return {
            error:" Username and Room required!"
        }
    }

    //check for exisiting
    const existingUser = users.find((user)=>{
        return user.room === room && user.username === username

    })

    if(existingUser){
        return{
            error: "Username in use"
        }
    }

    const user = {id,username, room}
    users.push(user)
    return { user }

}



const removeUser = (id)=>{
    const index = users.findIndex((user)=> user.id === id)

    if (index !== -1){
        return users.splice(index,1)[0]
    }


}

addUser({
    id:22,
    username: "Andrew",
    room: "MTL"
})

addUser({
    id:25,
    username: "Mike",
    room: "MTL"
})
addUser({
    id:29,
    username: "Andrew",
    room: "TNT"
})



const getUser =(id)=>{
    return users.find((user)=> user.id === id)


}

const getUserInRoom = (room)=>{
    room = room.trim().toLowerCase()
    return users.filter((user) => user.room === room)

}


module.exports={
    addUser,
    removeUser,
    getUser,
    getUserInRoom
}


// const userList = getUserInRoom("MTLY")


// console.log(userList)

// // const removedUser = removeUser(22)

// // console.log(removedUser)

// // console.log(users)

