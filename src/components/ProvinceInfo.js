import { useEffect, useState } from 'react';

const DetailedProvinceInfo = ({ province }) => {
  const [activeCases, setActiveCases] = useState(null);
  const [cumulativeDeaths, setCumulativeDeaths] = useState(null);
  const [recoveredCases, setRecoveredCases] = useState(null);

  useEffect(() => {
    const yesterdayDate = new Date().getTime() - 1000 * 60 * 60 * 24;
    const formattedDate = new Date(yesterdayDate).toISOString().split('T')[0];
    console.log(formattedDate)
    fetch(`https://api.opencovid.ca/timeseries?loc=${province.code}&after=${formattedDate}`)
      .then(res => {
        return res.json()
      })
      .then(data => {
        if (data.active[0].active_cases === 0) {
          setActiveCases(0)
        } else {
          setActiveCases(data.active[0].active_cases)
        }

        if (data.mortality[0].cumulative_deaths === 0) {
          setCumulativeDeaths(null)
        } else {
          setCumulativeDeaths(data.mortality[0].cumulative_deaths)
        }

        if (data.mortality[0].cumulative_recovered === 0) {
          setRecoveredCases(null)
        } else {
          setRecoveredCases(data.recovered[0].cumulative_recovered)
        }
      });
  }, []);

  return (
    <div className="detailed_province_info">
      <h1 className="province_name">{province.name}</h1>

      <div className="grid">
        <div className="card">
          {activeCases && <h1>{activeCases.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}</h1>}
          {!activeCases && <h1>0</h1>}
          <h3 style={{color: "white"}}>Total Cases</h3>
        </div>
        <div className="card">
          {cumulativeDeaths && <h1>{cumulativeDeaths.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}</h1>}
          {!cumulativeDeaths && <h1>0</h1>}
          <h3 style={{color: "white"}}>Total Deaths</h3>
        </div>
        <div className="card">
          {recoveredCases && <h1>{recoveredCases.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}</h1>}
          {!recoveredCases && <h1>0</h1>}
          <h3 style={{color: "white"}}>Recovered Cases</h3>
        </div>
      </div>
      
      <h1 style={{marginTop: "1em", color: "black"}}>Resources:</h1>
      {province.resources.map((resource) => (
       <a href={resource.url}><h2>{resource.description}</h2></a>
      ))}
    </div>
  );
}
 
export default DetailedProvinceInfo;