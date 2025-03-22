import { getSugestoes} from '@/lib/sugestoesDB'
import Link from 'next/link'

export default async function Sugestoes() {
    const sugestoes = await getSugestoes()
    return(
        <div>
            <h2>Sugestoes recebidas</h2>
            <ul className='lista'>
                {sugestoes.map(sugestao => <li key={sugestao.id}><CardSugestao sugestao={sugestao}/></li>)}
            </ul>
            <p className='voltar'><Link href="/adm">&#8592; Voltar</Link></p>
        </div>
    )
}