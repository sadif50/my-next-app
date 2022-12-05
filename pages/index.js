import Country from "../components/Country/Country";

export default function Home({ countries }) {
  return (
    <div className="w-11/12 mx-auto">
      <div className="py-10 text-center text-orange-600">
        <h1 className="text-6xl">Welcome to My Countries</h1>
      </div>
      <div className="grid grid-cols-4 gap-5">
        {
          countries.map(country => <Country key={country.ccn3} country={country}></Country>)
        }
      </div>
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch('https://restcountries.com/v3.1/all');
  const data = await res.json();
  return {
    props: {
      countries: data
    }
  }
}