import { AuthenticatedTemplate } from "@azure/msal-react"

const ProcessFile = () => {
    return (
        <>
            <AuthenticatedTemplate>
                <p className="text-center">Form Example</p>
            </AuthenticatedTemplate>
        </>
    )
}

export default ProcessFile