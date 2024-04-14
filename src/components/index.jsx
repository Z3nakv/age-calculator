import { useState } from "react";
import AgeResult from "./AgeResult";
import ButtonSubmit from "./button";
import GetDate from "./fecha";

function AgeCalculator() {

    const [value, setValue] = useState({day:'', month:'', year:''});
    const [month, setMonth] = useState(null);
    const [limitDays, setLimitDays] = useState(null);
    const [result, setResult] = useState({});
    const [alert, setAlert] = useState(false);

    function handleChange(e) {

        if(e.target.name === 'month'){
            const days = e.target.value / 2 === 1 ? 28 
            : e.target.value % 2 !== 0 ? 31 : 30
            setLimitDays(days) 
        }

        const aux = {...value}
        aux[e.target.name] = e.target.name === 'month' ?  e.target.value - 1 : e.target.value; 
        setValue(aux);
    }

    function handleSubmit(e) {
        e.preventDefault();

        console.log(value)

        const isEmpty = Object.values(value).every(value => value !== '');
        if(!isEmpty){
            setAlert(true);
        }else{
            setAlert(false);
        }

        const birthday = Object.values(value);
        const birthdayObj = new Date(birthday.reverse().join('/'));
        const difference = Date.now() - birthdayObj;
        const ageDiff = new Date(difference);
        const year = ageDiff.getUTCFullYear() - 1970;
        const month = ageDiff.getUTCMonth();
        const day = ageDiff.getUTCDay() - 1; 
        const aux = {...result};
        setResult({...aux,year, month, day})
    }

    return (
        <div className="bg-white rounded-3xl rounded-br-[8rem] w-[29rem] m-auto py-16 px-10 md:w-[45rem] md:h-[35rem]">
            <form className="h-full flex flex-col gap-20 justify-around relative md:gap-10" onSubmit={ handleSubmit }>
                <div className="flex gap-5 md:gap-7">
                    <GetDate name={'day'} place={'DD'} min={'1'} max={limitDays || 31} handleChange={handleChange} alert={alert} date={value.day} />
                    <GetDate value={month} name={'month'} place={'MM'} min={'1'} max={'12'} handleChange={handleChange} alert={alert} date={value.month} />
                    <GetDate name={'year'} place={'YYYY'} min={'1900'} max={'2024'} handleChange={handleChange} alert={alert} date={value.year} />
                </div>
                <div>
                    <ButtonSubmit />
                </div>
                <div>
                    <AgeResult result = { result } />
                </div>
            </form>
        </div>
    )
}

export default AgeCalculator