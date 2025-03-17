import Noticia from "@/models/noticia";
import connectDB from "@/lib/connectDB";
import noticias from '@/noticias.json';
import { redirect } from "next/navigation";

export default async function Seed(){
    await connectDB()
        .then(()=>{
            console.log("Conexão com o banco estabelecida.")
        })
        .catch(err=>{
            console.log("Erro ao conectar com o banco.")
            console.log(err)
        })
    
        const news = noticias.map(noticia => {
            let {id, ...novaNoticia} = noticia
            return novaNoticia
        })

        console.log(news)

        Noticia.insertMany(news)
            .then(res => {
                console.log("Salvo no banco com sucesso")
            })
            .catch(err =>{
                console.log("Erro ao salvar")
                console.log(err)
            })

        redirect('/noticias')
}



