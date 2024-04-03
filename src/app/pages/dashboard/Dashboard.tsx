import { Link } from "react-router-dom"; 

export const Dashboard = () => {
    return(
        <div>
            <p>Dashboard</p>
            <Link to = "/login">Login</Link>     
            {/* o link funciona como o 'a' do html, em que ira fazer as "rotas" (navegará) das paginas */}

        </div>
    );
}




// export const Button = () => {
//     return(
//         <div>
//             <button>teste de botão</button> 
//             {/* botão so funcionou dessa maneira para que possa ser usado em outros componentes */}
//         </div>
//     );
// }


// export const Teste = () => {
//     return(
//         <div>
//             <h1>Teste</h1>
//             <Button />
//         </div>
//     );
// }

