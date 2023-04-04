import Pedro from '../img/pedro.jpeg'

export const About = () => {
    return (
        <div className="mx-[80px] border-black border-2">
            <div className="flex justify-center">
                <img className="w-[50%] border-r-black border-b-black border-2 object-cover" src={Pedro} alt="" />
                <label className="text-[45px] w-[50%] font-frank font-regular w-[50%] p-[25px]">
                    Ainda assim, existem dúvidas a respeito de como o surgimento do
                    comércio virtual auxilia a preparação e a composição dos conhecimentos
                    estratégicos para atingir a excelência. Ainda assim, existem dúvidas a
                    respeito de como o surgimento do comércio virtual auxilia a preparação
                    e a composição dos conhecimento estratégicos para atingir a
                </label>
            </div>

        </div>
    )
}