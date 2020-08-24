
const doIt = ({ firstName, lastName: ln }) => {

  const lastName = 'Thompkins';

  // const { firstName, lastName } = person;
  console.log(firstName + ' ' + ln);
};

doIt({
  firstName: 'Bob', lastName: 'Smith',
});