ReactDOM.render(
        <h1>Hello, world!</h1>,
        document.getElementById('example')
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

ReactDOM.render(
  <UserBox url="https://api.github.com/users" />,
  document.getElementById('content')
);

///////////////////////////////////////////comments///////////////////////////////////////////

var CommentForm = React.createClass({
  getInitialState: function() {
    return {author: '', text: ''};
  },
  handleAuthorChange: function(e) {
    this.setState({author: e.target.value});
  },
  handleTextChange: function(e) {
    this.setState({text: e.target.value});
  },
  render: function() {
    return (
      <form className="commentForm">
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
        <input type="submit" value="Post" />
      </form>
    );
  }
});

ReactDOM.render(
  <CommentForm />,
  document.getElementById('commentform')
);
