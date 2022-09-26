const IssueFilter = () => {
  return <h1>Issue Filter</h1>;
};

const IssueRow = (props) => {
  return (
    <tr>
      <td>{props.Id}</td>
      <td>{props.Status}</td>
      <td>{props.Owner}</td>
      <td>{props.Effort}</td>
      <td>{props.Title}</td>
      <td>{props.Created.toDateString()}</td>
      <td>{props.Due.toDateString()}</td>
    </tr>
  );
};

const IssueTable = ({issues}) => {
  const IssueRows = issues.map((issue) => (
    <IssueRow key={issue.Id} Id={issue.Id} Status={issue.Status} Owner={issue.Owner} Effort={issue.Effort} Created={issue.Created} Due={issue.Due} Title={issue.Title} />
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
            <th>Effort</th>
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

const AddIssue = ({AddSingleIssue}) => {
   // const newIssues = { Status: "Assigned", Owner:"Person-C", Created: new Date("2022-09-03"), Due: new Date("2022-09-07"), Title: "This is the Third Issue"};
  // React.useEffect(()=> {
  //   console.log("Hello");
  //   setTimeout(() =>{
  //     AddSingleIssue(newIssues);
  //   },1000)  
  // },[]);

  function handleSubmit(event){
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
    }
    
    AddSingleIssue(newIssues);
    form.reset();
  }

  return(
  <div>
    <h2>This is Placeholder for Addissue</h2>
    <form name="addForm" onSubmit={handleSubmit}>
      <input type ="text" name="Status" placeholder="Status"></input>
      <input type ="text" name="Owner" placeholder="Owner"></input>
      <input type ="text" name="Effort" placeholder="Effort"></input>
      <input type ="date" name="Created" placeholder="Created"></input>
      <input type ="date" name="Due" placeholder="Due"></input>
      <input type ="text" name="Title" placeholder="Title"></input>
      <button type="submit">Submit</button>

    </form>
  </div>)
};

const IssueList= () => {
  const tempIssues = [
    { Id: 1, Status:"Assigned", Owner:"Person-A", Effort:10, Created: new Date("2022-09-01"), Due: new Date("2022-09-05"), Title: "This is the First Issue" },
    { Id: 2, Status:"Resolved", Owner:"Person-B", Effort:20,Created: new Date("2022-09-02"), Due: new Date("2022-09-06"), Title: "This is the Second Issue" },
  ];

  const [issues, setIssues] = React.useState(tempIssues);

  const AddSingleIssue = (newIssues) => {
    newIssues.Id = issues.length + 1;
    let IssueList = issues.slice(); //Slice is used to get a new array in every entry which is added.
    IssueList.push(newIssues);
    console.log(IssueList);
    setIssues(IssueList);
  }
  return(
    <div>
    <IssueFilter />
    <hr />
    <IssueTable issues = {issues}/>
    <hr />
    <AddIssue AddSingleIssue = {AddSingleIssue} />
    </div>
  );

}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <IssueList/>
);
