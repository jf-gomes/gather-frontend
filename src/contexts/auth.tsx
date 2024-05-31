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

    const [hourFilter, setHourFilter] = useState<string>("")
  
    return (
        <AuthContext.Provider value={{selectedFilters, setSelectedFilters, addFilter, hourFilter, setHourFilter }}>
            { children }
        </AuthContext.Provider>
    )
}