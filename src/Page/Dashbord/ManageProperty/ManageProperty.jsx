import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Managepro = async () => {
  const responce = await fetch("https://trila-backend.vercel.app/allstate");
  const data = await responce.json();
  return data;
};

function ManageProperty() {
  const notifyverify = () => toast("Verify Sucsessfull!");
  const notifyrejected = () => toast("Rejected  Sucsessfull!");
  const { isLoading, error, data } = useQuery({
    queryKey: ["Managepro"],
    queryFn: Managepro,
  });

  if (isLoading) {
    return (
      <div className={`w-full h-screen flex justify-center items-center`}>
        <span className="loading loading-ring loading-lg size-56"></span>
      </div>
    );
  }

  //
  // status
  //

  return (
    <div className="overflow-x-auto h-full">
      {data.map((res) => {
        const handleverify = () => {
          const data = {
            status: "verified",
          };
          axios
            .put(
              `https://trila-backend.vercel.app/updatestatus/${res._id}`,
              data
            )
            .then((res) => {
              notifyrejected();
            });
        };
        const handlereject = () => {
          const data = {
            status: "rejected",
          };
          axios
            .put(
              `https://trila-backend.vercel.app/updatestatus/${res._id}`,
              data
            )
            .then((res) => {
              const data = res.data;
                if (data) {
                  notifyrejected();
                }
            
            });
        };

        return (
          <table className="table table-pin-rows mt-7">
            <thead>
              <tr>
                <th>Information</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{res.Propertytitle}</td>
              </tr>
              <tr>
                <td>{res.Propertylocation}</td>
              </tr>
              <tr>
                <td>{res.Agentname}</td>
              </tr>
              <tr>
                <td>{res.Agentemail}</td>
              </tr>
              <tr>
                <td>{res.Pricerange}</td>
              </tr>
              {res.status == "verified" ? (
                <tr>status:{res.status}</tr>
              ) : (
                <td>
                  <tr>
                    <td>
                      <button
                        className="btn btn-sm btn-success"
                        onClick={handleverify}
                      >
                        verifiy
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <button
                        className="btn btn-sm btn-error"
                        onClick={handlereject}
                      >
                        rejecat
                      </button>
                    </td>
                  </tr>
                </td>
              )}
            </tbody>
          </table>
        );
      })}
      <ToastContainer />
    </div>
  );
}

export default ManageProperty;
