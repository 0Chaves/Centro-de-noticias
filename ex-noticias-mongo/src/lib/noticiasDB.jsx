import { resolve } from "styled-jsx/css";
import connectDB from "./connectDB";
import Noticia from "@/models/noticia";

async function connDB() {
    await connectDB()
        .then(()=>{
            console.log("Conexão com o banco estabelecida.")
        })
        .catch(err=>{
            console.log("Erro ao conectar com o banco.")
            console.log(err)
        })
    
    
}

export async function getNoticias() {
    await connDB()
    await new Promise(resolve => setTimeout(resolve, 2000)) //delay para ver a pagina de loading
    return await Noticia.find({})
}

export async function getNoticia(id) {
    await connDB()
    return await Noticia.findById(id)
}