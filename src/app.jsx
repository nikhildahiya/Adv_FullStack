const IssueFilter = () => {
  return <h1>Issue Filter</h1>;
};

const IssueRow = (props) => {
  const rowStyle = { border: "1px solid" };
  return (
    <tr>
      <td style={props.rowStyle}>{props.Id}</td>
      <td style={props.rowStyle}>{props.Title}</td>
      <td style={props.rowStyle}>{props.Status}</td>
      <td style={props.rowStyle}>{props.Owner}</td>
      <td style={props.rowStyle}>{props.Created}</td>
      <td style={props.rowStyle}>{props.Due}</td>
    </tr>
  );
};

const IssueTable = () => {

  const tempIssues = [
    { Id: 1, Status:"Assigned", Owner:"Person-A", Created: new Date("2022-09-01"), Due: new Date("2022-09-05"), Title: "This is the First Issue" },
    { Id: 2, Status:"Assigned", Owner:"Person-B", Created: new Date("2022-09-02"), Due: new Date("2022-09-06"), Title: "This is the Second Issue" },
  ];

  const [issues, setIssues] = React.useState([]);

  setTimeout(()=>{
    setIssues(tempIssues);
  },2000)


  React.useEffect(()=> {

})

  const IssueRows = issues.map((issue) => (
    <IssueRow key={issue.Id} Id={issue.Id} Status={issue.Status} Owner={issue.Owner} Created={issue.Created.toDateString()} Due={issue.Due.toDateString()} Title={issue.Title} />
  ));
  return (
    <div>
      <h1>Issue Table</h1>
      <table>
        <thead>
          <tr>
            <th >Id</th>
            <th >Status</th>
            <th>Owner</th>
            <th>Title</th>
            <th>Created</th>
            <th>Due</th>
          </tr>
        </thead>
        <tbody>{IssueRows}</tbody>
      </table>
    </div>
  );
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
