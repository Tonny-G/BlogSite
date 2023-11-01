import Header from "../components/Header"

const AuthorPage=()=> {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="innerContainer">
          <h2 className="page-title"> About the Author:Tonny</h2>
          <img src="./img/header.jpg" className="author-image" alt="Author's potrait" />
          <div className='author-info'>
            <p className='author-info-content'>I started coding in year three of my undergraduate studies persuing computer science</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthorPage