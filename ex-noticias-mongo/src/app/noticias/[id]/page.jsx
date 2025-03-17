import {use} from "react"
import { getNoticia } from "@/lib/noticiasDB"
import Image from "next/image"
import Link from "next/link"

export default function Noticia({params}){
    const {id} = use(params)
    const noticia = use(getNoticia(id)) // o Use também espera. Nao daria pra usar Await aqui porque está usando o Use em cima

    return(
        <div>
            <h2>{noticia.titulo}</h2>
            <Image className="imgCardNoticia" src={`/${noticia.imagem}`} alt="Imagem" width={300} height={300}/>
            <p className="descricaoNoticia">{noticia.descricao}</p>
            <Link href="/noticias">&#8592; Voltar</Link>
        </div>
    )
}