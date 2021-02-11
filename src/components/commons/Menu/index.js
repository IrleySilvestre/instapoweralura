import React from 'react'
import { Logo } from '../../../theme/logo/Logo'
import { MenuWrapper } from './styles/MenuWrapper'

const links = [
    {
        texto: 'Home',
        url: '/'
    },
    {
        texto: 'Perguntas frequentes',
        url: '/faq'
    },
    {
        texto: 'Sobre',
        url: '/sobre'
    }
]

export default function Menu() {
    return (
        <MenuWrapper>
            <MenuWrapper.LeftSide>
                <Logo />
            </MenuWrapper.LeftSide>
            <MenuWrapper.CentralSide>
                {links.map((link) => (
                    <li key={link.url}>
                        <a href={link.url}>
                            {link.texto}
                        </a>
                    </li>
                ))}
            </MenuWrapper.CentralSide>

            <MenuWrapper.RightSide>
                <button type="button" > Entrar</button>
                <button type="button">Cadastrar</button>
            </MenuWrapper.RightSide>
        </MenuWrapper>
    )
}