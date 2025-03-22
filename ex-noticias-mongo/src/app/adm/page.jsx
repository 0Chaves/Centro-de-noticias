import Link from "next/link";

export default function Adminitracao(){
    return(
        <div>
            <h2>Administração do site</h2>
            <p className="buttonLink"><Link href="/adm/noticias">Administrar noticias</Link></p>
            <p className="buttonLink"><Link href="/adm/sugestoes">Ver sugestoes</Link></p>

        </div>
    )
}