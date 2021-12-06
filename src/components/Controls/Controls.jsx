import React from 'react'
import Filter from '../Forms/Filter'
import SortForm from '../Forms/SortForm'

export default function Controls({ types, setSelectedType, selectedType, sortPoke, setSortPoke }) {
  return (
    <div>
      <Filter types={types} setSelectedType={setSelectedType} selectedType={selectedType} />
      {selectedType && <SortForm sortPoke={sortPoke} setSortPoke={setSortPoke} />}
    </div>
  )
}
