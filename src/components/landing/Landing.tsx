
import { NavLink } from 'react-router'

const Landing = () => {
    return (
        <div  className='h-screen flex items-center  '>
            <div className='w-52 h-52 bg-blue-600/50  rounded-2xl p-3.5 mx-auto '>
                <h1 className='text-center font-bold text-3xl '>hi </h1>
                <NavLink className={"rounded-2xl bg-black text-white p-2  block mx-auto mt-10 text-center   "} to={"/sign"}>Login / Sign Up</NavLink>
            </div>
        </div>
    )
}

export default Landing