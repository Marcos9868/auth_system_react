import { useState } from 'react';
import { Actions, Field, Form, Input, Label, Login } from './Styles';

const PageLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit', { email, password });
  }

  return (
    <Login>
      <h1 className="title">Login System</h1>
      <Form onSubmit={handleSubmit}>
        <Field>
          <Label htmlFor="email">Email</Label>
          <Input 
            type="email" 
            name="email" 
            id="email" 
            placeholder="Type your email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Field>
        <Field>
          <Label htmlFor="password">Password</Label>
          <Input 
            type="password" 
            name="password" 
            id="password" 
            placeholder="Type your password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Field>
        <Actions>
          <button type="submit">Sign In</button>
        </Actions>
      </Form>
    </Login>
  )
}

export default PageLogin