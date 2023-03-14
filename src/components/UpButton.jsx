import Arrow from '../img/uparrow.png'

export const UpButton = () => {

    function rollUp() {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <div class="flex justify-end">
            <div onClick={rollUp} className="border-black border-2 h-[125px] aspect-square fixed flex justify-center items-center top-[50%] float-left">
                <img className="aspect-square w-[96px] h-[96px]" src={Arrow} alt="" />
            </div>
        </div>
    )
}