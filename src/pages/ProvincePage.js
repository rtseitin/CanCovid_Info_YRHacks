import { useParams } from 'react-router-dom';
import DetailedProvinceInfo from '../components/ProvinceInfo';
import NotFound from './NotFound';

const ProvincePage = ({ information }) => {
  const { provinceCode } = useParams();

  const province = information.filter((province) => province.code === provinceCode);

  return (
    <div className="province_page">
      {province.map((province) => (
        <DetailedProvinceInfo province={province} key={province.id}/>
      ))}
      {Object.keys(province).length === 0 && <NotFound/>}
    </div>
  );
}
 
export default ProvincePage;