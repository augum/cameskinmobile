import React from 'react'

const IndividualData = ({ individualExleData }) => {
  return (
    <>
      <th>{individualExleData.Id}</th>
      <th>{individualExleData.Name}</th>
      <th>{individualExleData.PostNom}</th>
    </>
  )
}

export default IndividualData
