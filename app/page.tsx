"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  function handleLoginClick() {
    router.push("/dashboard");
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50">
      <div className="bg-blue-600 w-full p-8 rounded-b-lg">
        <h1 className="text-white text-4xl font-bold">🌐 Acme</h1>
      </div>

      <div className="mt-10 bg-white p-6 rounded-lg shadow-lg max-w-lg w-full text-center">
        <h2 className="text-xl font-semibold mb-2">
          Selamat datang di Acme.
        </h2>
        <p className="mb-6">
          Ini adalah contoh untuk <a href="#" className="text-blue-500">Next.js Learn Course</a>, yang dibuat oleh Vercel.
        </p>
        <button
          onClick={handleLoginClick}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Log in →
        </button>
      </div>
    </main>
  );
}
