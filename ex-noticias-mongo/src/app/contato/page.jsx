'use client'
import { useState } from "react"
import { gravaSugestao } from '@/lib/sugestoesDB'
import xss from 'xss'

export default function Contato(){
    const [enviado, setEnviado] = useState(false)
    const [inputNome, setInputNome] = useState('')
    const [inputTelefone, setInputTelefone] = useState('')
    const [inputEmail, setInputEmail] = useState('')
    const [inputSugestao, setInputSugestao] = useState('')

    
    const handleInputNameChange = e => {
        setInputNome(e.target.value)
    }
    const handleInputTelefoneChange = e => {
        setInputTelefone(e.target.value)
    }
    const handleInputEmailChange = e => {
        setInputEmail(e.target.value)
    }
    const handleInputSugestaoChange = e => {
        setInputSugestao(e.target.value)
    }
    const enviar = () => {
        if(inputSugestao){
            gravaSugestao({nome: xss(inputNome) || 'Anônimo', telefone: xss(inputTelefone), email: xss(inputEmail), sugestao: xss(inputSugestao)})
            setEnviado(true)
        }
        else{
            alert("Digite a sugestao!")
        }
    }
    const resetar = () => {
        setEnviado(false)
        setInputNome('')
        setInputTelefone('')
        setInputEmail('')
        setInputSugestao('')
    }
    return(
        <div>
            <h1>Página de contato</h1>
            <p>Sem contatinhos &#x1F4AA;</p>
            {enviado ? <div>
                <p> {inputNome || 'Anônimo'}, obrigado pela sugestão!</p>
                <button onClick={resetar}>Enviar outra sugestão</button>
            </div> : <p>nao tem nada</p>}
            <form onSubmit={(e)=> e.preventDefault()}>
                <p><label>Nome: </label><input type="text" size="35" value={inputNome} onChange={handleInputNameChange}/></p>
                <p><label>Telefone: </label><input type="tel" size="35" value={inputTelefone} onChange={handleInputTelefoneChange}/></p>
                <p><label>E-mail: </label><input type="text" size="35" value={inputEmail} onChange={handleInputEmailChange}/></p>
                <p><textarea rows="5" cols="35" placeholder="Diga uma sugestão sugerida" value={inputSugestao} onChange={handleInputSugestaoChange}/></p>
                <button onClick={enviar}>Enviar</button>
            </form>
            
        </div>
    )
}