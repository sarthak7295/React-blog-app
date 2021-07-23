const Navbar = () => {
    return(
        <nav className="navbar">
            <h1>Sarthak's Blog</h1>
            <div className="links">
                <a href="/">Home</a>

                {/* style = {{
                    color : "white",
                    backgroundColor: '#f1356d',
                    borderRadius: "8px"
                }} */}
                <a href="/create" >New Blog</a>
            </div>
        </nav>
    );
}

export default Navbar;