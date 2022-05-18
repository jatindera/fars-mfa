import { AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";


const Home = () => {
    return (
        <>
            <AuthenticatedTemplate>
                <p className="text-center">You are signed in!</p>
            </AuthenticatedTemplate>
            <UnauthenticatedTemplate>
                <p className="text-center">You are not signed in! Please sign in.</p>
            </UnauthenticatedTemplate>
        </>
    )
}

export default Home