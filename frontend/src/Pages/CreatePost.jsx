import { AuthenticatedTemplate } from "@azure/msal-react"

const CreatePost = () => {
    return (
        <>
            <AuthenticatedTemplate>
                <p className="text-center">Form Example</p>
            </AuthenticatedTemplate>
        </>
    )
}

export default CreatePost