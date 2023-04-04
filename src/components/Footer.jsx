import Rock from '../img/rock.png'
import Arrow from '../img/downarrow.png'
import Spin from '../img/designrocks.svg'

export const Footer = () => {
    return (
        <div className="">
            <div className="flex justify-between mt-[100px] mx-[80px]">
                <div>
                    <label className="text-[20px] font-albert font-bolds">Oie! :) <br /></label>
                    <label className="w-[50%] text-[20px] font-albert font-regular ">
                        Que tal um café? <br />
                        contactpedroalighieri@gmail.com
                    </label>
                    <div className="mt-[48px]">
                        <div className="flex">
                            <img className="h-[38px] aspect-square mr-[16px]" src={Arrow} alt="" />
                            <label className="font-albert font-bold text-[35px] self-start">INSTAGRAM</label>
                        </div>
                        <div className="flex">
                            <img className="h-[38px] aspect-square mr-[16px]" src={Arrow} alt="" />
                            <label className="font-albert font-bold text-[35px] self-center">BEHANCE</label>
                        </div>
                    </div>

                    <label className="font-albert font-bold text-[18px] mt-96">2023 - Pedro Alighieri</label>
                </div>
                <img className="w-[373px]" src={Rock} alt="" />
                <img className="right-[5%] bottom-[-1350px] absolute animate-spin w-[326px] aspect-square" src={Spin} alt="" /> 
            </div>

        </div>
    )
}