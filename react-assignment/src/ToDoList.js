import React, { Component } from "react";
import ToDoItems from './ToDoItems';
 
class TodoList extends Component {
    constructor(props) {
        super(props);
       
        this.state = {
          items: []
        };
       
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.markItemCompleted = this.markItemCompleted.bind(this);

      }
    addItem(e) {
        if (this._inputElement.value !== "") {
          var newItem = {
            text: this._inputElement.value,
            key: Date.now(),
            tag : String,
            done : false 
          };
    
    //console.log("VAUE IS", this._inputElement.value)
       
          this.setState((prevState) => {
            return { 
              items: prevState.items.concat(newItem) 
            };
          });
         
          this._inputElement.value = "";
        }
         
        console.log(this.state.items);
           
        e.preventDefault();
      }
      markItemCompleted(key) {
          console.log("CLICKED ON ", key);
        var updatedItems = this.state.items.map(item => {
         if (key === item.key)
           item.done = !item.done;
         return item;
        });
     
        this.setState({
         items: [].concat(updatedItems)
         });
      }
      deleteItem(key) {
        var filteredItems = this.state.items.filter(function (item) {
          return (item.key !== key);
        });
       
        this.setState({
          items: filteredItems
        });
      }

      render() {
        return (
          <div className="todoListMain">
            <div className="header">
              <form onSubmit={this.addItem}>
                <input ref={(a) => this._inputElement = a} 
                        placeholder="enter task">
                </input>
                <button type="submit">add</button>
              </form>
            </div>
            <ToDoItems entries={this.state.items}
                      delete={this.deleteItem}  onItemCompleted={this.markItemCompleted}/>
          </div>
        );
      }
}  
export default TodoList;