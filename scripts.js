$(document).ready(function () {
    updateDate();

    $('.update-date').on('click', function (e) {
            updateDate();
        }
    );
});

const updateDate = function () {
    let date = new Date();

    $('.date-container').text('Year: ' + date.getFullYear() + '; Month: ' + date.getMonth() + '; Day: '
        + date.getDay() + '; Hours: ' + date.getHours() + '; Seconds: ' + date.getSeconds() + ';');
}
