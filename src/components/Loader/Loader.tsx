import loader from '../../assets/loader.svg'

export default function Loader({ loadingText }: { loadingText: string }){
    return (
        <div className='flex flex-col items-center'>
            <img className='w-20' src={loader} alt="Carregando" />
            <p className='text-sm'>{loadingText}</p>
        </div>
    )
}