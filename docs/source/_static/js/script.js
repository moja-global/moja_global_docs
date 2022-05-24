let appscriptURL = "https://script.google.com/macros/s/AKfycbyOLaQDsSR-4qoVgExNIRXiVYQKsmRj9w12rlHg2yd21M7Wyd1fsSFlwL5czVwggUeP/exec"

function showFeedbackTextArea(){
    let feedback = document.getElementById("text-feedback");
    document.getElementById("text-feedback-status").innerHTML = ""
    if (feedback.style.display === "none") {
        feedback.style.display = "block";
    } else {
        feedback.style.display = "none";
    }
}

async function textFeedback(){
    let data = new FormData();
    let msg = document.getElementById("message").value
    data.append("message", msg)         
    data.append("url", window.location.href)
    data.append("type", "textFeedback")
    let res = await axios.post(appscriptURL, data);
    // console.log(res.data);
    if(res.data.result == "success"){
        document.getElementById("text-feedback").style.display = "none"
        document.getElementById("text-feedback-status").innerHTML = "Thank you for the feedback"
    }
    else {
        document.getElementById("text-feedback-status").innerHTML = "An error occured, try again"
    }
}

function yes(){
    choiceFeedback("Yes")
}

function no(){
    choiceFeedback("No")
}

async function choiceFeedback(response){
    let data = new FormData();
    data.append("response", response)            
    data.append("url", window.location.href)
    data.append("type", "choiceFeedback")
    let res = await axios.post(appscriptURL, data);
    // console.log(res.data);
    if(res.data.result === "success"){
        document.getElementById("choice-feedback").style.display = "none"
        if(res.data.message === "Yes"){
            document.getElementById("choice-feedback-status").innerHTML = "Glad, the documentation helped!"
            document.getElementById("choice-feedback-status").style.color = "green"
        } 
        else if(res.data.message === "No") {
            document.getElementById("choice-feedback-status").innerHTML = "Thank you for the response, feel free to submit feedback, we will resolve it soon :)"
            document.getElementById("choice-feedback-status").style.color = "#ff3333"
        }
    }
    else {
        document.getElementById("choice-feedback-status").innerHTML = "An error occured, try again"
    }
}