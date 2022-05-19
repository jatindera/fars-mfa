import { AuthenticatedTemplate } from "@azure/msal-react"
import DummyList from "../components/DummyList"

const Posts = () => {
    return (
        <>
            <AuthenticatedTemplate>
                <p className="text-center">Following content is from <b>FastAPI</b></p>
                <p className="text-center">Example: Get Posts from <b>SQL DB</b></p>
                <DummyList></DummyList>
            </AuthenticatedTemplate>
        </>
    )
}

export default Posts