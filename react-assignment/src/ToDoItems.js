import React, { Component } from "react";
const ENTER_KEY = 13;
const COMMA_KEY = 188; 
var listItems

class TodoItems extends Component {
  constructor(props) {
        super(props);
        this.state = { tags: ["work", "personal", "family"], value: "" };

        this.createTasks = this.createTasks.bind(this);
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
//   addworktag(id){

//        listItems.find((item) => {
//         return item.key === id;}).tag.Work= true
// }
// addpersonaltag(id){

//     listItems.find((item) => {
//      return item.key === id;}).tag.Personal= true
// }
// addfamilytag(key){

//     // listItems.find((item) => {
//     //  return item.key === key;}).tag.Family= true
//     console.log(listItems.find((item) => {
//         return item.key === key;}).tag.Family= true)
// }



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
  handleKeyUp(e) {
    const key = e.keyCode;

    if (key === ENTER_KEY || key === COMMA_KEY) {
      this.addTag();
    }
  }
 
createTasks(item) {
        const { tags, value } = this.state;
        return  (
        
        <div>
        <input type ="checkbox"  onClick={() =>
        //  setTimeout((listItem) => {
        //     this.delete(item.key)  
        //   }, 800, this._listItem)
        //  this.strikes()
            this.strikeItem(item.key)
         }    
                 key={item.key}/>
                    {this.strike(item.done, item.text)}
                    <ul>
            {tags.map((tag, i) => (
              <li key={tag + i} className="tag">
                {tag}
              </li>
            ))}
          </ul>
          <input
            type="text"
            placeholder="
                         
                         tag..."
            value={value}
            ref="tag"
            onKeyUp={this.handleKeyUp}
          />
                    {/* <ul>
                        <li type="none"/>
                          <input type="text" placeholder="add tag" value ={}/>
                        {/* <input type="text" onClick={() => 
                            this.addworktag(item.key)} />
                            Work
                        <input type="checkbox" onClick={() => 
                            this.addpersonaltag(item.key)} />
                            Personal
                        <input type="checkbox" onClick={() => 
                            this.addfamilytag(item.key)} />
                            Family   */}
                 
             
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