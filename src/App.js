import React, { useEffect, useState } from 'react';
import './assets/scss/section/App.scss';  // 변경된 부분
import ChartCard from './ChartCard';

const App = () => {
  const [chartData, setChartData] = useState([]);
  const [chartSubName, setChartSubName] = useState('melonconcert');
  const [chartName, setChartName] = useState('pychart_M_concert10');
  const [selectedDate, setSelectedDate] = useState('2024-05-03');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `https://raw.githubusercontent.com/HwangInJi/cultureChart/main/${chartSubName}/${chartName}${selectedDate}.json`;
        const response = await fetch(url);
        const jsonData = await response.json();
        setChartData(jsonData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching the data', error);
        setError('데이터를 가져오는 데 오류가 발생했습니다.');
        setLoading(false);
      }
    };

    fetchData();
  }, [chartSubName, chartName, selectedDate]);

  const handleSubNameChange = (event) => {
    const value = event.target.value;
    setChartSubName(value);

    switch (value) {
      case 'melonconcert':
        setChartName('pychart_M_concert10');
        break;
      case 'melonexhibiton':
        setChartName('pychart_M_exhibiton10');
        break;
      case 'melonmusical':
        setChartName('pychart_M_musical10');
        break;
      case 'ticketconcert':
        setChartName('pychart_T_concert10');
        break;
      case 'ticketexhibiton':
        setChartName('pychart_T_exhibiton10');
        break;
      case 'ticketmusical':
        setChartName('pychart_T_musical10');
        break;
      case 'yes24concert':
        setChartName('pychart_Y_concert10');
        break;
      case 'yes24exhibiton':
        setChartName('pychart_Y_exhibiton10');
        break;
      case 'yes24musical':
        setChartName('pychart_Y_musical10');
        break;
      default:
        setChartName('pychart_M_concert10');
    }
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  return (
    <div className="wrapper">
      <div className='chart__title'>
        <h1>🏆 Culture Chart 🏆</h1>
      </div>

      <div className='cont__label'>
        <label className='cont01'>
          <p>📚 사이트 콘텐츠</p>
          <select value={chartSubName} onChange={handleSubNameChange}>
            <option value="melonconcert">멜론 콘서트</option>
            <option value="melonexhibiton">멜론 전시</option>
            <option value="melonmusical">멜론 뮤지컬</option>

            <option value="ticketconcert">티켓링크 콘서트</option>
            <option value="ticketexhibiton">티켓링크 전시</option>
            <option value="ticketmusical">티켓링크 뮤지컬</option>

            <option value="yes24concert">예스24 콘서트</option>
            <option value="yes24exhibiton">예스24 전시</option>
            <option value="yes24musical">예스24 뮤지컬</option>
          </select>
        </label>
        <label className='cont02'>
          <p>📅 날짜</p>
          <input type="date" value={selectedDate} onChange={handleDateChange} />
        </label>
      </div>

      {loading ? (
        <p>로딩 중...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <ul className="stage">
          {chartData.map((data, index) => (
            <ChartCard
              key={index}
              rank={data.rank}
              title={data.title}
              Venue={data.Venue}
              ImageURL={data.ImageURL}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;
