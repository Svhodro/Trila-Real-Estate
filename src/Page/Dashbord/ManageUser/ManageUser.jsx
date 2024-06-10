import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Manageuser = async () => {
  const responce = await fetch("https://trila-backend.vercel.app/user");
  const data = await responce.json();
  return data;
};

function ManageUser() {
  const notifyadmin = () => toast("Make Admin  Sucsessfull!");
  const notifydelete = () => toast("Delete Sucsessfull!");
  const notifyagent = () => toast("Make Agent  Sucsessfull!");
  const { isLoading, error, data } = useQuery({
    queryKey: ["Manageuer"],
    queryFn: Manageuser,
  });

  if (isLoading) {
    return (
      <div className={`w-full h-screen flex justify-center items-center`}>
        <span className="loading loading-ring loading-lg size-56"></span>
      </div>
    );
  }

  // useremail
  // userphoto
  // username

  return (
    <div className="overflow-x-auto h-full">
      {data.map((res) => {
        const handleAdmin = () => {
          const data = {
            roll: "admin",
          };
          axios
            .put(`https://trila-backend.vercel.app/updateuser/${res._id}`, data)
            .then((res) => {
              const responce=res.data
                if (responce) {
                  notifyadmin();
                }
              
            });
        };
        const handleAgent = () => {
          const data = {
            roll: "agent",
          };
          axios
            .put(`https://trila-backend.vercel.app/updateuser/${res._id}`, data)
            .then((res) => {
              const responce=res.data
                if (responce) {
                  notifyagent();
                }
              
            });
        };
        const handledelete = () => {
          axios
            .delete(`https://trila-backend.vercel.app/deleteuser/${res._id}`)
            .then((res) => {
              const responce=res.data
                if (responce) {
                  notifydelete();
                }
             
            });
        };
        return (
          <table className="table table-pin-rows">
            <thead>
              <tr>
                <th>Information</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{res.useremail}</td>
              </tr>
              <tr>
                <td>{res.username}</td>
              </tr>
              {res.status == "verified" ? (
                <tr>status:{res.status}</tr>
              ) : (
                <td>
                  <tr>
                    <td>
                      <button
                        className="btn btn-sm btn-success"
                        onClick={handleAdmin}
                      >
                        Admin
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <button
                        className="btn btn-sm btn-error"
                        onClick={handleAgent}
                      >
                        Agent
                      </button>
                    </td>
                  </tr>
                </td>
              )}
              <tr>
                <td>
                  <button
                    className="btn btn-sm btn-warning"
                    oncilick={handledelete}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        );
      })}
      <ToastContainer />
    </div>
  );
}

export default ManageUser;
