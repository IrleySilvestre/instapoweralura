import React from 'react'
import { Logo } from '../../../theme/logo/Logo'
import { Button } from '../Butoon'
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
                <Button type="button" ghost variant="secondary.main"> Entrar</Button>
                <Button type="button" variant="primary.main">Cadastrar</Button>
            </MenuWrapper.RightSide>

        </MenuWrapper>
    )
}