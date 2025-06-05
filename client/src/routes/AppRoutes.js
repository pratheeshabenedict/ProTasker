import { Routes } from "react-router-dom"
import { PublicRoutes } from "./PublicRoutes"
export const AppRoutes = () => {
  return (
    <Routes>
        {PublicRoutes()}
    </Routes>
  )
}
export default AppRoutes;
