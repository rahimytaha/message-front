import { Field, Form, Formik } from 'formik'
import { GrFormNextLink } from "react-icons/gr";
type Props = {
    onSubmit: (data: string) => void,
    text: string
}

const CustomInput1 = ({ onSubmit, text }: Props) => {
    return (
        <Formik initialValues={{in:""}} onSubmit={e=>onSubmit(e.in)}>
            <Form className='relative'>
                <Field className="outline-0 border-4 rounded-xl !h-[40px]  px-2 w-full mb-2  mt-4 "placeHolder={text} name="in"/>
                <button className='bg-white rounded-full absolute right-2  top-[23px]  cursor-pointer   ' ><GrFormNextLink className='text-blue-500/50  ' size={25 } /></button>
            </Form>
        </Formik>
    )
}

export default CustomInput1