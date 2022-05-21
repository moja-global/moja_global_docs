let appscriptURL = 'https://script.google.com/macros/s/AKfycbwiFzbrrqjXlL8T6FnFzcE2tHvEDIC4mLm-PlyUkgWQnWadyWCOEcG4sA2GZ72JRYVn/exec'

function saveFeedback(){
    let data = new FormData();
    let msg = document.getElementById('message').value
    data.append('message', msg) 
    //textFeedback           
    data.append('url', window.location.href)
    data.append('type', 'textFeedback')
    fetch(appscriptURL, { method: 'POST', body: data})
    .then(response => alert("Feedback saved successfully"))
    .catch(error => alert("Feedback not saved, try again"))
}

function yes(){
    choiceFeedback('Yes')
}

function no(){
    choiceFeedback('No')
}

function choiceFeedback(response){
    let data = new FormData();
    data.append('response', response)            
    data.append('url', window.location.href)
    data.append('type', 'choiceFeedback')
    fetch(appscriptURL, { method: 'POST', body: data})
    .then(response => alert("Glad the documentation was useful!"))
    .catch(error => alert("Thank you for the feedback, feel free to raise an issue on our Github page, we will resolve it soon :)"))
}