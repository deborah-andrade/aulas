export const Dashboard = () => {
    return(
        <p>Dashboard</p>
    );
}

export const Button = () => {
    return(
        <div>
            <button>teste de botão</button> 
            {/* botão so funcionou dessa maneira para que possa ser usado em outros componentes */}
        </div>
    );
}


export const Teste = () => {
    return(
        <div>
            <h1>Teste</h1>
            <Button />
        </div>
    );
}

