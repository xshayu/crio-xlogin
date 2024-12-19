import { useState, FormEvent } from 'react';

const XLogin = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const username = formData.get('username') as string;
    const password = formData.get('password') as string;
    
    if (username === 'user' && password === 'password') {
      setLoggedIn(true);
    }
  };

  return (
    <main style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100dvw'}}>
    {
      !loggedIn ?
      <form onSubmit={handleSubmit}>
        <h1>Login Page</h1>
          <div>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              required
            />
          </div>
    
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              required
            />
          </div>
    
          <button type="submit">Submit</button>
    
        </form>
      :
      <>
        <h1>Welcome</h1>
        <p>Welcome, user!</p>
      </>
    }
    </main>
  );
};

export default XLogin;