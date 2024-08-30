import { Redirect } from "wouter"
import { useAuthStore } from "../stores/auth"


interface AuthGuardProps{
    children: React.ReactElement[]
}


export function AuthGuard(props:AuthGuardProps){

    const { isAuthenticated } = useAuthStore()

	if (!isAuthenticated) {
		return <Redirect to='/login' />
	} else {
		return <>{props.children}</>
	}
}