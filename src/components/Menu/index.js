import React from 'react';
import Logo from '../../assets/images/Logo.png'
import { Link } from 'react-router-dom';
import './Menu.css';
import Button from '../Button/index'
// import ButtonLink from './components/ButtonLink';


function Menu(){
    return (
        <nav className='Menu'>
            {/* eslint-disable-next-line */}
            <a to='/'>
            <img className='Logo' src={Logo} alt='MingauFlix logo'></img>
            </a>
            <Button as={Link} className='ButtonLink' to='/cadastro/video'>
            Novo Vídeo
            </Button>
        </nav>
    )
}

export default Menu;