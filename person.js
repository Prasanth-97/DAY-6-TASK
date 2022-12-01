// Write a “person” class to hold all the details

class Person {
    constructor(name, fatherName , religion, nationality, contactno, mailaddress, job, experience) {
        this.name = name;
        this.fatherName = fatherName;
        this.religion = religion;
        this.nationality = nationality;
        this.contactno = contactno;
        this.mailaddress = mailaddress;
        this.job = job;
        this.experience = experience;
    }
    getdetails() {
        return (`Hi,I am ${this.name},my father's name is ${this.fatherName} and i belong to ${this.religion} community and my nationality is ${this.nationality}.U can contact me using my phonenumber ${this.contactno} or using my mailID ${this.mailaddress}. My job is ${this.job} with ${this.experience}  experience `)
    }
}
let person1 = new Person("Prasanth", "Periyasamy", "Hindu", "Indian", "1234567890", "xyz@mail.com", "fullstackdeveloper", "Nil");

console.log(person1); 

//ouput : Person {name: 'Prasanth', fatherName: 'Periyasamy', religion: 'Hindu', nationality: 'Indian', contactno: '1234567890', …}

console.log(person1.getdetails());

//output : Hi,I am Prasanth,my father's name is Periyasamy and i belong to Hindu community and my nationality is Indian.U can contact me using my phonenumber 1234567890 or using my mailID xyz@mail.com. My job is fullstackdeveloper with Nil of experience 