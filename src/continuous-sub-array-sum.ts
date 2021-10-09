function subarraySum(nums: number[], k: number): number {

    //edge case
    if (nums.length === 1) {
        if (nums[0] === k) {
            return 1;
        }
        return 0;
    }

    //brute force
    // every possible sub array of the given array
    //... two pointers start and start+1

    let counter = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j <= nums.length; j++) {
            let sum = 0;
            for (let p = i; p < j; p++) {
                sum += nums[p];
                
            }
            if (sum === k) {
                counter++;
            }
        }
    }


    return counter;
};

subarraySum([1,1,1],2)