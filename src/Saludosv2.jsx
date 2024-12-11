import { React } from "react";

const Saludosv2 = ({nombre = 'Usuario'}) => {

    return (
        <div className="saludosv2" style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>   
            <h1 style={{
                fontSize: '1.8rem',
                fontWeight: 'bold',
                color: '#2563eb'
            }}>
                Saludos {nombre}!!
            </h1>
        </div>
    );
};
export default Saludosv2;