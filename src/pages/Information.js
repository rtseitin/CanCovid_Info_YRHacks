import ProvinceInfo from "../components/Province";

const InformationPage = ({ information }) => {
  return (
    <div className="information_page">
      <h1>Select a Province/Territory</h1>
      <p>For more information</p>
      <div className="grid">
        {information.sort((a, b) => {
          return (a.name.toUpperCase() < b.name.toUpperCase()) ? -1 : (a.name.toUpperCase() > b.name.toUpperCase()) ? 1 : 0;
        }).map((province) => (
          <ProvinceInfo key={province.id} className="card" name={province.name} provinceCode={province.code}/>
        ))}
      </div>
    </div>
  );
}
 
export default InformationPage;