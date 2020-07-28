import React from 'react';
import Logo from '../../assets/images/Logo.png'
import './Menu.css';
import Button from '../Button/index'
// import ButtonLink from './components/ButtonLink';


function Menu(){
    return (
        <nav className='Menu'>
            <a href='/'>
            <img className='Logo' src={Logo} alt='MingauFlix logo'></img>
            </a>
            <Button as='a' className='ButtonLink' href='/'>
            Novo Vídeo
            </Button>
        </nav>
    )
}

export default Menu;