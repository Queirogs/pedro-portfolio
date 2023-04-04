export const Design = () => {
    return (
        <>
            <div className="mx-[80px] grid grid-cols-2 gap-[35px]">
                <div className="border-black border-2 pt-[35px] pr-[35px] grow">
                    <img className="object-cover" src="https://cdn.ligadosgames.com/imagens/shaders-minecraft-og.jpg" alt="" />
                    <div className="float-right mt-[27px] mb-[43px]">
                        <label className="text-[35px] font-albert font-bold">CAMINHOS</label>
                        <br />
                        <label className="font-frank text-[35px] float-right">2023</label>
                    </div>
                </div>

                <div className="border-black border-2 grid grid-cols-2">
                    <div className="pt-[62px] ml-[35px]">
                        <label className="text-[35px] font-albert font-bold">CAMINHOS</label>
                        <br />
                        <label className="font-frank text-[35px]">2023</label>
                    </div>
                    <img className="h-[70%] object-cover" src="https://cdn.ligadosgames.com/imagens/shaders-minecraft-og.jpg" alt="" />
                </div>

                <div className="col-span-2 border-black border-2 pb-[35px] grid grid-cols-3">
                    <div className="">
                        <label className="text-[35px] font-albert font-bold">CAMINHOS</label>
                        <label className="text-[35px] font-frank">2023</label>
                    </div>

                    <img className="col-span-2 w-[840px]" src="https://cdn.ligadosgames.com/imagens/shaders-minecraft-og.jpg" alt="" />

                </div>

                <div className="border-black border-2 pt-[35px] pr-[35px] grow">
                    <img className="object-cover" src="https://cdn.ligadosgames.com/imagens/shaders-minecraft-og.jpg" alt="" />
                    <div className="float-right mt-[27px] mb-[43px]">
                        <label className="text-[35px] font-albert font-bold">CAMINHOS</label>
                        <label className="font-frank text-[35px] float-right">2023</label>
                    </div>
                </div>

                <div className="border-black border-2 grid grid-cols-2 pl-[35px]">
                    <div className="pt-[62px]">
                        <label className="text-[35px] font-albert font-bold">CAMINHOS</label>
                        <label className="font-frank text-[35px]">2023</label>
                    </div>
                    <img className="h-[350px] object-cover" src="https://cdn.ligadosgames.com/imagens/shaders-minecraft-og.jpg" alt="" />
                </div>

            </div>
        </>
    )
}