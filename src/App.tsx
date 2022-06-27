import axios from 'axios';
import { CountryType } from './types';
import { useState, useEffect } from 'react';
import Country from './components/Country';
import Loading from './components/Loading';

function App() {

    const [countries, setCountries] = useState<CountryType[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const getCountries = async () => {
        setLoading(true);
        try {
            const { data } = await axios.get<CountryType[]>(
                "https://restcountries.com/v3.1/all"
            );
            setCountries(data);
        } catch {
            console.log("Error");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getCountries();
    }, []);

    return (
        <div>
            <Loading loading={loading}>
            {countries.map((country, key) => {
                return (
                    <Country key={key} country={country} />
                );
            })}
            </Loading>
        </div>
    );
}

export default App;