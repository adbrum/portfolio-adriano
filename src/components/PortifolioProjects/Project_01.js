import React from 'react'

const Project_01 = (props) => {

        return(
            <div className="row">
                <div className="col-lg-8 col-lg-offset-2" id="portfolioModal3">
                    <div className="modal-body">
                        <h2>Eventex - O maior encontro haker do mundo!</h2>
                        <hr className="star-primary"/>
                        <a href="https://eventex-adrianoregis.herokuapp.com/">
                            <img src={props.src}
                                 className="img-responsive img-centered"
                                 alt=""/>
                        </a>
                        <h6>*Textos e Projeto no idioma Pt-br</h6>
                        <p>O Sistema de gestão de eventos <a
                            href="https://eventex-adrianoregis.herokuapp.com/">Eventex</a>,
                            foi desenvolvido no decorrer do curso
                            <a href="http://welcometothedjango.com.br/">Welcome to the Django (WTTD)</a>, ministrado
                            pelo mestre <a href="http://henriquebastos.net/">Henrique Bastos</a>.</p>
                        <ul className="list-inline item-details">
                            <li>Client:
                                <strong><a href="http://welcometothedjango.com.br/">WTTD</a>
                                </strong>
                            </li>
                            <li>Date:
                                <strong>Fevereiro 2016</strong>
                            </li>
                            <li>Service:
                                <strong>Desenvolvimento de software</strong>
                            </li>
                        </ul>
                        <a type="button" className="btn btn-default" data-dismiss="modal">
                            <i className="fa fa-times"/> retornar
                        </a>
                    </div>
                </div>
            </div>
        )

}

export default Project_01