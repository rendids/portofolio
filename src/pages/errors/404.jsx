
function NotFound() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">404</h1>
          <p className="py-6">Halaman yang Anda cari tidak ditemukan.</p>
          <a href="/" className="btn btn-primary">Kembali ke Beranda</a>
        </div>
      </div>
    </div>
  );
}

export default NotFound;