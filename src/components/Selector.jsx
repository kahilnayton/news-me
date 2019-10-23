import React from 'react';

export default class Selector extends React.Component{
  constructor(props){
  super(props);
    this.state = {
      news: this.props
    
  }
}


  render() {
  // console.log(props)
  const news = this.props.news;
  if (news) {
    return (
      <>
        {/* <h2>{news}</h2> */}
     
      </>
    )
  } else {
    return <></>
  }
  }
}