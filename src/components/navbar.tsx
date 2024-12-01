import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    // Cek role pengguna (bisa berasal dari token atau API)
    fetch('/api/auth/admin', {
      headers: {
        role: 'admin', // Sederhana untuk contoh
      },
    })
      .then((res) => {
        if (res.status === 200) {
          setIsAdmin(true);
        }
      });
  }, []);

  return (
    <nav>
      <ul>
        <li><a href="/">Beranda</a></li>
        <li><a href="/boking">Pemesanan</a></li>
        {isAdmin && <li><a href="/admin">Admin</a></li>}
      </ul>
    </nav>
  );
};

export default Navbar;
