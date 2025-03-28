'use server'
import { revalidatePath } from "next/cache";
import connectDB from "./connectDB";
import Sugestao from "@/models/sugestao";

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

export async function gravaSugestao(sugestao){
    console.log("entrou na func")
    await connDB()
    const novaSugestao = new Sugestao(sugestao)
    console.log("schema criado")
    await novaSugestao.save()
    console.log("salvo")
}

export async function getSugestoes(){
    await connDB()
    return await Sugestao.find({})
}

export async function apagarSugestao(id){
    await connDB()
    await Sugestao.findByIdAndDelete(id)
    revalidatePath('adm/sugestoes')
}