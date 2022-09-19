const IssueFilter = () => {
  return <h1>Issue Filter</h1>
};

const IssueRow = (props) => {
  const rowStyle = { border: "1px solid"};
  return(
    <tr>
              <td style={props.rowStyle}>{props.Id}</td>
              <td style={props.rowStyle}>{props.Title}</td>
          </tr>
  )
}

const IssueTable = () => {
  const rowStyle = { border: "1px solid"};
  const issues = [
    {Id: 5, Title: "This is the Fifth Issue"},
    {Id: 6, Title: "This is the Sixth Issue"} ];
  const IssueRows = issues.map(issue =>(
      <IssueRow rowStyle = {rowStyle} Id={issue.Id} Title={issue.Title} />
  ))
  return <div>
  <h1>Issue Table</h1>
  <table>
      <thead>
          <tr>
              <th style={rowStyle}>ID</th>
              <th style={rowStyle}>Title</th>
          </tr>
      </thead>
      <tbody>
          <tr>
              <td style={rowStyle}>1</td>
              <td style={rowStyle}>This is First Issue</td>
          </tr>
          <tr>
            <td style={rowStyle}>2</td>
            <td style={rowStyle}>This is First Issue</td>
          </tr>
          <IssueRow rowStyle = {rowStyle} Id={3} Title = {"This is Third issue"}/>
          <IssueRow rowStyle = {rowStyle} Id={4} Title = {"This is Fourth issue"}/>
          {IssueRows}
          </tbody>
        </table>
      </div>
};

const AddIssue = () => {
  return <h1>Add Issue</h1>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <IssueFilter />
    <hr />
    <IssueTable />
    <hr />
    <AddIssue />
  </React.StrictMode>
);