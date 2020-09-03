import React, {useState, useEffect} from 'react';

// MAS INFORMACIÓN DE USE EFFECT
// https://es.reactjs.org/docs/hooks-effect.html
export default function Home() {

    const [contador, setContador] = useState(0);

    console.log("fuera de useeffect")

    useEffect(() => {

        console.log("se ejecuta luego de cada renderizado")
    });

    useEffect(() => {

        console.log("se ejecuta sólo una vez")
    }, []);

    useEffect(() => {

        console.log("se ejecuta si hubo un cambio en el state contador ")
    }, [contador]);

    return (
        <div>
            <main>
                <h1>
                    Contador: {contador}
                </h1>
                <button
                    onClick={() => {
                        setContador(contador + 1)
                    }}>
                    incrementar contador
                </button>
                <div>Mirar la consola</div>
            </main>
        </div>
    )
}
