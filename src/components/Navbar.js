export default function Navbar(){
    return( <nav className="nav">
        <a href="/" className="site-title">Kenny Lindblom</a>
        <ul>
            <li className="acctive">
                <a href="/pricing">Home</a>
            </li>
            <li>
            <a href="/about">About</a>
            </li>
            <li>
                <a href="/resume">Resume</a>
            </li>
            <li>
                <a href="/contact">Contact</a>
            </li>
            <li>
                <a href="/Projects">Projects</a>
            </li>
        </ul>
    </nav>
    );
}