const number1 = document.querySelector("#number1");
const number2 = document.querySelector("#number2");
const result = document.querySelector("#result");
const add = document.querySelector("#add");
const sub = document.querySelector("#sub");
const mul = document.querySelector("#mul");
const div = document.querySelector("#div");

add.addEventListener('click', async () => {
    const number1 = document.querySelector("#number1").value;
    const number2 = document.querySelector("#number2").value;
    if (number1 == "" || number2 == "") {
        alert("All fields required");
    }
    else {
        await fetch("https://my-arithmetic-app.herokuapp.com/add", {
            mode: 'cors',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                a: number1,
                b: number2,
            })
        }).then(async (e) => {
            const data = await e.json();
            console.log(data);
            result.innerHTML = `Result is ${data.result}`;
        })
    }

})

