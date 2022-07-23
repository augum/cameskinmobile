import React from 'react'
import IndividualData from './IndividualData'

const Data = ({ excelData }) => {
  return excelData.map((individualExleData) => (
    <tr key={individualExleData.Id}>
      <IndividualData individualExleData={individualExleData} />
    </tr>
  ))
}

export default Data
