/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";

type props = {
    tema: string
}

export default class ListaCliente extends Component<props>{
    render() {
        let tema = this.props.tema
        return (
            <>
                <h1>👥 Listagem de todos os Clientes</h1>
                <br />
                <div className="accordion accordion-flush" id="accordionPanelsStayOpenExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                            👤 Cliente 1
                        </button>
                        </h2>
                        <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                        <div className="accordion-body">
                            <div className="row">
                                <div className="col">
                                    <h5>Nome Social</h5>
                                    <p>Lorem ipsum dolor sit.</p>
                                </div>
                                <div className="col d-flex flex-column">
                                    <h5>CPF</h5>
                                    <span>Emitido em: 12/12/1234</span>
                                    <span>123.123.123-12</span>
                                </div>
                                <div className="col">
                                    <h5>Email</h5>
                                    <p>clienteexemplo@email.com</p>
                                </div>
                            </div>

                            <hr />

                            <div className="row">
                                <div className="col">
                                    <h5>RG's</h5>
                                    <table className="table table-hover table-borderless">
                                        <thead>
                                            <tr>
                                            <th scope="col">RG</th>
                                            <th scope="col">Data de Emissão</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>12.123.123-1</td>
                                                <td>12/12/1234</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                
                                <div className="col">
                                    <h5>Telefones</h5>
                                    <table className="table table-hover table-borderless">
                                        <thead>
                                            <tr>
                                            <th scope="col">DDD</th>
                                            <th scope="col">Número</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>12</td>
                                                <td>12345678</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                            </div>

                            <hr />

                            <h5>Pets</h5>
                            <table className="table table-hover table-striped table-borderless">
                                <thead>
                                    <tr>
                                        <th scope="col">ID</th>
                                        <th scope="col">Nome</th>
                                        <th scope="col">Tipo</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td scope="row">1</td>
                                        <td>Pimenta</td>
                                        <td>Gato</td>
                                        <td>Siamês</td>
                                    </tr>
                                </tbody>
                            </table>

                            <br />

                            <div className="row">
                                <div className="col">
                                    <button className="btn btn-outline-warning w-100"><i className="bi bi-pencil-fill"></i> Atualizar </button>
                                </div>
                                
                                <div className="col">
                                    <button className="btn btn-outline-danger w-100"><i className="bi bi-trash-fill"></i> Remover </button>
                                    
                                </div>

                            </div>
                            

                        </div>
                        </div>
                    </div>
                    
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                            👤 Cliente 2
                        </button>
                        </h2>
                        <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                        <div className="accordion-body">
                            <div className="row">
                                <div className="col">
                                    <h6>Nome Social</h6>
                                    <p>Lorem ipsum dolor sit.</p>
                                </div>
                                <div className="col d-flex flex-column">
                                    <h6>CPF</h6>
                                    <span>Emitido em: 12/12/1234</span>
                                    <span>123.123.123-12</span>
                                </div>
                                <div className="col">
                                    <h6>Email</h6>
                                    <p>clienteexemplo@email.com</p>
                                </div>
                            </div>

                            <hr />

                            <div className="row">
                                <div className="col">
                                    <h5>RG's</h5>
                                    <table className="table table-hover table-borderless">
                                        <thead>
                                            <tr>
                                            <th scope="col">RG</th>
                                            <th scope="col">Data de Emissão</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>12.123.123-1</td>
                                                <td>12/12/1234</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                
                                <div className="col">
                                    <h5>Telefones</h5>
                                    <table className="table table-hover table-borderless">
                                        <thead>
                                            <tr>
                                            <th scope="col">DDD</th>
                                            <th scope="col">Número</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>12</td>
                                                <td>12345678</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                            </div>

                            <hr />

                            <h5>Pets</h5>
                            <table className="table table-hover table-striped table-borderless">
                                <thead>
                                    <tr>
                                        <th scope="col">ID</th>
                                        <th scope="col">Nome</th>
                                        <th scope="col">Tipo</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td scope="row">1</td>
                                        <td>Pimenta</td>
                                        <td>Gato</td>
                                        <td>Siamês</td>
                                    </tr>
                                </tbody>
                            </table>

                            <br />

                            <div className="row">
                                <div className="col">
                                    <button className="btn btn-outline-warning w-100"><i className="bi bi-pencil-fill"></i> Atualizar </button>
                                </div>
                                
                                <div className="col">
                                    <button className="btn btn-outline-danger w-100"><i className="bi bi-trash-fill"></i> Remover </button>
                                    
                                </div>

                            </div>
                            

                        </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}