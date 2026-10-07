import { Link } from '../components/navigation'

export default function NotFound() {
  return (
    <div className="studio-container studio-page">
      <h1>Halaman tidak ditemukan</h1>
      <p>404 · Page not found</p>
      <Link to="/" className="text-action">
        Kembali ke IFUIX / Back to IFUIX
      </Link>
    </div>
  )
}
