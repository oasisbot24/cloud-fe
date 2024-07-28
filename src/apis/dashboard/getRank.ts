import api from "../network";

async function getRank(period:number) : Promise<[]>{
    const respose = await api.get<ApiResponseType<[]>>(
        `ranking?period=${period}`
    )

    console.log(respose)
    return []
}