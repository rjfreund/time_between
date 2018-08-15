var startDateInput = document.getElementById('startDate');
var endDateInput = document.getElementById('endDate');

var fullDateOutput = document.getElementById('fullDateOutput');
var noYearDateOutput = document.getElementById('noYearDateOutput');
var noYearOrMonthDateOutput = document.getElementById('noYearOrMonthDateOutput');

startDateInput.oninput = updateDateDifferences; 
endDateInput.oninput = startDateInput.oninput;


function updateDateDifferences(){
	fullDateOutput.innerHTML = getDateDifferenceFull();
	//noYearDateOutput.innerHTML = getDateDifferenceNoYear();
	noYearOrMonthDateOutput.innerHTML = getDateDifferenceNoYearOrMonth();
}

function getDateDifferenceFull(){ return getDateDifference(true, true); }
function getDateDifferenceNoYear(){ return getDateDifference(false, true); }
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
			var output = endDate.diff(startDate, 'days') + " day(s)";
			return output;
		}
	}
	catch (exception){
		return "invalid date";
	}
}