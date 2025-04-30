export default function Dashboard() {
    return (
      <main>
        <header>
          <h1>Logg inn</h1>
          <p>Fyll ut feltene for å logge inn!</p>
        </header>
  
        <form action="action.page" method="post">
          <section>
            <label htmlFor="bruker">Bruker navn</label>
            <input type="bruker"name="bruker" id="bruker" placeholder="ben233"  required/>
  
            <label htmlFor="password">Passord</label>
            <input type="password"name="password" id="password"  placeholder="1234" required/>
          </section>
  
          <button type="submit">Logg inn</button>
        </form>
      </main>
    );
  }
  