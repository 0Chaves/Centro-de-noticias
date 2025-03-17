'use client'
import { useState } from "react"

export default function Contato(){
    const [enviado, setEnviado] = useState(false)
    const [inputNome, setInputNome] = useState('')

    
    const handleInputNameChange = e => {
        setInputNome(e.target.value)
    }
    const enviar = () => {
        if(inputNome){
            setEnviado(true)
        }
    }
    const resetar = () => {
        setEnviado(false)
        setInputNome('')
    }
    return(
        <div>
            <h1>Página de contato</h1>
            <p>Sem contatinhos &#x1F4AA;</p>
            {enviado ? <div>
                <p> {inputNome}, obrigado pela sugestão!</p>
                <button onClick={resetar}>Enviar outra sugestão</button>
            </div> : <p>nao tem nada</p>}
            <form onSubmit={(e)=> e.preventDefault()}>
                <p><label>Nome: </label><input type="text" size="35" value={inputNome} onChange={handleInputNameChange}/></p>
                <p><label>Telefone: </label><input type="tel" size="35"  /></p>
                <p><label>E-mail: </label><input type="text" size="35"  /></p>
                <p><textarea rows="5" cols="35" defaultValue="Fala pra mim..."/></p>
                <button onClick={enviar}>Enviar</button>
            </form>
            
        </div>
    )
}