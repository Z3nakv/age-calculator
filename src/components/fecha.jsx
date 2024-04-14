function GetDate({ name, min, max, place, handleChange, value, alert, date }) {

    return (
        <div className="flex flex-col gap-2 m-auto md:m-0">

            <label className={`text-smokeyGrey font-bold uppercase tracking-widest ${alert && !date ? 'text-lightRed' : ''}`}>
                { name }
            </label>

            <input type="number" 
            value={name === 'month' ? value : null}
            name={name}
            onChange={ handleChange }
            placeholder={place} 
            min={min} 
            max={max} 
            className={`text-3xl font-bold border-2 border-lightGrey py-3 px-3 pr-2 
            w-28 rounded-xl md:w-32 ${alert && !date ? 'border-lightRed' : ''}`}/>
            {alert && !date ? <p className="text-lightRed text-sm italic">This field is required</p> : null}
        </div>
    )
}

export default GetDate;