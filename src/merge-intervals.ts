function merge(intervals: number[][]): number[][] {
    //determine overlapping or not
    //step1: sort

    if (intervals.length === 1) { return [intervals[0]] }
    intervals = intervals.sort((a, b) => {
        return a[0] - b[0];
    });

    //step2: core logic
    //if previous last element greater than current first element then overlap exists
    //so loop from 1st index
    let result: any[][] = [];


    for (let i = 1; i < intervals.length; i++) {

        if (!result.length) {
            result.push(intervals[0])
        }

        let isOverlap = false;
        if (intervals[i][0] <= result[result.length - 1][1]) {
            isOverlap = true;
            result[result.length - 1][1] = Math.max(result[result.length - 1][1], intervals[i][1]);

        }
        else if (i + 1 === intervals.length) { //hanle edge case when pointer hits the end of the array

            result.push([intervals[i][0], intervals[i][1]])
        }

        else { //push the non overlapping intervals as is

            result.push([intervals[i][0], intervals[i][1]])
        }
    }
    return result;
}


merge([[1, 4], [5, 6]]);
merge([[1, 3]]);
merge([[1, 3], [2, 6], [8, 10], [15, 18]])
merge([[1, 3], [2, 6], [5, 10], [15, 18]]);