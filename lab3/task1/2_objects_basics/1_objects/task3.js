let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
};

function sum(salaries) {
    res = 0;
    for (let person in salaries) {
        res += salaries[person];
    }
    return res;
}

alert(sum(salaries))