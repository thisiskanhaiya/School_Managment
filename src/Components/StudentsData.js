import Table from 'react-bootstrap/Table';
function StudentsData(props) {
  // function Delete(index) {
  //   alert(index);
  // }
  const serverData = props.data
  return (
    <Table striped className='container mt-3'>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>

      {serverData.map((item,index)=>{
                return(
                  <tr key={index}>
                <td> {index+1} </td>
                <td> {item.firstNameInput}</td>
                <td> {item.lastNameInput}</td>
                <td> {item.emailInput}</td>
                <td><button onClick={()=>{props.Delete(item.id)}}>Delete</button></td>
              </tr>
                )
              })}


        {/* <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td><button>Delete</button></td>
        </tr> */}
        
      </tbody>
    </Table>
  );
}

export default StudentsData;