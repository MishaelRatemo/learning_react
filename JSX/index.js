const page = (
    <nav>
        <h1>Bob's Bistro</h1>
        <ul>
            <li>Menu</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
)
//render the content
ReactDOM.render(
    page, 
    document.getElementById("root")// the root is the id in the html file
    )