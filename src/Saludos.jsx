import { React } from "react";

const Saludos = ({ nombre }) => {
    return (
        <div className="wrapper">
            <h1>
                Hola, {nombre}
            </h1>
        </div>
    );
}
export default Saludos;