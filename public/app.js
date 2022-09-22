const IssueFilter = () => {
  return /*#__PURE__*/React.createElement("h1", null, "Issue Filter");
};

const IssueRow = props => {
  const rowStyle = {
    border: "1px solid"
  };
  return /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    style: props.rowStyle
  }, props.Id), /*#__PURE__*/React.createElement("td", {
    style: props.rowStyle
  }, props.Title), /*#__PURE__*/React.createElement("td", {
    style: props.rowStyle
  }, props.Status), /*#__PURE__*/React.createElement("td", {
    style: props.rowStyle
  }, props.Owner), /*#__PURE__*/React.createElement("td", {
    style: props.rowStyle
  }, props.Created), /*#__PURE__*/React.createElement("td", {
    style: props.rowStyle
  }, props.Due));
};

const IssueTable = ({
  issues
}) => {
  // const tempIssues = [
  //   { Id: 1, Status:"Assigned", Owner:"Person-A", Created: new Date("2022-09-01"), Due: new Date("2022-09-05"), Title: "This is the First Issue" },
  //   { Id: 2, Status:"Resolved", Owner:"Person-B", Created: new Date("2022-09-02"), Due: new Date("2022-09-06"), Title: "This is the Second Issue" },
  // ];
  //const newIssues = { Status: "Assigned", Owner:"Person-C", Created: new Date("2022-09-03"), Due: new Date("2022-09-07"), Title: "This is the Third Issue"};
  // const [issues, setIssues] = React.useState(tempIssues);
  // setTimeout(()=>{
  //   setIssues(tempIssues);
  // },1000)
  // this is to add the value to temp array after delay and goes in the infilite loop
  // setTimeout(()=>{
  //   tempIssues.push(newIssues);
  //   setIssues(tempIssues);
  // },3000)
  // let counter = 0;
  // React.useEffect(()=> {
  //   console.log("Hello", counter);
  //   //add single issue to stater variable with 1 sec delay.
  //   setTimeout(() =>{
  //     AddSingleIssue(newIssues);
  //   },1000)
  //   counter++;
  //If the [] these are empty so there is no array and it will add just add one entry
  //if there is an array it will constantly keep refreshing the loop and adding items in array.
  // },[]);
  // const AddSingleIssue = (newIssues) => {
  //   newIssues.Id = issues.length + 1;
  //   let IssueList = issues.slice(); //Slice is used to get a new array in every entry which is added.
  //   IssueList.push(newIssues);
  //   console.log(IssueList);
  //   setIssues(IssueList);
  // }
  const IssueRows = issues.map(issue => /*#__PURE__*/React.createElement(IssueRow, {
    key: issue.Id,
    Id: issue.Id,
    Status: issue.Status,
    Owner: issue.Owner,
    Created: issue.Created.toDateString(),
    Due: issue.Due.toDateString(),
    Title: issue.Title
  }));
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Issue Table"), /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Id"), /*#__PURE__*/React.createElement("th", null, "Status"), /*#__PURE__*/React.createElement("th", null, "Owner"), /*#__PURE__*/React.createElement("th", null, "Title"), /*#__PURE__*/React.createElement("th", null, "Created"), /*#__PURE__*/React.createElement("th", null, "Due"))), /*#__PURE__*/React.createElement("tbody", null, IssueRows)));
};

const AddIssue = ({
  AddSingleIssue
}) => {
  const newIssues = {
    Status: "Assigned",
    Owner: "Person-C",
    Created: new Date("2022-09-03"),
    Due: new Date("2022-09-07"),
    Title: "This is the Third Issue"
  };
  React.useEffect(() => {
    console.log("Hello");
    setTimeout(() => {
      AddSingleIssue(newIssues);
    }, 1000);
  }, []);
  return /*#__PURE__*/React.createElement("h1", null, "Add Issue");
};

const IssueList = () => {
  const tempIssues = [{
    Id: 1,
    Status: "Assigned",
    Owner: "Person-A",
    Created: new Date("2022-09-01"),
    Due: new Date("2022-09-05"),
    Title: "This is the First Issue"
  }, {
    Id: 2,
    Status: "Resolved",
    Owner: "Person-B",
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