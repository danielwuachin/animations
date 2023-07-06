import Image from 'next/image'
import Link from 'next/link'
import { categories } from '../db/categories/categories'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <div>
      <h1 className="text-4xl mb-8">Bienvenido a la página principal</h1>
      <h2 className="text-2xl mb-4">Categorías</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category, index) => (
          <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg">
            <Link href={category.path}>
                <Image
                  src={category.image}
                  alt={category.name}
                  width={300}
                  height={200}
                  className="object-cover"
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{category.name}</div>
                  <p className="text-gray-700 text-base">{category.description}</p>
                </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  </main>
  )
}
