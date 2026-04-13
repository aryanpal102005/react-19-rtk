import {useState}from "react";    
function UserAdd() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const createUser =async ()=>{
    console.log(name,email,age);
    const url="http://localhost:3000/users";
    let response = await fetch(url,{
      method:"POST",
      body:JSON.stringify({name,email,age})
  });
  response = await response.json();
  if(response){
    alert("user created successfully");
  }
}

  return (
    <div style={{textAlign:"center"}}>
      <h1>add user form</h1>
      <input type="text"
      onChange={(event)=>setName(event.target.value)}
      placeholder="enter name" />
      <br /><br />
      <input type="text"
      onChange={(event)=>setEmail(event.target.value)}
      placeholder="enter email" />
      <br /><br />
      <input type="text"
      onChange={(event)=>setAge(event.target.value)}
      placeholder="enter age" />
      <br /><br />
      <button onClick={createUser}>Create User</button>
      
    </div>
  )
}
export default UserAdd