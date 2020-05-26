import React from 'react';
import Container from '../container/Container';
import { NavLink } from 'react-router-dom';
 
const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'honeydew',
  textDecoration: 'none',
  color: 'black',
}


class Navbar extends React.Component {
  render() {
    return (
      <div>
          <Container>

            <NavLink
                to="/"
                /* set exact so it knows to only set activeStyle when route is deeply equal to link */
                exact
                /* add styling to Navlink */
                style={link}
                /* add prop for activeStyle */
                activeStyle={{
                    background: 'maroon',
                    color: 'white'
                }}
            >
                Home
            </NavLink>

                <NavLink
                    to="/About"
                    exact
                    style={link}
                    activeStyle={{
                        background: 'maroon',
                        color: 'white'
                    }}
                >
                    About
                </NavLink>

            <NavLink
                to="/chefs"
                exact
                style={link}
                activeStyle={{
                    background: 'maroon',
                    color: 'white'
                }}
            >
                Chefs
            </NavLink>

            <NavLink
                to="/chefs/new"
                exact
                style={link}
                activeStyle={{
                    background: 'maroon',
                    color: 'white'
                }}
            >
                Create a Chef
            </NavLink>

        </Container>
      </div>
    )
  }
}
 
export default Navbar;

// export default (props) => {
//     return (
//         <nav>
//             <Container>
//                 <Link to="/">Home</Link>
//                 <ul className="right">
//                     <li><Link to="/chefs">Chefs</Link> </li>
//                     <li><Link to="/chefs/new">Create A Chef</Link> </li>
//                 </ul>
//             </Container>
//         </nav>
//     )
// }