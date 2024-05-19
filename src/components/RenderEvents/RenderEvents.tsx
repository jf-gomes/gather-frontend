import { useEffect, useState, useContext } from "react"
import { api } from "../../services/api"
import { useNavigate } from "react-router-dom"
import { Dispatch, SetStateAction } from "react"
import { AuthContext } from "../../contexts/auth"

export interface Event{
    _id: string,
    name: string,
    details: string,
    link: string,
    provider: string,
    hours: number,
    certification: boolean,
    theme: string
}

interface RenderEventsProps{
    setEventId: Dispatch<SetStateAction<string>>
}

export default function RenderEvents({ setEventId }: RenderEventsProps){

    async function getEvents(){
        const response = await api.get("/events/show")
        setEvents(response.data)
    }

    const [events, setEvents] = useState<Event[]>([])

    useEffect(() => {
       getEvents()
    }, [])

    const navigate = useNavigate()

    const { selectedFilters, setSelectedFilters, eventsAmount, setEventsAmount }: any = useContext(AuthContext)

    if (selectedFilters.length == 0){
        return (
            <div className="flex flex-col gap-6">
                <h2 className="font-bold">Resultados</h2>
                <div className="flex flex-wrap gap-6">
                    {events?.filter((event) => events.indexOf(event) <= eventsAmount).map((event) => (
                        <div className="w-80 border p-6 flex flex-col gap-6 rounded-xl" key={event._id}>
                            <div>
                                <p className="font-bold">{event.name}</p>
                                <p>Carga horária: {event.hours} hora(s)</p>
                                <p>Provedor: {event.provider}</p>
                                <p>Certificação: {event.certification ? "Sim" : "Não"}</p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <a href={event.link} target="_blank" className="text-center bg-air-superiority-blue p-2 text-white transition hover:bg-hover-blue rounded"><button>Inscrição</button></a>
                                <button className="text-center bg-tea-green p-2 text-white transition hover:bg-hover-green rounded" onClick={() => {
                                    setEventId(event._id)
                                    navigate('/info')
                                }}>Saber mais</button>
                            </div>
                        </div>
                    ))}
                </div>
                {eventsAmount <= events?.length ? <button onClick={() => setEventsAmount(eventsAmount + 4)}>Ver mais</button> : null}
            </div>
        )
    } else {
        return (
            <div className="flex flex-col gap-6">
                <h2 className="font-bold">Resultados</h2>
                <div className="flex flex-wrap gap-6">
                    {events?.filter(event => selectedFilters.indexOf(event.theme) != -1 <= eventsAmount).map((event) => (
                        <div className="w-80 border p-6 flex flex-col gap-6 rounded-xl" key={event._id}>
                            <div>
                                <p className="font-bold">{event.name}</p>
                                <p>Carga horária: {event.hours} hora(s)</p>
                                <p>Provedor: {event.provider}</p>
                                <p>Certificação: {event.certification ? "Sim" : "Não"}</p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <a href={event.link} target="_blank" className="text-center bg-air-superiority-blue p-2 text-white transition hover:bg-hover-blue rounded"><button>Inscrição</button></a>
                                <button className="text-center bg-tea-green p-2 text-white transition hover:bg-hover-green rounded" onClick={() => {
                                    setSelectedFilters([])
                                    setEventId(event._id)
                                    navigate('/info')
                                }}>Saber mais</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}