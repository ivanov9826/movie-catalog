import { baseUrl } from "../constants/baseUrl"
export const login =  async(username , password) => {
    try {
        
        const response = await fetch(`${baseUrl}/user/login` , {
            method: 'POST' , 
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify({username , password}),
            credentials: 'include',
        })
        const json = await response.json()
        return json
        
    } catch (error) {
        console.log(error);
    }
}