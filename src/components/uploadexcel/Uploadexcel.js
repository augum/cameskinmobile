import React, { useState } from 'react'
import * as XLSX from 'xlsx'
import NavBar from '../navigation/NavBar'
import Data from './Data'

const Uploadexcel = () => {
  const [excelData, setExcelData] = useState(null)
  const [excelFile, setExcelFile] = useState(null)
  const [excelFileError, setExcelFileError] = useState(null)

  const fileType = [
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  ]
  const handelFile = (e) => {
    let selectedFile = e.target.files[0]
    if (selectedFile) {
      if (selectedFile && fileType.includes(selectedFile.type)) {
        let reader = new FileReader()
        reader.readAsArrayBuffer(selectedFile)
        reader.onload = (e) => {
          setExcelFileError(null)
          setExcelFile(e.target.result)
        }
      } else {
        setExcelFileError('Please select only excel file type')
        setExcelFile(null)
      }
    } else {
      console.log('Please select your file')
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (excelFile !== null) {
      const workbook = XLSX.read(excelFile, { type: 'buffer' })
      const worksheetName = workbook.SheetNames[0]
      const worksheet = workbook.Sheets[worksheetName]
      const data = XLSX.utils.sheet_to_json(worksheet)
      setExcelData(data)
    } else {
      setExcelData(null)
    }
  }

  const handlerUpload = () => {
    console.log(excelData)
    setExcelData(null)
  }
  return (
    <div>
      <NavBar />
      <div className="container">
        <div className="form">
          <form
            className="form-group"
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            <label>
              <h5>Upload Excel file</h5>
            </label>

            <input
              type="file"
              className="form-control"
              onChange={handelFile}
              required
            />
            {excelFileError && (
              <div className="text-danger">{excelFileError}</div>
            )}
            <input type="submit" className="btn btn-success" value="Import" />
          </form>
        </div>
        <h5>View excel file</h5>
        <div className="align-rigth">
          <button className="btn btn-success" onClick={handlerUpload}>
            Upload
          </button>
        </div>

        <div className="viewer">
          {excelData === null && <>No file selected</>}
          {excelData !== null && (
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Postnom</th>
                  </tr>
                </thead>
                <tbody>
                  <Data excelData={excelData} />
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Uploadexcel
