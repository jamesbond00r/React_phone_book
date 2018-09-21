
const buttonSyle ={
  border: 'red',
  backgroundColor: 'orange',
  fontSize: '25px'
    
};

const pText ={
  color: 'red',
  size: '25px'
}

const look ={
  color: 'blue',
  size: '25px'
}

let contacts = [{
  id: 1,
  name: 'Rob',
  Phone: '785 555 5555',
},{
  id: 2,
  name: 'Amy',
  Phone: '785 777 5555',
},{
  id: 3,
  name: 'Roger',
  Phone: '785 888 5555',
},{
  id: 4,
  name: 'Jake',
  Phone: '785 999 5555',
} ]


class App extends React.Component{
  render() {
      return(
        <div>
          <h1>Contact List</h1>
          <ContactsList contacts={this.props.contacts}/>
          
         
        </div>
    )
  }
};

class ContactsList extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      search: '',
      contacts: props.contacts
      
    };
  }
    updateSearch(event){
      this.setState({search: event.target.value.substr(0,20)});
    }
  
  addContact(event){
    event.preventDefault();
    let name = this.refs.name.value;
    let Phone = this.refs.Phone.value;
    let id = Math.floor((Math.random()*100) +1);
    this.setState({
      contacts: this.state.contacts.concat({id, name, Phone})
    })
  }
  
  render(){
    let filteredContacts = this.state.contacts.filter(
      (contact) =>{
        return contact.name.toLowerCase().indexOf(this.state.search) !== -1;
      }
    );
      return(
        <div>
          <input type="text" placeholer="Search"
            value={this.state.search}
            onChange={this.updateSearch.bind(this)}/>
          <p style={look}>Search</p>
          <form onSubmit={this.addContact.bind(this)}>
            <input type="text" ref="name" /><p style={pText}>Name</p>
            <input type="text" ref="Phone" /><p style={pText}>Number</p>
            <button type="submit" style={buttonSyle}> Add New Contact</button>
          </form>
      <ul>
          {filteredContacts.map((contact)=> {
            return <Contact contact={contact}
                     key={contact.id} />
          })
         
            }
       </ul>
          
          </div>
     )
  }
}

class Contact extends React.Component{
  render(){
      return(
        <li> 
          {this.props.contact.name}-{this.props.contact.Phone}
        </li>
     )
  }
}






ReactDOM.render(
  <App contacts={contacts} />,
  document.getElementById('app')
);

