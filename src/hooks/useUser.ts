import { useEffect, useState } from "react";

export function useUser() {
    const [user, setUser] = useState<{
        name : string
        avatar : string
    } | null>(null);

    useEffect(() => {
        const savedName = localStorage.getItem('username')
        const savedAvatar = localStorage.getItem('userAvatar') || 'av1';


        if (savedName) {
            setUser({
                name : savedName,
                avatar : savedAvatar
            })
        }
    }, [])

    const updateUser = (name : string, avatar : string) => {
        localStorage.setItem('username', name)
        localStorage.setItem('userAvatar', avatar)

        setUser({name, avatar})
    }

    return {user, updateUser};
}