export class IAdminUser {
  _id: string;
  username: string;
  password: string;
  roles:string;

   constructor(id, username, password, roles) {
     this._id=id;
     this.username=username;
     this.password=password;
     this.roles=roles;
   }
}

