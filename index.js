var startDateInput = document.getElementById('startDate');
var endDateInput = document.getElementById('endDate');

var fullDateOutput = document.getElementById('fullDateOutput');
var daysOnlyOutput = document.getElementById('daysOnlyOutput');

startDateInput.oninput = updateDateDifferences; 
endDateInput.oninput = startDateInput.oninput;


function updateDateDifferences(){
	fullDateOutput.innerHTML = getDateDifferenceFull();
	daysOnlyOutput.innerHTML = getDateDifferenceNoYearOrMonth();
}

function getDateDifferenceFull(){ return getDateDifference(true, true); }
function getDateDifferenceNoYearOrMonth(){ return getDateDifference(false, false); }

function getDateDifference(hasYear, hasMonth){
	try {
		var startDate = moment(startDateInput.value);
		var endDate = moment(endDateInput.value);
		if (!startDate.isValid() || !endDate.isValid()){ throw new Error(); }
		if (hasYear && hasMonth){
			var output = moment.preciseDiff(endDate, startDate);
			return output;
		} else {			
			var numDays = endDate.diff(startDate, 'days');
			var output = (numDays == 1) ? numDays + " day" : numDays + " days";
			return output;
		}
	}
	catch (exception){
		return "invalid date";
	}
}
