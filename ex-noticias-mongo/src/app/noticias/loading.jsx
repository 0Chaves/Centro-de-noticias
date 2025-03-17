//a pagina de loading funciona tanto para o noticias geral quanto para as subrotas dele
//toda rota pode ter um loading.jsx que é mostrando enquanto a pagina carrega

export default async function LoadingNoticias() {
    return(
        <div>
            <h2>Carregando as noticias...</h2>
            <h3>Espere só um pouquinho por favor ...</h3>
        </div>
    )
}