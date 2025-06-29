import ListBox from "./ListBox"

type Tdata = {
    id: number,
    username: string,
    icon: string,
    lastMessage: string
}
const ListChat = () => {
    const data: Tdata[] = [{ id: 1, username: "taha", icon: "https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png", lastMessage: "hi where were you ?" },
        { id: 1, username: "taha", icon: "https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png", lastMessage: "hi where were you ?" },
        { id: 1, username: "taha", icon: "https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png", lastMessage: "hi where were you ?" },
        { id: 1, username: "taha", icon: "https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png", lastMessage: "hi where were you ?" },
        { id: 1, username: "taha", icon: "https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png", lastMessage: "hi where were you ?" },
        { id: 1, username: "taha", icon: "https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png", lastMessage: "hi where were you ?" },
        { id: 1, username: "taha", icon: "https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png", lastMessage: "hi where were you ?" },
        { id: 1, username: "taha", icon: "https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png", lastMessage: "hi where were you ?" },
        { id: 1, username: "taha", icon: "https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png", lastMessage: "hi where were you ?" },
    ]
    return (
        <div className='w-3/12  h-screen p-2  '>
            {data.map(e=><ListBox data={e}/>)}
        </div>
    )
}

export default ListChat