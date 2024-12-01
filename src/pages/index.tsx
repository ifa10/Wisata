import Navbar from '../components/navbar';

const Home = () => {
  return (
    <div>
      <Navbar />
      <div style={{ textAlign: 'center', marginTop: '100px' }}>
        <h1>Selamat Datang di Website Kami</h1>
        <p>
          Kami senang Anda mengunjungi website kami. Jelajahi informasi menarik tentang Wisata dan layanan
          yang kami tawarkan!
        </p>
        <div>
          <button
            style={{
              padding: '10px 20px',
              margin: '10px',
              backgroundColor: '#0070f3',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Tentang Wisata
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
