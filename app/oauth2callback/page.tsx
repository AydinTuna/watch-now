"use client"
import { useEffect, useState } from 'react'
import getGoogleOAuthTokens from '@/utils/getGoogleOAuthTokens'
import { usePathname } from 'next/navigation'


function OAuthPage() {
    const [callbackPath, setCallbackPath] = useState<string>("")
    const [accessToken, setAccessToken] = useState<string | null>("")

    const fetchData = (access_token: string | null) => {
        fetch(`https://www.googleapis.com/youtube/v3/playlistItems?access_token=${access_token}&part=snippet&mine=true&playlistId=LL`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });
    }



    useEffect(() => {
        const googleOAuthToken = getGoogleOAuthTokens("access_token", `http://localhost:3000/${callbackPath}`)
        setCallbackPath(window.location.href)
        setAccessToken(googleOAuthToken)
        console.log(accessToken);
        if (callbackPath && accessToken != null || callbackPath && accessToken !== "") {
            fetchData(accessToken)
        }
    }, [callbackPath, accessToken])





    return (
        <div>OAuthPage</div>
    )
}

export default OAuthPage