var slots_changed = [];

function submit_form() {
	var form = document.getElementById("DataInput");
    var CurrentChange = 0;
	console.log("Starting Slot: " + form["StartingSlot"].value);
	console.log("Rotations: " + form["Rotations"].value);
	console.log("Ending Slot: " + form["EndingSlot"].value);

    CurrentChange = parseInt(form["EndingSlot"].value);
    CurrentChange -= parseInt(form["StartingSlot"].value);
    CurrentChange += parseInt(form["Rotations"].value) * parseInt(
        document.getElementById("WheelSize").value
    );
    console.log(CurrentChange);
    if (Number.isNaN(CurrentChange)) { 
        console.log("ERROR: CurrentChange is NaN");
        document.getElementById("InputAccepted").innerHTML = "This input isnt valid";
    } else {
        console.log("Current Change: " + CurrentChange);
        slots_changed.push(CurrentChange);
        document.getElementById("InputAccepted").innerHTML = "Current array length: " + slots_changed.length;
        document.getElementById("DataInput").reset();
    }
}

function input_data_button_pressed() {
	var DataInput = document.getElementById("DataInput");
	var Predictor = document.getElementById("Predictor");
	DataInput.hidden = !DataInput.hidden;
	Predictor.hidden = !Predictor.hidden;
}

function generate_prediction() {
    var Predictor = document.getElementById("Predictor");
    var Prediction = document.getElementById("Prediction");
    var prediction = slots_changed_average();
    prediction += parseInt(Predictor["CurrentSlot"].value);
    prediction %= parseInt(document.getElementById("WheelSize").value);
    Prediction.innerHTML = prediction;
}



function slots_changed_average() {
    var sum = 0;
    for (var i = 0; i < slots_changed.length; i++) {
        sum += slots_changed[i];
    }
    return sum / slots_changed.length;
}