import { useEffect, useState } from "react"
import { api } from "../../services/api"
import Header from "../../components/Header/Header"
import { Event } from "../../components/RenderEvents/RenderEvents"
import { useNavigate } from "react-router-dom"
import Loader from "../../components/Loader/Loader"

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
        setLoader(true)
        const response = await api.get("/events/getinfobyid/" + eventId)
        setEventInfo(response.data[0])
        setLoader(false)
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

    const [loader, setLoader] = useState<boolean>(false)

    if (loader){
        return (
            <>
                <Header size={size} />
                <Loader loadingText="Carregando dados do curso..." />
            </>
        )
    } else {
        return (
            <>
                <Header size={size} />
                <main className="m-12">
                    <div className="border max-w-3xl p-12 flex flex-col gap-6">
                        <h3 className="font-bold text-xl bg-air-superiority-blue p-2 text-white shadow">{eventInfo?.name}</h3>
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
                            <button className="text-center bg-tea-green p-2 transition hover:bg-hover-green rounded w-40 shadow" onClick={() => navigate('/gather-frontend')}>Voltar</button>
                            <a href={eventInfo?.link} target="_blank" className="text-center bg-rich-black p-2 text-white transition hover:bg-hover-blue rounded w-40 shadow"><button>Inscrição</button></a>
                        </div>
                    </div>
                </main>
            </>
        )
    }    
}