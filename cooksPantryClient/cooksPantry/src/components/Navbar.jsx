import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/"><button>Home</button></Link>
                </li>
                <li>
                    <Link to="/fridge"><button>Fridge</button></Link>
                </li>
                <li>
                    <Link to="/freezer"><button>Freezer</button></Link>
                </li>
                <li>
                    <Link to="/pantry"><button>Pantry</button></Link>
                </li>
                <li>
                    <Link to="/cupboard"><button>Cupboard</button></Link>
                </li>
                <li>
                    <Link to="/total"><button>Total Inventory</button></Link>
                </li>
                <li>
                    <Link to="/dish"><button>Dishes</button></Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;