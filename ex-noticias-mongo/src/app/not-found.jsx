'use client'
import Link from "next/link";

export default function NotFound(){
    return(
        <div>
            <h2>Página not encontraded</h2>
            <h3>Certamente o link ta errado</h3>
            <h1><Link href={'/noticias'}>Voltar</Link></h1>
            <button onClick={() => window.history.back()}>pagina anterior</button>
        </div>
    )
}