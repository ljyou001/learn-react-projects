import reactLogo from '../assets/react.svg'

export default function Navbar(){
    return (
        <nav>
            <img src={reactLogo} className="logo react nav--icon" alt="React logo" />
            <h3 className="nav--logo_text">ReactFacts</h3>
            <h4 className="nav--title">Course 1</h4>
        </nav>
    )
}