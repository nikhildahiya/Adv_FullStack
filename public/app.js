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

const IssueTable = () => {
  const issues = [{
    Id: 1,
    Status: "Assigned",
    Owner: "Person-A",
    Created: new Date("2022-09-01"),
    Due: new Date("2022-09-05"),
    Title: "This is the First Issue"
  }, {
    Id: 2,
    Status: "Assigned",
    Owner: "Person-B",
    Created: new Date("2022-09-02"),
    Due: new Date("2022-09-06"),
    Title: "This is the Second Issue"
  }];
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

const AddIssue = () => {
  return /*#__PURE__*/React.createElement("h1", null, "Add Issue");
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render( /*#__PURE__*/React.createElement(React.StrictMode, null, /*#__PURE__*/React.createElement(IssueFilter, null), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(IssueTable, null), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(AddIssue, null)));