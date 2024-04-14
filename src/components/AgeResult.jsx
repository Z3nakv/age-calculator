function AgeResult({ result }) {
    
    return (
        <div className="flex flex-col gap-3">
            <div className="text-[5rem] font-800 italic leading-none"><span className="text-purple">{result.year ? result.year : '--'}</span> years</div>
            <div className="text-[5rem] font-800 italic leading-none"><span className="text-purple">{result.month ? result.month : '--'}</span> months</div>
            <div className="text-[5rem] font-800 italic leading-none"><span className="text-purple">{result.day ? result.day : '--'}</span> day(s)</div>
        </div>
    )
}

export default AgeResult;