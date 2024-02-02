async function request(path, options = null) {
    const url = `http://localhost:5000${path}`;
    const response = await fetch(url, options);
    return response.json();
}

export function getStudents() {
    return request("/students");
}

export function getPerson() {
    return request("/person");
}

export function postPerson(person) {
    return request("/person", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(person),
    });
}

export function getPersonCount() {
    return request("/personcount")
}

export function postLoan(loan) {
    return request("/loan", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(loan),
    });
}

export function getLoan() {
    return request("/loan")
}

export function postCheck(check) {
    return request("/check", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(check),
    });
}

