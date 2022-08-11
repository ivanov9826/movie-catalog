import { baseUrl } from "../constants/baseUrl"
export const register =  async(username , password) => {
    return await fetch(`${baseUrl}/user/register` , {
        method: 'POST' , 
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify({username , password})
    })
}

// return await fetch(`http://localhost:9999/api/movie/` , {
//     method: 'POST' , 
//     headers: {
//         'content-type' : 'application/json'
//     },
//     body: JSON.stringify({
//         name: "Stoyan Kolev2",
//         imageUrl:"https://7dnibulgaria.bg/wp-content/uploads/2021/06/Screenshot-2021-06-18-at-10.14.01.png",
//         genre:"action",
//         details:"Kude e pedala?!!?!?",
//         author:"62f56ae41a44003f63671cac"
//     }),
// })