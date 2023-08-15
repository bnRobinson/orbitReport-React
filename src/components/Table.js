import satData from "./satData";
import './styling.css'

const Table = ({ sat }) => {
 
  return (
      <table>
       <thead>
        <tr>
        <th>Name</th>
          <th>Type</th>
          <th>Launch Date</th>
          <th>Operational Status</th>
        </tr>
        </thead>
        <tbody>
      {sat.map((data, id)=>{
return(
<tr key={id}>
<td>{data.name}</td>
<td>{data.type}</td>
<td>{data.launchDate}</td>
<td>{sat.operational ? "active" : "inactive"} </td>
        </tr>
)
      }
      ) 
      }
        </tbody>
      </table>
  );
};

export default Table;