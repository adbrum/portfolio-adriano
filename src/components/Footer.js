import React from 'react'

const Footer = (props) => {
    return(
        <footer className="text-center">
            <div className="footer-above">
                <div className="container">
                    <div className="row">
                        <div className="footer-col col-md-4">
                            <h3>Localização</h3>

                            <p>Beja<br />Portugal</p>
                        </div>
                        <div className="footer-col col-md-4">
                            <h3>Redes sociais</h3>
                            <ul className="list-inline">
                                <li>
                                    <a href="https://www.facebook.com/adbrumvidal" className="btn-social btn-outline">
                                        <i                                        className="fa fa-fw fa-facebook"/></a>
                                </li>
                                <li>
                                    <a href="https://plus.google.com/+AdrianoRegisVidal"
                                       className="btn-social btn-outline">
                                        <i                                        className="fa fa-fw fa-google-plus"/></a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/adbrumvidal" className="btn-social btn-outline">
                                        <i                                        className="fa fa-fw fa-twitter"/></a>
                                </li>
                                <li>
                                    <a href="https://pt.linkedin.com/in/adrianoregisvidal"
                                       className="btn-social btn-outline">
                                        <i                                        className="fa fa-fw fa-linkedin"/></a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-col col-md-4">
                            <h3>Contatos</h3>

                            <p>adriano.regis.vidal@outlook.com</p>

                            <p>+351 966080448</p>

                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-below">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            Copyright &copy; Adriano Regis 2016
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer