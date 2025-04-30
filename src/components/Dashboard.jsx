export default function Dashboard() {
    return (
      <main>
        <header>
          <h1>Logg inn</h1>
          <p>Fyll ut feltene for å logge inn!</p>
        </header>
  
        <form action="action.page" method="post">
          <section>
            <label htmlFor="email">E-post</label>
            <input type="email"name="email" id="email" placeholder="eksempel@gmail.com"  required/>
  
            <label htmlFor="password">Passord</label>
            <input type="password"name="password" id="password" required/>
          </section>
  
          <button type="submit">Logg inn</button>
        </form>
      </main>
    );
  }
  