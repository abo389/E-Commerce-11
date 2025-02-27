import { Navigate } from "react-router-dom"
import { useUserContext } from "../../context/User.context"

export default function GuestRoute({children}) {
    const {token} = useUserContext()
  if (token) {
    return <Navigate to={'/'} />
    
  }else {
    return children
  }
}
