import { Component } from "react";

type props = {
    tema: string
    seletorView: (tela: string, e: any) => void
}

export default class HomeCadastro extends Component<props> {

    render() {
        return(
            <>
                <h1>Cadastros</h1>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item" 
                        onClick={(e) => this.props.seletorView('CadastroCliente', e)}
                        style={{ cursor: 'pointer' }}>
                            👤 Cadastro de Cliente
                    </li>
                    <li className="list-group-item" 
                        onClick={(e) => this.props.seletorView('CadastroPet', e)}
                        style={{ cursor: 'pointer' }}>
                            🐱 Cadastro de Pet
                    </li>
                    <li className="list-group-item" 
                        onClick={(e) => this.props.seletorView('CadastroProduto', e)}
                        style={{ cursor: 'pointer' }}>
                            📦 Cadastro de Produto
                    </li>
                    <li className="list-group-item" 
                        onClick={(e) => this.props.seletorView('CadastroServico', e)}
                        style={{ cursor: 'pointer' }}>
                            🛠️ Cadastro de Serviço
                    </li>
                </ul>
            </>
        )
    }

}