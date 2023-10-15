import { Outlet, useNavigation } from "react-router-dom"
import Header from "../components/Header"
import Loading from "../components/Loading"


const MainLayout = () => {
    const navigation = useNavigation()
    return (
        <div>
            <Header />
            {
                navigation.state === "loading" ? <Loading /> :
                    <Outlet />
            }
        </div>
    )
}

export default MainLayout