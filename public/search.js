var courses = [
    { 'topic': 'Math', 'location': 'Birgu', 'price': 100 },
    { 'topic': 'Biology', 'location': 'Bormla', 'price': 80 },
    { 'topic': 'English', 'location': 'Mdina', 'price': 90 },
    { 'topic': 'Gaming', 'location': 'Qormi', 'price': 120 },
    { 'topic': 'Dance', 'location': 'Rabat', 'price': 110 },
    { 'topic': 'Music', 'location': 'Senglea', 'price': 90 },
    { 'topic': 'Sports', 'location': 'Siggiewi', 'price': 90 },
    { 'topic': 'Art', 'location': 'Valleta', 'price': 130 },
    { 'topic': 'Athletics', 'location': 'Zabbar', 'price': 120 },
    { 'topic': 'Choir', 'location': 'Zebbug', 'price': 140 },
    { 'topic': 'Band', 'location': 'Zejtun', 'price': 120 },
    { 'topic': 'Fan Club', 'location': 'Birkikara', 'price': 140 },
    { 'topic': 'Debate', 'location': 'll-Marsa', 'price': 120 },
    { 'topic': 'Yearbook', 'location': 'in-Naxxar', 'price': 140 }
]

filterApp = new Vue
({
    el: '#filter',
    data:
        {
            courses: courses,
            selectedTopic: [],
            selectedLocation: [],
        },
    computed:
        {
            topics: function () { // return an array of all the topics
                return [...new Set(this.courses.map(x => x.topic))]
            },
            locations: function () {
                return [...new Set(this.courses.map(x => x.location))]
            }
        },
})