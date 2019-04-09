import React, { Component } from "react";
import './ToDoItems.css' 
const ENTER_KEY = 13;
const COMMA_KEY = 188; 
const BACKSPACE_KEY= 8;
var listItems

class TodoItems extends Component {
  constructor(props) {
        super(props);
        this.state = { tags: ["work", "personal", "family"], value: "" };

        this.createTasks = this.createTasks.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
  }
  handleChange(e) {
    this.setState({
      value: e.target.value
    });
  }

  handleKeyUp(e) {
    const key = e.keyCode;

    if (key === ENTER_KEY || key === COMMA_KEY) {
      this.addTag();
    }
  }

  handleKeyDown(e) {
    const key = e.keyCode;
    if (key === BACKSPACE_KEY && !this.state.value) {
      this.editPrevTag();
    }
  }

  addTag() {
    const { tags, value } = this.state;
    let tag = value.trim();

    tag = tag.replace(/,/g, "");

    if (!tag) {
      return;
    }

    this.setState({
      tags: [...tags, tag],
      value: ""
    });
  }

  editPrevTag() {
    let { tags } = this.state;

    const tag = tags.pop();

    this.setState({ tags, value: tag });
  }
  strike(strike, data) {
      if (strike) {
          return (
              <p>
                  <strike>{data}</strike>
              </p>
          );
      } else {
          return (
              <p>{data}</p>
          )
      }
  }
 

  strikeItem(key) {
    console.log("CLICK IN CHILD", key)
      this.props.onItemCompleted(key);
  }

 
createTasks(item) {
        const { tags, value } = this.state;
        return  (
        <div>
        <h1 className="list">
        <input type ="checkbox" className="list"  onClick={() =>this.strikeItem(item.key)}key={item.key}/>
        <i>{this.strike(item.done, item.text) }</i>
        </h1>
    
        <ul>
            {tags.map((tag, i) => (
              <li key={tag + i}  onClick={() =>this.delete(item.key)} className="tag">
                   {tag}
              </li>
            ))}
        </ul>
        <input
            type="text"
            placeholder="
                         
                         tag..."
            value={value}
            onChange={this.handleChange}
            ref="tag"
            className="tags"
            onKeyUp={this.handleKeyUp}
            onKeyDown={this.handleKeyDown}
          />
        </div>           
        )
      }
    
  delete(key) {
    this.props.delete(key);
  }
 
  render() {
    console.log("props : - ", this.props)
    var todoEntries = this.props.entries;
    listItems = todoEntries.map(this.createTasks);
      
    return (
      <ul className="theList">
          {listItems.sort((a, b) => a.key - b.key)}
      </ul>
    );
  }
};
 
export default TodoItems;