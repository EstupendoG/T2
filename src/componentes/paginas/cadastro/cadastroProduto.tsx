import { Component } from "react";

type props = {
    tema: string,
}


export default class CadastroProduto extends Component<props> {

    render() {
        let tema = this.props.tema
        return (
            <>
                <h1>📦 Cadastro de Produto</h1>
                <br />
                <form>
                    <div className="row">
                        <div className="col-8">
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Nome do Produto" aria-label="Nome do Produto" aria-describedby="basic-addon1" />
                            </div>
                        </div>

                        <div className="col-4">
                            <div className="input-group mb-3">
                                <span className="input-group-text">$</span>
                                <input type="number" className="form-control" aria-label="Amount (to the nearest dollar)"/>
                            </div>
                        </div>
                    </div>
                    
                    <div className="input-group mb-3">
                        <button className="btn btn-outline-secondary" type="button" style={{ background: tema }}>Cadastrar</button>
                    </div>

                </form>
            </>
        )
    }
}