export const sortDataBySex = (data) => {
    const dataBySex = {
        male: [],
        female: [],
        both: []
    };
    data.forEach((datum) => {
        switch (datum.sex) {
            case "Female":
                dataBySex.female.push(datum);
                break;
            case "Male":
                dataBySex.male.push(datum);
                break;
            case "Both sexes":
                dataBySex.both.push(datum);
                break;
            default:
                console.log("no sex given");
        }
    })

    return dataBySex;
}

const _sortByCategory = (datum, ledger, key) => {
    if (ledger.hasOwnProperty(key)) {
        ledger[key].push(datum);
    } else {
        ledger[key] = [];
        ledger[key].push(datum);
    }
}

export const sortByYear = (data) => {
    const dataByYear = {};
    data.forEach((datum) => {
        _sortByCategory(datum, dataByYear, datum.year);
    })

    return dataByYear;
}

export const sortByCountry = (data) => {
    const dataByCountry = {};
    data.forEach((datum) => {
        _sortByCategory(datum, dataByCountry, datum.country);
    })

    return dataByCountry;
}

export const sortByAllFields = (data) => {
    return {
        sex: sortDataBySex(data),
        year: sortByYear(data),
        country: sortByCountry(data)
    }
}
