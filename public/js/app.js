<<<<<<< HEAD
new Calendar({element:$(".daterange--single"),current_date:new Date("June 15, 2015")}),new Calendar({element:$(".daterange--double"),earliest_date:new Date("January 1, 2000"),latest_date:new Date,start_date:new Date("May 1, 2015"),end_date:new Date("May 1, 2015"),callback:function(){var e=moment(this.start_date).format("ll"),a=moment(this.end_date).format("ll");console.log("Start Date: "+e+"\nEnd Date: "+a)}});
=======
var ss=new Calendar({element:$(".daterange--single"),current_date:"June 15, 2015"}),dd=new Calendar({element:$(".daterange--double"),earliest_date:"January 1, 2000",latest_date:new Date,start_date:"May 1, 2015",end_date:"May 31, 2015",callback:function(){var e=moment(this.start_date).format("ll"),a=moment(this.end_date).format("ll");console.debug("Start Date: "+e+"\nEnd Date: "+a)}});
>>>>>>> 1c7750f2015597227117d8b1e28d766b1880ac4d
