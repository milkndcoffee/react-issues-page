import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

const IssueCard = ({name, body, key}) => {
  const [hide, setHide] = useState(false);
  const [hideStyle, setHideStyle] = useState({color: '#8989ca'});
  const [isHidden, setIsHidden] = useState('[Show]');
  
  const displayMd = () =>{
    setIsHidden(isHidden === '[Hide]' ? '[Show]' : '[Hide]');
    if (hide){
      setHide(false);
      setHideStyle({color:'#8989ca'});
    } else{
      setHide(true);
      setHideStyle({color:'#eca0a0'});
    }
  }


  return (
    <React.Fragment>
      <div className="card-container">
        <div className="issue-name">
          <h2>{name}</h2>
          {body !== '' ? 
            <button type="button" style={hideStyle} onClick={() => displayMd()}>{isHidden}
            </button> :
            <p className="not-found">No Body Found</p>}
          <p>{key}</p>
        </div>
        <div style={hide ? showItem : hideItem}>
          <hr></hr>
          <ReactMarkdown className={"markdown"} source={body} />
        </div>
      </div>
      
    </React.Fragment>
  )
}

const hideItem = {
  //display: 'none'
  maxHeight: '0px',
  overflow: 'hidden',
  transition: 'max-height 0.5s cubic-bezier(0, 1.05, 0, 1)'
}
const showItem = {
  //display: 'block'
  height: 'auto',
  maxHeight: '400vh', //for animation since max h
  transition: 'max-height 0.5s linear'
}

export default IssueCard;
