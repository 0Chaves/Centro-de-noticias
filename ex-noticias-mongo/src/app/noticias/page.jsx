import { getNoticias } from '@/lib/noticiasDB'
import CardNoticia from '@/components/cardnoticia'

export default async function Noticias(){

    const noticias = await getNoticias()
    return(
        <div>
            <h1>Página de noticias</h1>
            <p>Sem noticias por hora</p>
            <div className="flex-container">
                {noticias.map(noticia => <CardNoticia key={noticia._id} noticia={noticia}/>)}
            </div>
        </div>
    )
}