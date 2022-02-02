import React, {useState} from "react";
import {
  EmailInput,
  LabelEmail,
  PwInput,
  LabelPw,
  FormFloat,
  DivCheckBox,
  CheckBox,
  SubmitButton,
  TextMuted
} from "./allStyle";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="container w-75">
      <form>
        <i className="bi bi-bootstrap fs-1"></i>
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

        <FormFloat>
          <EmailInput onChange={e=>setEmail(e.target.value)} value={email} />
          <LabelEmail>E-mail Address</LabelEmail>
        </FormFloat>
        <FormFloat>
          <PwInput onChange={e=> setPassword(e.target.value)} value={password}/>
          <LabelPw>Password</LabelPw>
        </FormFloat>

        <DivCheckBox>
          <label>
            <CheckBox value='remember-me' /> Remember Me
          </label>
        </DivCheckBox>
        <SubmitButton>Sign in</SubmitButton>
        <TextMuted>© 2017–2021</TextMuted>
      </form>
    </div>
  );
}

export default Login;
