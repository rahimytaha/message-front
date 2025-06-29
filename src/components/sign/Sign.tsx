import { useNavigate } from "react-router"
import CustomInput1 from "../commen/input/CustomInput1"
import { useState } from "react"

const Sign = () => {
    const navigate = useNavigate()
    const [isCode, setIsCode] = useState(false)
    return (
        <div className="flex h-screen items-center text-white  justify-center   ">
            <div className="w-96 min-h-5 bg-blue-600/50 rounded-2xl p-4 ">
                <h1 className="font-bold text-center ">sign now !</h1>
                <CustomInput1 onSubmit={() => setIsCode(true)} text="phonenumber" />
                {isCode && <CustomInput1 onSubmit={() => navigate("/home")} text="code" />}
            </div>
        </div>
    )
}

export default Sign