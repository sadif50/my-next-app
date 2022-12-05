import Link from "next/link";

const Country = ({country}) => {
    return (
        <div className="border bg-slate-50 p-5 text-black rounded-lg relative">
            <h2 className="text-2xl text-center font-semibold mb-4">Country: {country.name.common}</h2>
            <img src={country.flags.png} className="w-full shadow mb-4"/>
            <p className="font-semibold text-center">
                {country.name.official}
            </p>
            <p className="text-center mb-8">
                Capital: {(country?.capital) ? (country?.capital) : "No Capital"}
            </p>
            <Link href={`/CountryDetails/${country?.ccn3}`}><button className="absolute bottom-0 left-0 right-0 btn btn-info text-white">See Datils</button></Link>
        </div>
    );
};

export default Country;