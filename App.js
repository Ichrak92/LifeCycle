import React from 'react';
export default class App extends React.Component{
componentDidMount(){
  setTimeout(()=>{alert("hello")},2000)
}


render(){
  return (
    <div>

    </div>
  )
}
}

