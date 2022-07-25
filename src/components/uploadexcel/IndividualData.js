import React from 'react'

const IndividualData = ({ individualExleData }) => {
  return (
    <>
      <th>{individualExleData.CodePnam}</th>
      <th>{individualExleData.Libelle}</th>
      <th>{individualExleData.Nodelot}</th>
      <th>{individualExleData.Peremption}</th>
      <th>{individualExleData.Quantite}</th>
    </>
  )
}

export default IndividualData
