import { Link } from "react-router-dom";
import "./HeaderItems.css";

const HeaderItems = () => {
    return (
        <section className="HeaderItems">
            <div className="MenuBox">
                <ul className="Routers">
                    <li className="RouterItem">
                        <Link to="/">
                            <span className="MenuItem">Página inicial</span>
                        </Link>
                    </li>
                    <li className="RouterItem">
                        <Link to="/about">
                            <span className="MenuItem">Sobre</span>
                        </Link>
                    </li>
                    <li className="RouterItem">
                        <Link to="/frequentQuestions">
                            <span className="MenuItem">Perguntas frequentes</span>
                        </Link>
                    </li>
                    <li className="RouterItem">
                        <Link to="/contacts">
                            <span className="MenuItem">Entre em contato</span>
                        </Link>
                    </li>
                    <li className="RouterItem">
                        <Link to="/shop">
                            <span className="MenuItem">Loja</span>
                        </Link>
                    </li>
                </ul>
            </div>
            <div>
                <div className="CartContainer">
                    <Link to="/cart">
                        <svg
                            className="CartIcon"
                            fill="#000000"
                            height="200px"
                            width="200px"
                            viewBox="0 0 902.86 902.86"
                        >
                            <svg
                                fill="#000000"
                                height="200px"
                                width="200px"
                                viewBox="0 0 902.86 902.86">
                                <g>
                                    <g>
                                        <path d="M671.504,577.829l110.485-432.609H902.86v-68H729.174L703.128,179.2L0,178.697l74.753,399.129h596.751V577.829z M685.766,247.188l-67.077,262.64H131.199L81.928,246.756L685.766,247.188z" />
                                        <path d="M578.418,825.641c59.961,0,108.743-48.783,108.743-108.744s-48.782-108.742-108.743-108.742H168.717 c-59.961,0-108.744,48.781-108.744,108.742s48.782,108.744,108.744,108.744c59.962,0,108.743-48.783,108.743-108.744 c0-14.4-2.821-28.152-7.927-40.742h208.069c-5.107,12.59-7.928,26.342-7.928,40.742 C469.675,776.858,518.457,825.641,578.418,825.641z M209.46,716.897c0,22.467-18.277,40.744-40.743,40.744 c-22.466,0-40.744-18.277-40.744-40.744c0-22.465,18.277-40.742,40.744-40.742C191.183,676.155,209.46,694.432,209.46,716.897z M619.162,716.897c0,22.467-18.277,40.744-40.743,40.744s-40.743-18.277-40.743-40.744c0-22.465,18.277-40.742,40.743-40.742 S619.162,694.432,619.162,716.897z" />
                                    </g>
                                </g>
                            </svg>
                        </svg>
                    </Link>
                </div>
                <div className="SignInContainer">
                    <Link to="/signIn">
                        <svg
                            className="SignInIcon"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="#000000"
                            height="200px"
                            width="200px"
                            version="1.1"
                            id="Layer_1"
                            viewBox="0 0 402.161 402.161"
                        >
                            <svg
                                className="SignInIcon"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="#000000"
                                height="200px"
                                width="200px"
                                version="1.1"
                                id="Layer_1"
                                viewBox="0 0 402.161 402.161"
                            >
                                <g>
                                    <g>
                                        <g>
                                            <path d="M201.08,49.778c-38.794,0-70.355,31.561-70.355,70.355c0,18.828,7.425,40.193,19.862,57.151     c14.067,19.181,32,29.745,50.493,29.745c18.494,0,36.426-10.563,50.494-29.745c12.437-16.958,19.862-38.323,19.862-57.151     C271.436,81.339,239.874,49.778,201.08,49.778z M201.08,192.029c-13.396,0-27.391-8.607-38.397-23.616     c-10.46-14.262-16.958-32.762-16.958-48.28c0-30.523,24.832-55.355,55.355-55.355s55.355,24.832,55.355,55.355     C256.436,151.824,230.372,192.029,201.08,192.029z" />
                                            <path d="M201.08,0C109.387,0,34.788,74.598,34.788,166.292c0,91.693,74.598,166.292,166.292,166.292     s166.292-74.598,166.292-166.292C367.372,74.598,292.773,0,201.08,0z M201.08,317.584c-30.099-0.001-58.171-8.839-81.763-24.052     c0.82-22.969,11.218-44.503,28.824-59.454c6.996-5.941,17.212-6.59,25.422-1.615c8.868,5.374,18.127,8.099,27.52,8.099     c9.391,0,18.647-2.724,27.511-8.095c8.201-4.97,18.39-4.345,25.353,1.555c17.619,14.93,28.076,36.526,28.895,59.512     C259.25,308.746,231.178,317.584,201.08,317.584z M296.981,283.218c-3.239-23.483-15.011-45.111-33.337-60.64     c-11.89-10.074-29.1-11.256-42.824-2.939c-12.974,7.861-26.506,7.86-39.483-0.004c-13.74-8.327-30.981-7.116-42.906,3.01     c-18.31,15.549-30.035,37.115-33.265,60.563c-33.789-27.77-55.378-69.868-55.378-116.915C49.788,82.869,117.658,15,201.08,15     c83.423,0,151.292,67.869,151.292,151.292C352.372,213.345,330.778,255.448,296.981,283.218z" />
                                            <path d="M302.806,352.372H99.354c-4.142,0-7.5,3.358-7.5,7.5c0,4.142,3.358,7.5,7.5,7.5h203.452c4.142,0,7.5-3.358,7.5-7.5     C310.307,355.73,306.948,352.372,302.806,352.372z" />
                                            <path d="M302.806,387.161H99.354c-4.142,0-7.5,3.358-7.5,7.5c0,4.142,3.358,7.5,7.5,7.5h203.452c4.142,0,7.5-3.358,7.5-7.5     C310.307,390.519,306.948,387.161,302.806,387.161z" />
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default HeaderItems;
