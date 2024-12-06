import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components';
import { useContext } from "react"
import { ThemeContext } from '../../contexts/theme-context'

async function getPosts(name) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    return await response.json()
}

const PokeDetails = () => {
    const [poke, setPoke] = useState({});

    const { name } = useParams()

    useEffect(() => {
        async function fetchData() {
            const data = await getPosts(name)
            console.log(data)
            setPoke(data)
        }

        fetchData()
    }, [name])

    const { theme } = useContext(ThemeContext)

    return (
        <Section theme={theme}>
            {poke.name && (
                <>
                    <Info>
                        <Div>
                            <Image src={poke.sprites.front_default} alt={poke.name} />
                            <H1 theme={theme}>{poke.name}</H1>
                        </Div>
                        <Ul theme={theme}>
                            <h2>Type</h2>
                            {poke.types.map((type, index) =>
                                <Type key={index}>
                                    <p>{type.type.name}</p>
                                </Type>
                            )}
                        </Ul>
                        <Ul theme={theme}>
                            <h2>Abilities</h2>
                            {poke.abilities.map((abilitie, index) =>
                                <Type key={index}>
                                    <p>{abilitie.ability.name}</p>
                                </Type>
                            )}
                        </Ul>
                    </Info>
                    <H2 theme={theme}>Moves</H2>
                    <Moves>
                        {poke.moves.map((move, index) =>
                            <Move key={index}>
                                <p>{move.move.name}</p>
                            </Move>
                        )}
                    </Moves>
                </>
            )}
        </Section>
    );
};

const Section = styled.section`
    background-color: ${(props) => props.theme.background};
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 30px;
    border-radius: 10px;
`

const Info = styled.div`
    display: flex;
    align-items: center;
    height: 300px;
    flex-wrap: wrap;
    gap: 50px;

    @media (max-width: 768px) {
        margin-bottom: 70px;
        gap: 20px;
    }
`

const Div = styled.div`
    display: flex;
    align-items: center;
    margin-right: 100px;
`

const Image = styled.img`
    width: 200px;
`
const H1 = styled.h1`
    text-transform: capitalize;
    color: ${(props) => props.theme.color};
`

const Ul = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: ${(props) => props.theme.color};

    h2:first-child {
        margin-bottom: 10px;
    }
`

const Type = styled.li`
    margin-bottom: 10px;
    padding: 5px;
    border: 1px solid;
    border-color: ${(props) => props.theme.color};
    border-radius: 5px;
    color: ${(props) => props.theme.color};
`

const H2 = styled.h2`
    margin: 0 0 30px 50px;
    text-transform: uppercase;
    color: ${(props) => props.theme.color};
`

const Moves = styled.ul`
    margin: 10px;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
`

const Move = styled.li`
    background-color: #989898;
    padding: 5px;
    border-radius: 5px;
`

export { PokeDetails }