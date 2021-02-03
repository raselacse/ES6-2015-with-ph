const nums = [1,2,3,4,5,6,7,8];
const part = nums.slice(2, 5); // 2 index er por theke 5 index er age projonto show korbe
const removed = nums.splice(2, 5); // 2 hocche start index point and 5 hocche koita show korbe
console.log(part);
console.log(removed);
console.log(nums);

const together = nums.join(" 20 ");
console.log(together);
