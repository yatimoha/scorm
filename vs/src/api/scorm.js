export function findAPI(win) {
	let findAPITries = 0;

	while ((win.API_1484_11 == null) && (win.parent != null) && (win.parent !== win)) {
		findAPITries++;
		if (findAPITries > 500) {
			console.error('Error finding API -- too deeply nested.');
			return null;
		}
		win = win.parent;
	}
	return win.API_1484_11;
}

let theAPI = findAPI(window);
if ((theAPI == null) && (window.opener != null) && (typeof (window.opener) != 'undefined')) {
	theAPI = findAPI(window.opener);
}

const myAPI = theAPI;
console.log(myAPI)
export let globalCount = 0

if (myAPI) {
	myAPI.Initialize('');
	globalCount = Number(myAPI.GetValue('cmi.score.raw'));
	console.log('inited')
}

const tasks = {
	"1": 1,
	"2": 2,
	"3": 4,
	"4": 8,
	"5": 16,
	"6": 32
}

let scoreDones = [];
let tmpCnt = 0;

for (const scoreDone of ["1","2","3","4","5","6"]) {
	tmpCnt += tasks[scoreDone]
	if (tmpCnt < globalCount) {
		scoreDones.push(scoreDone)
	} else {
		break
	}
}
export function doneTheory(taskId) {
	let score = tasks[taskId]
	if (!score) {
		return globalCount
	}

	if (scoreDones.includes(taskId)) {
		return globalCount
	}

	scoreDones.push(taskId)
	globalCount += score;

	console.log(globalCount)
	if (myAPI) {
		myAPI.SetValue('cmi.score.raw', globalCount);
		myAPI.SetValue('cmi.score.scaled', globalCount);
		myAPI.Commit('');
		console.log('commited')
	}


	return globalCount
}

export function doneTests(totalTests, testsDone) {
	let pointsEarned = Math.floor(((100-globalCount)/totalTests)*testsDone)

	globalCount += pointsEarned
	console.log(globalCount)
	if (myAPI) {
		myAPI.SetValue('cmi.score.raw', globalCount);
		myAPI.SetValue('cmi.score.scaled', globalCount);
		myAPI.Commit('');
		console.log('test succeed')
		finish()
	}
	return globalCount
}

function finish() {
	if (myAPI) {
		myAPI.SetValue('cmi.completion_status', 'completed');
		myAPI.SetValue('cmi.success_status', 'passed');
		myAPI.Terminate('');
		console.log('finished')
	}
}

export default myAPI;
