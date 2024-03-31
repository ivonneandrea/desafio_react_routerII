import faceNotFound from "../assets/img/facetriste.jpeg";

const NotFound = () => {
    return (
        <section className="notFound">
            <h3>La página que buscas no existe</h3>
            <img
                className="notFoundImg"
                src={faceNotFound}
                alt="Sad face"
            />
        </section>
    );
};

export default NotFound;