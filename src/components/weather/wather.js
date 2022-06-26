
import React, { useEffect, useState } from 'react';



const Wather = () => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://api.openweathermap.org/data/2.5/weather?lat=45.03&lon=38.98&appid=f38baa7be47fbcc8de97b48159075900')
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])
    if (error) {
        return <div>Ошибка: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Загрузка...</div>;
    } else {
        const logo = `https://openweathermap.org/img/wn/${items.weather[0].icon}@2x.png`
        return (
            <>
                <div>
                <img src={logo} alt="logo" />
                <p>Cостояние погоды: {(items.weather[0].description).toUpperCase()}</p>
                </div>
                <p>Температура: {(items.main.temp - 273).toFixed()}&#176;</p>
                <p>Влажность: {items.main.humidity}%</p>
                <p>Давление: {items.main.pressure}hPa</p>
                <p>Видимость: {(items.visibility / 1000).toFixed(1)} км.</p>
                <p>Влажность: {items.main.humidity}</p>
            </>


    );
    }

};

export default Wather;