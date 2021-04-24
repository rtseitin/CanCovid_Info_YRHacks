import { useHistory } from 'react-router-dom';
import frontPageSVG from '../assets/front_page.svg';

const Home = () => {

  const history = useHistory();

  const handleClick = () => {
    history.push('/info');
  }

  return (
    <div className="home">
      <div>
        <img className="front_page_svg" style={{marginRight: "10px", float: "right"}} src={frontPageSVG} alt="man looking at space"/>
        <div className="text">
          <h1>Information About Covid-19!</h1>
          <p>We believe that everyone deserves the right to have local Covid-19 information easily accessible to them. We make that happen by providing important provincial information to all Canadians!</p>
          <button onClick={handleClick}>Click here for Info</button>
        </div>
      </div>
    </div>
  );
}
 
export default Home;