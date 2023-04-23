const { default: Footer } = require("./footer/footer")
const { default: Header } = require("./header/header")


const Layout = (props) => {
    return (
        <div className="page-wrapper">
            <Header />
            <main>{props.children}</main>
            <Footer />
        </div>
    )
}

export default Layout;