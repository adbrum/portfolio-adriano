import React from 'react'

const Project_01 = (props) => {

    return (
        <div className="row">
            <div className="col-lg-8 col-lg-offset-2" id="portfolioModal5">
                <div className="modal-body">
                    <h2 className=" text-center"> Bora Ajudar</h2>
                    <hr className="star-primary"/>
                    <a href="https://bora-ajudar-3fc2c.firebaseapp.com/">
                        <img src={props.src}
                             className="img-responsive img-centered"
                             alt=""/>
                    </a>
                    <h6>*Textos e Projeto no idioma Pt-br</h6>
                    <h6>ReactJS</h6>
                    <p>O Sistema de gestão de campanhas
                        <a href="https://bora-ajudar-3fc2c.firebaseapp.com//"> Bora Ajudar</a>,
                        foi desenvolvido no decorrer do Hands-on ReactJS do
                        <a href="https://www.devpleno.com/"> DevePleno</a>, ministrado
                        por <a href="https://www.devpleno.com/">Túlio Faria</a>.</p>
                    <ul className="list-inline item-details">
                        <li>Client:
                            <strong><a href="http://welcometothedjango.com.br/">DevPleno</a>
                            </strong>
                        </li>
                        <li>Date:
                            <strong>Março 2018</strong>
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
    )
}

export default Project_01