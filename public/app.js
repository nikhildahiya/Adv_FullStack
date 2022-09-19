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
  }, props.Title));
};

const IssueTable = () => {
  const rowStyle = {
    border: "1px solid"
  };
  const issues = [{
    Id: 5,
    Title: "This is the Fifth Issue"
  }, {
    Id: 6,
    Title: "This is the Sixth Issue"
  }];
  const IssueRows = issues.map(issue => /*#__PURE__*/React.createElement(IssueRow, {
    rowStyle: rowStyle,
    Id: issue.Id,
    Title: issue.Title
  }));
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Issue Table"), /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    style: rowStyle
  }, "ID"), /*#__PURE__*/React.createElement("th", {
    style: rowStyle
  }, "Title"))), /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    style: rowStyle
  }, "1"), /*#__PURE__*/React.createElement("td", {
    style: rowStyle
  }, "This is First Issue")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    style: rowStyle
  }, "2"), /*#__PURE__*/React.createElement("td", {
    style: rowStyle
  }, "This is First Issue")), /*#__PURE__*/React.createElement(IssueRow, {
    rowStyle: rowStyle,
    Id: 3,
    Title: "This is Third issue"
  }), /*#__PURE__*/React.createElement(IssueRow, {
    rowStyle: rowStyle,
    Id: 4,
    Title: "This is Fourth issue"
  }), IssueRows)));
};

const AddIssue = () => {
  return /*#__PURE__*/React.createElement("h1", null, "Add Issue");
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render( /*#__PURE__*/React.createElement(React.StrictMode, null, /*#__PURE__*/React.createElement(IssueFilter, null), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(IssueTable, null), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(AddIssue, null)));