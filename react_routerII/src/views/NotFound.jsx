import pikachuNotFound from "../assets/img/facetriste.jpeg";

const NotFound = () => {
    return (
        <section className="notFound">
            <h3>La página que buscas no existe</h3>
            <img
                className="notFoundImg"
                src={pikachuNotFound}
                alt="Sad Pikachu gif"
            />
        </section>
    );
};

export default NotFound;