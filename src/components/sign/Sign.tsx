import CustomInput1 from "../commen/input/CustomInput1"

const Sign = () => {
    return (
        <div className="flex h-screen items-center text-white  justify-center   ">
            <div className="w-96 min-h-5 bg-blue-600/50 rounded-2xl p-4 ">
                <h1 className="font-bold text-center ">sign now !</h1>
                <CustomInput1 onSubmit={alert} text="phonenumber"/>
                <CustomInput1 onSubmit={alert } text="code"/>
            </div>
        </div>
    )
}

export default Sign