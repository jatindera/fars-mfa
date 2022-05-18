import { AuthenticatedTemplate } from "@azure/msal-react"
import DummyList from "../components/DummyList"

const FastAPI = () => {
    return (
        <>
            <AuthenticatedTemplate>
                <p className="text-center">Following content is from <b>FastAPI</b></p>
                <DummyList></DummyList>
            </AuthenticatedTemplate>
        </>
    )
}

export default FastAPI