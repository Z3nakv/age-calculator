import buttonClick from '../images/icon-arrow.svg';

function ButtonSubmit() {
    return (
        <div className="relative">
            <hr className=" h-[3px] bg-lightGrey m-auto" />
            <button className="grid place-content-center bg-purple hover:bg-black rounded-full h-20 w-20 absolute left-[calc(50%-40px)] top-[-40px] 
            md:right-0 md:left-auto">
                <img className="h-8" src={buttonClick} alt="button" />
            </button>
        </div>
    )
}

export default ButtonSubmit;