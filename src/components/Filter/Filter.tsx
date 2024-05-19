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

const categories: Category[] = [
    {
        id: 0,
        title: "Tecnologia",
        name: "technology"
    },
    {
        id: 1,
        title: "Negócios",
        name: "business"
    },
    {
        id: 2,
        title: "Saúde",
        name: "health"
    },
    {
        id: 3,
        title: "Indústria e engenharias",
        name: "industry"
    },
    {
        id: 4,
        title: "Educação",
        name: "education"
    },
    {
        id: 5,
        title: "Idiomas",
        name: "languages"
    },
    {
        id: 6,
        title: "Outros",
        name: "others"
    }
]

export default function Filter({ change, setChange, size }: FilterProps){

    const filterCheckboxLabelDivStyles: string = size < 640 ? "flex flex-col gap-2 max-h-36 flex-wrap" : "flex flex-col gap-2"

    const { addFilter }: any = useContext(AuthContext)

    return (
        <div className="flex flex-col gap-6">
            <h3 className="font-bold">Filtros</h3>
            <div className="flex flex-col gap-2">
                <h3>Tema</h3>
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
        </div>
    )
}