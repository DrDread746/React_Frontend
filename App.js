function App() {
  return (
    <div className = "App">
      <div className = "title">
          <p>Phisher.io</p>
      </div>
      <div className="description">
        <p>lorem ipsum etc etc short description..</p>
      </div>
      <div className="wrapper">
          <div className="nav-btn">
            <button className="link-btn">Check Links</button>
            <button className="sms-btn">Check Messages</button>
          </div>
        <div className="container">
          <input type="text" placeholder="Enter Link Here..." className="link-field"></input>
          <button className="enter-btn">Enter</button>
        </div>
      </div>
    </div>
  );
}
export default App;
