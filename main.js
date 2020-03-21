$(document).ready(function() {
// write your code here
const tableBody = $("table tbody");
$.getJSON("data.json", result => {
    $.each(result, (index, value) => {
        const { name, description, location } = value;
        const link = `<a class="button is-primary is-rounded" href="https://www.google.com/maps/dir/?api=1&destination=${location[0]},${location[1]}" target="_blank" rel="nofollow external">Open in Google Maps</a>`
        const markup = `<tr><td>${name}</td><td>${description}</td><td>${link}</td></tr>`;
        tableBody.append(markup);
    })
})
});
