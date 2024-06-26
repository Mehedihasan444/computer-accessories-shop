import { useContext } from "react";
import { DataContext } from "../../DataProvider/DataProvider";


const My_Appointments = () => {
    const {allData}=useContext(DataContext)


    return (
        <div className="text-center">
        <p className="">....</p>
      <h1 className="text-4xl font-bold">My Appointments</h1>
     <h3 className="">Appointments found ({ allData[7]?.length})</h3>

      <div className="overflow-x-auto mt-5">
        <table className="table table-md text-center border">
          <thead className="border">
            <tr className="text-base">
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Device Type</th>
              <th>Booking Date</th>
              <th>Status</th>
              <th>Reschedule Date</th>
              <th>Problem Description</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody className="">
            {
              allData[7]?.map((appointment,i)=><tr className="hover" key={appointment?._id}>
        <th>{i+1}</th>
        <td>{appointment?.user_name}</td>
        <td>{appointment?.email}</td>
        <td>{appointment?.phone}</td>
        <td>{appointment?.device_type}</td>
        <td>{appointment?.booking_date}</td>
        <td>{appointment?.booking_date}</td>
        <td>{appointment?.booking_date}</td>
        <td>{appointment?.description}</td>
    <td>
        <button className="btn btn-sm btn-primary">Cancel</button>
    
    </td>
      </tr>)
            }
          
          </tbody>
        </table>
      </div>
    </div>
    );
};

export default My_Appointments;