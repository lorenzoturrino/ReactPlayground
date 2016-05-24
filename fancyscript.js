ReactDOM.render(
        <h1>Hello, world!</h1>,
        document.getElementById('example')
      );

var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        Hello, world! I am a CommentBox and these are my minions
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
        Hello, world! I am a CommentList.
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


ReactDOM.render(
  <CommentBox />,
  document.getElementById('content')
);
