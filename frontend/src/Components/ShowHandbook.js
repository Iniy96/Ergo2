import React from 'react'
import pdfDoc from "../assets/Combined_Rig_Details.pdf"

export const ShowHandbook = () => {
  return (
    < >
      {/* <embed src={pdfDoc} type="application/pdf" width="100%" height="600px"/> */}
      <iframe src={pdfDoc} width="100%" height="600px"></iframe>
    

    </>
  )
}
