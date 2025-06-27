/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";

type props = {
    tema: string
}

export default class ListaPet extends Component<props>{
    render() {
        let tema = this.props.tema
        return (
            <>
                <h1>🐱 Listagem de todos os Pets</h1>
                <br />
                
                <table className="table table-hover table-striped table-borderless">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Nome</th>
                            <th scope="col">Tipo</th>
                            <th scope="col">Raça</th>
                            <th scope="col">Gênero</th>
                            <th scope="col">Dono</th>
                            <th scope="col">Opções</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td scope="row">1</td>
                            <td>Pimenta</td>
                            <td>Gato</td>
                            <td>Siamês</td>
                            <td>Fêmea</td>
                            <td>123.123.123-12</td>
                            <td style={{width:'10px'}}>
                                <div className="d-flex gap-1">
                                    <button className="btn btn-outline-warning">
                                        <i className="bi bi-pencil-fill"></i>
                                    </button>

                                    <button className="btn btn-outline-danger">
                                        <i className="bi bi-trash-fill"></i>
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                            

            </>
        )
    }
}