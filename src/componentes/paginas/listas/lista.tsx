import { Component } from "react";

type props = {
    tema: string
    seletorView: (tela: string, e: any) => void
}

export default class HomeLista extends Component<props> {

    render() {
        return(
            <>
                <h1>Listagem</h1>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item" 
                        onClick={(e) => this.props.seletorView('ListaCliente', e)}
                        style={{ cursor: 'pointer' }}>
                            👤 Listar todos os Clientes
                    </li>
                    <li className="list-group-item" 
                        onClick={(e) => this.props.seletorView('ListaPet', e)}
                        style={{ cursor: 'pointer' }}>
                            🐱 Listar todos os Pets
                    </li>
                    <li className="list-group-item" 
                        onClick={(e) => this.props.seletorView('ListaProduto', e)}
                        style={{ cursor: 'pointer' }}>
                            📦 Listar todos os Produtos
                    </li>
                    <li className="list-group-item" 
                        onClick={(e) => this.props.seletorView('ListaServico', e)}
                        style={{ cursor: 'pointer' }}>
                            🛠️ Listar todos os Serviços
                    </li>
                </ul>
            </>
        )
    }

}