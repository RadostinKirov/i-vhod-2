import Image from "next/image";

const Header = () => {

    return (
        <header className="main-header clearfix" role="header">
            <div className="header-wrapper">
                <div className="logo">
                    <a href="#">
                        <Image
                            src="/logo/logo_transparent_3.png"
                            width={160}
                            height={80}
                        />
                    </a>
                </div>
                <a href="#menu" className="menu-link">
                    <i className="fa fa-bars" />
                </a>
                <nav id="menu" className="main-nav" role="navigation">
                    <ul className="main-menu">
                        <li>
                            <a href="#section1">Начало</a>
                        </li>
                        <li 
                        //</ul>className="has-submenu"
                        >
                            <a href="#section2">Каса</a>
                        </li>
                        <li>
                            <a href="#section4">Дейности</a>
                        </li>
                        <li>
                            <a href="#section6">Съобщения</a>
                        </li>
                        <li>
                            <a href="#section6">Контакти</a>
                        </li>

                    </ul>
                </nav>
            </div>
        </header>

    )
}

export default Header;