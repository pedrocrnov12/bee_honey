import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <Link href="/productos" className="navbar-brand">
          Home Admin
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto d-flex align-items-center justify-content-center" style={{fontSize: '0.9rem'}}>
            <li className="nav-item border border-light me-4 animate__animated animate__fadeInDown">
              <Link href="/productos/addproduct" className="nav-link">
                Agregar
              </Link>
            </li>
            <li className="nav-item border border-light me-4 animate__animated animate__fadeInDown animate__delay-1s">
              <Link href="/productos/updateproduct" className="nav-link">
              Actualizar
              </Link>
            </li>
            <li className="nav-item border border-light me-4 animate__animated animate__fadeInDown animate__delay-2s">
              <Link href="/productos/deleteproduct" className="nav-link">
                Eliminar
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
