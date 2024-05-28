import React, { useEffect, useState } from 'react';
import '../assets/scss/style.scss';

const Chart = () => {
    const [chartData, setChartData] = useState(null);
    const [chartSubName, setChartSubName] = useState('yes24concert');
    const [chartName, setChartName] = useState('pychart_Y_concert10');
    const [selectedDate, setSelectedDate] = useState('2024-05-03');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const url = `https://raw.githubusercontent.com/HwangInJi/cultureChart/main/${chartSubName}/${chartName}${selectedDate}.json`;
                const response = await fetch(url);
                const jsonData = await response.json();
                setChartData(jsonData);
            } catch (error) {
                console.error('Error fetching the data', error);
            }
        };

        fetchData();
    }, [chartSubName, chartName, selectedDate]);

    const handleSubNameChange = (event) => {
        const value = event.target.value;
        setChartSubName(value);

        switch (value) {
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
                setChartName('pychart_Y_concert10');
        }
    };

    const handleDateChange = (event) => {
        setSelectedDate(event.target.value);
    };

    return (
        <div className='melon__chart'>
            <h1>예스24 콘서트 순위</h1>
            <div>
                {/* <label>
                    Chart Sub Name:
                    <select value={chartSubName} onChange={handleSubNameChange}>
                        <option value="yes24concert">예스24 콘서트</option>
                        <option value="yes24exhibiton">예스24 전시</option>
                        <option value="yes24musical">예스24 뮤지컬</option>
                    </select>
                </label> */}
                <label>
                    Date:
                    <input type="date" value={selectedDate} onChange={handleDateChange} />
                </label>
            </div>
            {chartData ? (
                <div className='chart__grid'>
                    {chartData.map((item) => (
                        <div key={item.rank} className='chart__item'>
                            <h2>{item.rank}. {item.title}</h2>
                            <p>장소: {item.Venue}</p>
                            <img src={item.ImageURL} alt={item.title} className='chart__image' />
                        </div>
                    ))}
                </div>
            ) : (
                <p>Loading data...</p>
            )}
        </div>
    );
};

export default Chart;
