import React, { Component } from "react";
import TaskForm from "./component/TaskForm";
import Control from "./component/Control";
import TaskList from "./component/TaskList";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [], // id: unique, name, status
    };
  }

  componentWillMount() {
    if (localStorage && localStorage.getItem("tasks")) {
      var tasks = JSON.parse(localStorage.getItem("tasks"));
      this.setState({
        tasks: tasks,
      });
    }
  }

  onGenerateData = () => {
    var tasks = [
      {
        id: this.generateID(),
        name: "Hoc Java",
        status: true,
      },
      {
        id: this.generateID(),
        name: "Hoc React",
        status: false,
      },
      {
        id: this.generateID(),
        name: "Hoc Angular",
        status: true,
      },
    ];
    this.setState({
      tasks: tasks,
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }

  generateID() {
    return (
      this.s4() +
      this.s4() +
      "-" +
      this.s4() +
      this.s4() +
      "-" +
      this.s4() +
      this.s4() +
      "-" +
      this.s4() +
      this.s4() +
      "-" +
      this.s4() +
      this.s4()
    );
  }

  render() {
    var { tasks } = this.state; // var tasks = this.sate.tasks;

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
            &nbsp;
            <button
              type="button"
              className="btn btn-danger ml-5"
              onClick={this.onGenerateData}
            >
              Genrate Data
            </button>
            {/* Search - Sort */}
            <Control />
            {/* List */}
            <div className="row mt-15">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <TaskList tasks={tasks} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
