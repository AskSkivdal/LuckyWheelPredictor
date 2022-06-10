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
    console.log("Current Change: " + CurrentChange);
	slots_changed.push(CurrentChange);
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
    prediction %= parseInt(document.getElementById("WheelSize").value);
    prediction += parseInt(Predictor["CurrentSlot"].value);
    Prediction.innerHTML = "Predicted Change: " + prediction;
}



function slots_changed_average() {
    var sum = 0;
    for (var i = 0; i < slots_changed.length; i++) {
        sum += slots_changed[i];
    }
    return sum / slots_changed.length;
}