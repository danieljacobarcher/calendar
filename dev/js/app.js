var ss = new Calendar({
  element: $('.daterange--single'),
  current_date: 'June 15, 2015'
});
  
var dd = new Calendar({
  element: $('.daterange--double'),
  earliest_date: 'January 1, 2000',
  latest_date: new Date(),
<<<<<<< HEAD
  start_date: new Date('May 1, 2015'),
  end_date: new Date('May 1, 2015'),
=======
  start_date: 'May 1, 2015',
  end_date: 'May 31, 2015',
>>>>>>> 1c7750f2015597227117d8b1e28d766b1880ac4d
  callback: function() {
    var start = moment(this.start_date).format('ll'),
        end = moment(this.end_date).format('ll');
    
    console.debug('Start Date: '+ start +'\nEnd Date: '+ end);
  }
});