const form = document.querySelector('form');

// const original_answer = ["Saachine Tendulkar", "Virat kohli", "Ricky ponting", "Virendra Shewag", "Ricky ponting"];


// As a object le lenge kyunki (array me selection agr nahi hoga to wrong answer batayega )
const original_answer = {
    q1: "Saachine Tendulkar",
    q2: "Virat Kohli",
    q3: "Ricky Ponting",
    q4: "Virendra Shewag",
    q5: "Ricky Ponting"
};
form.addEventListener('submit', (event) => {

    event.preventDefault();
    const data = new FormData(form);

    // jo value bhara hai form me wo mil jayega yehan se 
    // const answer = Array.from(data.value());
    // console.log(answer);

    // let result = 0;
    // for (let i = 0; i < answer.length; i++) {
    //     if (answer[i] == original_answer[i])
    //         result++;
    // }
    // // console.log(result);


    //************** */ new way *****************************//
    let result = 0;
    for (let [key, value] of data.entries()) {
        if (value == original_answer[key])
            result++;
    }

    // giving output to the user 
    const out = document.getElementById('out');
    out.innerText = `${result} out of 5 is Correct`;

    // document.getElementById('container').append(out);

})