import { useParams } from "react-router-dom";
function UserEdit(){
  const{id} = useParams();   
  console.log(id) 
  return(
    <div style={{textAlign:'center'}}>
      <h1>Edit User Details</h1>

      <input type="text" placeholder="user name" />
      <br /><br />

      <input type="text" placeholder="user email" />
      <br /><br />

      <input type="text" placeholder="user age" />
      <br /><br />

      <button>Update User</button>
    </div>
  )
}

export default UserEdit;