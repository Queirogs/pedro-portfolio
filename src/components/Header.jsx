import logo from '../img/main_logo.png'

export const Header = () => {

    return (
        <div className="px-[80px] py-[50px]">

            <div className="flex justify-between mb-[25px]">
                <img src={require("../img/main_logo.png")} alt="" className="w-[125px] h-[59px]" />
                <div className="flex justify-between w-96 text-[16px]">
                    <a href="/contact">CONTATO</a>
                    <a href="/design">DESIGN</a>
                    <a href="/gravuras">GRAVURAS</a>
                    <a href="/about">SOBRE</a>
                </div>
            </div>

            <div className="text-[15px]">
                Ainda assim, existem dúvidas a respeito de como o surgimento do comércio virtual
                auxilia a preparação e a composição dos conhecimentos estratégicos para atingir a excelência.
                Ainda assim, existem dúvidas a respeito de como o surgimento do comércio virtual auxilia
                a preparação e a composição dos conhecimentoestratégicos para atingir a excelência.
                Ainda assim, existem dúvidas a respeito de como o surgimento do comércio virtual
            </div>
        </div>
    )
}