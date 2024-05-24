import Header from "../../components/Header/Header";
import Filter from "../../components/Filter/Filter";
import RenderEvents from "../../components/RenderEvents/RenderEvents";
import { Dispatch, SetStateAction, useState } from "react";
import Footer from "../../components/Footer/Footer";

interface HomeProps{
    size: number,
    setEventId: Dispatch<SetStateAction<string>>,
}

export default function Home({ size, setEventId }: HomeProps){

    const [change, setChange] = useState<boolean>(false)

    return (
        <>
            <Header />
            <main className="flex p-12 gap-12 flex-wrap">
                <Filter change={change} setChange={setChange} size={size} />
                <RenderEvents setEventId={setEventId} />
            </main>
            <Footer />
        </>
    )
}