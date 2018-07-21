export class IContact {
  _id: string;
  name: string;
  email: string;
  tel: string;
  add: string;
  faceId: string;

   constructor(id, name, email, tel, add, faceId) {
   
   this._id=id;
     this.name=name;
     this.email=email;
     this.tel=tel;
     this.add=add;
     this.faceId=faceId;
   }
}

