//// Conventions to follow when makeing a component
// use pascal case not  to make functions
/* call the component name using the the html element 
not the functional way e.g <ComponentName /> not ComponentName().
*/
// the element in the compont must bbe in one parent element
function Header(){
    <h1>Fun fatcs about React</h1>
}
function ComponentName() {
    return(
        <div>
            <Header />
            <ul>
                <li>Was released first in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100k stars on github</li>
                <li>is maintained by Facebool</li>
                <li>Powers tousand of enterprice apps. including mobile apps</li>
            </ul>
         </div>
    )
}

ReactDOM.render(
    <ComponentName />,
    document.getElementById('root')
)