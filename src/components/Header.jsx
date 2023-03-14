export const Header = () => {
    return (
        <div className="px-[80px] py-[50px] border-x-black border-t-black border-2">

            <div className="flex justify-between mb-[25px]">
                <label className="text-[18px] font-albert font-bold">PEDRO ALIGHIERI</label>
                <div className="flex justify-between w-[40%] text-[16px] font-albert font-bold">
                    <a href="/contact">CONTATO</a>
                    <a href="/design">DESIGN</a>
                    <a href="/gravuras">GRAVURAS</a>
                    <a href="/about">SOBRE</a>
                </div>
            </div>

            <div className="text-[20px] font-frank">
                É um artista e designer brasileiro, focado em product design nas áreas de UI, UX e Design System. <br />
                Apaixonado por arte, tecnologia, um bom café e potiguar de coração. <br />
                Desenvolveu aplicações para Serpro, Embrapa, Universidade de Brasília entre outros.
            </div>
        </div>
    )
}