ReactDOM.render(
        <h1>Hello, world!</h1>,
        document.getElementById('example')
      );

var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        <h3>Hello, world! I am a CommentBox and these are my minions</h3>
        < CommentList />
        < CommentForm />
      </div>
    );
  }
});

var CommentList = React.createClass({
  render: function() {
    return (
      <div className="commentList">
        Hello, world! I am a CommentList. Here are some comments.
        <Comment author="Pete Hunt">This is one comment</Comment>
        <Comment author="Jordan Walke">This is *another* comment</Comment>
      </div>
    );
  }
});

var CommentForm = React.createClass({
  render: function() {
    return (
      <div className="commentForm">
        Hello, world! I am a CommentForm.
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
        </h2>
        {this.props.children}  //oh look, inline comments get dumped in as raw html?. hello world! <img src="http://i1.kym-cdn.com/photos/images/newsfeed/000/695/480/83a.gif" alt="obligatory dickbutt" />
      </div>
    );
  }
});


ReactDOM.render(
  <CommentBox />,
  document.getElementById('content')
);
