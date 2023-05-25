import { Actions, Field, Form, Input, Label, Login } from './Styles';

const PageLogin = () => {
  return (
    <Login>
      <h1 className="title">Login System</h1>
      <Form>
        <Field>
          <Label htmlFor="email">Email</Label>
          <Input 
            type="email" 
            name="email" 
            id="email" 
            placeholder="Type your email" 
          />
        </Field>
        <Field>
          <Label htmlFor="password">Password</Label>
          <Input 
            type="password" 
            name="password" 
            id="password" 
            placeholder="Type your password" 
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