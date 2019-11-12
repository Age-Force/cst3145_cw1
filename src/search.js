 Vue({
    el: '#crud',
    data:{
        activity: '',
        location: '',
        price: '',
        edit:false,
        delete:false,
        cancel:false,
        id2:0,
        ind:0,
        activity:[]
    },
    method:{
        addActivity:function (a,l,p) {
            a.preventDefault();
            this.activity.push({
                activity: this.activity,
                location: this.location,
                price: this.price
            });
            localStorage.setItem('activity', JSON.stringify((activity));
            this.activity='';
            this.location='';
        },
        editActivity:function (l,d) {
            this.edit=!this.edit;
            this.activity=l.activity;
            this.location=l.location;
            this.price=l.price;
            this.ind=d;
        },
        updateActivity:function(a){
            a.preventDefault();
            this.edit=!this.edit;
            let activitydb={
                activity:this.activity,
                location:this.location,
                price: this.price
            }
            this.activity[this.ind]=activitydb;
            localStorage.setItem('activity', JSON.stringify(activity));
            let activityDB = JSON.parse(localStorage.getItem('activity'));
            this.activity= activityDB;
            this.activity='';
            this.location='';
            this.price='';
        },
        cancelActivity:function (a){
            a.preventDefault();
            this.activity='';
            this.location='';
            this.price='';
            this.edit=!this.editActivity;
        },
        deleteActivity:function (d) {
            this.activity.splice(d, 1);
            localStorage.setItem('activity', JSON.stringify('activity'));
            if(activityDB === null){
                this.activity=[];
            } else{
                this.activity=activityDB;
            }
        }
    }
});