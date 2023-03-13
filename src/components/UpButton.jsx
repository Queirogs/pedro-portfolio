export const UpButton = () => {

    function rollUp() {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <div class="flex justify-end">
            <div onClick={rollUp} className="text-[40px] border-black border-2 h-[62px] w-[199px] fixed flex justify-center top-[50%] float-left">
                UP/CIMA
            </div>
        </div>
    )
}