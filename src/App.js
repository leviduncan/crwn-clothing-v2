import React from 'react'

function App() {

  const categories = [
    { id: 1, title: "Hats", image:"" },
    { id: 2, title: "Jackets", image:"" },
    { id: 3, title: "Sneakers", image:"" },
    { id: 4, title: "Women's", image:"" },
    { id: 5, title: "Men's", image:"" },
  ]

  return (
    <div classtitle='categories-container'>
      {
        categories.map((category) => (
          <div key={category.id} classtitle='category-container'>
            <div className='background-image' />
            <div classtitle='category-body-container'>
              <h2>{category.title}</h2>
              <p>Shop Now</p>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default App