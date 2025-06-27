import { Component, useState } from "react";

type props = {
    tema: string,
}

type State = {
    camposRg:  number[],
    camposTel: number[]
}

export default class cadastroCliente extends Component<props, State> {
    state: State = {
        camposRg : [0],
        camposTel: [0]
    };

    adicionarCampoRg = () => {
        this.setState((prevState) => ({
        camposRg: [...prevState.camposRg, prevState.camposRg.length],
        }));
    };

    adicionarCampoTel = () => {
        this.setState((prevState) => ({
        camposTel: [...prevState.camposTel, prevState.camposTel.length],
        }));
    };





    render() {
        let tema = this.props.tema
        return (
            <>
                <h1>👤 Cadastro de Cliente</h1>
                <br />
                <form>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Nome" aria-label="Nome" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Nome social" aria-label="Nome social" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1" style={{ background: tema }}>@</span>
                        <input type="email" className="form-control" placeholder="E-mail" aria-label="E-mail" aria-describedby="basic-addon1" />
                    </div>
                    <div className="row">
                        <div className="col-8">
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Número de CPF" aria-label="Número de CPF" aria-describedby="basic-addon1" />
                            </div>
                        </div>

                        <div className="col-4">
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Data de Emissão"
                                onFocus={(e) => e.target.type = 'date'}
                                onBlur={(e) => e.target.type === 'date' && !e.target.value && (e.target.type = 'text')} 
                                />
                            </div>
                        </div>
                    </div>



                    <div className="input-group mb-3">
                        <button className="btn btn-outline-success w-100" type="button" style={{ background: tema }} onClick={this.adicionarCampoRg} > Adicionar RG </button>
                    </div>

                    {this.state.camposRg.map((_, index) => (
                    
                        <div className="row" key={index}>
                            <div className="col-8">
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Número do RG" aria-label="Número do RG" aria-describedby="basic-addon1" />
                                </div>
                            </div>

                            <div className="col-4">
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Data de Emissão"
                                    onFocus={(e) => e.target.type = 'date'}
                                    onBlur={(e) => e.target.type === 'date' && !e.target.value && (e.target.type = 'text')} />
                                </div>
                            </div>
                        </div>

                    ))}

                    <br />

                    <div className="input-group mb-3">
                        <button className="btn btn-outline-success w-100" type="button" style={{ background: tema }} onClick={this.adicionarCampoTel} > Adicionar Telefone </button>
                    </div>
                    
                    
                    {this.state.camposTel.map((_, index) => (
                        <div className="row" key={index}>
                            <div className="col-4">
                                <div className="input-group mb-3">
                                    <input type="number" className="form-control" placeholder="DDD do Telefone" aria-label="DDD do Telefone" aria-describedby="basic-addon1" />
                                </div>
                            </div>

                            <div className="col-8">
                                <div className="input-group mb-3">
                                    <input type="number" className="form-control" placeholder="Número de Telefone"/>
                                </div>
                            </div>
                        </div>
                    ))}

                    <br />

                    <div className="input-group mb-3">
                        <button className="btn btn-outline-secondary" type="button" style={{ background: tema }}>Cadastrar</button>
                    </div>
                </form>
            </>
        )
    }
}