import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { categories } from '/db/categories/categories'

const Category = ({ params }) => {
  const { categoryPath } = params;

  const category = categories.find((cat) => cat.path === categoryPath);
  
  if (!category) {
    return <h1>Category not found</h1>;
  }

  const categoryData = category.data;
  const categoryProjects = categoryData.projects;

  return (
    <div>
      <h2>{categoryData.title}</h2>
      <p>{categoryData.description}</p>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {categoryProjects.map((project, index) => (
          <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg">
            <Link href={categoryPath + '/' + project.path}>
                <Image
                  src={project.image}
                  alt={project.name}
                  width={300}
                  height={200}
                  className="object-cover"
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{project.name}</div>
                  <p className="text-gray-700 text-base">{project.description}</p>
                </div>
            </Link>
          </div>
        ))}
      </div>
  </div>
  )
}

export default Category