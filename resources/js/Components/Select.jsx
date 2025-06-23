import React from 'react'

function Select({method, data,currentData}) {
  return (
    <select
        onChange={method}
        className={`rounded-md border-gray-200 bg-zinc-50 focus:border-amber-100 focus:ring-orange-400 `}
        name="category_id"
        id="category_id"
        value={currentData}
    >

        <option value="">Select :</option>
        {data.map((item) => (
            <option value={item.id}>{item.nom_cat}</option>
        ))}
    </select>
  )
}

export default Select