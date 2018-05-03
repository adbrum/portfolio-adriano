import React from 'react'

const Project_01 = (props) => {

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-8 col-lg-offset-2">
                    <div className="modal-body">
                        <h2 className="text-center">Kettclub Administração</h2>
                        <hr className="star-primary"/>
                        <a href="https://kettclub.herokuapp.com/">
                            <img src={props.src} className="img-responsive img-centered" alt=""/>
                        </a>
                        <h6>*Textos e Projeto no idioma PT-pt</h6>
                        <h6>Python/Django</h6>
                        <p className="text-left">O Sistema de gestão de ginásio <a
                            href="https://kettclub.herokuapp.com/">Kettclub</a>,
                            gerencia todos os dados dos atletas de maneira fácil. Agrega também:
                        </p>
                        <ul className="text-left">
                            <li>Plano de treino</li>
                            <li>Planos de nutrição</li>
                            <li>Agendamento</li>
                            <li>Controle de presença</li>
                            <h6 className="text-left">Obs.: Módulos ainda em fase de desenvolvimento.</h6>
                        </ul>
                        <p></p>
                        <p>Para aceder ao sistema:</p>
                        <p>username: admin</p>
                        <p>password: admin</p>
                        <ul className="list-inline item-details">
                            <li>Client:
                                <strong><a href="https://kettclub.herokuapp.com/">Kettclub</a>
                                </strong>
                            </li>
                            <li>Date:
                                <strong>Fevereiro 2016</strong>
                            </li>
                            <li>Service:
                                <strong>Desenvolvimento de software</strong>
                            </li>
                        </ul>
                        <button type="button" onClick={props.onClickHandle} className="btn btn-default" data-dismiss="modal">
                            <i className="fa fa-times"/> retornar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project_01