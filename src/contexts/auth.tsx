import { createContext, useState } from 'react'

export const AuthContext = createContext({})

interface AuthProviderProps{
    children: any
}

export default function AuthProvider({ children }: AuthProviderProps){
    
    const [selectedFilters, setSelectedFilters] = useState<string[]>([])

    const addFilter = (filter: string) => {
        if (selectedFilters.indexOf(filter) == -1){
            let newSelectedFiltersList = selectedFilters
            newSelectedFiltersList.push(filter)
            setSelectedFilters(newSelectedFiltersList)
        } else {
            let newSelectedFiltersList = selectedFilters.filter((item) => item != filter)
            setSelectedFilters(newSelectedFiltersList)
        }
    }

    const [eventsAmount, setEventsAmount] = useState<number>(4)
  
    return (
        <AuthContext.Provider value={{selectedFilters, setSelectedFilters, addFilter, eventsAmount, setEventsAmount }}>
            { children }
        </AuthContext.Provider>
    )
}