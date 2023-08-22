import {useState} from "react";
import {logDOM} from "@testing-library/react";


function Search() {
    let [Country, setCountry] = useState([
            {name: 'Россия', selected: false},
            {name: 'США', selected: false},
            {name: 'Казахстан', selected: false},
        ]
    )
    const [open, setOpen] = useState(false)

    function Open() {
        setOpen(function (prevState) {
            return !prevState;
        })
    }

    let array = [];
    if (array === []) {
        for (let obj of Country) {
            array.push(obj.name);
        }
    }

    console.log(array);
    let listMenu = 'list-menu';
    if (open === true) {
        listMenu += 'openSearch'
    }

    console.log('--- state ---');
    console.log(Country);

    let [list, setList] = useState([]);

    if (list.length === 0) {
        setList(function (prev){
            let sl ='Поиск';
            return sl;
        })

    }
    function ClickCountry(index) {
        setCountry(function (prev){
            let selectedCountry = [...prev];
            for(let cname of Country)
            if(array[index]===cname.name)
            cname.selected=!cname.selected;
            return selectedCountry;
        })
    }
    for (let cSel of Country){
        if(cSel.selected===true){
            list.push(cSel.name);
        }
    }
    let [CountrySearch, setCountrySearch] = useState([])

    function ChangeSearch(event) {
        setCountrySearch(function (prev) {
            let newCountry = [...prev];
            newCountry = event.target.value;
            return newCountry;
        })
    }

    for (let cname of Country) {
        if (cname.name.includes(CountrySearch)) {
            array.push(cname.name);
        }
    }

    // console.log(list);
    // console.log(CountrySearch);

    console.log('--- zzz ---');
    console.log(array)

    return (
        <div className='Search'>
            <div onClick={function () {
                Open()
            }}>{list} </div>
            <div className={listMenu}>
                <input placeholder='Search' value={Country.name} onChange={ChangeSearch}/>
                {array.map(function (x, index) {
                    return (<div onClick={function () {
                        ClickCountry(index)
                    }}>{x}</div>)
                })}
            </div>
        </div>
    )
}

export default Search;