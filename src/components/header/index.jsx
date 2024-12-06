import styled from 'styled-components';
import pokedexImage from '../../images/pokedex.png';
import { Link } from 'react-router-dom'
import {ThemeTogglerButton} from '../theme-toggler-button'

const Header = () => {
    return (
        <>
            <Head>
                <Div>
                    <Link to={'/'}>
                        <Image src={pokedexImage} alt="Pokedéx logo" />
                    </Link>
                    <ThemeTogglerButton/>
                </Div>
            </Head>
        </>
    )
}

const Head = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f32222;
    height: 100px;
    margin: 0;
    border-radius: 0 0 20px 20px;
`

const Div = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
`

const Image = styled.img`
    width: 200px;
`

export { Header }