import { useSelector } from "react-redux"
import {Navigate } from "react-router-dom"

export const RestrictedRoute   = ({element: Element})=>{
    const isAuth = useSelector(state => state.auth.access_token)
    return isAuth ? <Navigate to='/'/> : <Element/>
}