import { AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";
const AboutUs = () => {
    return (
        <>
            <p className="text-center">This content is visible to <b>ALL</b>  Users</p>
            <AuthenticatedTemplate>
                <p className="text-center">This content is visible only to <b>Logged in</b>  Users</p>
            </AuthenticatedTemplate>
            <UnauthenticatedTemplate>
                <p className="text-center">This content is visible only to the users who are <b>NOT </b>Logged in</p>
            </UnauthenticatedTemplate>
        </>
    )
}

export default AboutUs