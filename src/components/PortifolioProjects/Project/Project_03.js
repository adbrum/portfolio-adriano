import React from 'react'

const Project_03 = (props) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-8 col-lg-offset-2">
                    <div className="modal-body">
                        <h2 className="text-center">Sistema Web de Monitorização de Sensores (SWMS)</h2>
                        <hr className="star-primary"/>
                        <a href="http://swms.herokuapp.com">
                            <img src={props.src} className="img-responsive img-centered"
                                 alt=""/>
                        </a>
                        <h6>*Textos e Projeto no idioma Pt-pt</h6>
                        <h6>Python/Django</h6>
                        <p>O <a href="http://swms.herokuapp.com">SWMS</a> é uma base de monitorização remota
                            de equipamentos
                            com sistemas embebidos, foi projetado para aumentar a eficiência na execução de ações em
                            inúmeras
                            áreas com a disponibilização de informação sobre a coleta de dados em sensores diversos
                            e em tempo
                            real.
                        </p>
                        <p>
                            O sistema desenvolvido possibilita a aquisição de dados dum ambiente através do
                            microcomputador Raspberry Pi. Esses dados se referem a fenômenos físicos como, por
                            exemplo,
                            temperatura e humidade. A interação do Raspberry Pi com o ambiente físico para a coleta
                            dos dados
                            desses fenômenos ocorre por meio de um sensor específico. O sensor fica conectado ao
                            Raspberry Pi
                            e os dados são enviados, via comunicação Pinos GPIO (General Purpose Input/Output), para
                            um aplicativo dedicado que armazena-os num banco de dados.</p>
                        <ul className="list-inline item-details">
                            <li>Client:
                                <strong><a
                                    href="https://www.ipbeja.pt/UnidadesOrganicas/ESTIG/Paginas/default.aspx">
                                    ESTIG - Escola Superior de Tecnologia e Gestão</a>
                                </strong>
                            </li>
                            <li>Date:
                                <strong>Setembro 2015</strong>
                            </li>
                            <li>Service:
                                <strong>Projeto final de curso
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

export default Project_03