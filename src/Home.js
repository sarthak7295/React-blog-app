import { useState } from "react";

const Home = () => {
    //rect hook usestate
    const [name, setName] = useState('mario');

    const handleClick = () =>{
        setName('Luigi');
    }

    return (
        <div className="home">
            <h2>Sarthak's and {name} home page</h2>
            <button onClick={(e)=>handleClick(e)}>Click me</button>
        </div>
    );
}

export default Home;