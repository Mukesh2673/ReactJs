import './crud.css'
import { useState, useEffect } from "react";
import { db } from "../firebase-config";
import { addDoc, collection, getDocs, updateDoc ,doc, deleteDoc} from "firebase/firestore";
function App() {
  const [NewName,setNewName]=useState([]);
  const [NewAge,setNewAge]=useState([]);
  const [users, setUsers] = useState([]);
  const [UpdateUsers, setUpdateUsers] = useState(false);

  const userCollectionRef = collection(db, "users");
  const createUser=async()=>{
    await addDoc(userCollectionRef,{Name: NewName,Age : Number(NewAge)});
      setUpdateUsers(!UpdateUsers);
  }

    const updateUser=async (id,Age)=>{
      const userDoc=doc(db,"users",id)
      const newFields={Age:Number(Age)+1}
      console.log(newFields,'value of newFields');
     await updateDoc(userDoc,newFields) 
     setUpdateUsers(!UpdateUsers);
        }
    const deleteUser=async (id)=>{
      const userDoc=doc(db,"users",id)
      await deleteDoc(userDoc);
      setUpdateUsers(!UpdateUsers);
    }
useEffect(() => {
    getUsers();
  }, [UpdateUsers]);
  const getUsers = async () =>{
    const data = await getDocs(userCollectionRef);
    console.log(data);
    setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  return (
    <div className="App">
      <div class="input_field">
      <input placeholder="Name...." onChange={(event)=>{
        setNewName(event.target.value)
      }}/>
      <input type="number" placeholder="Age...."  onChange={(event)=>{
        setNewAge(event.target.value)
      }}/>
      <button onClick={createUser}>Create User</button>
    

      {users.map((user) => {
        return (
          <div>
            <h1>Name:{user.Name}</h1>
            <h1>Age:{user.Age}</h1>
             <button onClick={()=>{
               updateUser(user.id,user.Age)
             }}>Increas Age</button>
             <button onClick={()=>{deleteUser(user.id)}}>Delete User</button>
          </div>
            );
      })}
      </div>
    </div>
  );
}

export default App;
