const IssueFilter = () => {
  return /*#__PURE__*/React.createElement("h1", null, "Issue Filter");
};

const IssueRow = props => {
  return /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, props.Id), /*#__PURE__*/React.createElement("td", null, props.Status), /*#__PURE__*/React.createElement("td", null, props.Owner), /*#__PURE__*/React.createElement("td", null, props.Effort), /*#__PURE__*/React.createElement("td", null, props.Title), /*#__PURE__*/React.createElement("td", null, props.Created.toDateString()), /*#__PURE__*/React.createElement("td", null, props.Due.toDateString()));
};

const IssueTable = ({
  issues
}) => {
  const IssueRows = issues.map(issue => /*#__PURE__*/React.createElement(IssueRow, {
    key: issue.Id,
    Id: issue.Id,
    Status: issue.Status,
    Owner: issue.Owner,
    Effort: issue.Effort,
    Created: issue.Created,
    Due: issue.Due,
    Title: issue.Title
  }));
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Issue Table"), /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Id"), /*#__PURE__*/React.createElement("th", null, "Status"), /*#__PURE__*/React.createElement("th", null, "Owner"), /*#__PURE__*/React.createElement("th", null, "Effort"), /*#__PURE__*/React.createElement("th", null, "Title"), /*#__PURE__*/React.createElement("th", null, "Created"), /*#__PURE__*/React.createElement("th", null, "Due"))), /*#__PURE__*/React.createElement("tbody", null, IssueRows)));
};

const AddIssue = ({
  AddSingleIssue
}) => {
  // const newIssues = { Status: "Assigned", Owner:"Person-C", Created: new Date("2022-09-03"), Due: new Date("2022-09-07"), Title: "This is the Third Issue"};
  // React.useEffect(()=> {
  //   console.log("Hello");
  //   setTimeout(() =>{
  //     AddSingleIssue(newIssues);
  //   },1000)  
  // },[]);
  function handleSubmit(event) {
    event.preventDefault();
    let form = document.forms.addForm;
    console.log(form);
    let newIssues = {
      Status: form.Status.value,
      Owner: form.Owner.value,
      Effort: form.Effort.value,
      Created: new Date(form.Created.value),
      Due: new Date(form.Due.value),
      Title: form.Title.value
    };
    AddSingleIssue(newIssues);
    form.reset();
  }

  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "This is Placeholder for Addissue"), /*#__PURE__*/React.createElement("form", {
    name: "addForm",
    onSubmit: handleSubmit
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "Status",
    placeholder: "Status"
  }), /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "Owner",
    placeholder: "Owner"
  }), /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "Effort",
    placeholder: "Effort"
  }), /*#__PURE__*/React.createElement("input", {
    type: "date",
    name: "Created",
    placeholder: "Created"
  }), /*#__PURE__*/React.createElement("input", {
    type: "date",
    name: "Due",
    placeholder: "Due"
  }), /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "Title",
    placeholder: "Title"
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit"
  }, "Submit")));
};

const IssueList = () => {
  const tempIssues = [{
    Id: 1,
    Status: "Assigned",
    Owner: "Person-A",
    Effort: 10,
    Created: new Date("2022-09-01"),
    Due: new Date("2022-09-05"),
    Title: "This is the First Issue"
  }, {
    Id: 2,
    Status: "Resolved",
    Owner: "Person-B",
    Effort: 20,
    Created: new Date("2022-09-02"),
    Due: new Date("2022-09-06"),
    Title: "This is the Second Issue"
  }];
  const [issues, setIssues] = React.useState(tempIssues);

  const AddSingleIssue = newIssues => {
    newIssues.Id = issues.length + 1;
    let IssueList = issues.slice(); //Slice is used to get a new array in every entry which is added.

    IssueList.push(newIssues);
    console.log(IssueList);
    setIssues(IssueList);
  };

  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(IssueFilter, null), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(IssueTable, {
    issues: issues
  }), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(AddIssue, {
    AddSingleIssue: AddSingleIssue
  }));
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render( /*#__PURE__*/React.createElement(IssueList, null));