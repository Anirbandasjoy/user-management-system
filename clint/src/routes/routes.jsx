import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import AddUser from "../components/AddUser";
import AllUser from "../components/AllUser";
import axios from "axios";
import NotFound from "../components/NotFound";
import UpdateUser from "../components/UpdateUser";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <NotFound />,
        children: [
            {
                path: "/add-user",
                element: <AddUser />
            },
            {
                path: "/",
                element: <AllUser />,
                loader: () => axios.get("https://server-nv6vfjcke-joy600508-gmailcom.vercel.app/user")
            },
            {
                path: "/update-user/:id",
                element: <UpdateUser />
            }
        ]
    }
])