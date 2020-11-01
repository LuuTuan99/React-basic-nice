import React, { Component } from "react";
import TaskForm from "./component/TaskForm";
import Control from "./component/Control";
class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="text-center">
          <h1>Quản Lý Công Việc</h1>
          <hr />
        </div>
        <div className="row">
          {/* form */}
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <TaskForm />
          </div>
          <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
            <button type="button" className="btn btn-primary">
              <span className="fa fa-plus mr-5" />
              Thêm Công Việc
            </button>
            {/* Search - Sort */}
            <Control />
            {/* List */}
            <div className="row mt-15">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <table className="table table-bordered table-hover">
                  <thead>
                    <tr>
                      <th className="text-center">STT</th>
                      <th className="text-center">Tên</th>
                      <th className="text-center">Trạng Thái</th>
                      <th className="text-center">Hành Động</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td />
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td>
                        <select className="form-control">
                          <option value={-1}>Tất Cả</option>
                          <option value={0}>Ẩn</option>
                          <option value={1}>Kích Hoạt</option>
                        </select>
                      </td>
                      <td />
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Học lập trình</td>
                      <td className="text-center">
                        <span className="label label-success">Kích Hoạt</span>
                      </td>
                      <td className="text-center">
                        <button type="button" className="btn btn-warning">
                          <span className="fa fa-pencil mr-5" />
                          Sửa
                        </button>
                        &nbsp;
                        <button type="button" className="btn btn-danger">
                          <span className="fa fa-trash mr-5" />
                          Xóa
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
