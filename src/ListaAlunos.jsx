function ListaAlunos(){
    const alunos=["Pedro", "Maria", "Joana", "Carlos", "Julia"]

    return (
        <div>
            <h2>Lista de Alunos</h2>
            <ul>
                {alunos.map((alunos, index) => (
                    <li key={index}>{alunos}</li>
                ))}
            </ul>
        </div>
    )
}

export default ListaAlunos