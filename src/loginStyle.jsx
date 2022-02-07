import styled from "styled-components";

export const FormFloat = styled.div.attrs( props => ({
    className: 'form-floating'
}))``

export const EmailInput = styled.input.attrs( props => ({
    className : 'form-control text-primary',
    id: 'inputEmail',
    type: 'email',
    placeholder: "input email"
}))``

export const LabelEmail = styled.label.attrs( props => ({
    htmlFor: 'inputEmail'
}))``

export const PwInput = styled.input.attrs( props => ({
    className : 'form-control text-danger',
    id: 'InputPw',
    type: 'password',
    placeholder: 'input password'
}))``

export const LabelPw = styled.label.attrs( props => ({
    htmlFor: 'InputPw'
}))``

export const DivCheckBox = styled.div.attrs( props => ({
    className: 'checkbox mb-3',
}))``

export const CheckBox = styled.input.attrs( props => ({
    type: 'checkbox',
    value: props.value
}))``

export const SubmitButton = styled.button.attrs( props => ({
    className: 'w-100 btn btn-lg btn-primary',
    type: 'submit'
}))``

export const TextMuted = styled.p.attrs( props => ({
    className: 'mt-5 mb-3 text-muted'
}))``




