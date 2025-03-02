import { useEffect, useState } from "react"
// import { useLoaderData } from "react-router"
function Github() {
    const [data, setData] = useState("")
    useEffect(()=>{
        fetch('https://api.github.com/users/PrinceVerma8884')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setData(data)
        })
    }, [])

    // const data = useLoaderData()

  return (
    <>
    <div className="text-centre m-4 bg-gray-600 text-white p-4 text-3xl">Github Followers : {data.followers}
        <img src={data.avatar_url} alt="Git Picture" width={300} />
    </div>
    </>
  )
}

export default Github

// export const githubInfoLoader = async () => {
//     const response = await fetch('https://api.github.com/users/PrinceVerma8884')
//     return response
// }