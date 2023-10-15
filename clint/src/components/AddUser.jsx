import axios from "axios";
import { useContext } from "react";
import { AiOutlineDoubleLeft } from "react-icons/ai"
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import toast from "react-hot-toast";

const AddUser = () => {
    const { registerUser } = useContext(AuthContext);
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value
        const email = form.email.value;
        const password = form.password.value;
        const gender = form.gender.value;
        const status = form.status.value;

        registerUser(email, password)
            .then((userCredential) => {
                const creationTime = userCredential.user.metadata.creationTime;
                const user = { name, email, gender, password, status, creationTime }
                axios.post("https://server-nv6vfjcke-joy600508-gmailcom.vercel.app/user", user)
                    .then((res) => {
                        if (res.data.insertedId) {
                            toast.success("User Register Successfully")
                            navigate("/");
                        }
                        else {
                            toast.error("faild to added user")
                        }
                    })
                    .catch(err => toast.error(err.message))


            })
            .catch((err) => toast.error(err.message))


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
                <h1 className="text-2xl">New User</h1>
                <p className="text-gray-400 text-sm">Use the below form to create a new account</p>
            </div>
            <div className=" mt-10">
                <form className="mx-auto space-y-2" onSubmit={handleSubmit}>
                    <div className="w-4/6 mx-auto space-y-1 ">
                        <label className="text-gray-400" htmlFor="name">Name </label>
                        <input className="outline-none border-gray-300 border-2 py-2 px-2 w-full" type="text" name="name" id="name" placeholder="Enter Your name" required />
                    </div>
                    <div className="w-4/6 mx-auto space-y-1  ">
                        <label className="text-gray-400" htmlFor="email">Email </label>
                        <input className="outline-none border-gray-300 border-2 py-2 px-2 w-full" type="text" name="email" id="email" placeholder="Enter Your email" required />
                    </div>
                    <div className="w-4/6 mx-auto space-y-1  ">
                        <label className="text-gray-400" htmlFor="email">Password </label>
                        <input className="outline-none border-gray-300 border-2 py-2 px-2 w-full" type="text" name="password" id="password" placeholder="Enter Your Passowrd" required />
                    </div>
                    <div className="w-4/6 mx-auto text-sm flex flex-col gap-5 justify-center">
                        <div className="flex items-center gap-8 mt-4">
                            <div>
                                <h1 className="text-gray-500">Gender</h1>
                            </div>
                            <div className="flex gap-2 items-center">
                                <input value="male" className="cursor-pointer" type="radio" name="gender" id="male" required />
                                <label className="font-semibold cursor-pointer" htmlFor="male">
                                    Male
                                </label>
                            </div>
                            <div className="flex gap-2 items-center cursor-pointer">
                                <input value="female" className="cursor-pointer" type="radio" name="gender" id="female" required />
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
                                <input value="active" className="cursor-pointer" type="radio" name="status" id="active" required />
                                <label className="font-semibold cursor-pointer" htmlFor="active">
                                    Active
                                </label>
                            </div>
                            <div className="flex gap-2 items-center cursor-pointer">
                                <input className="cursor-pointer" value="inactive" type="radio" name="status" id="inactive" required />
                                <label className="font-semibold cursor-pointer" htmlFor="inactive">
                                    Inactive
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="w-4/6 mx-auto ">

                        <button className="btn w-full hover:text-gray-900 mt-5 capitalize text-gray-700 bg-green-300">Save</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddUser