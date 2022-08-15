import "./Employee.scss"
import TicketCounter from "../TicketCounter/TicketCounter";

const Employee = (props) => {

    const {data} = props;

    const employeeDataJSX = data.map((data) => {
        return (
            <div className="ticket" key={data.id}>
               <p className="info">{data.name}</p> 
               <p className="info">{data.role}</p>
               <TicketCounter />
            </div>
        )

    })

    return (
        <div>
            <div>
            {employeeDataJSX}
            </div>
        </div>
        
    )
}

export default Employee;