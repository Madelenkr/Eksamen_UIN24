export default function Dashboard() {
    return (
      <main>
        <header>
          <h1>Logg inn</h1>
          <p>Fyll ut feltene for å logge inn!</p>
        </header>
  
        <form action="action.page" method="post">
          <section>
            <label htmlFor="bruker">Bruker Navn</label>
            <input type="brukernavn"name="bruker navn" id="bruker navn" placeholder="Johan"  required/>
            
  
            <label htmlFor="password">Passord</label>
            <input type="password"name="password" id="password" placeholder="Johan1234" required/>
          </section>
  
          <button type="submit">Logg inn</button>
        </form>
      </main>
    );
  }
  