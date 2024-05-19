import { useEffect, useState } from "react"
import { api } from "../../services/api"
import Header from "../../components/Header/Header"
import { Event } from "../../components/RenderEvents/RenderEvents"
import { useNavigate } from "react-router-dom"

interface EventDetailsProps{
    size: number,
    eventId: string
}

export default function EventDetails({ size, eventId }: EventDetailsProps){

    const [eventInfo, setEventInfo] = useState<Event>({
        _id: "string",
        name: "string",
        details: "string",
        link: "string",
        provider: "string",
        hours: 0,
        certification: true,
        theme: "string"
    })

    async function getEventInfo(){
        const response = await api.get("/events/getinfobyid/" + eventId)
        setEventInfo(response.data[0])
    }

    useEffect(() => {
        getEventInfo()
    }, [])

    const navigate = useNavigate()

    const themes = {
        "technology": "Tecnologia",
        "business": "Negócios",
        "health": "Saúde",
        "industry": "Indústria e engenharias",
        "education": "Educação",
        "languages": "Idiomas",
        "others": "Outros"
    }

    const getTheme = (themeName: string) => {
        return themes[themeName as keyof {}]
    }

    return (
        <>
            <Header size={size} />
            <main className="m-12">
                <div className="border max-w-3xl p-12 flex flex-col gap-6">
                    <h3 className="font-bold">{eventInfo?.name}</h3>
                    <ul>
                        <li>Carga horária: {eventInfo?.hours} horas</li>
                        <li>Provedor: {eventInfo?.provider}</li>
                        <li>Certificação: {eventInfo?.certification ? "Sim" : "Não"}</li>
                        <li>Tema: {getTheme(eventInfo.theme)}</li>
                    </ul>
                    <div>
                        <p>Ementa:</p>
                        <p className="text-justify">{eventInfo?.details}</p>
                    </div>
                    <div className="flex gap-6">
                        <button className="text-center bg-tea-green p-2 text-white transition hover:bg-hover-green rounded w-20" onClick={() => navigate('/')}>Voltar</button>
                        <a href={eventInfo?.link} target="_blank" className="text-center bg-air-superiority-blue p-2 text-white transition hover:bg-hover-blue rounded w-20"><button>Inscrição</button></a>
                    </div>
                </div>
            </main>
        </>
    )
}