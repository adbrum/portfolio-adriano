import React, {Component} from 'react'


class About extends Component {
    render() {
        return (
            <div>
                <hr id="about"/>
                <section className="success">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h2>Sobre</h2>
                                <hr className="star-light"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-lg-offset-2">
                                <p> Apaixonado por desenvolvimento de software!</p>

                                <p>Atua nas áreas de Tecnologia da Informação avaliando e executando o
                                    desenvolvimento de novos programas, utilizando Software Livre e Métodos Ágeis como
                                    ferramentas para a identificação de problemas técnicos e/ou administrativos,
                                    visando com isto alcançar soluções eficazes.</p>
                            </div>
                            <div className="col-lg-4">
                                <p>Experiência profissional em Python/Django, Reactjs, Angularjs.</p>

                                <p>Conhecimento e experiências acadêmicas nas linguagens de programação C#, Java, ASP
                                    .NET
                                    MVC,
                                    PHP.</p>

                                <p>SGBDs - PostgreSQL, MySQL, SQL Server, FireBird.</p>

                                <p>Administração de redes de computadores.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default About