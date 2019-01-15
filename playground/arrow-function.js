var squar = x => x * x;

console.log(squar(9));

var user = {
  name: 'Menghua',
  sayHi: (x) => {
    // console.log(arguments);
    console.log(`Hi. I'm ${this.name}`);
    console.log(`Hi. ${x}`);
  },
  sayHi2() {
    console.log(arguments);
    console.log(`Hi. I'm ${this.name}`);
  }
};
user.sayHi('Lucy');
user.sayHi2('A', 'B', 'C');
