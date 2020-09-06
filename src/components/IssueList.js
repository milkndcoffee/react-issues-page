import React from 'react';
import IssueCard from './IssueCard';

const IssueList = ({ issues }) => {


  try {
    return (
      <section className="issue-list">
        <ul>
          {
            issues.map((issue) => (
              <li>
                <IssueCard name={issue.name} body={issue.body} key={issue.id} />
              </li>
            ))
          }
        </ul>
      </section>
    )
  } catch (err) {
    if (err.toString() === 'TypeError: issues.map is not a function') {
      return (
        <section className="issue-list">
          <ul>
            <li><IssueCard name='Loading...' body={''} /></li>
          </ul>
        </section>
      )
    } else {
      console.log('Recorded Error: ', err);
      return (
        <section className="issue-list">
          <ul>
            <li><IssueCard name='Error, expand to show more' body={err.toString()} /></li>
          </ul>
        </section>
      )
    }

  }
}



export default IssueList;
