import { InteractionRequiredAuthError, InteractionStatus } from "@azure/msal-browser";

export async function getAccessToken(instance, inProgress, accounts) {
    console.log("-------Start->GetAccessToken-------")
    if (inProgress === InteractionStatus.None) {
        console.log("Start.............")
        const accessTokenRequest = {
            scopes: ["user.read"],
            account: accounts[0]
        }
        try {
            const token = await instance.acquireTokenSilent(accessTokenRequest)
            // console.log(token.accessToken)
            return token.accessToken
        } catch (error) {
            if (error instanceof InteractionRequiredAuthError) {
                return instance
                    .acquireTokenPopup(accessTokenRequest)
                    .then((resp) => {
                        return resp.accessToken;
                    })
                    .catch((err) => {
                        // routeToHome();
                        console.log(err);
                    });
            } else {
                // routeToHome();
                console.log(error);
            }

        }
    }
}
