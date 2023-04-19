const Button = (props) => {
  //  Write your code here.
  const { className, buttonText } = props;
  return <button className={`${className}`}> {buttonText} </button>;
};

const element = (
  //  Write your code here.
  <div>
    <h1>Social Buttons</h1>
    <div className="buttonContainer">
      <Button className="like-button" buttonText="Like" />
      <Button className="comment-button" buttonText="Comment" />
      <Button className="share-button" buttonText="Share" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
