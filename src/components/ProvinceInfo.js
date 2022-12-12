import { useEffect, useState } from 'react';

const DetailedProvinceInfo = ({ province }) => {
  const [activeCases, setActiveCases] = useState(null);
  const [cumulativeDeaths, setCumulativeDeaths] = useState(null);
  const [totalHospitalizations, setHospitalizations] = useState(null);

  useEffect(() => {
    fetch(`https://api.opencovid.ca/timeseries?loc=${province.code}`)
      .then(res => {
        return res.json()
      })
      .then(data => {
      data = data.data
        setActiveCases(data.cases[data.cases.length-1].value)
        setCumulativeDeaths(data.deaths[data.deaths.length-1].value)
        setHospitalizations(data.hospitalizations[data.hospitalizations.length-1].value)
        console.log(totalHospitalizations)
      });
  }, [province.code]);

  return (
    <div className="detailed_province_info">
      <h1 className="province_name">{province.name}</h1>

      <div className="grid">
        <div className="card">
          {activeCases != null&& <h1>{activeCases.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}</h1>}
          {activeCases == null && <h1>Loading...</h1>}
          <h3 style={{color: "white"}}>Total Cases</h3>
        </div>
        <div className="card">
          {cumulativeDeaths != null && <h1>{cumulativeDeaths.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}</h1>}
          {cumulativeDeaths == null && <h1>Loading..</h1>}
          <h3 style={{color: "white"}}>Total Deaths</h3>
        </div>
        <div className="card">
          {totalHospitalizations != null && <h1>{totalHospitalizations.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}</h1>}
          {totalHospitalizations == null && <h1>Loading...</h1>}
          <h3 style={{color: "white"}}>Hospitalizations</h3>
        </div>
      </div>
      
      <h1 style={{marginTop: "1em", color: "black"}}>Resources:</h1>
      {province.resources.map((resource) => (
       <h2><a href={resource.url}>{resource.description}</a></h2>
      ))}
    </div>
  );
}
 
export default DetailedProvinceInfo;