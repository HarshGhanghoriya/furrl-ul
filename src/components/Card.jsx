import { Avatar, Paper } from "@mui/material"


export const Cards = ({ details }) => {

  return (
    <Paper elevation={3} className="card-layout">
      <div className="intro-div">
        <Avatar src="../assets/logo192.png" className="size-img" />
        <h4>Anubhav Singh Bassi</h4>
      </div>
      <div>
        <div className="designation-div">
          <div className="role">Role</div>
          <div className="designation">CEO</div>
        </div>
        <div className="designation-div margin">
          <div className="role">TEAM</div>
          <div className="designation">COMEDY</div>
        </div>
      </div>
    </Paper>
  )
}
