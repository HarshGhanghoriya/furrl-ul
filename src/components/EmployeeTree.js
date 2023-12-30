import { Cards } from "./Card";
import "../App.css";
export const EmployeeTree = ({ employessData }) => {


  return (
    <>
      <div
        className="intro-div"
        key={`${employessData.email}`}
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
