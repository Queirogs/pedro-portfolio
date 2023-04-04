import Arrow from '../img/uparrow.svg'

export const UpButton = () => {

    function rollUp() {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <div class="flex justify-end">
            <div onClick={rollUp} className="border-black border-2 w-[81px] bg-black aspect-square fixed flex justify-center items-center top-[50%] float-left">
                <img className="aspect-square w-[46px] aspect-square" src={Arrow} alt="" />
            </div>
        </div>
    )
}