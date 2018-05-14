import React from 'react'

const Project_01 = (props) => {

    return (
        <div className="row">
            <div className="col-lg-8 col-lg-offset-2" id="portfolioModal5">
                <div className="modal-body">
                    <h2 className=" text-center">EKMembers</h2>
                    <hr className="star-primary"/>
                    <a href="http://exclusivkey.com/">
                        <img src={props.src}
                             className="img-responsive img-centered"
                             alt=""/>
                    </a>
                    <h6>*Textos e Projeto no idioma Pt-pt</h6>
                    <h6>ReactJS</h6>
                    <p>O Sistema de gestão de sócios do Futebol Clube do Porto</p>
                        <a href="http://exclusivkey.com/"> EKMembers</a>,
                        foi desenvolvido na empresa
                        <a href="http://exclusivkey.com/"> ExclusivKey</a>
                    <ul className="list-inline item-details">
                        <li>Client:
                            <strong><a href="http://exclusivkey.com/">ExclusivKey</a>
                            </strong>
                        </li>
                        <li>Date:
                            <strong>2016...</strong>
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