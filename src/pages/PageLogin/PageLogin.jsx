import { Form, Login } from './Styles';

const PageLogin = () => {
  return (
    <Login>
      <h1 className="title">Login System</h1>
      <Form>
        <div className="field">
          <label htmlFor="email"></label>
          <input 
            type="email" 
            name="email" 
            id="email" 
            placeholder="Type your email" 
          />
        </div>
        <div className="field">
          <label htmlFor="password"></label>
          <input 
            type="password" 
            name="password" 
            id="password" 
            placeholder="Type your password" 
          />
        </div>
        <div className="actions">
          <button type="submit">Sign In</button>
        </div>
      </Form>
    </Login>
  )
}

export default PageLogin