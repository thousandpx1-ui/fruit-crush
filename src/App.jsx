import './App.css'

function App() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'linear-gradient(180deg, #ff9966 0%, #ff5e62 100%)',
      color: 'white',
      textAlign: 'center',
      padding: '20px'
    }}>
      <h1 style={{ fontSize: '4rem', marginBottom: '10px' }}>
        🍓 Fruit Crush 🍍
      </h1>

      <p style={{ fontSize: '1.3rem', maxWidth: '700px', lineHeight: '1.7' }}>
        Match delicious fruits, unlock exciting levels, compete on global leaderboards,
        and become the ultimate Fruit Crush champion.
      </p>

      <button style={{
        marginTop: '30px',
        padding: '16px 32px',
        borderRadius: '16px',
        border: 'none',
        fontSize: '1.2rem',
        fontWeight: 'bold',
        cursor: 'pointer'
      }}>
        Play Now 🎮
      </button>

      <div style={{ marginTop: '50px', fontSize: '1rem', opacity: 0.9 }}>
        🚀 Powered by React + Vite + Cloudflare
      </div>
    </div>
  )
}

export default App
