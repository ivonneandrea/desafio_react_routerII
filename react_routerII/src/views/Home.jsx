import pikachuImg from "../assets/img/pokemon_logo.png";

const Home = () => {
    return (
        <section className="home">
            <h1>Bienvenido Maestro Pokemon</h1>
            <img className="pokemonImg" src={pikachuImg} alt="Pikachu image" />
        </section>
    );
};

export default Home;