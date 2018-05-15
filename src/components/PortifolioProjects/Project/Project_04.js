import React from 'react'

const Project_04 = (props) => {

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-8 col-lg-offset-2">
                    <div className="modal-body">
                        <h2 className="text-center">Gestvisitor - Access control system</h2>
                        <hr className="star-primary"/>
                        <p>
                            <div className="video-container">
                                <param name="https://www.youtube.com/v/jaRZWggD4yk"/>
                                <param name="allowFullScreen" value="true"/>
                                <param name="allowScriptAccess" value="always"/>
                                <embed src="https://www.youtube.com/v/jaRZWggD4yk"
                                       type="application/x-shockwave-flash" allowfullscreen="true"
                                       allowScriptAccess="always" width="640" height="390">
                                </embed>
                            </div>
                        </p>
                        <h6>*Textos e Projeto no idioma Pt-pt</h6>
                        <h6>Python/Django</h6>
                        <p>
                            Sistema desenvolvido por mim, em contexto de estágio profissional na empresa
                            <a href="https://www.facebook.com/exclusivkey/">Exclusivkey Portugal</a>.
                        </p>
                        <ul className="list-inline item-details">
                            <li>Client:
                                <strong><a href="https://www.facebook.com/exclusivkey/">Exclusivkey Portugal</a>
                                </strong>
                            </li>
                            <li>Date:
                                <strong>Abril 2015</strong>
                            </li>
                            <li>Service:
                                <strong>Engenharia de software
                                </strong>
                            </li>
                        </ul>
                        <button type="button" onClick={props.onClickHandle} className="btn btn-default" data-dismiss="modal">
                            <i className="fa fa-arrow-circle-left"/> retornar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project_04