import { useEffect } from "react"

const ChangeTitle = () => {
    useEffect(() => {
        const titles = ['Bem-vindo', 'a', 'minha', 'primeira', 'crud', '#neverStorLearning'];
        let index = 0

        const interval: any = setInterval(() => {
            document.title = titles[index]
            index = (index + 1) % titles.length
        },300)

        return () => clearInterval(interval)
    },[])

    return null
}


export default ChangeTitle