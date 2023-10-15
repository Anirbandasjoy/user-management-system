import axios from "axios";
import toast from "react-hot-toast";
import { AiOutlineDoubleLeft } from "react-icons/ai"
import { Link, useLocation, useNavigate } from "react-router-dom";
const UpdateUser = () => {
    const { state } = useLocation();
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value
        const email = form.email.value;
        const gender = form.gender.value;
        const status = form.status.value;
        const user = { name, email, gender, status }
        try {
            const { data } = await axios.put(`https://server-nv6vfjcke-joy600508-gmailcom.vercel.app/user/${state._id}`, user)
            if (data.modifiedCount > 0) {

                toast.success("User Updated Successfully")
                navigate("/")
            }

        } catch (error) {
            toast.error(error.message)
        }
        form.reset()
    }
    return (
        <div className="mt-5">
            <div className="w-4/6 mx-auto  text-purple-500 font-semibold">
                <Link className="flex items-center gap-1" to="/">
                    <AiOutlineDoubleLeft className="cursor-pointer" />
                    <h1 className="cursor-pointer">All Users</h1>
                </Link>
            </div>
            <div className="text-center space-y-1 ">
                <h1 className="text-2xl">Update User</h1>
                <p className="text-gray-400 text-sm">Use the below form to Update a your account</p>
            </div>
            <div className=" mt-10">
                <form className="mx-auto space-y-2" onSubmit={handleSubmit}>
                    <div className="w-4/6 mx-auto space-y-1 ">
                        <label className="text-gray-400" htmlFor="name">Name </label>
                        <input defaultValue={state.name} className="outline-none border-gray-300 border-2 py-2 px-2 w-full" type="text" name="name" id="name" placeholder="Enter Your name" />
                    </div>
                    <div className="w-4/6 mx-auto space-y-1  ">
                        <label className="text-gray-400" htmlFor="email">Email </label>
                        <input defaultValue={state.email} className="outline-none border-gray-300 border-2 py-2 px-2 w-full" type="text" name="email" id="email" placeholder="Enter Your email" />
                    </div>
                    <div className="w-4/6 mx-auto text-sm flex flex-col gap-5 justify-center">
                        <div className="flex items-center gap-8 mt-4">
                            <div>
                                <h1 className="text-gray-500">Gender</h1>
                            </div>
                            <div className="flex gap-2 items-center">
                                <input defaultChecked={state.gender === "male"} value="male" className="cursor-pointer" type="radio" name="gender" id="male" />
                                <label className="font-semibold cursor-pointer" htmlFor="male">
                                    Male
                                </label>
                            </div>
                            <div className="flex gap-2 items-center cursor-pointer">
                                <input defaultChecked={state.gender === "female"} value="female" className="cursor-pointer" type="radio" name="gender" id="female" />
                                <label className="font-semibold cursor-pointer" htmlFor="female">
                                    Female
                                </label>
                            </div>
                        </div>
                        <div className="flex items-center gap-8">
                            <div>
                                <h1 className="text-gray-500">Status</h1>
                            </div>
                            <div className="flex gap-2 items-center">
                                <input defaultChecked={state.status === "active"} value="active" className="cursor-pointer" type="radio" name="status" id="active" />
                                <label className="font-semibold cursor-pointer" htmlFor="active">
                                    Active
                                </label>
                            </div>
                            <div className="flex gap-2 items-center cursor-pointer">
                                <input defaultChecked={state.status === "inactive"} className="cursor-pointer" value="inactive" type="radio" name="status" id="inactive" />
                                <label className="font-semibold cursor-pointer" htmlFor="inactive">
                                    Inactive
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="w-4/6 mx-auto ">

                        <button className="btn w-full hover:text-gray-900 mt-5 capitalize text-gray-700 bg-green-300">Update</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default UpdateUser