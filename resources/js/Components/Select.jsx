import React from 'react'

function Select({method, data}) {
  return (
    <select
        onChange={method}
        className={`px-4 py-2 border rounded-md mt-1 border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500`}
        name="category_id"
        id="category_id"
    >

        <option value=''>choisir :</option>
        {data.map((item) => (
            <option value={item.id}>{item.nom_cat}</option>
        ))}
    </select>
  )
}

export default Select