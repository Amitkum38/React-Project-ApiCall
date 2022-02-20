function RightSideBarTable(){
    return(
        <>
        <div className="content d-flex flex-column flex-column-fluid">
        <div className="d-flex flex-column-fluid">
            <div className="container-fluid">
              <div className="card card-custom gutter-b">
                <div className="card-body">
                  <table className="table table-bordered ">
                    <thead className="thead-dark">
                      <tr>
                        <th scope="col">ID</th>
                        <th scope="col">FILE NAME</th>
                        <th scope="col">KEYWORD ID</th>
                        <th scope="col">MESSAGE</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>https://console.cloud.google.com/=2.2202736.1107745941.1639634912 </td>
                        <td>1101045739.1639634912</td>
                        <td><span className="label label-inline label-light-success font-weight-bold mr-2">1</span> Records Sent </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        </>
    );
};

export default RightSideBarTable;