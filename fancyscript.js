var Cell = React.createClass({
  getInitialState: function() {
    return {alive: "dead"};
  },
  handleClick: function() {
    console.log("click");
    if(this.state.alive === 'dead') {
      this.setState({alive: 'alive'});
    } else {
      this.setState({alive: 'dead'});
    }
  },
  render: function() {
    console.log("rendering", this.state);
    return (
      <td className={this.state.alive} onClick={this.handleClick}>
        Greetings
      </td>
    )
  }
});


var cellStyle = {
  backgroundColor: 'cyan'
}

var SecondCell = React.createClass({
  getInitialState: function() {
    return {style: {backgroundColor: 'yellow'}}
  },
  handleClick: function() {
    if(this.state.style.backgroundColor === 'yellow') {
      this.setState({style: {backgroundColor: 'cyan'}});
    } else {
      this.setState({style: {backgroundColor: 'yellow'}});
    }
    console.log(this.props, this.state, this);
  },
  render: function() {
    return (
      <td style={this.state.style} onClick={this.handleClick}>
        Inlineguy
      </td>
    )
  }
});

ReactDOM.render(
  <table className="mainGrid">
    <thead></thead>
    <tbody>
      <tr>
        <Cell />
        <SecondCell />
      </tr>
    </tbody>
  </table>,
  document.getElementById('hook')
);

///////////////////////////////////////////users///////////////////////////////////////////

var User = React.createClass({
  render: function() {
    return (
      <div className="user">
        <h5 className="userName"> {this.props.userName} </h5>
        <img src={this.props.avatarUrl} height="128" width="128" />
        <p />
      </div>
    );
  }
});

var UserList = React.createClass({
  render: function() {
    var userNodes = this.props.data.map(function(user) {
      return parseUser(user);
    });
    return (
      <div className="userList">
        {userNodes}
      </div>
    );
  }
});

function parseUser(user) {
  return (
    <User key={user.id} userName={user.login} avatarUrl={user.avatar_url} />
  )
};

var UserBox = React.createClass({
  getInitialState: function() {
    return {data: []};
  },
  loadUsers: function() {
    console.log('called loadUsers', this.props.url);
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  componentDidMount: function() {
   this.loadUsers();
  },
  render: function() {
    return (
      <div className="userBox">
        <h3>Hello, here is a list of github users</h3>
        <UserList data={this.state.data} />
      </div>
    );
  }
});

////uncomment to render the github profiles////

// ReactDOM.render(
//   <UserBox url="https://api.github.com/users" />,
//   document.getElementById('content')
// );

///////////////////////////////////////////comments///////////////////////////////////////////

var CommentForm = React.createClass({
  getInitialState: function() {
    return {author: '', text: ''};
  },
  handleAuthorChange: function(event) {
    this.setState({author: event.target.value});
  },
  handleTextChange: function(event) {
    this.setState({text: event.target.value});
  },
  handleSubmit: function(event) {
    event.preventDefault();
    var author = this.state.author.trim();
    var text = this.state.text.trim();
    if (!text || !author) {
      console.log("empty input, returning!");
      return;
    }
    this.props.onCommentSubmit({author: author, text: text});
    this.setState({author: '', text: ''});
  },
  render: function() {
    return (
      <form className="commentForm">
        hello {this.state.author} how are you?
        <p />
        <input
          type="text"
          placeholder="Your name"
          value={this.state.author}
          onChange={this.handleAuthorChange}
        />
        <input
          type="text"
          placeholder="Say something..."
          value={this.state.text}
          onChange={this.handleTextChange}
        />
        <input
          type="submit"
          value="Post"
          onClick={this.handleSubmit}
        />
      </form>
    );
  }
});

ReactDOM.render(
  <CommentForm />,
  document.getElementById('commentform')
);
