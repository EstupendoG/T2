import { Component } from "react";
import BarraNavegacao from "./componentes/barraNavegacao";

import HomeCadastro from "./paginas/cadastro/cadastro";
import CadastroCliente from "./paginas/cadastro/cadastroCliente";
import CadastroPet from "./paginas/cadastro/cadastroPet";
import CadastroProduto from "./paginas/cadastro/cadastroProduto";
import CadastroServico from "./paginas/cadastro/cadastroServico";

import HomeLista from "./paginas/listas/lista";
import ListaCliente from "./paginas/listas/listaClientes";
import ListaPet from "./paginas/listas/listaPets";
import ListaProduto from "./paginas/listas/listaProdutos";
import ListaServico from "./paginas/listas/listaServicos";

type state = {
    tela: string
}

export default class Roteador extends Component<{}, state>{

    constructor(props: {} | Readonly<{}>) {
        super(props)
        this.state = {
            tela: 'Listagem'
        }
        this.selecionarView = this.selecionarView.bind(this)
    }

    selecionarView(novaTela: string, evento: Event) {
        evento.preventDefault()
        console.log(novaTela);
        this.setState({
            tela: novaTela
        })
    }

    render() {
        let barraNavegacao = <BarraNavegacao seletorView={this.selecionarView} tema="#e3f2fd" botoes={['Listagem', 'Cadastros']} />
        if (this.state.tela === 'Listagem') {
            return (
                <>
                    {barraNavegacao}
                    <div className="container-sm mt-5">
                        <HomeLista tema="#e3f2fd" seletorView={this.selecionarView}/>
                    </div>
                </>
            )
        } 
        else
        if (this.state.tela === 'ListaCliente') {
            return (
                <>
                    {barraNavegacao}
                    <div className="container-sm mt-5">
                        <ListaCliente tema="e3f2fd" />
                    </div>
                </>
            )
        }
        else
        if (this.state.tela === 'ListaPet') {
            return (
                <>
                    {barraNavegacao}
                    <div className="container-sm mt-5">
                        <ListaPet tema="e3f2fd" />
                    </div>
                </>
            )
        }
        else
        if (this.state.tela === 'ListaProduto') {
            return (
                <>
                    {barraNavegacao}
                    <div className="container-sm mt-5">
                        <ListaProduto tema="e3f2fd" />
                    </div>
                </>
            )
        }
        else
        if (this.state.tela === 'ListaServico') {
            return (
                <>
                    {barraNavegacao}
                    <div className="container-sm mt-5">
                        <ListaServico tema="e3f2fd" />
                    </div>
                </>
            )
        }



        else
        if (this.state.tela === 'Cadastros') {
            return (
                <>
                    {barraNavegacao}
                    <div className="container-sm mt-5">
                        <HomeCadastro tema="#e3f2fd" seletorView={this.selecionarView} />
                    </div>
                </>
            )
        }
        else
        if (this.state.tela === 'CadastroCliente') {
            return (
                <>
                    {barraNavegacao}
                    <div className="container-sm mt-5">
                        <CadastroCliente tema="e3f2fd" />
                    </div>
                </>
            )
        }
        else
        if (this.state.tela === 'CadastroPet') {
            return (
                <>
                    {barraNavegacao}
                    <div className="container-sm mt-5">
                        <CadastroPet tema="e3f2fd" />
                    </div>
                </>
            )
        }
        else
        if (this.state.tela === 'CadastroProduto') {
            return (
                <>
                    {barraNavegacao}
                    <div className="container-sm mt-5">
                        <CadastroProduto tema="e3f2fd" />
                    </div>
                </>
            )
        }
        else
        if (this.state.tela === 'CadastroServico') {
            return (
                <>
                    {barraNavegacao}
                    <div className="container-sm mt-5">
                        <CadastroServico tema="e3f2fd" />
                    </div>
                </>
            )
        }
    }
}