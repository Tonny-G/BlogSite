import {Link} from "react-router-dom"

const Header =()=>{
    return(
        <div className="header-container">
            <h1 className="header-title">Tonny's Blogsite</h1>
            <div className="header-sub">
                <Link className="header-buttons" to={"/"}>My blog</Link>
                <Link className="header-buttons" to={"/author"}>About the Author</Link>
            </div>
        </div>
    );
}
export default Header;