import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineUser } from "react-icons/ai"
import { FiDelete } from "react-icons/fi"
import { HiPencilSquare } from "react-icons/hi2"
import { Link, useLoaderData } from "react-router-dom"

const AllUser = () => {
    const { data } = useLoaderData();
    const [users, setUsers] = useState(data)
    let count = 0;
    const handleDelete = async (id) => {
        try {
            const { data } = await axios.delete(`https://server-nv6vfjcke-joy600508-gmailcom.vercel.app/user/${id}`)
            const filterdUser = users.filter((user) => user._id !== id);
            setUsers(filterdUser)
            if (data.deletedCount > 0) {
                toast.success("User Deleted Successfully")
            }
        } catch (error) {
            toast.error(error.message)
        }
    }
    return (
        <div className="lg:w-4/6 w-5/6  mx-auto mt-14">
            <Link to="/add-user">
                <button className="flex items-center gap-1 text-blue-500 bg-gray-100 rounded-sm font-semibold shadow-xl p-2 ">
                    <span className="text-sm">New User</span>
                    <AiOutlineUser className="font-bold" />
                </button>
            </Link>
            <div className="mt-10">
                <div className="overflow-x-auto">
                    <table className="table table-xs">
                        <thead className="bg-gray-800 text-white ">
                            <tr className="p-5">
                                <th>Id</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Gender</th>
                                <th>Status</th>
                                <th>creationTime</th>
                                <th>Action</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user) => {
                                    return <tr key={user._id}>
                                        <th>{count = count + 1}</th>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.gender}</td>
                                        <td>{user.status}</td>
                                        <td>{user.creationTime}</td>
                                        <td className="flex items-center gap-2">
                                            <Link to={`/update-user/${user._id}`} state={user}><HiPencilSquare size={16} className="text-purple-500" /></Link>
                                            <button onClick={() => handleDelete(user._id)}><FiDelete size={16} className="text-purple-500" /></button>
                                        </td>
                                    </tr>
                                })
                            }

                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    )
}

export default AllUser