import { FunctionComponent } from 'react';
import { CountryType } from '../types';

interface ICountryProps {
    country: CountryType;
}

/* function Country(props: ICountryProps) {
    return (
        <div>
            
        </div>
    );
} */

const Country: FunctionComponent<ICountryProps> = (props) => {
    const {country} = props;
    
    return (
        <h3>
            {country.name.common} - {country.capital}
        </h3>
    )
}

export default Country;