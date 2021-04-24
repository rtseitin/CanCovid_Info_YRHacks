import { useHistory } from 'react-router-dom';

const ProvinceInfo = ({ name, provinceCode }) => {
  const history = useHistory();

  const handleClick = () => {
    history.push(`/info/${provinceCode}`)
  }

  return (
    <div className="province_info">
      <h1 onClick={handleClick}>{ name }</h1>
    </div>
  );
}
 
export default ProvinceInfo;