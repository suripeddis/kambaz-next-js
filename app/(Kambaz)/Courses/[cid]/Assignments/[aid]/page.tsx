export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name">Assignment Name</label><br/>
        <input id="wd-name" defaultValue="A1 - ENV + HTML"/><br/><br/>
  
        <label htmlFor="wd-description">Description</label><br/>
        <textarea id="wd-description" cols={50} rows={5}>
  The assignment is available online Submit a link to the landing page of your Web application running on Netlify. The landing page should include the following: Your full name and section Links to each of the lab assignments Link to the Kanbas application Links to all relevant source code repositories The Kanbas application should include a link to navigate back to the landing page.
        </textarea><br /><br/>
  
        <table>
          <tbody>
            <tr>
              <td align="right"><label htmlFor="wd-points">Points</label></td>
              <td><input id="wd-points" defaultValue={100} /></td>
            </tr>
  
            <tr>
              <td align="right"><label htmlFor="wd-group">Assignment Group</label></td>
              <td>
                <select id="wd-group" defaultValue="ASSIGNMENTS">
                  <option>ASSIGNMENTS</option>
                </select>
              </td>
            </tr>
  
            <tr>
              <td align="right"><label htmlFor="wd-grade">Display Grade as</label></td>
              <td>
                <select id="wd-grade" defaultValue="Percentage">
                  <option>Percentage</option>
                </select>
              </td>
            </tr>
  
            <tr>
              <td align="right"><label htmlFor="wd-submission">Submission Type</label></td>
              <td>
                <select id="wd-submission" defaultValue="Online">
                  <option>Online</option>
                </select><br />
                <input type="checkbox"/> Text Entry<br/>
                <input type="checkbox"/> Website URL<br/>
                <input type="checkbox"/> Media Recordings<br/>
                <input type="checkbox"/> Student Annotation<br/>
                <input type="checkbox"/> File Uploads
              </td>
            </tr>
  
            <tr>
              <td align="right"><label htmlFor="wd-assign-to">Assign To</label></td>
              <td><input id="wd-assign-to" defaultValue="Everyone"/></td>
            </tr>
  
            <tr>
              <td align="right"><label htmlFor="wd-due-date">Due</label></td>
              <td><input id="wd-due-date" type="date" defaultValue="2024-05-13"/></td>
            </tr>
  
            <tr>
              <td align="right"><label>Available from</label></td>
              <td>
                <input type="date" defaultValue="2024-05-06"/> Until
                <input type="date" defaultValue="2024-05-20"/>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }