import { Cards } from "./Card";
import "../App.css";
export const EmployeeTree = ({ employessData }) => {

  function checkWidth(members) {
    let width = 30;
    if (members.length >= 1) {
      const length = members.length;
      width = width * length;
    }

    return {
      width: `${width}rem`,
    };
  }

  return (
    <>
      <div
        className="intro-div"
        key={`${employessData.email}`}
        //  style={checkWidth(employessData.directReports || [])}
      >
             
     
        <Cards details={employessData} />
        {employessData.directReports && <div className="vertical-line"></div>}
      

        <div
          className=""
          style={{
            display: "flex",
            gap: "2rem",
            borderTop: `${
              employessData.directReports &&
              employessData.directReports.length > 1
                ? "0.5px solid #653780"
                : ""
            }`,
          }}
        >
          {employessData.directReports &&
            employessData.directReports.map((items, idx) => (
                
              <EmployeeTree employessData={items} key={idx} />
            ))}
        </div>
      </div>
    </>
  );
};
