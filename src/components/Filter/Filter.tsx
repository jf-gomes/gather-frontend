import { useContext } from "react"
import { AuthContext } from "../../contexts/auth"
import { Dispatch, SetStateAction } from "react"

interface Category{
    id: number,
    title: string,
    name: string
}

interface FilterProps{
    change: boolean,
    setChange: Dispatch<SetStateAction<boolean>>,
    size: number
}

interface HoursLong{
    id: number,
    classification: string,
    minHour: number,
    maxHour?: number
}

const categories: Category[] = [
    {
        id: 0,
        title: "Tecnologia, computação e engenharias",
        name: "technology"
    },
    {
        id: 1,
        title: "Negócios e gestão",
        name: "business"
    },
    {
        id: 4,
        title: "Educação e desenvolvimento pessoal",
        name: "education"
    }
]

const hoursLong: HoursLong[] = [
    {
        id: 0,
        classification: "Curta (até 16 horas)",
        minHour: 1,
        maxHour: 16
    },
    {
        id: 1,
        classification: "Média (até 48 horas)",
        minHour: 17,
        maxHour: 48
    },
    {
        id: 2,
        classification: "Longa (mais de 49 horas)",
        minHour: 49
    }
]

export default function Filter({ change, setChange, size }: FilterProps){

    const filterCheckboxLabelDivStyles: string = size < 640 ? "flex flex-col gap-2 max-h-36 flex-wrap" : "flex flex-col gap-2"

    const { addFilter }: any = useContext(AuthContext)

    return (
        <div className="flex flex-col gap-6">
            <h3 className="font-bold text-2xl">Filtros</h3>
            <div className="flex flex-col gap-2">
                <h3 className="font-bold">Tema</h3>
                <div className={filterCheckboxLabelDivStyles}>
                    {categories.map((category) => (
                    <div className="flex gap-6" key={category.id}>
                        <input type="checkbox" name={category.name} id={category.name} onChange={() => {
                            addFilter(category.name)
                            setChange(!change)
                        }
                    } />
                        <p>{category.title}</p>
                    </div>
                ))}
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <h3 className="font-bold">Duração</h3>
                <div className={filterCheckboxLabelDivStyles}>
                    {hoursLong.map((hoursLong) => (
                    <div className="flex gap-6" key={hoursLong.id}>
                        <input type="radio" name="hourLong" id={hoursLong.classification} value={hoursLong.classification}  />
                        <p>{hoursLong.classification}</p>
                    </div>
                ))}
                </div>
            </div>
        </div>
    )
}