function checkForName(inputText) {
    console.log("::: Running checkForName :::", inputText);
    const url = new RegExp(/^(http|https):\/\/[^ "]+$/);
    return url.test(inputText);
}

export { checkForName }
