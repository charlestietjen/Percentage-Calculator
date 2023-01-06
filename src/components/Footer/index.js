import { VscGithub, VscHome } from 'react-icons/vsc'

export const Footer = () => {
    return(
        <footer className={"horizontal-stack position-bottom"}>
            <p className={"stack-item"}>created by 💀Charles Tietjen💀</p>
            <a className={"stack-item"} href={"https://github.com/charlestietjen"} target="_blank" rel="noreferrer"><VscGithub /></a>
            <a className={"stack-item"} href={"http://charlestietjen.ca"} target="_blank" rel="noreferrer"><VscHome /></a>
        </footer>
    )
}