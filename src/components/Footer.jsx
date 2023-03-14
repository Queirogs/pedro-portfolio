import Rock from '../img/rock.png'

export const Footer = () => {
    return (
        <div className="border-x-black border-b-black border-2">
            <div className="flex justify-between mt-[50px] mx-[80px]">
                <label className="w-[50%] text-[20px] font-albert font-extrabold ">
                    Ainda assim, existem dúvidas a respeito de como o surgimento do comércio virtual auxilia a preparação
                    e a composição dos conhecimentos estratégicos para atingir a excelência. Ainda assim, existem dúvidas
                    a respeito de como o surgimento do comércio virtual auxilia a preparação e a composição dos
                    conhecimentoestratégicos para atingir a excelência.Ainda assim, existem dúvidas a respeito de como o
                    surgimento do comércio virtual
                </label>
                <img className="w-[373px]" src={Rock} alt="" />
            </div>

        </div>
    )
}