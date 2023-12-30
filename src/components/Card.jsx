import { Avatar, Paper } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';

export const Cards = ({ details }) => {
  return (
    <>
      {<div className="long-arrow-left"></div>}
      <Paper elevation={3} className="card-layout">
        <div style={{textAlign:"end"}}><EditIcon/></div>
        
        <div className="intro-div">
          <Avatar src="../assets/logo192.png" className="size-img" />
          <h4>{details.name}</h4>
        </div>
        <div>
          
          <table >
              <tr className="">
                <td className="role">Email</td>
                <td className="designation">{details.email}</td>
              </tr>
          </table>
          {/* <div className="designation-div margin">
            <div className="role">Team</div>
            <div className="designation">{details.designation}</div>
          </div> */}
          <table >
              <tr className="">
                <td className="role" >Team</td>
                <td className="designation">Team Name</td>
              </tr>
          </table>
        </div>
      </Paper>
    </>
  );
};
