const courseName = document.querySelector('#course-name');
const courseRating = document.querySelector('#course-rating');
const addBtn = document.querySelector('#add-btn');
const courseList = document.querySelector('#course-list');

function presentAlert() {
    const alert = document.createElement('ion-alert');
    alert.header = 'Invalid Inputs';
    // alert.subHeader = 'Subtitle';
    alert.message = 'Please enter a valid Course Name and Amount.';
    alert.buttons = ['Okay'];
  
    document.body.appendChild(alert);
    return alert.present();
  }

  const clear = () => {
      courseName.value = '';
      courseRating.value = '';
  }

addBtn.addEventListener('click', () => {

    const enteredCourseName = courseName.value;
    const enteredCourseRating = courseRating.value;

    if (enteredCourseName.trim().length <= 0 || 
        enteredCourseRating.trim().length <= 0 || 
        enteredCourseRating < 1 || 
        enteredCourseRating > 5) {

        presentAlert();
        return;
    }

    const newItem = document.createElement('ion-item');
    newItem.innerHTML = `<strong>${enteredCourseName}</strong>:  ${enteredCourseRating} / 5`;
    
    courseList.appendChild(newItem);

    clear();
})