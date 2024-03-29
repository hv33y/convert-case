import React from 'react'

export const Footer = () => {
  return (
    <>
  {/* Footer */}
  <footer className="text-center text-lg-start text-muted">

    {/* Section: Links  */}
    <section className="">
      <div className="container text-center text-md-start mt-5">
        {/* Grid row */}
        <div className="row mt-3">
          {/* Grid column */}
          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            {/* Content */}
            <h6 className="text-uppercase fw-bold mb-4">
              <i className="fas fa-gem me-3 text-grayish" />
             Online Converter by Harry Kauhaad
            </h6>
            <p>
              Here you can use rows and columns to organize your footer content.
            </p>
          </div>         
        </div>
      </div>
    </section>
    {/* Section: Links  */}
    {/* Copyright */}
    <div
      className="text-center p-4"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.025)" }}
    >
      © 2024 Copyright: 
      <a className="text-reset fw-bold" href="https://converter.harrykauhaad.com"> converter.harrykauhaad.com</a>
    </div>
    {/* Copyright */}
  </footer>
  {/* Footer */}
</>

  )
}
