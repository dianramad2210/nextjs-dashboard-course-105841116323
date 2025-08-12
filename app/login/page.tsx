// app/login/page.tsx (Next.js 13+ dengan App Router)
export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300">
      <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-md">
        {/* Judul */}
        <h1 className="text-3xl font-bold text-blue-600 text-center mb-6">
          Login
        </h1>

        {/* Form */}
        <form className="space-y-5">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              placeholder="Masukkan email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              placeholder="Masukkan password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>

          {/* Tombol */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Masuk
          </button>
        </form>

        {/* Link */}
        <p className="text-center text-sm text-gray-500 mt-5">
          Belum punya akun?{" "}
          <a href="/register" className="text-blue-600 hover:underline">
            Daftar
          </a>
        </p>
      </div>
    </div>
  );
}
