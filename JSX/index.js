const page = (
    <nav>
        <h1>John's Shop</h1>
        <ul>
            <li>Menu</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
)

// function Timer() {
    // const element = (
    //     <div>
          
    //       <h2>It is {new Date().toLocaleTimeString()}.</h2>
    //     </div>
    //   )
      
    // }
    // setInterval(Timer, 1000);

// // export default Timer
// const timer = Timer()


//render the content

const test1 =(
    <div>
        <h1>Fun fatcs about React</h1>
        <ul>
            <li>Was released first in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100k stars on github</li>
            <li>is maintained by Facebool</li>
            <li>Powers tousand of enterprice apps. including mobile apps</li>
        </ul>
    </div>
)
// Chhallenge one.
ReactDOM.render(
    // element,
    page,
    document.getElementById("root")// the root is the id in the html file
    )
 ReactDOM.render(
    test1,
    document.getElementById('test1')
 )