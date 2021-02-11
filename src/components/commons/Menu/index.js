import React from 'react'
import Home from '../../../../pages'
import { Logo } from '../../../theme/logo/Logo'
import { ButtonCadastrar, ButtonEntrar, MenuWrapper} from './styles/MenuWrapper'

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
        <MenuWrapper >
            <MenuWrapper.LeftSide>
                <Logo/>
            </MenuWrapper.LeftSide>

            <MenuWrapper.CentralSide>
                {links.map((link)=>(
                    <li key={link.url}>
                        <a href={link.url}>
                            {link.texto}
                        </a>
                    </li>
                ))}
            </MenuWrapper.CentralSide>

            <MenuWrapper.RightSide>
                <ButtonEntrar>Entrar</ButtonEntrar>
                <ButtonCadastrar>Cadastrar</ButtonCadastrar>
            </MenuWrapper.RightSide>
        </MenuWrapper>
    )
}