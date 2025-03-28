import { getSugestoes} from '@/lib/sugestoesDB'
import Link from 'next/link'
import CardSugestao from '@/components/cardsugestao'

export default async function Sugestoes() {
    const sugestoes = await getSugestoes()
    return(
        <div>
            <h2>Sugestoes recebidas</h2>
            <ul className='lista'>
                {sugestoes.map(sugestao => <li key={sugestao.id}><CardSugestao id={sugestao.id} nome={sugestao.nome} email={sugestao.email} telefone={sugestao.telefone} sugestao={sugestao.sugestao}/></li>)}
            </ul>
            <p className='voltar'><Link href="/adm">&#8592; Voltar</Link></p>
        </div>
    )
}