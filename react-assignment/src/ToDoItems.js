import React, { Component } from "react";
 
class TodoItems extends Component {
  constructor(props) {
        super(props);
     
        this.createTasks = this.createTasks.bind(this);
  }

  createTasks(item) {
        return  (
        
        <div>
        <input type ="checkbox" />
        <p onClick={() => this.delete(item.key)} 
                    key={item.key}>{item.text}</p>
                    </div>
        // <li onClick={() => this.delete(item.key)} 
        //             key={item.key}>{item.text}</li>            
        )
      }
    
  delete(key) {
    //this.props.listItems[key]= this.props.<strike></strike    
    this.props.delete(key);
      }  
 
  render() {
    var todoEntries = this.props.entries;
    var listItems = todoEntries.map(this.createTasks);
 
    return (
      // for loop, include checkboxes
      <ul className="theList">
          {listItems}
      </ul>
    );
  }
};
 
export default TodoItems;