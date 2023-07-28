import axios from 'axios';

const baseUrl ="https://todo-backend-gxm4.onrender.com"

const getAllTodo = (setToDo) =>{
    axios
    .get(baseUrl)
    .then(({data}) =>{
        console.log('data --> ' , data);
        setToDo(data);
    })
}

const addToDo = (text,setText,setToDo)=>{
    if(text){
 axios
 .post(`${baseUrl}/save`,{text})
 .then((data)=>{
    console.log(data);
    setText("")
    getAllTodo(setToDo)
 })
.catch((err)=>console.log(err))
}
}


const Updating = (toDoId,text,setToDo,setText,setIsUpdating)=>{
    axios
    .post(`${baseUrl}/update`,{_id : toDoId,text})
    .then((data)=>{
       console.log(data);
       setText("")
       setIsUpdating(false);
       getAllTodo(setToDo)
    })
   .catch((err)=>console.log(err))
   }

const deleteToDo = (_id,setToDo) =>{
    axios
    .post(`${baseUrl}/delete`,{ _id})
    .then((data)=>{
        console.log(data)
        getAllTodo(setToDo);
    })
    .catch((err)=> console.log(err))
}







export {getAllTodo,addToDo,Updating,deleteToDo}
