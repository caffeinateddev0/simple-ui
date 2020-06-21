import React from 'react'
import styled from 'styled-components'

interface HeaderProps {
    children: string;
}

export const Header = ({children}:HeaderProps) => <Header.Body>{children}</Header.Body>

Header.Body = styled.div``