import { useNavigate } from "react-router"

type Tdata = {
    id: number,
    username: string,
    icon: string,
    lastMessage: string
}
type Props = {
    data:Tdata
}

const ListBox = ({data}: Props) => {
    const navigate = useNavigate()
  return (
    <div onClick={()=>navigate(`/home/${data.id}`)} className="flex cursor-pointer  gap-2 m-2 bg-blue-500/50  p-2 rounded-xl ">
        <div>
            <img className="h-12  " src={data.icon} alt="" />
        </div>
        <div>
            <h4 className="font-bold ">{data.username}</h4>
            <h6 >{data.lastMessage}</h6>
        </div>

    </div>
  )
}

export default ListBox