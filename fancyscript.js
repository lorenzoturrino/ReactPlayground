ReactDOM.render(
        <h1>Hello, world!</h1>,
        document.getElementById('example')
      );

// var commentData = [
//   {id: 1, author: "dude 11", varThatWillBeTheText: 'halo'},
//   {id: 2, author: "dude 12", varThatWillBeTheText: 'halo1'},
//   {id: 3, author: "dude 13", varThatWillBeTheText: 'halo2'}
// ];

var CommentBox = React.createClass({
  getInitialState: function() {
    return {data: []};
  },
  loadUsers: function() {
    console.log('calling loadUsers', this.props.url);
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
      <div className="commentBox">
        <h3>Hello, world! I am a CommentBox and these are my minions</h3>
        <CommentList data={this.state.data} />
      </div>
    );
  }
});


//building it with author as a prop, and the text as a child. This is arbitrary and I can struct the data the way i want it, right?

var CommentList = React.createClass({
  render: function() {
    var commentNodes = this.props.data.map(function(user) {
      return (
        <Comment author={user.login} key={user.id}>
          {user.avatar_url}
        </Comment>
      );
    });
    return (
      <div className="commentList">
        {commentNodes}
      </div>
    );
  }
});


var Comment = React.createClass({
  render: function() {
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
          <img src={this.props.children} height="42" width="42" />
        </h2>
      </div>
    );
  }
});


ReactDOM.render(
  <CommentBox url="https://api.github.com/users" />,
  document.getElementById('content')
);



var CommentForm = React.createClass({
  render: function() {
    return (
      <div className="commentForm">
        Hello, world! I am a CommentForm.
      </div>
    );
  }
});
