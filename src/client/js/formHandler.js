function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    
    if (Client.checkForName(formText)) {
        fetch('http://localhost:8081/userText', {
            method: 'POST',
            // credentials: 'same-origin',
            cache: "no-cache",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({formText : formText}),
            //body: JSON.stringify(formText),  In the formHandler.js, in the POST call, you were sending the formText in the body.
            //Since the Content-type is of type application/json, hence you need to send a JSON in the body instead of the TEXT.
        })
            .then(res => res.json())
            .then(function (res) {
                document.getElementById('model').innerHTML = 'Model: ' + res.model;
                document.getElementById('score_tag').innerHTML = 'Score: ' + res.score_tag;
                document.getElementById('agreement').innerHTML = 'Agreement: ' + res.agreement;
                document.getElementById('confidence').innerHTML = 'Confidence: ' + res.confidence;
                document.getElementById('irony').innerHTML = 'Irony: ' + res.irony;
            })
    } else {
        alert ('This is not a valid URL')
    };
}

export { handleSubmit }
