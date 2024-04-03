import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";




export const Login = () => {
    // inputs e botão de entrar
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');   //vai servir para guardar os valores do input

    const handleEntrar = () =>{
        console.log(email) //assim podera recuperar os valores que o usuario esta digitando nos inputs
        console.log(password)
    }

    useEffect(() => {
        console.log('useEffect executado');
        if(window.confirm('Você é Mulher?')){ //serve para que so apareça uma vez a pergunta
            console.log('Mulher')
        }else{
            console.log('Homem')
        }
    }, []);

    useEffect(() => { //essa função é executada toda vez que o email e a senha são alterados
        console.log(email) 
    }, [email]);

    useEffect(() => { //essa função é executada toda vez que o email e a senha são alterados
        console.log(password)
    },[password]);
    //

    // botão para voltar para a pagina inicial
    const navigate = useNavigate();
        const handleClick = () => {
            navigate('./pagina-inicial')
        }
    
        
    return(
        <div>
            <form action="">

                <label>
                    <span>Email</span>
                    <input value={email} onChange={ e => setEmail(e.target.value)}/>  
                    {/* Serve para salvar o email no state  */}
                </label>

                <label>
                    <span>Senha</span>
                    <input type="password" value={password} onChange={ e => setPassword(e.target.value)}/>
                </label>

                <button type="button" onClick={handleEntrar}> Entrar </button>
                {/* usando type button para que não der um um evento de submite no formulario */}

            </form>
            <br />
            <button onClick={handleClick}>Voltar</button>
        </div>


    );
}

