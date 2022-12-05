import React from 'react';

const CountryDetails = ({ country }) => {
    return (
        <div className='w-11/12 mx-auto my-16'>
            <div className='bg-slate-50 p-10 text-black rounded'>
                <div className="pb-10 text-center text-orange-600">
                    <h1 className="text-6xl">Details About {country[0].name.common}</h1>
                    <hr className='mt-4'/>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 md:gap-16'>
                    <img src={country[0].flags.png} alt="" className='w-full rounded' />
                    <div>
                    <h2 className='text-4xl font-bold mb-4'>Name: {country[0].name.common}</h2>
                    <h4 className='text-2xl font-semibold mb-4'>Official Name: {country[0].name.official}</h4>
                    <p className='text-xl font-semibold mb-4'>Capital: {country[0].capital}</p>
                    <p className='text-xl font-semibold mb-4'>Time Zone: {country[0].timezones}</p>
                    <p className='text-xl font-semibold mb-4'>Region: {country[0].region}</p>
                    <p className='text-xl font-semibold mb-4'>Populations: {country[0].population}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};


export const getStaticProps = async (context) => {
    const { params } = context;

    const res = await fetch(`https://restcountries.com/v3.1/alpha/${params?.CountryDetails}`);
    const data = await res.json();
    return {
        props: {
            country: data
        }
    }
}

export const getStaticPaths = async () => {
    const res = await fetch('https://restcountries.com/v3.1/all');
    const countries = await res.json();

    const paths = countries.map(country => {
        return {
            params: {
                CountryDetails: `${country.ccn3}`
            }
        }
    });

    return {
        paths,
        fallback: false
    }
}
export default CountryDetails;