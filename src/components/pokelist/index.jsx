import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'
import { useContext } from "react"
import { ThemeContext } from '../../contexts/theme-context'

const PokeList = () => {
    const [pokes, setPokes] = useState([]);
    const [pokeNumber, setPokeNumber] = useState(10);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${pokeNumber}`);
            const data = await response.json();

            const detailedPokes = await Promise.all(
                data.results.map(async (poke) => {
                    const detailsResponse = await fetch(poke.url);
                    const details = await detailsResponse.json();
                    return {
                        name: poke.name,
                        image: details.sprites.front_default
                    };
                })
            );

            setPokes(detailedPokes);
        }

        fetchData();
    }, [pokeNumber]);

    const { theme } = useContext(ThemeContext)

    return (
        <Div>
            <Section theme={theme}>
                {pokes.map((poke, index) => (
                    <Info key={index}>
                        <Link to={`/${poke.name}`}>
                            <Image src={poke.image} alt={poke.name} />
                            <H2 theme={theme}>{poke.name}</H2>
                        </Link>
                    </Info>
                ))}
            </Section>
            <Button onClick={() => setPokeNumber((prev) => prev + 10)}>Carregar Mais</Button>
        </Div >
    );
};

const Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 30px;
`

const Button = styled.button`
    font-family: "Titillium Web", sans-serif;
    margin-top: 10px;
    background-color: #f32222;
    border-radius: 10px;
    width: 110px;
    height: 50px;
    border: none;
    color: #fff;

    &:hover {
        cursor: pointer;
        background-color: #fff;
        border: 2px solid #f32222;
        color: #000;
    }
`

const Section = styled.section`
    background-color: ${(props) => props.theme.background};
    border-radius: 10px;
    padding: 20px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
`;

const Info = styled.div`
    width: 200px;
    text-align: center;
    border-radius: 10px;

    &:hover {
        cursor: pointer;
        background-color: #15109f7a;
        color: #fff;
    }
`;

const Image = styled.img`
    width: 200px;
`;

const H2 = styled.h2`
    color: ${(props) => props.theme.color};
    text-transform: capitalize;
`

export { PokeList };
