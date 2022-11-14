function App() {
    return (
      <div className="container-fluid h-100 pt-5">
        <form className="w-30 m-auto bg-white p-3 rounded-3 shadow">
          <p className="form-label text-green fw-bolder">Account</p>
          <div className="input-group mb-2">
            <span className="input-group-text" id="basic-addon1"><i className="fa-solid fa-user"></i></span>
            <input type="text" className="form-control" placeholder="Full name" aria-label="Full name" aria-describedby="basic-addon1"/>
          </div>
          <div className="input-group mb-2">
            <span className="input-group-text" id="basic-addon1"><i className="fa-solid fa-envelope"></i></span>
            <input type="text" className="form-control" placeholder="Email Address" aria-label="Email Address" aria-describedby="basic-addon1"/>
          </div>
          <div className="input-group mb-2">
            <span className="input-group-text" id="basic-addon1"><i className="fa-solid fa-key"></i></span>
            <input type="text" className="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1"/>
          </div>
  
          <div className="form-group mb-2">
            <div className="row">
              <div className="col-sm-5">
                <div className="form-group h-100 d-flex flex-column ">
                  <p className="fw-bolder form-label text-green">Date of birth</p>
                  <div className="d-flex flex-nowrap justify-content-between flex-grow-1">
                    <input className="w-30 form-control bg-light p-0 text-center" placeholder="DD"/>
                    <input className="w-30 form-control bg-light p-0 text-center" placeholder="MM"/>
                    <input className="w-30 form-control bg-light p-0 text-center" placeholder="YYYY"/>
                  </div>
                </div>
              </div>
              <div className="col-sm-7">
                <div className="form-group">
                  <p className="fw-bolder form-label text-green">Gender</p>
                  <div className="d-flex flex-nowrap flex-grow-1">
                    <div className="w-50">
                      <input type="radio" className="btn-check" name="options-gender" id="male"/>
                      <label className="btn btn-light border w-100" htmlFor="male">Male</label>
                    </div>
                    <div className="w-50">
                      <input type="radio" className="btn-check" name="options-gender" id="female"/>
                      <label className="btn btn-light border w-100" htmlFor="female">Female</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
  
          <div className="form-group mb-2">
                <p className="form-label fw-bolder text-green">Payment Details</p>
                <div className="d-flex flex-nowrap">
                  <div className="w-50">
                    <input type="radio" className="btn-check" name="options-paymentDetail" id="credit" autoComplete="off"/>
                    <label className="btn btn-light border w-100" htmlFor="credit">
                      <i class="fa-solid fa-credit-card"></i> Credit Card
                    </label>
                  </div>
                  <div className="w-50">
                    <input type="radio" className="btn-check" name="options-paymentDetail" id="paypal" autoComplete="off"/>
                    <label className="btn btn-light border w-100" htmlFor="paypal">
                      <i class="fa-brands fa-cc-paypal"></i> Paypal
                    </label>
                  </div>
               </div>
          </div>
  
          <div className="form-group mb-2">
            <div className="input-group mb-2">
              <span className="input-group-text" id="basic-addon1"><i class="fa-solid fa-id-card"></i></span>
              <input type="text" className="form-control" placeholder="Card number" aria-label="Card number" aria-describedby="basic-addon1"/>
            </div>
          </div>
  
          <div className="form-group mb-2">
            <div className="row">
              <div className="col-sm-5">
                <div className="input-group mb-2">
                  <span className="input-group-text w-31" id="basic-addon1"><i class="fa-solid fa-clipboard-user"></i></span>
                  <input type="text" className="form-control" placeholder="Card CVC" aria-label="Card CVC" aria-describedby="basic-addon2"/>
                </div>
              </div>
              <div className="col-sm-7">
                <div className="form-group">
                  <div className="d-flex flex-nowrap">
                    <div className="w-50">
                      <div className="form-floating h-100">
                        <select className="form-select py-2 h-100" id="floatingSelectGrid">
                          <option value="01 jane" selected>01 Jane</option>
                          <option value="02 jane">02 Jane</option>
                          <option value="03 jane">03 Jane</option>
                        </select>
                      </div>
                    </div>
                    <div className="w-50">
                     <div className="form-floating h-100">
                        <select className="form-select py-2 h-100" id="floatingSelectGrid">
                          <option value="2023" selected>2023</option>
                          <option value="2024">2024</option>
                          <option value="2025">2025</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <button className="btn bg-green w-100">Submit</button>
          </div>
        </form>
    </div>
    );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);