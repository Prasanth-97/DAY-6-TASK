class  Uberprice {
    constructor(carname ,basefare ,distance , rateperkm ,bookingfee)
    {
        this.carname = carname ;
        this.basefare = basefare;
        this.distance = distance;
        this.rateperkm = rateperkm;
        this.bookingfee = bookingfee;
        if(this.carname == "uberx" || this.carname == undefined )
        {
            this.basefare = 50;
        }
        else if (this.carname == "ubersuv")
        {
            this.basefare = 100 ;
        }
        else if(this.carname == "uberblack")
        {
            this.basefare = 150 ;
        }
    }
    getfarecost(){
        return (this.basefare + (this.distance * this.rateperkm) + this.bookingfee);
    }
}

let uberfare = new Uberprice("uberblack",50,5,20,15);

console.log("uber fare : ",uberfare.getfarecost());

// output : uber fare :  265