import React from "react";

class Tabs extends React.Component{
  constructor(props){
    super(props);
    this.state = {index: 0};
    this.changeIndex = this.changeIndex.bind(this);
  }

  changeIndex(i){
    this.setState({index: i})
  }

  render(){
    return (
      <ul>
        <header>
          {this.props.objs.map((obj, i) => {
            return(
              <div>
                <h1 onClick={this.changeIndex}>{obj.title}</h1>
                <article>{obj.content}</article>
              </div>
            
            )
          })}
        </header>
        <div>

        </div>
      </ul>
    )
  }
}

export default Tabs;