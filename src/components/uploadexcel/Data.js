import React from 'react'
import IndividualData from './IndividualData'

const Data = ({ excelData }) => {
  console.log(excelData)
  return excelData.map((individualExleData) => (
    <tr key={individualExleData.CodePnam}>
      <IndividualData individualExleData={individualExleData} />
    </tr>
  ))
}

export default Data
