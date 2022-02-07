import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const NavHeader = styled.header.attrs( props => ({
    className : 'p-3 mb-3 border-bottom'
}))``

export const Container = styled.div.attrs( props => ({
    className : 'container'
}))``

export const NavWrapper = styled.div.attrs( props => ({
    className : 'd-flex flex-wrap align-items-center justify-content-center justify-content-lg-start'
}))``

export const AlinkLogo = styled(Link).attrs( props => ({
    className : 'd-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none">'
}))``

export const NavUL = styled.ul.attrs( props => ({
    className : 'nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0'
}))``

export const Alink = styled(Link).attrs( props => ({
    className : 'nav-link px-2 link-dark'
}))``

export const Form = styled.form.attrs( props => ({
    className : 'col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3'
}))``

export const Input = styled.input.attrs( props => ({
    className : 'form-control',
    type: 'search',
    placeholder : 'Search...',
    ['aria-label'] : 'Search'
}))``

export const Dropdown = styled.div.attrs( props => ({
    className : 'dropdown text-end'
}))``

export const AlinkImgDD = styled(Link).attrs( props => ({
    className : 'd-block link-dark text-decoration-none dropdown-toggle',
    id : 'dropdownUser1',
    ['data-bs-toggle']: "dropdown",
    ['aria-expanded'] : "false" 
}))``

export const ImgDD = styled.img.attrs( props => ({
    className : 'rounded-circle',
    alt:"mdo",
    width:"32",
    height:"32",
    src: "https://github.com/mdo.png"
}))``

export const ULDD = styled.ul.attrs( props => ({
    className: 'dropdown-menu text-small',
    ['aria-labelledby']:"dropdownUser1"
}))``

export const AlinkDD = styled.li.attrs( props => ({
    className : 'dropdown-item'
}))``

export const HR = styled.hr.attrs( props => ({
    className : 'dropdown-divider'
}))``

